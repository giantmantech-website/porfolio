import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy">
      <Navigation />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-3xl md:text-6xl font-bold text-center">
            GIANTMANTECH
          </h1>

          <p className="text-center mt-4">
            Creative Media & Digital Brand Agency
          </p>

          <div className="mt-6 text-center">
            <img
              src="/images/hero-training.png"
              alt="hero"
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <Link to="/portfolio">
              <Button>Portfolio</Button>
            </Link>

            <Link to="/contact">
              <Button>Contact</Button>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}