import type { AppLayoutProps } from "./types";
import AppBody from "./AppBody";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppThemeProvider from "./AppThemeProvider";
import "./AppLayout.css";

export default function AppLayout(props: AppLayoutProps) {
  return (
    <AppThemeProvider {...props.theme}>
      <AppHeader {...props.header}>{props.title}</AppHeader>
      <AppBody {...props.body}>{props.children}</AppBody>
      <AppFooter {...props.footer} />
    </AppThemeProvider>
  );
}
