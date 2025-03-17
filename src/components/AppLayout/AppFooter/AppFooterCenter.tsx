import Stack, { type StackProps } from "@mui/material/Stack";

export type AppFooterCenterProps = Omit<StackProps, "children">;

export function AppFooterCenter(props: AppFooterCenterProps) {
  return (
    <Stack direction="row" spacing={2} {...props}>
      <span>Georgia State University</span>
      <span>
        <a
          href="https://map.concept3d.com/?id=1108#!m/295226?ce/0,22381,27051,27053?s/Sparks%20Hall?ct/0,22383,27114,27113,38302"
          target="_blank"
          rel="noreferrer"
        >
          33 Gilmer Street SE Atlanta, GA
        </a>
      </span>
      <span>
        <a href="tel:+14044132000">404-413-2000</a>
      </span>
    </Stack>
  );
}

export default AppFooterCenter;
