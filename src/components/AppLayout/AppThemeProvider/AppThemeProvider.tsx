import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { type ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import theme from "./AppTheme";

export interface AppThemeProviderProps<Theme = object> extends Partial<ThemeProviderProps<Theme>> {
  enableColorScheme?: boolean | undefined;
}

export function AppThemeProvider(props: AppThemeProviderProps) {
  const { theme: myTheme, enableColorScheme, children, ...myThemeProps } = props;
  return (
    <ThemeProvider theme={myTheme ?? theme} {...myThemeProps}>
      <CssBaseline enableColorScheme={enableColorScheme} />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
