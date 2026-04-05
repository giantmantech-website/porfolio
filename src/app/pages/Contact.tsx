import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { getWhatsAppUrl, SITE_PHONE_DISPLAY } from "@/lib/siteContact";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(false);
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      service: formData.service.trim() || null,
      message: formData.message.trim(),
    });
    setSubmitting(false);
    if (error) {
      setFormError(error.message || "Something went wrong. Please try again.");
      return;
    }
    setFormSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "Content Strategy",
    "AI Video Production",
    "Graphic Design",
    "Web Development",
    "Social Media Management",
    "Facebook Ads",
    "Photography",
    "Other",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy">
      <Navigation />

      <section className="pt-24 pb-16 bg-luxury-navy-deep border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 text-center text-luxury-gold">Contact Us</h1>
          <p className="text-xl text-luxury-text/85 text-center max-w-3xl mx-auto">
            Ready to start your project? Get in touch with us today and let&apos;s create something
            amazing together.
          </p>
        </div>
      </section>

      <section className="py-16 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-luxury-gold">Get in Touch</h2>
              <p className="text-luxury-text/85 mb-8">
                We&apos;re here to help bring your vision to life. Whether you need a complete
                digital strategy or specific services, our team is ready to discuss your
                project.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="border-luxury-gold/20 bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-luxury-gold/15 border border-luxury-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-luxury-text">Location</h3>
                        <p className="text-luxury-text/75">EDE, OSUN STATE</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20 bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-luxury-gold/15 border border-luxury-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-luxury-text">Email</h3>
                        <a
                          href="mailto:giantmantech@gmail.com"
                          className="text-luxury-gold hover:underline"
                        >
                          giantmantech@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20 bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-luxury-gold/15 border border-luxury-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-luxury-text">Phone</h3>
                        <a href={`tel:${SITE_PHONE_DISPLAY.replace(/\s/g, "")}`} className="text-luxury-gold hover:underline">
                          {SITE_PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20 bg-card border-[#25D366]/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#25D366]/20 border border-[#25D366]/40 rounded-full flex items-center justify-center flex-shrink-0">
                        <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-luxury-text">WhatsApp</h3>
                        <p className="text-luxury-text/75 text-sm mb-2">
                          Message us for a quick response.
                        </p>
                        <a
                          href={getWhatsAppUrl(
                            `Hello GIANTMANTECH, I'm reaching out from your website regarding: `,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#25D366] font-medium hover:underline"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                          Open WhatsApp chat
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-luxury-text">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#25D366]/15 border border-[#25D366]/35 rounded-full flex items-center justify-center hover:bg-[#25D366]/25 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-luxury-gold/15 border border-luxury-gold/30 rounded-full flex items-center justify-center hover:bg-luxury-gold/25 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-luxury-gold" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-luxury-gold/15 border border-luxury-gold/30 rounded-full flex items-center justify-center hover:bg-luxury-gold/25 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-luxury-gold" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-luxury-gold/15 border border-luxury-gold/30 rounded-full flex items-center justify-center hover:bg-luxury-gold/25 transition-colors"
                  >
                    <Youtube className="w-6 h-6 text-luxury-gold" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-luxury-gold/20 bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-luxury-text">Send Us a Message</CardTitle>
                  <CardDescription className="text-luxury-text/70">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formSuccess && (
                      <p className="rounded-md border border-luxury-gold/40 bg-luxury-gold/10 px-3 py-2 text-sm text-luxury-text">
                        Thank you for your message! We&apos;ll get back to you soon.
                      </p>
                    )}
                    {formError && (
                      <p className="rounded-md border border-red-500/50 bg-red-950/40 px-3 py-2 text-sm text-red-200">
                        {formError}
                      </p>
                    )}
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 XXX XXX XXXX"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full mt-1 px-3 py-2 rounded-md border border-luxury-gold/25 bg-input-background text-luxury-text focus:outline-none focus:ring-2 focus:ring-luxury-gold/50"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-luxury-gold text-luxury-navy hover:bg-[#e5c158] font-semibold disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-navy-muted border-t border-luxury-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-luxury-gold">
            Why Choose GIANTMANTECH?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/20 border border-luxury-gold/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-luxury-text">Fast Turnaround</h3>
              <p className="text-luxury-text/75">
                We deliver quality work on time, every time, ensuring your projects stay on
                schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/20 border border-luxury-gold/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-luxury-text">Proven Experience</h3>
              <p className="text-luxury-text/75">
                Managing 50+ active platforms with demonstrated success across multiple
                industries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/20 border border-luxury-gold/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-luxury-text">Results-Driven</h3>
              <p className="text-luxury-text/75">
                We focus on delivering measurable results that impact your bottom line and
                achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
