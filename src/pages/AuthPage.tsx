import type { ReactNode } from "react";
import { useAuthTokenContext } from "../hooks/useAuthToken";

export type AuthPageProps = {
  fallback?: ReactNode | undefined;
  children?: ReactNode | undefined;
};

export function AuthPage(props: AuthPageProps) {
  const authToken = useAuthTokenContext();
  return authToken.isActive !== false ? props.children : props.fallback;
}

export default AuthPage;
