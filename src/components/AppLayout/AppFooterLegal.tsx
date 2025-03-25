import type { AppFooterLegalProps } from "./types";
import Stack from "@mui/material/Stack";

const { copy, links } = {
  copy: `&copy;${new Date().getFullYear()} Georgia State University`,
  links: [
    ["https://www.gsu.edu/contact-georgia-state/", "Contact Georgia State"],
    ["https://www.gsu.edu/legal-statement", "View Legal Statement &amp; Human Trafficking Notice"],
    ["https://www.gsu.edu/privacy-notices/", "Privacy Notices"],
    ["https://www.gsu.edu/state-authorization", "State Authorization"],
    ["https://audit.gsu.edu/resources/georgia-state-ethics-hotline/", "Ethics Hotline"],
    ["https://gsu.uservoice.com", "Website Feedback"],
  ],
};

export function AppFooterLegal(props: AppFooterLegalProps) {
  return (
    <Stack className="footer-legal" direction={{ xs: "column", sm: "row" }} spacing={2} {...props}>
      {links.map(([href, label]) => (
        <a key={href} href={href} target="_blank" rel="noreferrer">
          {label}
        </a>
      ))}
      <span style={{ color: "#FFF" }}>{copy}</span>
    </Stack>
  );
}

export default AppFooterLegal;
