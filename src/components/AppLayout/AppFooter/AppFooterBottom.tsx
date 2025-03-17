import Stack, { type StackProps } from "@mui/material/Stack";

export type AppFooterBottomProps = Omit<StackProps, "children">;

export function AppFooterBottom(props: AppFooterBottomProps) {
  const year = new Date().getFullYear();
  return (
    <Stack direction="row" spacing={2} {...props}>
      <a href="https://www.gsu.edu/contact-georgia-state/" target="_blank" rel="noreferrer">
        Contact Georgia State
      </a>
      <a href="https://www.gsu.edu/legal-statement" target="_blank" rel="noreferrer">
        View Legal Statement &amp; Human Trafficking Notice
      </a>
      <a href="https://www.gsu.edu/privacy-notices/" target="_blank" rel="noreferrer">
        Privacy Notices
      </a>
      <a href="https://www.gsu.edu/state-authorization" target="_blank" rel="noreferrer">
        State Authorization
      </a>
      <a href="https://audit.gsu.edu/resources/georgia-state-ethics-hotline/" target="_blank" rel="noreferrer">
        Ethics Hotline
      </a>
      <a href="https://gsu.uservoice.com" target="_blank" rel="noreferrer">
        Website Feedback
      </a>
      <span style={{ color: "#FFF" }}>&copy;{year} Georgia State University</span>
    </Stack>
  );
}

export default AppFooterBottom;
