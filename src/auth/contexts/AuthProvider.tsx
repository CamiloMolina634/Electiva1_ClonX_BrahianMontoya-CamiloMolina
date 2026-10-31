import { useEffect, useReducer, useRef, useState, type ReactNode } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../../firebase/config';
import { getUserProfile, loginUserByCredentials, logoutUser, registerUser } from '../../firebase/providers';
import { AuthContext } from './AuthContext';
import { authReducer } from '../reducers/authReducer';
import type { AuthState } from '../types/authReducerInterfaces';
import type { RegisterData } from '../types/registerInterfaces';

const initialState: AuthState = { logged: false, user: null, errorMessage: null };

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const [checking, setChecking] = useState(true);
  const [sessionVersion, setSessionVersion] = useState(0);
  const registering = useRef(false);

  useEffect(() => {
    let active = true;
    let request = 0;
    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      const currentRequest = ++request;
      if (registering.current) return;
      if (!user) {
        dispatch({ type: 'logout', payload: initialState });
        setChecking(false);
        return;
      }

      let profile = null;
      let errorMessage: string | null = null;
      try {
        profile = await getUserProfile(user.uid);
      } catch {
        errorMessage = 'La sesión está abierta, pero no se pudo cargar el perfil. Revisa la conexión y las reglas de Firestore.';
      }
      if (!active || currentRequest !== request || registering.current) return;
      dispatch({
        type: 'login',
        payload: {
          logged: true,
          errorMessage,
          user: profile ? { ...profile, email: user.email || '' } : {
            uid: user.uid,
            photoURL: user.photoURL,
            username: '',
            fullname: user.displayName || '',
            email: user.email || '',
          },
        },
      });
      setChecking(false);
    });
    return () => { active = false; unsubscribe(); };
  }, [sessionVersion]);

  const login = async (username: string, password: string): Promise<boolean> => {
    const result = await loginUserByCredentials(username, password);

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

  const register = async (data: RegisterData): Promise<boolean> => {
    if (registering.current) return false;
    registering.current = true;
    try {
      const result = await registerUser(data);
      if (!result.ok) {
        dispatch({ type: 'error', payload: { ...initialState, errorMessage: result.errorMessage } });
        return false;
      }
      setChecking(true);
      setSessionVersion((version) => version + 1);
      return true;
    } finally {
      registering.current = false;
    }
  };

  return (
    <AuthContext.Provider value={{ authState, checking, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
