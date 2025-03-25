import type { AppThemeProviderProps } from "./types";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createAppTheme from "./createAppTheme";

const theme = createAppTheme();
export default function AppThemeProvider(props: AppThemeProviderProps) {
  const { theme: myTheme, enableColorScheme, children, ...myThemeProps } = props;

  return (
    <ThemeProvider theme={myTheme ?? theme} {...myThemeProps}>
      <CssBaseline enableColorScheme={enableColorScheme} />
      {children}
    </ThemeProvider>
  );
}
