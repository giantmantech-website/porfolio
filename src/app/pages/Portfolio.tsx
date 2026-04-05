import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ExternalLink } from "lucide-react";

export function Portfolio() {
  const platforms = [
    {
      name: "ABIDON TV",
      tagline: "Educational, Cultural, Spiritual & Entertainment Platform",
      website: "abidontv.com",
      description:
        "Premium multimedia platform delivering a rich blend of educational, cultural, spiritual, and entertainment content to audiences across Nigeria and the diaspora.",
      services: [
        "Content Strategy & Planning",
        "AI Video Production",
        "Website Management",
        "Social Media Management",
        "SEO Optimization",
        "Facebook & YouTube Monetization",
      ],
      color: "bg-luxury-gold",
    },
    {
      name: "Togetherness Family TV",
      tagline: "Family-Focused Content Channel",
      narrator: "Mojo TV",
      description:
        "Heartwarming content platform dedicated to family values, parenting, relationships, and community life with culturally relevant themes.",
      services: [
        "Family-themed storytelling",
        "AI video production",
        "Baby cartoon content",
        "Social media management",
        "WhatsApp broadcasting",
      ],
      color: "bg-[#4a6fa5]",
    },
    {
      name: "FUNMI REALGOLD",
      tagline: "Educational & Entertainment Facebook Page",
      description:
        "Vibrant Facebook page blending educational content with entertaining storytelling, targeting Nigerian adults with informative and uplifting content.",
      services: [
        "Educational content creation",
        "Graphic design",
        "Facebook page management",
        "Facebook ads management",
        "Monetization optimization",
      ],
      color: "bg-luxury-gold",
    },
    {
      name: "NINI GOLD",
      tagline: "Product & Service Promotion TV Platform",
      description:
        "Dedicated promotional TV platform showcasing products, services, and brands to targeted audiences through video and social media advertising.",
      services: [
        "Product promotion videos",
        "Video ad production",
        "Social media advertising",
        "Brand collaboration management",
      ],
      color: "bg-[#3d6da3]",
    },
    {
      name: "ALEX GREEN CONSORTIUM",
      tagline: "Travel, Tour, Visa & Permits Agency",
      description:
        "Professional travel and immigration agency brand providing travel planning, visa application support, tour packages, and permit processing services.",
      services: [
        "Digital brand management",
        "Travel content creation",
        "Lead generation campaigns",
        "WhatsApp automation",
        "Client communication systems",
      ],
      color: "bg-luxury-navy-lift",
    },
    {
      name: "Public Opinion",
      tagline: "Motivational Family Facebook Page",
      description:
        "High-engagement motivational Facebook page focused on family values, personal development, and community inspiration with daily encouragement.",
      services: [
        "Motivational content creation",
        "Community management",
        "Graphic design",
        "Growth strategy",
        "Facebook monetization",
      ],
      color: "bg-[#8b6b7a]",
    },
    {
      name: "Adeboller Empowerment Page",
      tagline: "Community Support & Social Impact Platform",
      description:
        "Social impact platform dedicated to uplifting the less privileged, raising awareness, mobilizing support, and documenting outreach activities.",
      services: [
        "Social impact content",
        "Campaign management",
        "Community building",
        "Partnership development",
      ],
      color: "bg-luxury-gold",
    },
    {
      name: "Vicpel Photography",
      tagline: "Professional Photography Brand",
      description:
        "Professional photography brand offering portrait, event, product, and commercial photography with full digital presence management.",
      services: [
        "Portfolio management",
        "Social media marketing",
        "Graphic design & branding",
        "Client acquisition",
        "Reputation management",
      ],
      color: "bg-[#4a5d8f]",
    },
    {
      name: "PocketTalkTherapy",
      tagline: "Mental Wellness TikTok Channel",
      description:
        "TikTok channel delivering mental health awareness, emotional wellness tips, and therapy-adjacent content in a relatable, stigma-free format.",
      services: [
        "TikTok content strategy",
        "Mental wellness content",
        "Video production & editing",
        "Community engagement",
      ],
      color: "bg-[#4a8fa3]",
    },
    {
      name: "Broke2Baddie",
      tagline: "Personal Finance TikTok Channel",
      description:
        "TikTok channel empowering young people on financial independence, side hustles, and transforming their financial story.",
      services: [
        "Financial content creation",
        "TikTok strategy",
        "Educational video production",
        "Live Q&A sessions",
      ],
      color: "bg-luxury-navy-muted",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy">
      <Navigation />

      <section className="pt-24 pb-16 bg-luxury-navy-deep border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 text-center text-luxury-gold">Our Portfolio</h1>
          <p className="text-xl text-luxury-text/85 text-center max-w-3xl mx-auto mb-8">
            Explore our diverse range of managed platforms and brands. Each project represents
            our commitment to excellence and strategic content management.
          </p>
          <div className="text-center">
            <Badge variant="secondary" className="text-lg px-6 py-2 border-luxury-gold/30 bg-luxury-gold/15 text-luxury-gold">
              50+ Active Platforms Managed
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-xl transition-all border-luxury-gold/20 bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`w-2 h-16 ${platform.color} rounded`}></div>
                    {platform.website && (
                      <a
                        href={`https://${platform.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-luxury-gold hover:text-[#e5c158]"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <CardTitle className="text-2xl text-luxury-text">{platform.name}</CardTitle>
                  <CardDescription className="text-base text-luxury-text/75">
                    {platform.tagline}
                    {platform.narrator && ` | Narrator: ${platform.narrator}`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-text/85 mb-4">{platform.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-luxury-gold/90 uppercase">
                      Services Provided
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="border-luxury-gold/35 text-luxury-text">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-navy-muted border-t border-luxury-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-luxury-gold">Platform Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">10+</div>
              <div className="text-luxury-text/75">Flagship Platforms</div>
            </div>
            <div className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">50+</div>
              <div className="text-luxury-text/75">Total Pages Managed</div>
            </div>
            <div className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">8+</div>
              <div className="text-luxury-text/75">Industry Niches</div>
            </div>
            <div className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">100%</div>
              <div className="text-luxury-text/75">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-luxury-navy-deep via-luxury-navy to-luxury-navy-deep border-t border-luxury-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-luxury-text">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 text-luxury-text/80">
            Let us help you build and manage a platform that achieves real results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-luxury-gold text-luxury-navy px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c158] transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
