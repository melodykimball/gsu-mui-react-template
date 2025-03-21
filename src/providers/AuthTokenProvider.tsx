import { type PropsWithChildren } from "react";
import { useGetAuthToken } from "../hooks/useAuthToken";
import AuthTokenContext from "../contexts/AuthTokenContext";

export function AuthTokenProvider(props: PropsWithChildren) {
  const authToken = useGetAuthToken();
  return <AuthTokenContext.Provider value={authToken}>{props.children}</AuthTokenContext.Provider>;
}
