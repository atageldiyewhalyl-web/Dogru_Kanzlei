import { useState, useEffect } from "react";

export type ConsentState = {
  essential: true;          // always true, no choice
  functional: boolean;      // Calendly, WhatsApp tracking
  analytics: boolean;       // future analytics (Google Analytics, etc.)
};

type ConsentStatus = "pending" | "accepted" | "rejected" | "custom";

const CONSENT_KEY = "dogru_kanzlei_consent";
const CONSENT_VERSION = "1"; // bump this to re-ask on policy changes

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
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
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
