import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Sparkles,
  Video,
  Palette,
  Globe,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export function Home() {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "AI Video Production",
      description: "High-quality video content using Hypernatural AI and Veo 3",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Professional designs for brands, social media, and marketing",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and digital platforms built to perform",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media Management",
      description: "50+ active pages managed with strategic content planning",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Content Strategy",
      description: "Data-driven content that engages and converts",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Management",
      description: "Building engaged communities across all platforms",
    },
  ];

  const stats = [
    { number: "50+", label: "Active Social Pages" },
    { number: "1000+", label: "Projects Completed" },
    { number: "100K+", label: "Followers Managed" },
    { number: "5+", label: "Years Experience" },
  ];

  const features = [
    "AI-powered content creation",
    "Facebook & YouTube monetization",
    "WhatsApp automation",
    "Targeted advertising campaigns",
    "SEO optimization",
    "Brand strategy development",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy">
      <Navigation />

      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-luxury-navy-deep via-luxury-navy to-luxury-navy-muted">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.12),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-luxury-text drop-shadow-lg">
                GIANTMANTECH
              </h1>
              <p className="text-xl text-luxury-gold mb-4 font-semibold">
                Creative Media & Digital Brand Agency
              </p>
              <p className="text-lg text-luxury-text/85 mb-8">
                Delivering world-class content strategy, animation, graphic design, web
                development, social media management, and AI-driven video production across
                Nigeria and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-luxury-gold text-luxury-text bg-transparent hover:bg-luxury-gold/10 font-semibold"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" className="bg-luxury-gold text-luxury-navy hover:bg-[#e5c158] font-semibold shadow-lg shadow-black/30">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden ring-2 ring-luxury-gold/50 shadow-2xl shadow-black/40">
              <ImageWithFallback
                src="/images/hero-training.png"
                alt="GIANTMANTECH training and web development program"
                className="w-full h-full min-h-[280px] md:min-h-[360px] object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-luxury-navy-deep/90 via-luxury-navy/35 to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-luxury-gold/20 bg-gradient-to-r from-luxury-navy-deep via-luxury-navy-lift to-luxury-navy-deep text-luxury-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2 text-luxury-gold">{stat.number}</div>
                <div className="text-luxury-text/85 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-luxury-gold">Our Services</h2>
            <p className="text-xl text-luxury-text/80 max-w-2xl mx-auto">
              Full-service digital solutions tailored to elevate your brand
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-luxury-gold/20 rounded-xl bg-luxury-navy-lift/50 hover:border-luxury-gold/45 hover:shadow-lg hover:shadow-black/20 transition-all group"
              >
                <div className="text-luxury-gold mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-luxury-text">{service.title}</h3>
                <p className="text-luxury-text/75">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-luxury-gold text-luxury-text hover:bg-luxury-gold/10"
              >
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-luxury-navy-muted border-t border-luxury-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-luxury-gold">
                Why Choose GIANTMANTECH?
              </h2>
              <p className="text-lg text-luxury-text/80 mb-8">
                We blend creativity with cutting-edge technology to deliver exceptional
                results for our clients. Our team manages over 50 active platforms with
                distinct strategies tailored to each audience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                    <span className="text-luxury-text/85">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden ring-2 ring-luxury-gold/40 shadow-xl">
              <ImageWithFallback
                src="/images/why-choose-giantmantech.png"
                alt="Social media platforms and multi-channel digital presence"
                className="w-full min-h-[320px] object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-luxury-navy-deep/45 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-luxury-navy-deep via-luxury-navy to-luxury-navy-deep border-t border-luxury-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-luxury-text">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-luxury-text/80">
            Let&apos;s create something amazing together. Contact us to discuss your project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-luxury-gold text-luxury-navy hover:bg-[#e5c158] font-semibold">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
