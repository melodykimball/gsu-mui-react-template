import MuiAccordion, { type AccordionProps } from "@mui/material/Accordion";
import { useState } from "react";

export function Accordion(props: AccordionProps) {
  const [expanded, setExpanded] = useState(true);
  return (
    <MuiAccordion
      disableGutters
      expanded={expanded}
      onChange={(_event, newExpanded) => setExpanded(newExpanded)}
      {...props}
    />
  );
}

export default Accordion;
