import type { AuthState } from './authReducerInterfaces';

export interface AuthContextProps {
  authState: AuthState;
  checking: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}
