const DEFAULT_CALENDLY_URL = (
  ((import.meta as any).env?.VITE_CALENDLY_APPOINTMENT_URL || "") ||
  ((import.meta as any).env?.VITE_CALENDLY_VEKALETNAME_URL || "")
) as string;
const DEFAULT_STRIPE_URL = ((import.meta as any).env?.VITE_STRIPE_APPOINTMENT_PAYMENT_URL || "") as string;
const BOOKING_ENABLED = ((import.meta as any).env?.VITE_ENABLE_APPOINTMENT_BOOKING || "") === "true";

type BookingTarget = "stripe" | "calendly" | "contact";

export function getBookingUrl(target: BookingTarget = "stripe") {
  const stripeUrl = DEFAULT_STRIPE_URL.trim();
  const calendlyUrl = DEFAULT_CALENDLY_URL.trim();

  if (target === "stripe" && stripeUrl) return stripeUrl;
  if (calendlyUrl) return calendlyUrl;
  return "#iletisim";
}

export function hasStripeBooking() {
  return BOOKING_ENABLED && Boolean(DEFAULT_STRIPE_URL.trim());
}

export function hasCalendlyBooking() {
  return BOOKING_ENABLED && Boolean(DEFAULT_CALENDLY_URL.trim());
}

export function isAppointmentBookingEnabled() {
  return BOOKING_ENABLED;
}

export function trackBookingClick(target: BookingTarget, placement: string) {
  const payload = {
    event: "appointment_booking_click",
    event_category: "lead",
    event_action: `open_${target}_booking`,
    event_label: placement,
    booking_target: target,
    booking_placement: placement,
    page_location: window.location.href,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", "appointment_booking_click", payload);
  }
}
