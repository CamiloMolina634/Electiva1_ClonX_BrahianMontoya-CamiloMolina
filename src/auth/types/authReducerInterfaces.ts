export interface User {
  uid: string;
  photoURL: string | null;
  username: string;
  fullname: string;
  email: string;
}

export interface AuthState {
  logged: boolean;
  user: User | null;
  errorMessage: string | null;
}

export interface AuthReducerAction {
  type: ActionType;
  payload: AuthState;
}

export type ActionType = 'login' | 'logout' | 'error';
