import type { AppHeaderProps } from "./types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.png";

export default function AppHeader(props: AppHeaderProps) {
  const appBarProps: AppHeaderProps["appBar"] = {
    component: "header",
    role: "banner",
    className: "site-header",
    ...props.appBar,
  };
  const imgProps: AppHeaderProps["img"] = {
    src: logo,
    alt: "Georgia State University",
    className: "header-logo",
    ...props.img,
  };
  const typographyProps: AppHeaderProps["typography"] = {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: "header-title",
    ...props.typography,
  };

  return (
    <AppBar {...appBarProps}>
      <Toolbar>
        <img {...imgProps} />
        <Typography {...typographyProps}>{props.children}</Typography>
      </Toolbar>
    </AppBar>
  );
}
