import { useState, useEffect } from "react";

export type ConsentState = {
  essential: true;          // always true, no choice
  functional: boolean;      // External contact widgets and embeds
  analytics: boolean;       // future analytics (Google Analytics, etc.)
};

type ConsentStatus = "pending" | "accepted" | "rejected" | "custom";

const CONSENT_KEY = "dogru_kanzlei_consent";
const CONSENT_VERSION = "1"; // bump this to re-ask on policy changes

type Gtag = (...args: unknown[]) => void;

// Mirror the visitor's choice into Google Consent Mode. index.html sets every
// signal to "denied" before GTM loads; nothing is allowed to fire until this
// update runs (§ 25 TDDDG). Without it the banner would be purely decorative.
// We go through the `gtag` shim defined in index.html because Consent Mode
// expects the raw `arguments` object on the dataLayer, not a plain array.
function pushConsentToGtm(consent: ConsentState) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== "function") return;

  const value = (granted: boolean) => (granted ? "granted" : "denied");
  gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: value(consent.analytics),
    functionality_storage: value(consent.functional),
    personalization_storage: value(consent.functional),
    security_storage: "granted",
  });
}

export function useCookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>("pending");
  const [consent, setConsent] = useState<ConsentState>({
    essential: true,
    functional: false,
    analytics: false,
  });
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.version === CONSENT_VERSION) {
          setConsent(parsed.consent);
          setStatus(parsed.status);
          setShowBanner(false);
          return;
        }
      }
    } catch {}
    // No stored consent or outdated version
    setShowBanner(true);
  }, []);

  const save = (newConsent: ConsentState, newStatus: ConsentStatus) => {
    const data = { version: CONSENT_VERSION, consent: newConsent, status: newStatus };
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
    } catch {}
    pushConsentToGtm(newConsent);
    setConsent(newConsent);
    setStatus(newStatus);
    setShowBanner(false);
  };

  const acceptAll = () => {
    save({ essential: true, functional: true, analytics: true }, "accepted");
  };

  const rejectAll = () => {
    save({ essential: true, functional: false, analytics: false }, "rejected");
  };

  const saveCustom = (functional: boolean, analytics: boolean) => {
    save({ essential: true, functional, analytics }, "custom");
  };

  const openSettings = () => {
    setShowBanner(true);
  };

  return {
    showBanner,
    status,
    consent,
    acceptAll,
    rejectAll,
    saveCustom,
    openSettings,
  };
}
