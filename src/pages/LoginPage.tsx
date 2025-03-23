import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from "@mui/material/Link";
import ContactHelpDesk from "../components/ContactHelpDesk";

export type LoginPageProps = {
  loginUri: string;
};

export function LoginPage(props: LoginPageProps) {
  return (
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
