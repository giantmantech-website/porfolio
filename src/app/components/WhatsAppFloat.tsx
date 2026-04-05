import { getWhatsAppUrl } from "@/lib/siteContact";
import { WhatsAppIcon } from "./WhatsAppIcon";

const defaultMessage =
  "Hello GIANTMANTECH, I would like to know more about your services.";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
