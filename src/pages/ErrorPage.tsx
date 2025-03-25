import { Navigate, useRouteError } from "react-router";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import NotFoundPage from "./NotFoundPage";
import ContactHelpDesk from "../components/ContactHelpDesk";

export type ErrorPageProps = {
  loginUri: string;
  error?: unknown | undefined;
};

export type RouteError = {
  statusText?: string | null;
  message?: string | null;
};

export function ErrorPage(props: ErrorPageProps) {
  const routeError = useRouteError() as RouteError | null;
  let message: string | null = null;
  if (typeof props.error === "string") {
    message = props.error;
  } else if (props.error instanceof Error) {
    message = props.error.message;
  } else if (props.error instanceof String) {
    message = props.error.toString();
  }
  message ??= routeError ? routeError.statusText || routeError.message || null : null;
  message ??= "Sorry, an unexpected error has occurred.";

  if (message === "Request failed with status code 401") {
    return <Navigate to={props.loginUri} />;
  } else if (message === "Not Found") {
    return <NotFoundPage />;
  } else {
    return (
      <Alert severity="error">
        <AlertTitle>Uh oh!</AlertTitle>
        <div>
          <p>{message}</p>
          <ContactHelpDesk />
        </div>
      </Alert>
    );
  }
}

export default ErrorPage;
