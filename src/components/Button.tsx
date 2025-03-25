import { default as MuiButton, type ButtonProps as MuiButtonProps } from "@mui/material/Button";

export function Button(props: MuiButtonProps) {
  return (
    <MuiButton variant="outlined" color="primary" disableRipple={true} sx={{ textTransform: "none" }} {...props} />
  );
}

export default Button;
