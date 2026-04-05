import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy">
      <Navigation />

      <section className="pt-24 pb-16 bg-luxury-navy-deep border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 text-center text-luxury-gold">About GIANTMANTECH</h1>
          <p className="text-xl text-luxury-text/85 text-center max-w-3xl mx-auto">
            A multifaceted creative media and digital brand agency committed to empowering
            individuals, businesses, and communities through purposeful digital media.
          </p>
        </div>
      </section>

      <section className="py-16 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-luxury-gold">Our Story</h2>
              <p className="text-luxury-text/85 mb-4">
                GIANTMANTECH is a multifaceted creative media and digital brand agency
                founded and led by Adeboye Sunday. Operating from Ede, Osun State,
                GIANTMANTECH has built a robust portfolio of over 50 active social
                media pages, content platforms, and digital brands — each managed with a
                distinct strategy tailored to its audience and objective.
              </p>
              <p className="text-luxury-text/85 mb-4">
                The agency blends creativity with cutting-edge technology, using AI-powered
                tools such as Hypernatural AI and Veo 3 to produce high-quality video
                content, alongside traditional graphic design, copywriting, and community
                management expertise.
              </p>
              <p className="text-luxury-text/85">
                GIANTMANTECH is committed to empowering individuals, businesses, and
                communities through purposeful digital media that makes a real impact.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden ring-2 ring-luxury-gold/40 shadow-xl">
              <ImageWithFallback
                src="/images/our-story.png"
                alt="GIANTMANTECH technology training and empowerment program"
                className="w-full min-h-[280px] object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-luxury-navy-deep/75 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </div>

          <div className="bg-luxury-navy-muted/80 border border-luxury-gold/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-luxury-gold">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-luxury-navy-deep/60 border border-luxury-gold/15 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-luxury-gold">Mission</h3>
                <p className="text-luxury-text/85">
                  To deliver world-class creative media and digital brand solutions that
                  empower our clients to achieve their goals through innovative content,
                  strategic planning, and cutting-edge technology.
                </p>
              </div>
              <div className="bg-luxury-navy-deep/60 border border-luxury-gold/15 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-luxury-gold">Vision</h3>
                <p className="text-luxury-text/85">
                  To be Africa&apos;s leading creative media agency, recognized for excellence in
                  digital innovation, AI-powered content creation, and transformative brand
                  storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-navy-muted border-t border-luxury-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-luxury-gold">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: "🎯", title: "Excellence", text: "We deliver exceptional quality in every project, ensuring our clients receive the best possible results." },
              { emoji: "💡", title: "Innovation", text: "We embrace cutting-edge technology and creative thinking to stay ahead of industry trends." },
              { emoji: "🤝", title: "Integrity", text: "We build trust through transparency, honest communication, and ethical business practices." },
              { emoji: "🎨", title: "Creativity", text: "We bring fresh perspectives and innovative solutions to every challenge we face." },
              { emoji: "🚀", title: "Impact", text: "We create content and strategies that make a meaningful difference for our clients and their audiences." },
              { emoji: "🌍", title: "Community", text: "We are committed to uplifting communities and creating positive social impact through our work." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-luxury-gold/15 rounded-full flex items-center justify-center mb-4 border border-luxury-gold/25">
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-luxury-text">{item.title}</h3>
                <p className="text-luxury-text/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
