import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy text-luxury-text">
      <Navigation />

      {/* HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-luxury-navy-deep to-luxury-navy border-b border-luxury-gold/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-luxury-gold leading-tight">
            About GIANTMANTECH
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-luxury-text/80 max-w-2xl mx-auto">
            A creative media and digital brand agency focused on helping individuals,
            businesses, and communities grow through powerful digital experiences.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-luxury-gold">
              Our Story
            </h2>

            <p className="text-luxury-text/80">
              GIANTMANTECH is a fast-growing creative media and digital brand agency
              founded by Adeboye Sunday. From managing multiple digital platforms to
              building strong online communities, the agency has grown into a powerful
              digital force.
            </p>

            <p className="text-luxury-text/80">
              With over 50+ active platforms and brands under management, we combine
              strategy, creativity, and technology to deliver results that matter.
            </p>

            <p className="text-luxury-text/80">
              We leverage AI tools, modern design systems, and marketing strategies to
              create content that engages, converts, and scales.
            </p>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-luxury-gold/20">
            <ImageWithFallback
              src="/images/our-story.png"
              alt="Our Story"
              className="w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-12 border-y border-luxury-gold/20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "50+", label: "Active Platforms" },
            { num: "1000+", label: "Projects Completed" },
            { num: "100K+", label: "Audience Reach" },
            { num: "5+", label: "Years Experience" },
          ].map((item, i) => (
            <div key={i} className="hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-luxury-gold">
                {item.num}
              </h3>
              <p className="text-sm text-luxury-text/70">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-luxury-navy-muted">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-10 text-luxury-gold">
            Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="p-6 rounded-xl border border-luxury-gold/20 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-luxury-gold">
                Mission
              </h3>
              <p className="text-luxury-text/80">
                To deliver world-class digital solutions that empower brands through
                creativity, innovation, and strategy.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-luxury-gold/20 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-luxury-gold">
                Vision
              </h3>
              <p className="text-luxury-text/80">
                To become Africa’s leading digital agency in AI-powered content,
                innovation, and brand transformation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12 text-luxury-gold">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: "🎯", title: "Excellence", text: "Delivering top-quality results always." },
              { emoji: "💡", title: "Innovation", text: "Using modern tools and creative thinking." },
              { emoji: "🤝", title: "Integrity", text: "Honesty and transparency in all we do." },
              { emoji: "🎨", title: "Creativity", text: "Fresh ideas that stand out." },
              { emoji: "🚀", title: "Impact", text: "Results that truly matter." },
              { emoji: "🌍", title: "Community", text: "Empowering people and brands." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-luxury-gold/20 hover:border-luxury-gold hover:shadow-lg transition"
              >
                <div className="text-2xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-luxury-text/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-luxury-navy-muted">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Great
        </h2>

        <p className="text-luxury-text/70 mb-6">
          Ready to grow your brand with us?
        </p>

        <a href="/contact">
          <button className="px-6 py-3 bg-luxury-gold text-black rounded-lg font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </a>
      </section>

      <Footer />
    </div>
  );
}