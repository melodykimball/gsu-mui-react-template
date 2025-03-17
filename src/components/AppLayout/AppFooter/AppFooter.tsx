import Divider, { DividerProps } from "@mui/material/Divider";
import Stack, { type StackProps } from "@mui/material/Stack";
import Toolbar, { type ToolbarProps } from "@mui/material/Toolbar";
import AppFooterTop from "./AppFooterTop";
import AppFooterCenter from "./AppFooterCenter";
import AppFooterBottom from "./AppFooterBottom";
import "./AppFooter.css";

export type AppFooterProps = {
  toolbar?: Omit<ToolbarProps, "children"> | undefined;
  stack?: Omit<StackProps, "children"> | undefined;
  divider?: Omit<DividerProps, "children"> | undefined;
  left?: Omit<StackProps, "children"> | undefined;
  center?: Omit<StackProps, "children"> | undefined;
  right?: Omit<StackProps, "children"> | undefined;
};

export function AppFooter(props: AppFooterProps) {
  const toolbarProps: ToolbarProps = {
    component: "footer",
    role: "contentinfo",
    ...props.toolbar,
  };
  const stackProps: StackProps = {
    className: "app-footer",
    spacing: 2,
    ...props.stack,
  };
  const dividerProps: DividerProps = {
    orientation: "vertical",
    flexItem: true,
    className: "divider",
    ...props.divider,
  };
  const divider = <Divider {...dividerProps} />;

  return (
    <Toolbar {...toolbarProps}>
      <Stack {...stackProps}>
        <AppFooterTop {...props.left} />
        <AppFooterCenter divider={divider} {...props.center} />
        <AppFooterBottom {...props.right} />
      </Stack>
    </Toolbar>
  );
}

export default AppFooter;
