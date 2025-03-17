import { type DetailedHTMLProps, type ImgHTMLAttributes, type PropsWithChildren } from "react";
import AppBar, { type AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import logo from "../../../assets/logo.png";

export type AppHeaderProps = PropsWithChildren<{
  appBar?: Omit<AppBarProps, "children"> | undefined;
  img?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | undefined;
  typography?: Omit<TypographyProps, "children"> | undefined;
}>;

export function AppHeader(props: AppHeaderProps) {
  const appBarProps: AppBarProps = {
    component: "header",
    role: "banner",
    ...props.appBar,
  };
  const imgProps: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> = {
    width: 64,
    height: 64,
    src: logo,
    alt: "Georgia State University",
    ...props.img,
  };
  const typographyProps: TypographyProps = {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    ...props.typography,
  };

  appBarProps.sx = {
    backgroundColor: "#0039a6",
    ...appBarProps.sx,
  };
  imgProps.style = {
    width: "64px",
    height: "64px",
    maxHeight: "64px",
    marginLeft: "16px",
    marginRight: "16px",
    objectFit: "contain",
    ...imgProps.style,
  };
  typographyProps.sx = {
    flexGrow: 1,
    ...typographyProps.sx,
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

export default AppHeader;
