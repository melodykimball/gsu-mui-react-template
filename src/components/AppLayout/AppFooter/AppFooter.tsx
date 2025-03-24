import Divider, { DividerProps } from "@mui/material/Divider";
import Stack, { type StackProps } from "@mui/material/Stack";
import Toolbar, { type ToolbarProps } from "@mui/material/Toolbar";
import { AppFooterAddress, type AppFooterAddressProps } from "./AppFooterAddress";
import { AppFooterLegal, type AppFooterLegalProps } from "./AppFooterLegal";
import { AppFooterLogo, type AppFooterLogoProps } from "./AppFooterLogo";
import "./AppFooter.css";

export type AppFooterToolbarProps = Omit<ToolbarProps, "children">;
export type AppFooterStackProps = Omit<StackProps, "children">;
export type AppFooterDividerProps = Omit<DividerProps, "children">;
export type AppFooterProps = {
  toolbar?: AppFooterToolbarProps | undefined;
  stack?: AppFooterStackProps | undefined;
  divider?: AppFooterDividerProps | undefined;
  logo?: AppFooterLogoProps | undefined;
  address?: AppFooterAddressProps | undefined;
  legal?: AppFooterLegalProps | undefined;
};

export function AppFooter(props: AppFooterProps) {
  const { toolbarProps, stackProps, dividerProps } = buildProps(props);
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

function buildProps(props: AppFooterProps) {
  const toolbarProps: ToolbarProps = {
    component: "footer",
    role: "contentinfo",
    ...props.toolbar,
  };
  const stackProps: StackProps = {
    className: "site-footer",
    spacing: 2,
    ...props.stack,
  };
  const dividerProps: DividerProps = {
    orientation: "vertical",
    flexItem: true,
    className: "divider",
    ...props.divider,
  };

  return {
    toolbarProps,
    stackProps,
    dividerProps,
  };
}
