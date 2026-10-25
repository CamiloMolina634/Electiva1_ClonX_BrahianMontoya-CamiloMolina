import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FirebaseAuth } from './config';

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
