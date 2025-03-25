import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from "@mui/material/Link";
import { Navigate } from "react-router";
import ContactHelpDesk from "../components/ContactHelpDesk";
import { useAuthTokenContext } from "../hooks/useAuthToken";

export type LoginPageProps = {
  loginUri: string;
};

export function LoginPage(props: LoginPageProps) {
  const authToken = useAuthTokenContext();
  return authToken.isActive !== false ? (
    <Navigate to="/" />
  ) : (
    <Alert severity="info">
      <AlertTitle>Not Authenticated</AlertTitle>
      <div>
        <p>
          You are not logged in. Please <Link href={props.loginUri}>login</Link> to access this site.
        </p>
        <ContactHelpDesk />
      </div>
    </Alert>
  );
}

export default LoginPage;
