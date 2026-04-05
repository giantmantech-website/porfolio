import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Video, Palette, Globe, TrendingUp, Sparkles, Users } from "lucide-react";

export function Home() {
  const services = [
    {
      icon: <Video className="w-7 h-7" />,
      title: "AI Video Production",
      desc: "High-quality AI video content for brands and campaigns",
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Graphic Design",
      desc: "Clean, modern designs that elevate your brand identity",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Web Development",
      desc: "Fast, responsive, high-performing websites",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Social Media",
      desc: "Growth-focused content and management strategies",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Content Strategy",
      desc: "Data-driven content that converts and engages",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Community Management",
      desc: "Building strong, loyal digital communities",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy text-luxury-text">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-luxury-navy-deep via-luxury-navy to-luxury-navy-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* TEXT */}
            <div className="text-center md:text-left animate-fade-in">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
                GIANTMANTECH
              </h1>

              <p className="text-lg md:text-xl text-luxury-gold mb-3 font-semibold">
                Creative Media & Digital Brand Agency
              </p>

              <p className="text-sm sm:text-base md:text-lg text-luxury-text/80 mb-8 max-w-xl mx-auto md:mx-0">
                Delivering world-class content strategy, animation, design, web
                development, social media growth, and AI-driven production across Nigeria and beyond.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-luxury-gold">
                    View Work
                  </Button>
                </Link>

                <Link to="/contact">
                  <Button size="lg" className="bg-luxury-gold text-black">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* IMAGE */}
            <div className="animate-fade-in">
              <img
                src="/images/hero-training.png"
                alt="Agency work"
                className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover rounded-2xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 border-y border-luxury-gold/20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["50+ Pages", "1000+ Projects", "100K+ Followers", "5+ Years"].map((item, i) => (
            <div key={i} className="hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-luxury-gold">{item.split(" ")[0]}</h3>
              <p className="text-sm">{item.split(" ")[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-luxury-gold">
            Our Services
          </h2>

          <p className="text-luxury-text/70 mb-12">
            Everything you need to grow your digital presence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-luxury-gold/20 hover:border-luxury-gold hover:shadow-lg transition group"
              >
                <div className="text-luxury-gold mb-4 group-hover:scale-110 transition">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-luxury-text/70">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-luxury-navy-muted text-center">
        <h2 className="text-3xl font-bold mb-6 text-luxury-gold">
          Why Choose Us
        </h2>

        <p className="max-w-2xl mx-auto text-luxury-text/80 mb-10">
          We combine creativity, strategy, and technology to help brands grow fast and stand out.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "AI Content",
            "SEO Optimized",
            "Ads Strategy",
            "Automation",
            "Monetization",
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-luxury-gold/30 rounded-full text-sm hover:bg-luxury-gold/10 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Elevate Your Brand?
        </h2>

        <p className="text-luxury-text/70 mb-8">
          Let’s create something powerful together.
        </p>

        <Link to="/contact">
          <Button size="lg" className="bg-luxury-gold text-black">
            Start Your Project
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}