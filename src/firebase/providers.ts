import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, runTransaction } from 'firebase/firestore';
import { FirebaseAuth, FirebaseDB, FirebaseStorage } from './config';
import { deleteObject, getDownloadURL, ref, uploadBytes, type StorageReference } from 'firebase/storage';
import {
  PROFILE_BIO_MAX_LENGTH, PROFILE_IMAGE_MAX_SIZE, PROFILE_IMAGE_TYPES,
  PROFILE_NAME_MAX_LENGTH, PROFILE_NAME_MIN_LENGTH, type ProfileEdit, type SavedProfile,
} from '../auth/profile';
import type { RegisterData } from '../auth/types/registerInterfaces';
import type { User } from '../auth/types/authReducerInterfaces';

interface AuthResult {
  ok: true;
  errorMessage?: never;
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthErrorResult {
  ok: false;
  uid?: never;
  email?: never;
  displayName?: never;
  photoURL?: never;
  errorMessage: string;
}

export const loginUserByCredentials = async (username: string, password: string): Promise<AuthResult | AuthErrorResult> => {
  const normalizedUsername = username.trim().replace(/^@/, '').toLowerCase();
  const invalidCredentials = 'Usuario o contraseña incorrectos.';
  if (!/^[a-z0-9_]{3,20}$/.test(normalizedUsername) || !password) {
    return { ok: false, errorMessage: invalidCredentials };
  }

  try {
    const usernameSnapshot = await getDoc(doc(FirebaseDB, 'usernames', normalizedUsername));
    const uid = usernameSnapshot.exists() ? usernameSnapshot.data().uid : null;
    if (typeof uid !== 'string' || !uid || uid.includes('/')) {
      return { ok: false, errorMessage: invalidCredentials };
    }
    const profileSnapshot = await getDoc(doc(FirebaseDB, 'users', uid));
    const email = profileSnapshot.exists() ? profileSnapshot.data().email : null;
    if (typeof email !== 'string' || !email.trim()) {
      return { ok: false, errorMessage: invalidCredentials };
    }
    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { displayName, photoURL } = result.user;
    return { ok: true, uid: result.user.uid, email: result.user.email || email, displayName, photoURL };
  } catch (error: unknown) {
    let errorMessage = 'No se pudo iniciar sesión. Inténtalo de nuevo.';
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/invalid-credential':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-email':
          errorMessage = invalidCredentials;
          break;
        case 'auth/network-request-failed':
        case 'unavailable':
          errorMessage = 'Revisa tu conexión a internet e inténtalo de nuevo.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Demasiados intentos. Espera un momento antes de volver a intentar.';
          break;
        case 'permission-denied':
          errorMessage = 'No se pudo consultar el usuario. Revisa los permisos de Firestore.';
          break;
      }
    }
    return { ok: false, errorMessage };
  }
};

const googleProvider = new GoogleAuthProvider();

