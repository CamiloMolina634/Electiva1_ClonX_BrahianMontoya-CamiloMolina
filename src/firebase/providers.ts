import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, runTransaction } from 'firebase/firestore';
import { FirebaseAuth, FirebaseDB } from './config';
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

export const loginUserByCredentials = async (email: string, password: string): Promise<AuthResult | AuthErrorResult> => {
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, displayName, photoURL } = result.user;
    return { ok: true, uid, email: result.user.email || email, displayName, photoURL };
  } catch (error: unknown) {
    let errorMessage = 'No se pudo iniciar sesión. Inténtalo de nuevo.';
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/invalid-credential':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-email':
          errorMessage = 'Correo o contraseña incorrectos.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Revisa tu conexión a internet e inténtalo de nuevo.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Demasiados intentos. Espera un momento antes de volver a intentar.';
          break;
      }
    }
    return { ok: false, errorMessage };
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
  };
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
