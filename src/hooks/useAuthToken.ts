import { createContext, useContext, useEffect } from "react";
import updateAuthToken from "./updateAuthToken";
import useStorage from "./useStorage";

export interface AuthToken {
  token: string;
  expiresOn: number;
  isActive?: boolean | undefined;
}

const defaultAuthToken: AuthToken = {
  token: "",
  expiresOn: 0,
};

const context = createContext(defaultAuthToken);

export function isActiveAuthToken(authToken: AuthToken): boolean | undefined {
  switch (true) {
    case new URL(window.location.href).searchParams.has("token"):
      return undefined;
    case authToken.expiresOn > new Date().getTime():
      return true;
    default:
      return false;
  }
}

export function useAuthTokenProvider() {
  return context.Provider;
}

export function useAuthTokenContext() {
  return useContext(context);
}

export function useAuthToken(): AuthToken {
  const [authToken, setAuthToken] = useStorage<AuthToken>("authToken", defaultAuthToken);
  useEffect(() => updateAuthToken(authToken, setAuthToken), [authToken, setAuthToken]);

  return {
    ...authToken,
    isActive: isActiveAuthToken(authToken),
  };
}

export default useAuthToken;
