import type { ReactNode } from "react";
import type { SelectChangeEvent } from "@mui/material/Select";

export type SelectFormControlItem = {
  type?: string;
  value: string;
  label: string;
  extra?: ReactNode;
  parent?: string;
  children?: SelectFormControlItem[];
};

export type SelectFormControlOnChange = (event: SelectChangeEvent<string>, child: ReactNode) => void;

export type SelectFormControlProps = {
  idPrefix?: string;
  noneLabel?: string;
  label: string;
  items?: SelectFormControlItem[];
  defaultValue?: string;
  onChange?: SelectFormControlOnChange;
};
