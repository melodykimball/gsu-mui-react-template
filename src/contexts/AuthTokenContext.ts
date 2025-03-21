import { createContext } from "react";

export interface AuthToken {
  token: string;
  expiresOn: number;
  isActive?: boolean | undefined;
}

export const defaultAuthToken = {
  token: "",
  expiresOn: 0,
} as AuthToken;

export const AuthTokenContext = createContext(defaultAuthToken);

export default AuthTokenContext;