export const loginUserByGoogleProvider = async (): Promise<AuthResult | AuthErrorResult> => {
  let signedIn = false;
  try {
    const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
    signedIn = true;
    const { uid, email, displayName, photoURL } = user;
    if (!email) throw new Error('google-email-missing');

    const base = email.split('@')[0].toLowerCase().replace(/[^a-z0-9_]/g, '_').slice(0, 12).padEnd(3, '_');
    const suffix = uid.toLowerCase().replace(/[^a-z0-9]/g, '').slice(-6);
    const candidates = [base, `${base}_${suffix}`, ...[1, 2, 3].map((number) => `${base}_${suffix}${number}`)];
    const profileRef = doc(FirebaseDB, 'users', uid);

    await runTransaction(FirebaseDB, async (transaction) => {
      if ((await transaction.get(profileRef)).exists()) return;

      for (const username of candidates) {
        const usernameRef = doc(FirebaseDB, 'usernames', username);
        const reservation = await transaction.get(usernameRef);
        if (reservation.exists() && reservation.data().uid !== uid) continue;

        if (!reservation.exists()) transaction.set(usernameRef, { uid });
        const profile: User = { uid, fullname: displayName?.trim().slice(0, 80) || base, username, email, photoURL };
        transaction.set(profileRef, profile);
        transaction.set(doc(FirebaseDB, 'publicProfiles', uid), { fullname: profile.fullname, username });
        return;
      }

      throw new Error('google-username-unavailable');
    });

    return { ok: true, uid, email, displayName, photoURL };
  } catch (error: unknown) {
    if (signedIn) {
      await signOut(FirebaseAuth);
      return { ok: false, errorMessage: 'No se pudo preparar tu perfil de Google. Inténtalo de nuevo.' };
    }

    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          return { ok: false, errorMessage: 'Cerraste la ventana de Google antes de iniciar sesión.' };
        case 'auth/popup-blocked':
          return { ok: false, errorMessage: 'Permite las ventanas emergentes para iniciar sesión con Google.' };
        case 'auth/operation-not-allowed':
          return { ok: false, errorMessage: 'El acceso con Google aún no está habilitado en Firebase.' };
        case 'auth/unauthorized-domain':
          return { ok: false, errorMessage: 'Este dominio no está autorizado para iniciar sesión con Google.' };
        case 'auth/account-exists-with-different-credential':
          return { ok: false, errorMessage: 'Esta cuenta ya existe. Entra con el método que usaste al registrarte.' };
      }
    }
    return { ok: false, errorMessage: 'No se pudo iniciar sesión con Google. Inténtalo de nuevo.' };
  }
};

export const logoutUser = () => signOut(FirebaseAuth);

export const getUserProfile = async (uid: string): Promise<User | null> => {
  const snapshot = await getDoc(doc(FirebaseDB, 'users', uid));
  if (!snapshot.exists()) return null;
  const data = snapshot.data();
  if (typeof data.fullname !== 'string' || typeof data.username !== 'string') {
    throw new Error('El perfil del usuario está incompleto.');
  }
  return {
    uid,
    fullname: data.fullname,
    username: data.username,
    email: typeof data.email === 'string' ? data.email : '',
    photoURL: typeof data.photoURL === 'string' ? data.photoURL : null,
    coverURL: typeof data.coverURL === 'string' ? data.coverURL : undefined,
    bio: typeof data.bio === 'string' ? data.bio : '',
  };
};

export const updateUserProfile = async (uid: string, details: ProfileEdit): Promise<SavedProfile> => {
  if (FirebaseAuth.currentUser?.uid !== uid) {
    throw new Error('Inicia sesión de nuevo para editar tu perfil.');
  }

  const fullname = details.fullname.trim();
  const bio = details.bio.trim();
  if (fullname.length < PROFILE_NAME_MIN_LENGTH || fullname.length > PROFILE_NAME_MAX_LENGTH) {
    throw new Error('El nombre debe tener entre 2 y 80 caracteres.');
  }
  if (bio.length > PROFILE_BIO_MAX_LENGTH) {
    throw new Error('La biografía debe tener máximo 160 caracteres.');
  }

  const images = [
    { kind: 'photo', file: details.photo, urlField: 'photoURL', pathField: 'photoPath' },
    { kind: 'cover', file: details.cover, urlField: 'coverURL', pathField: 'coverPath' },
  ] as const;
  for (const { file } of images) {
    if (file && (!PROFILE_IMAGE_TYPES.includes(file.type) || file.size === 0 || file.size > PROFILE_IMAGE_MAX_SIZE)) {
      throw new Error('Selecciona imágenes JPG, PNG o WebP de hasta 5 MB.');
    }
  }

  const profileRef = doc(FirebaseDB, 'users', uid);
  const saved: SavedProfile = { fullname, bio };
  const uploads: StorageReference[] = [];
  const paths: Record<string, string> = {};
  let replacedPaths: string[] = [];

  try {
    for (const { kind, file, urlField, pathField } of images) {
      if (!file) continue;
      const imageRef = ref(FirebaseStorage, `profiles/${uid}/${kind}/${crypto.randomUUID()}`);
      uploads.push(imageRef);
      await uploadBytes(imageRef, file, { contentType: file.type });
      saved[urlField] = await getDownloadURL(imageRef);
      paths[pathField] = imageRef.fullPath;
    }

    replacedPaths = await runTransaction(FirebaseDB, async (transaction) => {
      const current = (await transaction.get(profileRef)).data();
      if (typeof current?.username !== 'string') throw new Error('profile-missing');
      transaction.update(profileRef, { ...saved, ...paths });
      transaction.set(doc(FirebaseDB, 'publicProfiles', uid), { fullname, username: current.username });
      return images.flatMap(({ kind, pathField }) => {
        const oldPath = current?.[pathField];
        return paths[pathField] && typeof oldPath === 'string' && oldPath.startsWith(`profiles/${uid}/${kind}/`)
          ? [oldPath]
          : [];
      });
    });
  } catch (error) {
    if (FirebaseAuth.currentUser?.uid === uid) {
      await Promise.allSettled(uploads.map((imageRef) => deleteObject(imageRef)));
    }
    if (error instanceof FirebaseError && error.code === 'storage/unauthorized') {
      throw new Error('Storage no permitió subir la imagen. Revisa los permisos del perfil.');
    }
    throw new Error('No se pudo guardar el perfil. Inténtalo de nuevo.');
  }

  await Promise.allSettled(replacedPaths.map((path) => deleteObject(ref(FirebaseStorage, path))));
  return saved;
};

