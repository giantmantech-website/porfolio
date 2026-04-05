import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy">
      <Navigation />

      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden bg-gradient-to-b from-luxury-navy-deep via-luxury-navy to-luxury-navy-muted">

  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.12),transparent)] pointer-events-none" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center text-center md:text-left">

      {/* TEXT */}
      <div className="flex flex-col items-center md:items-start">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-luxury-text leading-tight">
          GIANTMANTECH
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-luxury-gold mb-3 font-semibold">
          Creative Media & Digital Brand Agency
        </p>

        <p className="text-sm sm:text-base md:text-lg text-luxury-text/85 mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
          Delivering world-class content strategy, animation, graphic design, web
          development, social media management, and AI-driven video production across
          Nigeria and beyond.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link to="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-luxury-gold text-luxury-text bg-transparent hover:bg-luxury-gold/10 font-semibold"
            >
              View Our Work
            </Button>
          </Link>

          <Link to="/contact">
            <Button
              size="lg"
              className="bg-luxury-gold text-luxury-navy hover:bg-[#e5c158] font-semibold"
            >
              Get Started
            </Button>
          </Link>
        </div>

      </div>

      {/* IMAGE */}
      <div className="relative rounded-2xl overflow-hidden ring-2 ring-luxury-gold/50 shadow-2xl">

        <img
          src="/images/hero-training.png"
          alt="GIANTMANTECH training"
          className="w-full h-[250px] sm:h-[320px] md:h-[420px] object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-luxury-navy-deep/90 via-luxury-navy/35 to-transparent" />

      </div>

    </div>

  </div>
</section>