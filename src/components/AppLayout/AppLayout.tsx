import { type ReactNode, type PropsWithChildren } from "react";
import AppBody, { type AppBodyProps } from "./AppBody";
import AppFooter, { type AppFooterProps } from "./AppFooter";
import AppHeader, { type AppHeaderProps } from "./AppHeader";
import AppThemeProvider, { type AppThemeProviderProps } from "./AppThemeProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export type AppLayoutProps = PropsWithChildren<{
  theme?: AppThemeProviderProps | undefined;
  header?: Omit<AppHeaderProps, "children"> | undefined;
  body?: Omit<AppBodyProps, "children"> | undefined;
  footer?: AppFooterProps | undefined;
  title: ReactNode;
}>;

export function AppLayout(props: AppLayoutProps) {
  return (
    <AppThemeProvider {...props.theme}>
      <AppHeader {...props.header}>{props.title}</AppHeader>
      <AppBody {...props.body}>{props.children}</AppBody>
      <AppFooter {...props.footer} />
    </AppThemeProvider>
  );
}

export default AppLayout;
