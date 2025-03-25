import type { AppFooterAddressProps } from "./types";
import Stack from "@mui/material/Stack";

const { name, address, phone } = {
  name: "Georgia State University",
  address: {
    uri: [
      "https://map.concept3d.com",
      "/?id=1108#!m/295226?ce/0,22381,27051,27053?s/Sparks%20Hall?ct/0,22383,27114,27113,38302",
    ].join(),
    label: "33 Gilmer Street SE Atlanta, GA",
  },
  phone: {
    uri: "tel:+14044132000",
    label: "404-413-2000",
  },
};

export function AppFooterAddress(props: AppFooterAddressProps) {
  return (
    <Stack className="footer-address" direction="row" spacing={2} {...props}>
      <span>{name}</span>
      <span>
        <a href={address.uri} target="_blank" rel="noreferrer">
          {address.label}
        </a>
      </span>
      <span>
        <a href={phone.uri}>{phone.label}</a>
      </span>
    </Stack>
  );
}

export default AppFooterAddress;
