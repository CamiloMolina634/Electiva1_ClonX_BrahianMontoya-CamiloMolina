import type { AuthReducerAction, AuthState } from '../types/authReducerInterfaces';

export const authReducer = (state: AuthState, action: AuthReducerAction): AuthState => {
  switch (action.type) {
    case 'login':
    case 'error':
      return action.payload;
    case 'logout':
      return { logged: false, user: null, errorMessage: null };
    default:
      return state;
  }
};
