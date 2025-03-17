import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { type BoxProps, type SxProps, type Theme } from "@mui/system";

export type AppBodyProps = BoxProps;

export function AppBody(props: AppBodyProps) {
  const boxProps: BoxProps = {
    component: "main",
    role: "main",
    ...props,
    children: undefined,
  };

  boxProps.sx = {
    flexGrow: 1,
    margin: "16px",
    minHeight: "100%",
    ...boxProps.sx,
  } as SxProps<Theme>;

  return (
    <Box {...boxProps}>
      <Toolbar />
      {props.children}
    </Box>
  );
}

export default AppBody;
