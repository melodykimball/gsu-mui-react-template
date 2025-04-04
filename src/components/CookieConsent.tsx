import ReactCookieConsent from "react-cookie-consent";
import ExternalLink from "./ExternalLink";

export function CookieConsent() {
  return (
    <ReactCookieConsent buttonText="OK" buttonStyle={{ color: "#fff", backgroundColor: "#007BBC" }}>
      This website uses cookies. For questions, please email&nbsp;
      <ExternalLink title="dataprivacy@gsu.edu" href="mailto:dataprivacy@gsu.edu">
        dataprivacy@gsu.edu
      </ExternalLink>
      . Find out more in our&nbsp;
      <ExternalLink title="Privacy Notices." href="https://www.gsu.edu/privacy-notices">
        Privacy Notices.
      </ExternalLink>
    </ReactCookieConsent>
  );
}

export default CookieConsent;
