import { createContext, useContext, ReactNode } from "react";
import { useCookieConsent, ConsentState } from "../hooks/useCookieConsent";

type ConsentContextType = {
  showBanner: boolean;
  consent: ConsentState;
  acceptAll: () => void;
  rejectAll: () => void;
  saveCustom: (functional: boolean, analytics: boolean) => void;
  openSettings: () => void;
};

const ConsentContext = createContext<ConsentContextType | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const consent = useCookieConsent();
  return (
    <ConsentContext.Provider value={consent}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
