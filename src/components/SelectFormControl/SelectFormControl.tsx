import type { SelectFormControlProps, SelectFormControlItem } from "./types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectFormControl(props: SelectFormControlProps) {
  const { idPrefix, noneLabel, label, onChange, defaultValue, items } = {
    ...props,
    idPrefix: props.idPrefix ?? props.label.replace(" ", "_"),
  };

  const inputProps = {
    id: `${idPrefix}_input`,
    title: label,
    style: {
      display: "none",
    },
  };

  return (
    <FormControl fullWidth>
      <InputLabel component="div" sx={{ backgroundColor: "#fff" }}>
        {label}
      </InputLabel>
      <label id={`${idPrefix}_label`} htmlFor={`${idPrefix}_input`} style={{ display: "none" }}>
        {label}
      </label>
      <Select value={defaultValue ?? ""} onChange={onChange} inputProps={inputProps}>
        <MenuItem value="">
          <em>{noneLabel ?? "None"}</em>
        </MenuItem>
        {items?.map((item: SelectFormControlItem) => (
          <MenuItem key={`${idPrefix}_item_${item.parent}${item.value}`} value={item.value}>
            {item.extra ?? null}
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
