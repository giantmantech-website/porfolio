import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Video, Palette, Globe, TrendingUp, Sparkles, Users, ArrowRight, CheckCircle2 } from "lucide-react";

// ─── COUNTER HOOK ───────────────────────────────────────────────────────────
function useCounter(end: number, duration = 2200, triggered = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, triggered]);
  return count;
}

// ─── FORMAT LARGE NUMBERS ───────────────────────────────────────────────────
function formatStat(n: number, target: number): string {
  if (target >= 100000) return n >= 1000 ? `${Math.floor(n / 1000)}K` : `${n}`;
  if (target >= 1000) return n.toLocaleString();
  return `${n}`;
}

// ─── SERVICES DATA ──────────────────────────────────────────────────────────
const services = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    num: "01",
    title: "Social Media Management",
    desc: "We manage and grow your social media presence with strategic content, engagement, and analytics-driven performance tailored to your audience.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    num: "02",
    title: "Web Development",
    desc: "We design and build fast, responsive, and high-converting websites tailored to your business goals and brand identity.",
  },
  {
    icon: <Video className="w-5 h-5" />,
    num: "03",
    title: "Video Editing",
    desc: "We create engaging video content using modern editing techniques and AI tools to capture attention and tell powerful visual stories.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    num: "04",
    title: "Graphic Design",
    desc: "Professional and creative designs for branding, marketing, and social media that reinforce your identity and speak to your audience.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    num: "05",
    title: "Content Strategy",
    desc: "We plan and execute content strategies that attract, engage, and convert your target audience into loyal brand advocates.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    num: "06",
    title: "Community Management",
    desc: "We build and manage strong digital communities around your brand, turning followers into advocates and engagement into results.",
  },
];

const aboutPoints = [
  "Strategic social media management and content creation",
  "Modern, high-converting web development",
  "AI-powered video editing and animation",
  "Professional graphic design and brand identity",
  "Full-scale Facebook ads and digital monetization",
  "WhatsApp automation and community management",
];

