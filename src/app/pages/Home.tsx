import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Video, Palette, Globe, TrendingUp, Sparkles, Users, ArrowRight, CheckCircle2 } from "lucide-react";

// ─── COUNTER HOOK ────────────────────────────────────────────────────────────
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

function formatStat(n: number, target: number): string {
  if (target >= 100000) return n >= 1000 ? `${Math.floor(n / 1000)}K` : `${n}`;
  if (target >= 1000) return n.toLocaleString();
  return `${n}`;
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
const services = [
  { icon: <TrendingUp className="w-5 h-5" />, num: "01", title: "Social Media Management", desc: "We manage and grow your social media presence with strategic content, engagement, and analytics-driven performance tailored to your audience." },
  { icon: <Globe className="w-5 h-5" />, num: "02", title: "Web Development", desc: "We design and build fast, responsive, and high-converting websites tailored to your business goals and brand identity." },
  { icon: <Video className="w-5 h-5" />, num: "03", title: "Video Editing", desc: "We create engaging video content using modern editing techniques and AI tools to capture attention and tell powerful visual stories." },
  { icon: <Palette className="w-5 h-5" />, num: "04", title: "Graphic Design", desc: "Professional and creative designs for branding, marketing, and social media that reinforce your identity and speak to your audience." },
  { icon: <Sparkles className="w-5 h-5" />, num: "05", title: "Content Strategy", desc: "We plan and execute content strategies that attract, engage, and convert your target audience into loyal brand advocates." },
  { icon: <Users className="w-5 h-5" />, num: "06", title: "Community Management", desc: "We build and manage strong digital communities around your brand, turning followers into advocates and engagement into results." },
];

const aboutPoints = [
  "Strategic social media management and content creation",
  "Modern, high-converting web development",
  "AI-powered video editing and animation",
  "Professional graphic design and brand identity",
  "Full-scale Facebook ads and digital monetization",
  "WhatsApp automation and community management",
];

// ─── REVEAL ──────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, style = {}, className = "" }: {
  children: React.ReactNode; delay?: number; style?: React.CSSProperties; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── HOME ────────────────────────────────────────────────────────────────────
export function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [statsTriggered, setStatsTriggered] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsTriggered(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pages     = useCounter(50,     2000, statsTriggered);
  const projects  = useCounter(1000,   2200, statsTriggered);
  const followers = useCounter(100000, 2400, statsTriggered);
  const years     = useCounter(5,      1600, statsTriggered);

  return (
    <div style={{ background: "#0a0f1e", color: "#f5f0e8", fontFamily: "'Syne','Inter',sans-serif", overflowX: "hidden", minHeight: "100vh" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Syne:wght@400;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .gmt-serif { font-family: 'Cormorant Garamond', Georgia, serif; }

        .gmt-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          color: #c9a84c; font-size: 0.7rem; letter-spacing: 0.22em;
          text-transform: uppercase; margin-bottom: 1rem;
        }
        .gmt-eyebrow::before { content:''; width:28px; height:1px; background:#c9a84c; }

        .btn-gold {
          background: #c9a84c; color: #0a0f1e; border: none;
          padding: 0.8rem 1.8rem; border-radius: 2px;
          font-family: 'Syne',sans-serif; font-weight: 700;
          font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: background 0.2s, transform 0.15s; text-decoration: none; white-space: nowrap;
        }
        .btn-gold:hover { background: #e8c97a; transform: translateY(-2px); }

        .btn-outline {
          background: transparent; color: #f5f0e8;
          padding: 0.8rem 1.8rem;
          border: 1px solid rgba(245,240,232,0.3); border-radius: 2px;
          font-family: 'Syne',sans-serif; font-weight: 600;
          font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: border-color 0.2s, color 0.2s, transform 0.15s; text-decoration: none; white-space: nowrap;
        }
        .btn-outline:hover { border-color: #c9a84c; color: #c9a84c; transform: translateY(-2px); }

        /* ─ Hero ─ */
        .hero-wrap {
          display: flex; flex-direction: column;
          min-height: 100vh; padding-top: 70px;
        }
        .hero-text {
          padding: 3rem 5% 2.5rem;
          display: flex; flex-direction: column; justify-content: center;
        }
        .hero-img-panel {
          width: 100%; height: 280px;
          position: relative; overflow: hidden; background: #111827; flex-shrink: 0;
        }
        @media (min-width: 860px) {
          .hero-wrap { flex-direction: row; align-items: stretch; }
          .hero-text { flex: 1; padding: 4rem 4% 4rem 7%; max-width: 55%; }
          .hero-img-panel { width: 45%; height: auto; min-height: 520px; }
        }

        /* ─ Stats ─ */
        .stats-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          max-width: 1100px; margin: 0 auto; text-align: center;
        }
        @media (min-width: 700px) { .stats-grid { grid-template-columns: repeat(4,1fr); } }

        /* ─ Services ─ */
        .svc-grid {
          display: grid; grid-template-columns: 1fr;
          gap: 1.5px; background: rgba(201,168,76,0.2);
          border: 0.5px solid rgba(201,168,76,0.2);
          border-radius: 4px; overflow: hidden; max-width: 1100px;
        }
        @media (min-width: 560px) { .svc-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .svc-grid { grid-template-columns: repeat(3,1fr); } }

        .svc-card {
          background: #111827; padding: 1.8rem 1.6rem;
          cursor: pointer; position: relative; overflow: hidden;
          transition: background 0.25s;
        }
        .svc-card:hover, .svc-card.active { background: #1a2340; }
        .svc-bar {
          position: absolute; left:0; top:0; width:3px; height:100%;
          background: #c9a84c; transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.3s ease;
        }
        .svc-card:hover .svc-bar, .svc-card.active .svc-bar { transform: scaleY(1); }
        .svc-desc {
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s ease, margin-top 0.3s;
          font-size: 0.83rem; line-height: 1.75; color: rgba(245,240,232,0.6);
        }
        .svc-desc.open { max-height: 130px; margin-top: 10px; }

        /* ─ About ─ */
        .about-wrap {
          padding: 4rem 5%; background: #111827;
          display: flex; flex-direction: column; gap: 3rem;
        }
        @media (min-width: 860px) {
          .about-wrap { flex-direction: row; padding: 6rem 7%; gap: 5rem; align-items: center; }
          .about-img-col, .about-text-col { flex: 1; }
        }

        /* ─ Section padding ─ */
        .sec-pad { padding: 4rem 5%; }
        @media (min-width: 860px) { .sec-pad { padding: 6rem 7%; } }
      `}</style>

      <Navigation />

      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section className="hero-wrap">

        {/* Text */}
        <div className="hero-text">
          <div className="gmt-eyebrow">Creative Media & Digital Brand Agency</div>

          <h1
            className="gmt-serif"
            style={{ fontSize: "clamp(2.4rem,6vw,5rem)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.01em", marginBottom: "1.2rem" }}
          >
            We Build Brands<br />
            That <em style={{ color: "#c9a84c" }}>Dominate</em><br />
            Digitally.
          </h1>

          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(245,240,232,0.65)", marginBottom: "2rem", maxWidth: 460 }}>
            From social media management to full-scale branding and AI-driven media production — we deliver results that elevate your presence and drive real impact across Africa and beyond.
          </p>

          <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn-gold">
              Start Your Project <ArrowRight size={14} />
            </Link>
            <Link to="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Image 1 — Social media / digital screens */}
        <div className="hero-img-panel">
          {/* Gradient fade left/top */}
          <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(180deg,#0a0f1e 0%,transparent 30%)" }} className="mob-fade" />
          <style>{`.mob-fade { background: linear-gradient(180deg,#0a0f1e 0%,transparent 30%) !important; } @media(min-width:860px){.mob-fade{background:linear-gradient(90deg,#0a0f1e 0%,transparent 40%) !important;}}`}</style>

          {/* Dark base */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0d1a35,#1a2e50,#0a1628)", zIndex: 0 }} />

          {/* Social media / tech image — no people */}
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1000&auto=format&fit=crop&q=80"
            alt="Social media and digital technology screens"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.6) saturate(1.2)", zIndex: 1 }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />

          {/* Gold badge */}
          <div style={{
            position: "absolute", bottom: "1.5rem", right: "1.5rem", zIndex: 3,
            background: "#c9a84c", color: "#0a0f1e", padding: "0.8rem 1.1rem",
            borderRadius: "2px", fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1.5,
          }}>
            <span style={{ display: "block", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 700, letterSpacing: 0 }}>5+</span>
            Years of Excellence
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════════════ */}
      <section
        ref={statsRef}
        style={{ padding: "2.5rem 5%", borderTop: "0.5px solid rgba(201,168,76,0.25)", borderBottom: "0.5px solid rgba(201,168,76,0.25)", background: "#111827" }}
      >
        <div className="stats-grid">
          {[
            { val: pages,     target: 50,     label: "Pages Managed" },
            { val: projects,  target: 1000,   label: "Projects Completed" },
            { val: followers, target: 100000, label: "Audience Reach" },
            { val: years,     target: 5,      label: "Years Experience" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ padding: "1.2rem 0.5rem", borderRight: i % 2 === 0 ? "0.5px solid rgba(201,168,76,0.15)" : "none" }}>
                <div className="gmt-serif" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: 700, color: "#c9a84c", lineHeight: 1 }}>
                  {formatStat(s.val, s.target)}+
                </div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)", marginTop: "0.4rem" }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ SERVICES ═══════════════════════════════════════════════ */}
      <section className="sec-pad">
        <Reveal><span className="gmt-eyebrow">What We Do</span></Reveal>
        <Reveal delay={80}>
          <h2 className="gmt-serif" style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "0.8rem" }}>
            Our Core Services
          </h2>
        </Reveal>
        <Reveal delay={130}>
          <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.88rem", marginBottom: "2.5rem", maxWidth: 480 }}>
            Tap any service to learn more about how we can elevate your brand.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="svc-grid">
            {services.map((svc, i) => (
              <div
                key={i}
                onClick={() => setActiveService(activeService === i ? null : i)}
                className={`svc-card ${activeService === i ? "active" : ""}`}
              >
                <div className="svc-bar" />
                <div className="gmt-serif" style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: "2.6rem", fontWeight: 700, color: "rgba(201,168,76,0.07)", lineHeight: 1, userSelect: "none" }}>
                  {svc.num}
                </div>
                <div style={{ width: 42, height: 42, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", color: "#c9a84c", background: activeService === i ? "rgba(201,168,76,0.12)" : "transparent", transition: "background 0.25s" }}>
                  {svc.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.2rem" }}>{svc.title}</div>
                <div className={`svc-desc ${activeService === i ? "open" : ""}`}>{svc.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══ ABOUT ══════════════════════════════════════════════════ */}
      <section className="about-wrap">

        {/* Image 2 — World map / global network */}
        <Reveal className="about-img-col">
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", height: 360, background: "#1a2340", borderRadius: "2px", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0d1a35,#1e3060,#0a1a40)", zIndex: 0 }} />
              {/* World map / globe network image — no people */}
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop&q=80"
                alt="World map global digital network"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.55) saturate(1.4) hue-rotate(10deg)", zIndex: 1 }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(201,168,76,0.04)", zIndex: 2 }} />
            </div>
            {/* Floating badge */}
            <div style={{ position: "absolute", bottom: "-1.2rem", right: 0, background: "#c9a84c", color: "#0a0f1e", padding: "1rem 1.2rem", borderRadius: "2px", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.5, zIndex: 10 }}>
              <span style={{ display: "block", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.9rem", fontWeight: 700, letterSpacing: 0 }}>100K+</span>
              Audience Reach<br />Across Platforms
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div className="about-text-col" style={{ paddingTop: "1rem" }}>
          <Reveal><span className="gmt-eyebrow">Who We Are</span></Reveal>
          <Reveal delay={100}>
            <h2 className="gmt-serif" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem" }}>
              Built for African<br />Business Growth
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "1.8rem" }}>
              GiantmanTech is a creative media and digital brand agency helping businesses grow through powerful digital strategies, high-quality content, and AI-driven media production.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {aboutPoints.map((pt, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.7rem", fontSize: "0.87rem", color: "rgba(245,240,232,0.65)" }}>
                  <CheckCircle2 size={15} style={{ color: "#c9a84c", flexShrink: 0, marginTop: "2px" }} />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════════ */}
      <section className="sec-pad" style={{ textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
        <Reveal>
          <div style={{ width: 50, height: 1, background: "#c9a84c", margin: "0 auto 2rem" }} />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="gmt-serif" style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem" }}>
            Ready to Grow<br />Your Brand?
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.95rem", maxWidth: 430, margin: "0 auto 2.2rem", lineHeight: 1.8 }}>
            Let's help you scale your digital presence and achieve real results that move your business forward.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Link to="/contact" className="btn-gold" style={{ fontSize: "0.85rem", padding: "0.9rem 2.2rem" }}>
            Start Your Project <ArrowRight size={15} />
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}