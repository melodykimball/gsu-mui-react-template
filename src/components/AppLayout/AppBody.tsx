import type { AppBodyProps } from "./types";
import Box from "@mui/material/Box";

export function AppBody(props: AppBodyProps) {
  const boxProps: AppBodyProps = {
    component: "main",
    role: "main",
    className: "content",
    ...props,
  };

  boxProps.sx = {
    flexGrow: 1,
    ...boxProps.sx,
  };

  return <Box {...boxProps} />;
}

export default AppBody;
