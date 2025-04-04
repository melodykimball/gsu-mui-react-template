import Link, { type LinkProps } from "@mui/material/Link";

export type ExternalLinkProps = LinkProps;

export function ExternalLink(props: ExternalLinkProps) {
  const { style, ...myProps } = props;
  const linkProps = {
    ...myProps,
    target: "_blank",
    rel: "noreferrer",
    style: {
      ...style,
      color: "#00AEEF",
    },
  };

  return <Link {...linkProps} />;
}

export default ExternalLink;
