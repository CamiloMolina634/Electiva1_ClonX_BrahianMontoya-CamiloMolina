import type { AuthState } from './authReducerInterfaces';
import type { RegisterData } from './registerInterfaces';
import type { ProfileEdit } from '../profile';

export interface AuthContextProps {
  authState: AuthState;
  checking: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
  saveProfile: (details: ProfileEdit) => Promise<void>;
  logout: () => Promise<void>;
}
