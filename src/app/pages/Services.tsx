import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Video,
  Palette,
  Globe,
  TrendingUp,
  Sparkles,
  DollarSign,
  MessageSquare,
  Camera,
  Megaphone,
} from "lucide-react";

export function Services() {
  const serviceCategories = [
    {
      id: "content",
      label: "Content Creation",
      icon: <Sparkles className="w-5 h-5" />,
      services: [
        {
          title: "Content Strategy & Planning",
          items: [
            "Monthly editorial calendar development",
            "Audience research and trending topic analysis",
            "Content format definition and pillar development",
            "Monetization goal alignment",
          ],
        },
        {
          title: "AI Video Production",
          items: [
            "High-quality video using Hypernatural AI and Veo 3",
            "Scene-by-scene scripting and storyboarding",
            "Character-driven visual storytelling",
            "Post-production editing with color grading and subtitles",
            "Animated explainer content",
          ],
        },
        {
          title: "Copywriting & Storytelling",
          items: [
            "Engaging captions and copy in English and Yoruba",
            "Family-themed stories and motivational narratives",
            "Educational content scripting",
            "Brand voice development",
          ],
        },
      ],
    },
    {
      id: "design",
      label: "Design & Branding",
      icon: <Palette className="w-5 h-5" />,
      services: [
        {
          title: "Graphic Design",
          items: [
            "Branded thumbnails and cover images",
            "Social media graphics and templates",
            "Event flyers and promotional materials",
            "Infographics and educational visuals",
            "Logo design and brand identity",
          ],
        },
        {
          title: "Brand Development",
          items: [
            "Complete brand identity creation",
            "Style guides and brand guidelines",
            "Professional watermarks and overlays",
            "Marketing collateral design",
          ],
        },
      ],
    },
    {
      id: "digital",
      label: "Digital Marketing",
      icon: <TrendingUp className="w-5 h-5" />,
      services: [
        {
          title: "Social Media Management",
          items: [
            "Managing 50+ active social media pages",
            "Platform-specific content adaptation",
            "Community engagement and moderation",
            "Strategic posting schedules",
            "Growth strategy implementation",
          ],
        },
        {
          title: "Facebook Ads Management",
          items: [
            "Targeted ad campaign planning and execution",
            "Ad creative design (graphics and video)",
            "Audience targeting and retargeting",
            "Performance tracking and ROI analysis",
            "A/B testing optimization",
          ],
        },
        {
          title: "Lead Generation",
          items: [
            "Facebook lead generation campaigns",
            "WhatsApp integration ads",
            "Landing page optimization",
            "Conversion tracking and reporting",
          ],
        },
      ],
    },
    {
      id: "web",
      label: "Web Services",
      icon: <Globe className="w-5 h-5" />,
      services: [
        {
          title: "Website Management",
          items: [
            "Full website administration and updates",
            "Content management and uploads",
            "SEO optimization and keyword targeting",
            "Performance monitoring and improvements",
            "Newsletter management",
          ],
        },
        {
          title: "Web Development",
          items: [
            "Custom website design and development",
            "E-commerce solutions",
            "Content management systems",
            "Mobile-responsive design",
          ],
        },
      ],
    },
    {
      id: "monetization",
      label: "Monetization",
      icon: <DollarSign className="w-5 h-5" />,
      services: [
        {
          title: "Platform Monetization",
          items: [
            "Facebook in-stream ads and Stars programme",
            "YouTube AdSense optimization",
            "Watch-time strategy development",
            "Content compliance management",
            "Revenue tracking and reporting",
          ],
        },
        {
          title: "Revenue Strategy",
          items: [
            "Brand partnership identification",
            "Sponsorship opportunity pursuit",
            "Affiliate marketing integration",
            "Multiple revenue stream development",
          ],
        },
      ],
    },
    {
      id: "specialized",
      label: "Specialized Services",
      icon: <Camera className="w-5 h-5" />,
      services: [
        {
          title: "Photography Services",
          items: [
            "Portrait, event, and product photography",
            "Commercial photography shoots",
            "Photo editing and retouching",
            "Portfolio curation and showcase",
          ],
        },
        {
          title: "Travel & Tourism Marketing",
          items: [
            "Travel destination content creation",
            "Visa application process content",
            "Tour package promotion",
            "Lead generation for travel agencies",
          ],
        },
        {
          title: "Social Impact Campaigns",
          items: [
            "Community outreach documentation",
            "Fundraising campaign management",
            "Impact storytelling and reporting",
            "NGO partnership content",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy">
      <Navigation />

      <section className="pt-24 pb-16 bg-luxury-navy-deep border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 text-center text-luxury-gold">Our Services</h1>
          <p className="text-xl text-luxury-text/85 text-center max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and achieve your
            business objectives
          </p>
        </div>
      </section>

      <section className="py-16 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {category.services.map((service, index) => (
                    <div
                      key={index}
                      className="border border-luxury-gold/20 rounded-xl p-6 bg-luxury-navy-lift/30 hover:border-luxury-gold/40 hover:shadow-lg transition-all"
                    >
                      <h3 className="text-2xl font-semibold mb-4 text-luxury-gold">
                        {service.title}
                      </h3>
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-luxury-gold mt-1">✓</span>
                            <span className="text-luxury-text/85">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-luxury-navy-muted border-t border-luxury-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-luxury-gold">Service Add-Ons</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl">
              <MessageSquare className="w-10 h-10 text-luxury-gold mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-luxury-text">WhatsApp Automation</h3>
              <p className="text-luxury-text/75">
                Automated welcome messages, FAQ responses, booking flows, and broadcast
                lists for efficient client communication.
              </p>
            </div>
            <div className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl">
              <Megaphone className="w-10 h-10 text-luxury-gold mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-luxury-text">Community Management</h3>
              <p className="text-luxury-text/75">
                Active engagement, moderation, response management, and community building
                across all platforms.
              </p>
            </div>
            <div className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl">
              <TrendingUp className="w-10 h-10 text-luxury-gold mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-luxury-text">Analytics & Reporting</h3>
              <p className="text-luxury-text/75">
                Detailed performance tracking, engagement metrics, and strategic
                recommendations for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-luxury-navy-deep via-luxury-navy to-luxury-navy-deep border-t border-luxury-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-luxury-text">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 text-luxury-text/80">
            We create tailored service packages to meet your specific needs. Let&apos;s discuss your
            project requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-luxury-gold text-luxury-navy px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c158] transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
