import { type AuthToken } from "./types";

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

export default isActiveAuthToken;
