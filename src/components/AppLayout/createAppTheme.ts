import grey from "@mui/material/colors/grey";
import { alpha, createTheme, type Theme, type Components } from "@mui/material/styles";

export function createAppTheme() {
  const defaultTheme = createTheme();

  return createTheme(defaultTheme, {
    cssVariables: true,
    palette: {
      divider: "#999",
    },
    components: {
      MuiButton: createButtonTheme(defaultTheme),
    },
  });
}

export default createAppTheme;

function createButtonTheme({ palette }: Theme) {
  const buttonBorderColor = palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  const buttonDisabledBorder = `1px solid ${palette.action.disabledBackground}`;
  const buttonHoverColor = alpha(palette.text.primary, palette.action.hoverOpacity);

  return {
    variants: [
      {
        props: {
          variant: "contained",
          color: "default",
        },
        style: {
          color: palette.getContrastText(grey[300]),
        },
      },
      {
        props: {
          variant: "outlined",
          color: "primary",
        },
        style: {
          color: palette.text.primary,
          borderColor: buttonBorderColor,
          "&.Mui-disabled": {
            border: buttonDisabledBorder,
          },
          "&:hover": {
            borderColor: buttonBorderColor,
            backgroundColor: buttonHoverColor,
          },
        },
      },
      {
        props: {
          variant: "text",
          color: "default",
        },
        style: {
          color: palette.text.primary,
          "&:hover": {
            backgroundColor: buttonHoverColor,
          },
        },
      },
    ],
  } as Components["MuiButton"];
}
