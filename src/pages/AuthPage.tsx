import { type ReactNode, useContext } from "react";
import AuthTokenContext from "../contexts/AuthTokenContext";

export type AuthPageProps = {
  fallback?: ReactNode | undefined;
  children?: ReactNode | undefined;
};

export function AuthPage(props: AuthPageProps) {
  const authToken = useContext(AuthTokenContext);
  return authToken.isActive !== false ? props.children : props.fallback;
}

export default AuthPage;
