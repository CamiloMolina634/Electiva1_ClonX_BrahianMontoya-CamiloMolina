import type { AuthState } from './authReducerInterfaces';
import type { RegisterData } from './registerInterfaces';

export interface AuthContextProps {
  authState: AuthState;
  checking: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
  logout: () => Promise<void>;
}
