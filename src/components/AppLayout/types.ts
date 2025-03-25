import type { DetailedHTMLProps, ImgHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import type { AppBarProps, BoxProps, DividerProps, StackProps, ToolbarProps, TypographyProps } from "@mui/material";
import type { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import type { DefaultTheme } from "@mui/system";

export type AppHeaderBarProps = Omit<AppBarProps, "children">;
export type AppHeaderImgProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
export type AppHeaderTypographyProps = Omit<TypographyProps, "children">;
export type AppHeaderProps = PropsWithChildren<{
  appBar?: AppHeaderBarProps | undefined;
  img?: AppHeaderImgProps | undefined;
  typography?: AppHeaderTypographyProps | undefined;
}>;

export type AppBodyProps = BoxProps;

export type AppFooterToolbarProps = Omit<ToolbarProps, "children">;
export type AppFooterStackProps = Omit<StackProps, "children">;
export type AppFooterDividerProps = Omit<DividerProps, "children">;
export type AppFooterAddressProps = Omit<StackProps, "children">;
export type AppFooterLegalProps = Omit<StackProps, "children">;
export type AppFooterLogoProps = Omit<StackProps, "children">;
export type AppFooterProps = {
  toolbar?: AppFooterToolbarProps | undefined;
  stack?: AppFooterStackProps | undefined;
  divider?: AppFooterDividerProps | undefined;
  logo?: AppFooterLogoProps | undefined;
  address?: AppFooterAddressProps | undefined;
  legal?: AppFooterLegalProps | undefined;
};

export interface AppThemeProviderProps<Theme = DefaultTheme> extends Partial<ThemeProviderProps<Theme>> {
  enableColorScheme?: boolean | undefined;
}

export type AppLayoutProps = PropsWithChildren<{
  theme?: AppThemeProviderProps | undefined;
  header?: Omit<AppHeaderProps, "children"> | undefined;
  body?: Omit<AppBodyProps, "children"> | undefined;
  footer?: AppFooterProps | undefined;
  title: ReactNode;
}>;
