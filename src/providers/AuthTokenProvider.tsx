import { type PropsWithChildren } from "react";
import useAuthToken, { useAuthTokenProvider } from "../hooks/useAuthToken";

export function AuthTokenProvider(props: PropsWithChildren) {
  const Provider = useAuthTokenProvider();
  const authToken = useAuthToken();
  return <Provider value={authToken}>{props.children}</Provider>;
}

export default AuthTokenProvider;
