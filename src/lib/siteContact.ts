/** Business contact — used for tel:, wa.me, and UI labels */
export const SITE_PHONE_DISPLAY = "08050922704";
/** WhatsApp / wa.me expects country code without + */
export const SITE_WHATSAPP_E164 = "2348050922704";

export function getWhatsAppUrl(prefillMessage?: string): string {
  const base = `https://wa.me/${SITE_WHATSAPP_E164}`;
  if (!prefillMessage?.trim()) return base;
  return `${base}?text=${encodeURIComponent(prefillMessage.trim())}`;
}
