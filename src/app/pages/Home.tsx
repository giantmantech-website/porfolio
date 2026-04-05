import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Video, Palette, Globe, TrendingUp, Sparkles, Users } from "lucide-react";

export function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);

  // COUNTER ANIMATION
  const useCounter = (end: number, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  };

  const pages = useCounter(50);
  const projects = useCounter(1000);
  const followers = useCounter(100000);
  const years = useCounter(5);

  const services = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Social Media Management",
      desc: "We manage and grow your social media presence with strategic content, engagement, and analytics-driven performance.",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Web Development",
      desc: "We design and build fast, responsive, and high-converting websites tailored to your business goals.",
    },
    {
      icon: <Video className="w-7 h-7" />,
      title: "Video Editing",
      desc: "We create engaging video content using modern editing techniques and AI tools to capture attention.",
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Graphic Design",
      desc: "Professional and creative designs for branding, marketing, and social media.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Content Strategy",
      desc: "We plan and execute content that attracts, engages, and converts your audience.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Community Management",
      desc: "We build and manage strong digital communities around your brand.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy text-luxury-text">
      <Navigation />

      {/* HERO */}
      <section className="pt-24 pb-20 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
          GIANTMANTECH
        </h1>

        <p className="text-lg text-luxury-gold mb-4">
          Creative Media & Digital Brand Agency
        </p>

        <p className="max-w-2xl mx-auto text-luxury-text/80 mb-8">
          We help businesses grow through powerful digital strategies, high-quality content,
          modern web development, and AI-driven media production. From social media management
          to full-scale branding, we deliver results that elevate your presence and drive impact.
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/portfolio">
            <Button variant="outline">View Work</Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-luxury-gold text-black">Get Started</Button>
          </Link>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-12 border-y border-luxury-gold/20">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center max-w-6xl mx-auto gap-6">
          <div>
            <h3 className="text-3xl font-bold text-luxury-gold">{pages}+</h3>
            <p>Pages Managed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-luxury-gold">{projects}+</h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-luxury-gold">{followers}+</h3>
            <p>Audience Reach</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-luxury-gold">{years}+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-luxury-gold">
            Our Services
          </h2>
          <p className="text-luxury-text/70">
            Click a service to learn more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveService(activeService === index ? null : index)}
              className="p-6 border border-luxury-gold/20 rounded-xl cursor-pointer hover:border-luxury-gold transition"
            >
              <div className="text-luxury-gold mb-3">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              {activeService === index && (
                <p className="text-sm text-luxury-text/70 mt-2">
                  {service.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Brand?
        </h2>

        <p className="text-luxury-text/70 mb-6">
          Let’s help you scale your digital presence and achieve real results.
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