import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { User } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  expertise: string[];
  color: string;
  photo?: string;
};

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Adeboye Sunday",
      role: "Founder & Creative Director",
      photo: "/images/team-adeboye-sunday.png",
      description:
        "Visionary founder of GIANTMANTECH overseeing all creative direction, brand strategy, content production, and AI video generation. With expertise spanning graphic design, animation, web development, Facebook monetization, WhatsApp automation, and digital advertising, he drives the agency's creative output and growth.",
      expertise: [
        "Creative Direction",
        "Brand Strategy",
        "AI Video Generation",
        "Graphic Design",
        "Web Development",
        "Facebook Monetization",
        "WhatsApp Automation",
        "Digital Advertising",
      ],
      color: "teal",
    },
    {
      name: "Joseph Oluwaferanmi",
      role: "Manager",
      photo: "/images/team-joseph-oluwaferanmi.png",
      description:
        "Oversees day-to-day operations of GIANTMANTECH, coordinating team activities, managing project timelines, and ensuring that every client deliverable is completed on schedule and to the highest standard. Primary point of contact for operational matters and inter-team communication.",
      expertise: [
        "Operations Management",
        "Project Coordination",
        "Timeline Management",
        "Resource Allocation",
        "Team Communication",
        "Quality Assurance",
      ],
      color: "purple",
    },
    {
      name: "Joshua Ayomide",
      role: "Customer Service Officer",
      photo: "/images/team-joshua-ayomide.png",
      description:
        "Responsible for all client-facing communications and relationship management at GIANTMANTECH. Handles client inquiries, onboarding of new clients, feedback collection, and support resolution across all platforms, ensuring timely, professional, and warm communication.",
      expertise: [
        "Client Communications",
        "Relationship Management",
        "Client Onboarding",
        "Feedback Collection",
        "Support Resolution",
        "Customer Satisfaction",
      ],
      color: "blue",
    },
    {
      name: "Odewale Ayooluwa",
      role: "Service Delivery Officer",
      description:
        "Ensures seamless execution and delivery of all services rendered by GIANTMANTECH. Coordinates content scheduling, tracks deliverables across all managed pages, liaises with the creative team, and confirms that all services are delivered accurately, on time, and aligned with brand guidelines.",
      expertise: [
        "Service Execution",
        "Content Scheduling",
        "Deliverable Tracking",
        "Creative Coordination",
        "Quality Control",
        "Brand Compliance",
      ],
      color: "orange",
    },
    {
      name: "Oyeyinka Israel",
      role: "Customer Review Officer",
      description:
        "Manages quality assurance and client satisfaction monitoring across all GIANTMANTECH projects. Reviews delivered content, collects and analyzes client feedback, tracks performance metrics for each managed page, and prepares periodic review reports for continuous improvement.",
      expertise: [
        "Quality Assurance",
        "Client Satisfaction",
        "Content Review",
        "Feedback Analysis",
        "Performance Metrics",
        "Reporting",
      ],
      color: "yellow",
    },
  ];

  const colorClasses: Record<string, string> = {
    teal: "bg-luxury-gold text-luxury-navy",
    purple: "bg-luxury-navy-muted border-2 border-luxury-gold/35 text-luxury-gold",
    blue: "bg-luxury-navy-lift border-2 border-luxury-gold/25 text-luxury-gold",
    orange: "bg-[#3d5a7a] border-2 border-luxury-gold/30 text-luxury-text",
    yellow: "bg-luxury-navy-deep border-2 border-luxury-gold/40 text-luxury-gold",
  };

  function TeamAvatar({ member, large }: { member: TeamMember; large?: boolean }) {
    const box = large ? "w-20 h-20" : "w-16 h-16";
    const iconSize = large ? 40 : 32;
    if (member.photo) {
      return (
        <div
          className={`${box} shrink-0 rounded-full overflow-hidden ring-2 ring-luxury-gold/50 bg-luxury-navy-deep`}
        >
          <ImageWithFallback
            src={member.photo}
            alt={member.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
      );
    }
    return (
      <div
        className={`${box} shrink-0 rounded-full flex items-center justify-center ${colorClasses[member.color]}`}
      >
        <User size={iconSize} className={large ? "text-luxury-navy" : "text-luxury-gold"} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy">
      <Navigation />

      <section className="pt-24 pb-16 bg-luxury-navy-deep border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 text-center text-luxury-gold">Our Team</h1>
          <p className="text-xl text-luxury-text/85 text-center max-w-3xl mx-auto">
            Meet the dedicated professionals committed to excellence in every service we deliver
          </p>
        </div>
      </section>

      <section className="py-16 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <Card className="border-luxury-gold/25 bg-luxury-navy-muted/50">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <TeamAvatar member={teamMembers[0]} large />
                  <div>
                    <CardTitle className="text-3xl text-luxury-text">{teamMembers[0].name}</CardTitle>
                    <CardDescription className="text-lg text-luxury-gold">
                      {teamMembers[0].role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-luxury-text/85 mb-6 text-lg">{teamMembers[0].description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-luxury-text">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[0].expertise.map((skill, index) => (
                      <Badge key={index} className="bg-luxury-gold text-luxury-navy hover:bg-[#e5c158]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center text-luxury-gold">Core Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all border-luxury-gold/20 bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <TeamAvatar member={member} />
                    <div>
                      <CardTitle className="text-xl text-luxury-text">{member.name}</CardTitle>
                      <CardDescription className="text-base text-luxury-text/70">{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-text/85 mb-4">{member.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-luxury-gold/90 uppercase">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-luxury-gold/40 text-luxury-text">
                          {skill}
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
          <h2 className="text-3xl font-bold mb-12 text-center text-luxury-gold">Team Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-luxury-gold/15 border border-luxury-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-luxury-text">Collaboration</h3>
              <p className="text-luxury-text/75">
                We work together seamlessly across all departments to deliver exceptional
                results for every client.
              </p>
            </div>
            <div className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-luxury-gold/15 border border-luxury-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-luxury-text">Continuous Learning</h3>
              <p className="text-luxury-text/75">
                We stay ahead of industry trends and continuously upgrade our skills to serve
                our clients better.
              </p>
            </div>
            <div className="bg-luxury-navy-lift/40 border border-luxury-gold/15 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-luxury-gold/15 border border-luxury-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-luxury-text">Excellence</h3>
              <p className="text-luxury-text/75">
                Each team member is dedicated to maintaining the highest standards in their
                respective roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-luxury-navy-deep via-luxury-navy to-luxury-navy-deep border-t border-luxury-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-luxury-text">Want to Work With Us?</h2>
          <p className="text-xl mb-8 text-luxury-text/80">
            Our team is ready to bring your vision to life. Let&apos;s start a conversation about
            your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-luxury-gold text-luxury-navy px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c158] transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
