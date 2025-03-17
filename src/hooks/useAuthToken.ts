import { createContext, useContext, useEffect } from "react";
import useStorage from "./useStorage";

export interface AuthToken {
  token: string;
  expiresOn: number;
  isActive?: boolean | undefined;
}

const defaultAuthToken = {
  token: "",
  expiresOn: 0,
} as AuthToken;

export const AuthContext = createContext(defaultAuthToken);

export function useAuthTokenContext(): AuthToken {
  return useContext(AuthContext);
}

export function useAuthToken(): AuthToken {
  const [authToken, setAuthToken] = useStorage<AuthToken>("authToken", defaultAuthToken);
  useEffect(() => updateAuthToken(authToken, setAuthToken), [authToken, setAuthToken]);

  return {
    ...authToken,
    isActive: isActive(authToken),
  };
}

function isActive(authToken: AuthToken): boolean | undefined {
  switch (true) {
    case new URL(window.location.href).searchParams.has("token"):
      return undefined;
    case authToken.expiresOn > new Date().getTime():
      return true;
    default:
      return false;
  }
}

function updateAuthToken(
  authToken: AuthToken,
  setAuthToken: React.Dispatch<React.SetStateAction<AuthToken>>
): () => void {
  const url = new URL(window.location.href);
  const token = url.searchParams.get("token");
  const rightNow = new Date().getTime();

  if (token !== null) {
    url.searchParams.delete("token");
    window.history.replaceState({}, document.title, url.toString());

    setAuthToken({
      token: token,
      expiresOn: rightNow + 1800000,
    });
  } else if (authToken.expiresOn > rightNow) {
    const timer = setTimeout(() => {
      setAuthToken({
        ...authToken,
        expiresOn: authToken.expiresOn - 1,
      });
    }, Math.max(authToken.expiresOn - rightNow, 0));

    return () => clearTimeout(timer);
  }

  return function () {};
}
