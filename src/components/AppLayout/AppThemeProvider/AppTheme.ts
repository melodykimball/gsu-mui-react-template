import grey from "@mui/material/colors/grey";
import { alpha, createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme();
export const theme = createTheme(defaultTheme, {
  cssVariables: true,
  palette: {
    divider: "#999",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained",
            color: "default",
          },
          style: {
            color: defaultTheme.palette.getContrastText(grey[300]),
          },
        },
        {
          props: {
            variant: "outlined",
            color: "primary",
          },
          style: {
            color: defaultTheme.palette.text.primary,
            borderColor: defaultTheme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)",
            "&.Mui-disabled": {
              border: `1px solid ${defaultTheme.palette.action.disabledBackground}`,
            },
            "&:hover": {
              borderColor: defaultTheme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)",
              backgroundColor: alpha(defaultTheme.palette.text.primary, defaultTheme.palette.action.hoverOpacity),
            },
          },
        },
        {
          props: {
            variant: "text",
            color: "default",
          },
          style: {
            color: defaultTheme.palette.text.primary,
            "&:hover": {
              backgroundColor: alpha(defaultTheme.palette.text.primary, defaultTheme.palette.action.hoverOpacity),
            },
          },
        },
      ],
    },
  },
});

export default theme;
