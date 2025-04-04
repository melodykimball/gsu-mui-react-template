import React, { type ReactNode } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export type HeaderInfoProps = {
  title: NonNullable<ReactNode>;
  children: NonNullable<ReactNode>;
};

export function HeaderInfo(props: HeaderInfoProps) {
  const [open, setOpen] = React.useState(true);

  const action = (
    <IconButton aria-label="close" color="inherit" onClick={() => setOpen((open) => !open)}>
      {open ? <ExpandMoreIcon fontSize="inherit" /> : <ExpandLessIcon fontSize="inherit" />}
    </IconButton>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Alert icon={false} severity="info" action={action} sx={{ mb: 2 }}>
        <Typography component="h2" variant="h5">
          {props.title}
        </Typography>
        <Collapse in={open}>{props.children}</Collapse>
      </Alert>
    </Box>
  );
}

export default HeaderInfo;
