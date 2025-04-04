import { useEffect } from "react";
import defaultAuthToken from "./defaultAuthToken";
import isActiveAuthToken from "./isActiveAuthToken";
import updateAuthToken from "./updateAuthToken";
import { type AuthToken } from "./types";
import useStorage from "../useStorage";

export function useAuthToken(): AuthToken {
  const [authToken, setAuthToken] = useStorage<AuthToken>({
    key: "authToken",
    initialValue: defaultAuthToken,
  });
  useEffect(() => updateAuthToken(authToken, setAuthToken), [authToken, setAuthToken]);

  return {
    ...authToken,
    isActive: isActiveAuthToken(authToken),
  };
}

export default useAuthToken;