export const registerUser = async (data: RegisterData): Promise<AuthResult | AuthErrorResult> => {
  const fullname = data.fullname.trim();
  const username = data.username.trim().toLowerCase();
  const email = data.email.trim();
  if (fullname.length < 2 || fullname.length > 80 || !/^[a-z0-9_]{3,20}$/.test(username) || data.password.length < 6) {
    return { ok: false, errorMessage: 'Revisa el nombre, el usuario y la contraseña del formulario.' };
  }

  let createdUser: FirebaseUser | null = null;
  try {
    const result = await createUserWithEmailAndPassword(FirebaseAuth, email, data.password);
    createdUser = result.user;
    await updateProfile(createdUser, { displayName: fullname });
    const profile: User = { uid: createdUser.uid, fullname, username, email: createdUser.email || email, photoURL: createdUser.photoURL };
    const usernameRef = doc(FirebaseDB, 'usernames', username);
    const profileRef = doc(FirebaseDB, 'users', profile.uid);

    await runTransaction(FirebaseDB, async (transaction) => {
      const usernameSnapshot = await transaction.get(usernameRef);
      if (usernameSnapshot.exists()) throw new Error('username-taken');
      transaction.set(usernameRef, { uid: profile.uid });
      transaction.set(profileRef, profile);
      transaction.set(doc(FirebaseDB, 'publicProfiles', profile.uid), { fullname, username });
    });

    return { ok: true, uid: profile.uid, email: profile.email, displayName: fullname, photoURL: profile.photoURL };
  } catch (error: unknown) {
    if (createdUser) {
      try {
        await deleteUser(createdUser);
      } catch {
        await signOut(FirebaseAuth).catch(() => undefined);
        return { ok: false, errorMessage: 'La cuenta de acceso se creó, pero no se pudo completar el perfil ni eliminar la cuenta. Revisa Authentication antes de intentar registrarte de nuevo.' };
      }
    }

    let errorMessage = 'No se pudo completar el registro. Inténtalo de nuevo.';
    if (error instanceof Error && error.message === 'username-taken') {
      errorMessage = 'Ese nombre de usuario ya está en uso.';
    } else if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Ese correo ya tiene una cuenta. Puedes iniciar sesión.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Introduce un correo electrónico válido.';
          break;
        case 'auth/weak-password':
        case 'auth/password-does-not-meet-requirements':
          errorMessage = 'La contraseña no cumple los requisitos de Firebase. Prueba con una más segura.';
          break;
        case 'auth/network-request-failed':
        case 'unavailable':
          errorMessage = 'Revisa tu conexión a internet e inténtalo de nuevo.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Demasiados intentos. Espera un momento antes de volver a intentar.';
          break;
        case 'permission-denied':
          errorMessage = 'No se pudo guardar el perfil. Revisa las reglas de Firestore.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Habilita el acceso por correo y contraseña en Firebase.';
          break;
      }
    }
    return { ok: false, errorMessage };
  }
};
