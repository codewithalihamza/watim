/*
  Central place for company contact details. Update the number or email
  here once and every component (footer, floating button, forms) follows.
*/
export const WHATSAPP_NUMBER = "966554020279"; // digits only, no "+"
export const CONTACT_EMAIL = "hello@watm.com.sa";
export const PHONE_DISPLAY = "+966 55 402 0279"; // shown to visitors
export const PHONE_TEL = "+966554020279"; // tel: link, no spaces
export const LINKEDIN_URL = "https://www.linkedin.com/company/watm/";

/** wa.me chat link, optionally with a prefilled message. */
export function waHref(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
