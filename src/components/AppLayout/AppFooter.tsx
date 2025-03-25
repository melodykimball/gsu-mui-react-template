import type { AppFooterProps } from "./types";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import AppFooterAddress from "./AppFooterAddress";
import AppFooterLegal from "./AppFooterLegal";
import AppFooterLogo from "./AppFooterLogo";

export function AppFooter(props: AppFooterProps) {
  const toolbarProps: AppFooterProps["toolbar"] = {
    component: "footer",
    role: "contentinfo",
    ...props.toolbar,
  };
  const stackProps: AppFooterProps["stack"] = {
    className: "site-footer",
    spacing: 2,
    ...props.stack,
  };
  const dividerProps: AppFooterProps["divider"] = {
    orientation: "vertical",
    flexItem: true,
    className: "divider",
    ...props.divider,
  };

  const divider = <Divider {...dividerProps} />;

  return (
    <Toolbar {...toolbarProps}>
      <Stack {...stackProps}>
        <AppFooterLogo {...props.logo} />
        <AppFooterAddress divider={divider} {...props.address} />
        <AppFooterLegal {...props.legal} />
      </Stack>
    </Toolbar>
  );
}

export default AppFooter;
