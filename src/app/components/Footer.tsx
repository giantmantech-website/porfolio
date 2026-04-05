import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/siteContact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-luxury-navy-deep border-t border-luxury-gold/25 text-luxury-text py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-luxury-gold mb-4">GIANTMANTECH</h3>
            <p className="text-luxury-text/80 text-sm mb-4">
              Creative Media & Digital Brand Agency delivering world-class content strategy,
              animation, graphic design, and AI-driven production.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-luxury-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-luxury-text/80 hover:text-luxury-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-luxury-text/80 hover:text-luxury-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-luxury-text/80 hover:text-luxury-gold transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-luxury-text/80 hover:text-luxury-gold transition-colors"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-luxury-gold">Services</h4>
            <ul className="space-y-2 text-sm text-luxury-text/80">
              <li>Social Media Management</li>
              <li>AI Video Production</li>
              <li>Graphic Design</li>
              <li>Web Development</li>
              <li>Content Strategy</li>
              <li>Facebook Monetization</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-luxury-gold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-luxury-text/80">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-luxury-gold" />
                <span>EDE, OSUN STATE</span>
              </li>
              <li className="flex items-center gap-2 text-luxury-text/80">
                <Mail size={16} className="flex-shrink-0 text-luxury-gold" />
                <a
                  href="mailto:giantmantech@gmail.com"
                  className="hover:text-luxury-gold transition-colors"
                >
                  giantmantech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-luxury-text/80">
                <Phone size={16} className="flex-shrink-0 text-luxury-gold" />
                <a href="tel:08050922704" className="hover:text-luxury-gold transition-colors">
                  08050922704
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-text/80 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-luxury-text/80 hover:text-luxury-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-luxury-text/80 hover:text-luxury-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-luxury-text/80 hover:text-luxury-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-gold/20 pt-8 text-center text-sm text-luxury-text/70">
          <p>© 2026 GIANTMANTECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
