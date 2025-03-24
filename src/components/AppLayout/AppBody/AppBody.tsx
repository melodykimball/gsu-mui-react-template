import Box from "@mui/material/Box";
import { type BoxProps, type SxProps, type Theme } from "@mui/system";
import "./AppBody.css";

export type AppBodyProps = BoxProps;

export function AppBody(props: AppBodyProps) {
  const boxProps: BoxProps = {
    component: "main",
    role: "main",
    className: "content",
    ...props,
  };

  boxProps.sx = {
    flexGrow: 1,
    ...boxProps.sx,
  } as SxProps<Theme>;

  return <Box {...boxProps} />;
}

export default AppBody;
