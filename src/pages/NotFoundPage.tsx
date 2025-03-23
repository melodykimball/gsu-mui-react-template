import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import ContactHelpDesk from "../components/ContactHelpDesk";

export function NotFoundPage() {
  return (
    <Alert severity="warning">
      <AlertTitle>Not Found</AlertTitle>
      <div>
        <p>This page doesn&apos;t exist.</p>
        <ContactHelpDesk />
      </div>
    </Alert>
  );
}

export default NotFoundPage;
