import Link from "@mui/material/Link";

export function ContactHelpDesk() {
  return (
    <p>
      <Link
        href="mailto:help@gsu.edu"
        target="_blank"
        rel="noreferrer"
        aria-label="Opens email to help desk in new tab"
      >
        Contact the GSU Help Desk
      </Link>
      if you are seeing this page by mistake
    </p>
  );
}

export default ContactHelpDesk;
