import { createContext } from 'react';
import type { AuthContextProps } from '../types/authContextInterfaces';

export const AuthContext = createContext({} as AuthContextProps);
