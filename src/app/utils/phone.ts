export const OFFICE_PHONE = "+4917661221210";
export const OFFICE_PHONE_DISPLAY = "+49 176 61221210";

/** Pushes a phone_click event so calls started from the site can be counted (GA4/GTM). */
export function trackPhoneClick(placement: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "phone_click", phone_placement: placement, page_path: window.location.pathname });
}
