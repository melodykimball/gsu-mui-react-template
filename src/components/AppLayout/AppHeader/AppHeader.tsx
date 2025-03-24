import { type DetailedHTMLProps, type ImgHTMLAttributes, type PropsWithChildren } from "react";
import AppBar, { type AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import logo from "../../../assets/logo.png";
import "./AppHeader.css";

export type AppHeaderBarProps = Omit<AppBarProps, "children">;
export type AppHeaderImgProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
export type AppHeaderTypographyProps = Omit<TypographyProps, "children">;
export type AppHeaderProps = PropsWithChildren<{
  appBar?: AppHeaderBarProps | undefined;
  img?: AppHeaderImgProps | undefined;
  typography?: AppHeaderTypographyProps | undefined;
}>;

export function AppHeader(props: AppHeaderProps) {
  const { appBarProps, imgProps, typographyProps } = buildProps(props);
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

function buildProps(props: AppHeaderProps) {
  const appBarProps: AppHeaderBarProps = {
    component: "header",
    role: "banner",
    className: "site-header",
    ...props.appBar,
  };
  const imgProps: AppHeaderImgProps = {
    src: logo,
    alt: "Georgia State University",
    className: "header-logo",
    ...props.img,
  };
  const typographyProps: AppHeaderTypographyProps = {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: "header-title",
    ...props.typography,
  };

  return {
    appBarProps,
    imgProps,
    typographyProps,
  };
}
