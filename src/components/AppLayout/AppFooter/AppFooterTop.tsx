import Stack, { type StackProps } from "@mui/material/Stack";
import footerLogo from "../../../assets/logo-footer.png";

export type AppFooterTopProps = Omit<StackProps, "children">;

export function AppFooterTop(props: AppFooterTopProps) {
  return (
    <Stack direction="row" spacing={2} {...props}>
      <img width="74" height="77" src={footerLogo} alt="Georgia State University"></img>
    </Stack>
  );
}

export default AppFooterTop;
