import type { AppFooterLogoProps } from "./types";
import Stack from "@mui/material/Stack";
import footerLogo from "../../assets/logo-footer.png";

export default function AppFooterLogo(props: AppFooterLogoProps) {
  return (
    <Stack className="footer-logo" direction="row" spacing={2} {...props}>
      <img width="74" height="77" src={footerLogo} alt="Georgia State University"></img>
    </Stack>
  );
}
