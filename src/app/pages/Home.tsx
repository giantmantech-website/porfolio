import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  Video, Palette, Globe, TrendingUp,
  Sparkles, Users, ArrowRight, CheckCircle2,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   COUNTER HOOK
───────────────────────────────────────────────────────────────────────────── */
function useCounter(end: number, duration = 2200, triggered = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = end / (duration / 16);
    const t = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(t);
  }, [end, duration, triggered]);
  return count;
}

function fmt(n: number, target: number) {
  if (target >= 100000) return n >= 1000 ? `${Math.floor(n / 1000)}K` : `${n}`;
  if (target >= 1000)   return n.toLocaleString();
  return `${n}`;
}

/* ─────────────────────────────────────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────────────────────────────────────── */
function Reveal({
  children, delay = 0, style = {}, className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 },
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
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */
const SERVICES = [
  { icon: <TrendingUp size={20} />, num: "01", title: "Social Media Management",  desc: "We manage and grow your social media presence with strategic content, engagement, and analytics-driven performance tailored to your audience." },
  { icon: <Globe      size={20} />, num: "02", title: "Web Development",           desc: "We design and build fast, responsive, and high-converting websites tailored to your business goals and brand identity." },
  { icon: <Video      size={20} />, num: "03", title: "Video Editing",             desc: "We create engaging video content using modern editing techniques and AI tools to capture attention and tell powerful visual stories." },
  { icon: <Palette    size={20} />, num: "04", title: "Graphic Design",            desc: "Professional and creative designs for branding, marketing, and social media that reinforce your identity and speak to your audience." },
  { icon: <Sparkles   size={20} />, num: "05", title: "Content Strategy",          desc: "We plan and execute content strategies that attract, engage, and convert your target audience into loyal brand advocates." },
  { icon: <Users      size={20} />, num: "06", title: "Community Management",      desc: "We build and manage strong digital communities around your brand, turning followers into advocates and engagement into results." },
];

const ABOUT_POINTS = [
  "Strategic social media management and content creation",
  "Modern, high-converting web development",
  "AI-powered video editing and animation",
  "Professional graphic design and brand identity",
  "Full-scale Facebook ads and digital monetization",
  "WhatsApp automation and community management",
];

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [statsOn, setStatsOn] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsOn(true); obs.disconnect(); } },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pages     = useCounter(50,     2000, statsOn);
  const projects  = useCounter(1000,   2200, statsOn);
  const followers = useCounter(100000, 2400, statsOn);
  const years     = useCounter(5,      1600, statsOn);

  /* ── gold colour helpers ── */
  const GOLD      = "#c9a84c";
  const GOLD_LITE = "#e8c97a";
  const NAVY      = "#0a0f1e";
  const NAVY2     = "#111827";
  const NAVY3     = "#1a2340";
  const TEXT      = "#f5f0e8";
  const TEXT60    = "rgba(245,240,232,0.6)";
  const TEXT65    = "rgba(245,240,232,0.65)";
  const GOLD20    = "rgba(201,168,76,0.2)";
  const GOLD25    = "rgba(201,168,76,0.25)";

  return (
    <div style={{ background: NAVY, color: TEXT, fontFamily: "'Syne','Inter',sans-serif", overflowX: "hidden" }}>

      {/* ── GLOBAL STYLES ────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Syne:wght@400;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .g-serif { font-family: 'Cormorant Garamond', Georgia, serif; }

        /* ── eyebrow label ── */
        .g-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          color: ${GOLD}; font-size: 0.7rem; letter-spacing: 0.22em;
          text-transform: uppercase; margin-bottom: 1rem;
        }
        .g-eyebrow::before { content:''; display:inline-block; width:28px; height:1px; background:${GOLD}; }

        /* ── buttons ── */
        .g-btn-gold {
          background:${GOLD}; color:${NAVY}; border:none;
          padding:0.78rem 1.8rem; border-radius:2px;
          font-family:'Syne',sans-serif; font-weight:700;
          font-size:0.8rem; letter-spacing:0.1em; text-transform:uppercase;
          cursor:pointer; display:inline-flex; align-items:center; gap:8px;
          transition:background 0.2s,transform 0.15s; text-decoration:none;
        }
        .g-btn-gold:hover { background:${GOLD_LITE}; transform:translateY(-2px); }

        .g-btn-outline {
          background:transparent; color:${TEXT};
          padding:0.78rem 1.8rem;
          border:1px solid rgba(245,240,232,0.3); border-radius:2px;
          font-family:'Syne',sans-serif; font-weight:600;
          font-size:0.8rem; letter-spacing:0.1em; text-transform:uppercase;
          cursor:pointer; display:inline-flex; align-items:center; gap:8px;
          transition:border-color 0.2s,color 0.2s,transform 0.15s; text-decoration:none;
        }
        .g-btn-outline:hover { border-color:${GOLD}; color:${GOLD}; transform:translateY(-2px); }

        /* ── HERO ── */
        .hero {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding-top: 70px;
        }
        .hero__text {
          padding: 3rem 6% 2.5rem;
          display: flex; flex-direction: column; justify-content: center;
        }
        .hero__img {
          position: relative; overflow: hidden;
          background: ${NAVY2};
          height: 300px; flex-shrink: 0;
        }
        /* tablet */
        @media (min-width: 640px) {
          .hero__img { height: 380px; }
        }
        /* desktop */
        @media (min-width: 960px) {
          .hero {
            flex-direction: row;
            align-items: stretch;
            min-height: 100vh;
          }
          .hero__text {
            flex: 0 0 52%;
            padding: 5rem 4% 5rem 7%;
          }
          .hero__img {
            flex: 0 0 48%;
            height: auto;
            min-height: 100%;
          }
        }

        /* ── STATS ── */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1200px; margin: 0 auto; text-align: center;
        }
        @media (min-width: 760px) {
          .stats-grid { grid-template-columns: repeat(4,1fr); }
        }
        .stat-cell {
          padding: 1.4rem 1rem;
          border-bottom: 0.5px solid ${GOLD20};
        }
        .stat-cell:nth-child(odd)  { border-right: 0.5px solid ${GOLD20}; }
        @media (min-width: 760px) {
          .stat-cell { border-bottom: none; }
          .stat-cell:nth-child(odd)  { border-right: none; }
          .stat-cell:not(:last-child) { border-right: 0.5px solid ${GOLD20}; }
        }

        /* ── SERVICES ── */
        .sec-pad { padding: 4rem 6%; }
        @media (min-width: 760px)  { .sec-pad { padding: 5rem 7%; } }
        @media (min-width: 1100px) { .sec-pad { padding: 6rem 8%; } }

        .svc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5px;
          background: ${GOLD20};
          border: 0.5px solid ${GOLD20};
          border-radius: 4px; overflow: hidden;
          max-width: 1160px;
        }
        @media (min-width: 580px)  { .svc-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 960px)  { .svc-grid { grid-template-columns: repeat(3,1fr); } }

        .svc-card {
          background: ${NAVY2}; padding: 2rem 1.8rem;
          cursor: pointer; position: relative; overflow: hidden;
          transition: background 0.25s;
        }
        .svc-card:hover, .svc-card.act { background: ${NAVY3}; }

        .svc-bar {
          position:absolute; left:0; top:0; width:3px; height:100%;
          background:${GOLD};
          transform:scaleY(0); transform-origin:bottom;
          transition:transform 0.3s ease;
        }
        .svc-card:hover .svc-bar, .svc-card.act .svc-bar { transform:scaleY(1); }

        .svc-desc {
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s ease, margin-top 0.3s;
          font-size: 0.84rem; line-height: 1.75; color: ${TEXT60};
        }
        .svc-desc.open { max-height: 140px; margin-top: 10px; }

        /* ── ABOUT ── */
        .about-section {
          display: flex; flex-direction: column;
          gap: 3rem; padding: 4rem 6%;
          background: ${NAVY2};
        }
        @media (min-width: 760px) {
          .about-section { padding: 5rem 7%; gap: 3.5rem; }
        }
        @media (min-width: 960px) {
          .about-section {
            flex-direction: row;
            align-items: center;
            gap: 5rem;
            padding: 6rem 8%;
          }
          .about-img-col  { flex: 0 0 46%; }
          .about-text-col { flex: 1; }
        }
      `}</style>

      <Navigation />

      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="hero">

        {/* Text column */}
        <div className="hero__text">
          <div className="g-eyebrow">Creative Media & Digital Brand Agency</div>

          <h1
            className="g-serif"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 5.2rem)",
              fontWeight: 700, lineHeight: 1.06,
              letterSpacing: "-0.01em", marginBottom: "1.3rem",
            }}
          >
            We Build Brands<br />
            That{" "}
            <em style={{ color: GOLD }}>Dominate</em>
            <br />Digitally.
          </h1>

          <p style={{ fontSize: "clamp(0.88rem,1.5vw,1rem)", lineHeight: 1.85, color: TEXT65, marginBottom: "2.2rem", maxWidth: 480 }}>
            From social media management to full-scale branding and AI-driven media production —
            we deliver results that elevate your presence and drive real impact across Africa and beyond.
          </p>

          <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
            <Link to="/contact" className="g-btn-gold">
              Start Your Project <ArrowRight size={14} />
            </Link>
            <Link to="/portfolio" className="g-btn-outline">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Image panel — social media / digital screens (no people) */}
        <div className="hero__img">
          {/* top/left gradient fade */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
            background: "linear-gradient(180deg,#0a0f1e 0%,transparent 28%)",
          }} />
          <style>{`
            @media (min-width:960px) {
              .hero-fade-override {
                background: linear-gradient(90deg,#0a0f1e 0%,transparent 38%) !important;
              }
            }
          `}</style>
          <div
            className="hero-fade-override"
            style={{
              position:"absolute",inset:0,zIndex:2,pointerEvents:"none",
              background:"linear-gradient(180deg,#0a0f1e 0%,transparent 28%)",
            }}
          />

          {/* dark base fallback */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,#0d1a35,#1a2e50,#0a1628)", zIndex:0 }} />

          {/* Image 1: social media / digital screens — no people */}
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&auto=format&fit=crop&q=80"
            alt="Digital social media and technology screens"
            style={{
              position:"absolute", inset:0, width:"100%", height:"100%",
              objectFit:"cover", objectPosition:"center",
              filter:"brightness(0.55) saturate(1.3)",
              zIndex:1,
            }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />

          {/* Gold badge */}
          <div style={{
            position:"absolute", bottom:"1.8rem", right:"1.8rem", zIndex:3,
            background:GOLD, color:NAVY,
            padding:"0.9rem 1.2rem", borderRadius:"2px",
            fontFamily:"'Syne',sans-serif", fontWeight:800,
            fontSize:"0.65rem", letterSpacing:"0.12em",
            textTransform:"uppercase", lineHeight:1.5,
          }}>
            <span style={{ display:"block", fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:700, letterSpacing:0 }}>5+</span>
            Years of Excellence
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STATS
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={statsRef}
        style={{
          padding: "0",
          borderTop: `0.5px solid ${GOLD25}`,
          borderBottom: `0.5px solid ${GOLD25}`,
          background: NAVY2,
        }}
      >
        <div className="stats-grid">
          {[
            { val: pages,     target: 50,     label: "Pages Managed" },
            { val: projects,  target: 1000,   label: "Projects Completed" },
            { val: followers, target: 100000, label: "Audience Reach" },
            { val: years,     target: 5,      label: "Years Experience" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="stat-cell">
                <div className="g-serif" style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight:700, color:GOLD, lineHeight:1 }}>
                  {fmt(s.val, s.target)}+
                </div>
                <div style={{ fontSize:"0.66rem", letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(245,240,232,0.5)", marginTop:"0.45rem" }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════════════════════════ */}
      <section className="sec-pad">
        <Reveal><span className="g-eyebrow">What We Do</span></Reveal>
        <Reveal delay={80}>
          <h2
            className="g-serif"
            style={{ fontSize:"clamp(1.9rem,4vw,3.4rem)", fontWeight:700, lineHeight:1.1, marginBottom:"0.8rem" }}
          >
            Our Core Services
          </h2>
        </Reveal>
        <Reveal delay={130}>
          <p style={{ color:TEXT60, fontSize:"0.9rem", marginBottom:"2.8rem", maxWidth:500 }}>
            Tap any service to learn more about how we can elevate your brand.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="svc-grid">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                onClick={() => setActiveService(activeService === i ? null : i)}
                className={`svc-card${activeService === i ? " act" : ""}`}
              >
                <div className="svc-bar" />

                {/* ghost number */}
                <div className="g-serif" style={{
                  position:"absolute", top:"1.1rem", right:"1.1rem",
                  fontSize:"2.8rem", fontWeight:700,
                  color:"rgba(201,168,76,0.07)", lineHeight:1, userSelect:"none",
                }}>
                  {svc.num}
                </div>

                {/* icon ring */}
                <div style={{
                  width:44, height:44, borderRadius:"50%",
                  border:`1px solid rgba(201,168,76,0.3)`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  marginBottom:"1.1rem", color:GOLD,
                  background: activeService === i ? "rgba(201,168,76,0.12)" : "transparent",
                  transition:"background 0.25s",
                }}>
                  {svc.icon}
                </div>

                <div style={{ fontWeight:700, fontSize:"0.94rem", marginBottom:"0.25rem" }}>{svc.title}</div>
                <div className={`svc-desc${activeService === i ? " open" : ""}`}>{svc.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════════════════════════ */}
      <section className="about-section">

        {/* Image col — world map / global network (no people) */}
        <Reveal className="about-img-col">
          <div style={{ position:"relative" }}>

            {/* image box */}
            <div style={{
              width:"100%", height:380,
              background:NAVY3, borderRadius:"2px",
              overflow:"hidden", position:"relative",
            }}>
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,#0d1a35,#1e3060,#0a1a40)", zIndex:0 }} />

              {/* Image 2: world map / global digital network — no people */}
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80"
                alt="World digital network map"
                style={{
                  position:"absolute", inset:0, width:"100%", height:"100%",
                  objectFit:"cover", objectPosition:"center",
                  filter:"brightness(0.52) saturate(1.5) hue-rotate(8deg)",
                  zIndex:1,
                }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              {/* subtle gold tint */}
              <div style={{ position:"absolute", inset:0, background:"rgba(201,168,76,0.04)", zIndex:2 }} />
            </div>

            {/* Floating badge — sits below image on mobile, overlaps on desktop */}
            <div style={{
              position:"absolute", bottom:"-1.4rem", right:0, zIndex:10,
              background:GOLD, color:NAVY,
              padding:"1rem 1.3rem", borderRadius:"2px",
              fontFamily:"'Syne',sans-serif", fontWeight:800,
              fontSize:"0.65rem", letterSpacing:"0.1em",
              textTransform:"uppercase", lineHeight:1.5,
            }}>
              <span style={{ display:"block", fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:700, letterSpacing:0 }}>100K+</span>
              Audience Reach<br />Across Platforms
            </div>
          </div>
        </Reveal>

        {/* Text col */}
        <div className="about-text-col" style={{ paddingTop:"1.8rem" }}>
          <Reveal><span className="g-eyebrow">Who We Are</span></Reveal>
          <Reveal delay={100}>
            <h2
              className="g-serif"
              style={{ fontSize:"clamp(1.9rem,3.5vw,3rem)", fontWeight:700, lineHeight:1.1, marginBottom:"1rem" }}
            >
              Built for African<br />Business Growth
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p style={{ color:TEXT65, fontSize:"clamp(0.88rem,1.3vw,0.96rem)", lineHeight:1.85, marginBottom:"1.8rem" }}>
              GiantmanTech is a creative media and digital brand agency helping businesses grow through
              powerful digital strategies, high-quality content, and AI-driven media production.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:"0.75rem" }}>
              {ABOUT_POINTS.map((pt, i) => (
                <li key={i} style={{ display:"flex", alignItems:"flex-start", gap:"0.7rem", fontSize:"clamp(0.84rem,1.2vw,0.9rem)", color:TEXT65 }}>
                  <CheckCircle2 size={15} style={{ color:GOLD, flexShrink:0, marginTop:"2px" }} />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════ */}
      <section className="sec-pad" style={{ textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none",
          background:"radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }} />

        <Reveal>
          <div style={{ width:50, height:1, background:GOLD, margin:"0 auto 2rem" }} />
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="g-serif"
            style={{ fontSize:"clamp(2rem,5vw,4.2rem)", fontWeight:700, lineHeight:1.1, marginBottom:"1rem" }}
          >
            Ready to Grow<br />Your Brand?
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ color:TEXT60, fontSize:"clamp(0.88rem,1.3vw,1rem)", maxWidth:440, margin:"0 auto 2.3rem", lineHeight:1.85 }}>
            Let's help you scale your digital presence and achieve real results that move your business forward.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Link to="/contact" className="g-btn-gold" style={{ fontSize:"0.85rem", padding:"0.9rem 2.4rem" }}>
            Start Your Project <ArrowRight size={15} />
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}