// ─── REVEAL WRAPPER ─────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── MAIN HOME COMPONENT ────────────────────────────────────────────────────
export function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [statsTriggered, setStatsTriggered] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Trigger counters when stats section is visible
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStatsTriggered(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pages     = useCounter(50,     2000, statsTriggered);
  const projects  = useCounter(1000,   2200, statsTriggered);
  const followers = useCounter(100000, 2400, statsTriggered);
  const years     = useCounter(5,      1600, statsTriggered);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#0a0f1e", color: "#f5f0e8", fontFamily: "'Syne', 'Inter', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Syne:wght@400;600;700;800&display=swap');
        .gmt-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .gmt-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          color: #c9a84c; font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase;
        }
        .gmt-eyebrow::before {
          content: ''; display: inline-block;
          width: 28px; height: 1px; background: #c9a84c;
        }
        .service-bar { transform: scaleY(0); transform-origin: bottom; transition: transform 0.3s ease; }
        .service-card-wrap:hover .service-bar,
        .service-card-active .service-bar { transform: scaleY(1); }
        .service-card-wrap { transition: background 0.25s ease; }
        .service-card-wrap:hover { background: #1a2340 !important; }
        .service-card-active { background: #1a2340 !important; }
        .service-desc-text {
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s ease, margin-top 0.3s ease;
        }
        .service-desc-open { max-height: 100px; margin-top: 10px; }
        .btn-gmt-gold {
          background: #c9a84c; color: #0a0f1e;
          padding: 0.75rem 2rem; border: none; border-radius: 2px;
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-gmt-gold:hover { background: #e8c97a; transform: translateY(-2px); }
        .btn-gmt-outline {
          background: transparent; color: #f5f0e8;
          padding: 0.75rem 2rem;
          border: 1px solid rgba(245,240,232,0.3); border-radius: 2px;
          font-family: 'Syne', sans-serif; font-weight: 600;
          font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .btn-gmt-outline:hover { border-color: #c9a84c; color: #c9a84c; transform: translateY(-2px); }
      `}</style>

      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh", display: "grid",
          gridTemplateColumns: "1fr 1fr",
          paddingTop: "80px", overflow: "hidden",
        }}
        className="max-lg:flex max-lg:flex-col"
      >
        {/* Left */}
        <div style={{ padding: "5rem 5% 5rem 7%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="gmt-eyebrow" style={{ marginBottom: "1.5rem", animationDelay: "0.2s" }}>
            Creative Media & Digital Brand Agency
          </div>

          <h1
            className="gmt-serif"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 5rem)", fontWeight: 700,
              lineHeight: 1.05, letterSpacing: "-0.01em", marginBottom: "1.2rem",
            }}
          >
            We Build Brands<br />
            That <em style={{ color: "#c9a84c" }}>Dominate</em><br />
            Digitally.
          </h1>

          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(245,240,232,0.65)", maxWidth: 430, marginBottom: "2.2rem" }}>
            From social media management to full-scale branding and AI-driven media production — we deliver results that elevate your presence and drive real impact across Africa and beyond.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/contact">
              <button className="btn-gmt-gold">
                Start Your Project <ArrowRight size={14} />
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="btn-gmt-outline">
                View Our Work
              </button>
            </Link>
          </div>
        </div>

        {/* Right – decorative image panel */}
        <div
          style={{
            position: "relative", overflow: "hidden",
            minHeight: "500px", background: "#111827",
          }}
        >
          {/* Gradient overlay */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 2,
            background: "linear-gradient(90deg, #0a0f1e 0%, transparent 35%)",
          }} />

          {/* Fallback rich gradient background (shows if image fails) */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, #111827 0%, #1a2340 50%, #0f1a30 100%)",
          }} />

          {/* African professional image */}
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=80"
            alt="African professional at work"
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center top",
              filter: "brightness(0.7) saturate(1.1)", zIndex: 1,
            }}
          />

          {/* Gold badge */}
          <div style={{
            position: "absolute", bottom: "2.5rem", left: "2rem", zIndex: 3,
            background: "#c9a84c", color: "#0a0f1e",
            padding: "1rem 1.4rem", borderRadius: "2px",
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
            lineHeight: 1.4,
          }}>
            <span style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 700, letterSpacing: 0 }}>5+</span>
            Years of Excellence
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section
        ref={statsRef}
        style={{
          padding: "3.5rem 7%",
          borderTop: "0.5px solid rgba(201,168,76,0.25)",
          borderBottom: "0.5px solid rgba(201,168,76,0.25)",
          background: "#111827",
        }}
      >
        <div
          style={{
            display: "grid", gridTemplateColumns: "repeat(4,1fr)",
            gap: "1rem", maxWidth: 1100, margin: "0 auto", textAlign: "center",
          }}
          className="max-md:grid-cols-2"
        >
          {[
            { val: pages,     target: 50,     label: "Pages Managed" },
            { val: projects,  target: 1000,   label: "Projects Completed" },
            { val: followers, target: 100000, label: "Audience Reach" },
            { val: years,     target: 5,      label: "Years Experience" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ padding: "1.5rem 1rem" }}>
                <div
                  className="gmt-serif"
                  style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#c9a84c", lineHeight: 1 }}
                >
                  {formatStat(s.val, s.target)}+
                </div>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(245,240,232,0.55)", marginTop: "0.5rem" }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 7%" }}>
        <Reveal>
          <span className="gmt-eyebrow" style={{ marginBottom: "1rem", display: "inline-flex" }}>What We Do</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="gmt-serif" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "0.8rem" }}>
            Our Core Services
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem", marginBottom: "3rem", maxWidth: 480 }}>
            Click any service card to learn more about how we can elevate your brand.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div
            style={{
              display: "grid", gridTemplateColumns: "repeat(3,1fr)",
              gap: "1.5px", background: "rgba(201,168,76,0.2)",
              border: "0.5px solid rgba(201,168,76,0.2)",
              borderRadius: "4px", overflow: "hidden", maxWidth: 1100,
            }}
            className="max-lg:grid-cols-2 max-sm:grid-cols-1"
          >
            {services.map((svc, i) => (
              <div
                key={i}
                onClick={() => setActiveService(activeService === i ? null : i)}
                className={`service-card-wrap ${activeService === i ? "service-card-active" : ""}`}
                style={{
                  background: "#111827", padding: "2rem 1.8rem",
                  cursor: "pointer", position: "relative", overflow: "hidden",
                }}
              >
                {/* Animated left bar */}
                <div
                  className="service-bar"
                  style={{
                    position: "absolute", left: 0, top: 0,
                    width: "3px", height: "100%", background: "#c9a84c",
                  }}
                />

                {/* Background number */}
                <div
                  className="gmt-serif"
                  style={{
                    position: "absolute", top: "1.2rem", right: "1.2rem",
                    fontSize: "3rem", fontWeight: 700,
                    color: "rgba(201,168,76,0.07)", lineHeight: 1, userSelect: "none",
                  }}
                >
                  {svc.num}
                </div>

                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.1rem", color: "#c9a84c",
                  transition: "background 0.25s, border-color 0.25s",
                  background: activeService === i ? "rgba(201,168,76,0.12)" : "transparent",
                }}>
                  {svc.icon}
                </div>

                <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.3rem" }}>
                  {svc.title}
                </div>

                <div
                  className={`service-desc-text ${activeService === i ? "service-desc-open" : ""}`}
                  style={{ fontSize: "0.83rem", lineHeight: 1.75, color: "rgba(245,240,232,0.6)" }}
                >
                  {svc.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── ABOUT SPLIT ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: "6rem 7%", background: "#111827",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "5rem", alignItems: "center",
        }}
        className="max-lg:flex max-lg:flex-col max-lg:gap-12"
      >
        {/* Image side */}
        <Reveal className="relative">
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", height: 460,
              background: "linear-gradient(135deg, #1a2340, #0f1a30)",
              borderRadius: "2px", overflow: "hidden", position: "relative",
            }}>
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=900&auto=format&fit=crop&q=80"
                alt="African team collaborating"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center",
                  filter: "brightness(0.75) saturate(1.1)",
                }}
              />
            </div>
            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
              background: "#c9a84c", color: "#0a0f1e",
              padding: "1.2rem 1.5rem", borderRadius: "2px",
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.5,
            }}>
              <span style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, letterSpacing: 0 }}>100K+</span>
              Audience Reach<br />Across Platforms
            </div>
          </div>
        </Reveal>

        {/* Text side */}
        <div>
          <Reveal>
            <span className="gmt-eyebrow" style={{ marginBottom: "1rem", display: "inline-flex" }}>Who We Are</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="gmt-serif" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem" }}>
              Built for African<br />Business Growth
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              GiantmanTech is a creative media and digital brand agency helping businesses grow through powerful digital strategies, high-quality content, and AI-driven media production.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {aboutPoints.map((pt, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.7rem", fontSize: "0.88rem", color: "rgba(245,240,232,0.65)" }}>
                  <CheckCircle2 size={15} style={{ color: "#c9a84c", flexShrink: 0 }} />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "7rem 7%", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Subtle radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }} />

        <Reveal>
          <div style={{ width: 60, height: 1, background: "#c9a84c", margin: "0 auto 2rem" }} />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="gmt-serif" style={{ fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem" }}>
            Ready to Grow<br />Your Brand?
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.95rem", maxWidth: 460, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            Let's help you scale your digital presence and achieve real results that move your business forward.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Link to="/contact">
            <button className="btn-gmt-gold" style={{ fontSize: "0.85rem", padding: "0.9rem 2.5rem" }}>
              Start Your Project <ArrowRight size={15} />
            </button>
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}