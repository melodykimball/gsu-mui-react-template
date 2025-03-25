import type { Dispatch, SetStateAction } from "react";
import type { AuthToken } from "./useAuthToken";

export function updateAuthToken(authToken: AuthToken, setAuthToken: Dispatch<SetStateAction<AuthToken>>): () => void {
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

export default updateAuthToken;
