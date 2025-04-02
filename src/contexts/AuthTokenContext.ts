import { createContext } from "react";
import { type AuthToken, defaultAuthToken } from "../hooks/useAuthToken";

export const AuthTokenContext = createContext<AuthToken>(defaultAuthToken);

export default AuthTokenContext;
