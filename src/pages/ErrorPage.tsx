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
  let message = "";

  try {
    message = getErrorMessage(props.error, routeError);
  } catch {
    message = "Sorry, an unexpected error has occurred.";
  }

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

function getErrorMessage(error: unknown, routeError: RouteError | null): string {
  let errorMessage: string | null = null;
  if (typeof error === "string") {
    errorMessage = error;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (error instanceof String) {
    errorMessage = error.toString();
  }

  const routeErrorText = routeError ? routeError.statusText || routeError.message || null : null;

  const defaultErrorMessage = "Sorry, an unexpected error has occurred.";

  return errorMessage ?? routeErrorText ?? defaultErrorMessage;
}
