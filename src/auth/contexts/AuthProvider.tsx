import { useEffect, useReducer, useState, type ReactNode } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../../firebase/config';
import { loginUserByCredentials, logoutUser } from '../../firebase/providers';
import { AuthContext } from './AuthContext';
import { authReducer } from '../reducers/authReducer';
import type { AuthState } from '../types/authReducerInterfaces';

const initialState: AuthState = { logged: false, user: null, errorMessage: null };

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const [checking, setChecking] = useState(true);

  useEffect(() => onAuthStateChanged(FirebaseAuth, (user) => {
    if (user) {
      dispatch({
        type: 'login',
        payload: {
          logged: true,
          errorMessage: null,
          user: {
            uid: user.uid,
            photoURL: user.photoURL,
            username: user.displayName || '',
            fullname: user.displayName || '',
            email: user.email || '',
          },
        },
      });
    } else {
      dispatch({ type: 'logout', payload: initialState });
    }
    setChecking(false);
  }), []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const result = await loginUserByCredentials(email, password);

    if (!result.ok) {
      dispatch({
        type: 'error',
        payload: { logged: false, user: null, errorMessage: result.errorMessage },
      });
    }

    return result.ok;
  };

  const logout = async (): Promise<void> => {
    await logoutUser();
  };

  return (
    <AuthContext.Provider value={{ authState, checking, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
