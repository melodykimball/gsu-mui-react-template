import { type PropsWithChildren } from "react";
import AuthTokenContext from "../contexts/AuthTokenContext";
import useAuthToken from "../hooks/useAuthToken";

export function AuthTokenProvider(props: PropsWithChildren) {
  const authToken = useAuthToken();
  return <AuthTokenContext.Provider value={authToken}>{props.children}</AuthTokenContext.Provider>;
}

export default AuthTokenProvider;
