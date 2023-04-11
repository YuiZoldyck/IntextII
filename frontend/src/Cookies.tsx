import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./Cookies.css";

export function CookieConsentBanner() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    Cookies.set("gdpr_cookie", "true", { expires: 365 });
    setAccepted(true);
  };

  if (accepted) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <span>
        This site uses cookies to enhance user experience. See
        <a href="/privacy" className="ml-1 text-decoration-none">
          {" "}
          Privacy Policy
        </a>
      </span>
      <div className="mt-2 d-flex align-items-center justify-content-center g-2">
        <button className="allow-button mr-1" onClick={handleAccept}>
          Allow Cookies
        </button>
        <button className="allow-button">Cancel</button>
      </div>
    </div>
  );
}

const api = axios.create({
  baseURL: "http://your-api.com",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    Authorization: `Bearer ${Cookies.get("gdpr_cookie")}`,
  },
});

export default api;
