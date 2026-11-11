import type { SavedProfile } from '../profile';

export interface User {
  uid: string;
  photoURL: string | null;
  coverURL?: string;
  username: string;
  fullname: string;
  email: string;
  bio?: string;
}

export interface AuthState {
  logged: boolean;
  user: User | null;
  errorMessage: string | null;
}

export type AuthReducerAction =
  | { type: 'login' | 'logout' | 'error'; payload: AuthState }
  | { type: 'profile-updated'; payload: SavedProfile & { uid: string } };
