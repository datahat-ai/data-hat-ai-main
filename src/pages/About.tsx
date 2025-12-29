import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Lightbulb, Users, Award, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const values = [
  {
    icon: Target,
    title: "Customer Obsession",
    description: "We measure our success by our customers' success. Every decision starts with the question: how does this help our customers achieve their goals?"
  },
  {
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description: "We push the boundaries of what's possible with AI, but always in service of solving real business problems."
  },
  {
    icon: Users,
    title: "Human-Centric AI",
    description: "We believe the best AI augments human capability rather than replacing it. Our agents are designed to work alongside people."
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description: "We set high standards and hold ourselves accountable. Quality is not negotiable in everything we build and deliver."
  }
];

const stats = [
  { value: "500+", label: "Enterprise Customers" },
  { value: "10M+", label: "Decisions Automated" },
  { value: "50+", label: "Team Members" },
  { value: "99.9%", label: "Platform Uptime" }
];

const team = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Former VP of AI at Fortune 500. 15+ years in enterprise technology.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    name: "Marcus Johnson",
    role: "Chief Technology Officer",
    bio: "Ex-Google AI researcher. PhD in Machine Learning from Stanford.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Chief Product Officer",
    bio: "Former Director of Product at leading SaaS company. Built products used by millions.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  },
  {
    name: "David Park",
    role: "Chief Revenue Officer",
    bio: "Scaled multiple startups from $0 to $100M+. Expert in enterprise sales.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  }
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | DataHat AI - Pioneering Enterprise AI Automation</title>
        <meta name="description" content="Learn about DataHat AI's mission to transform enterprise operations with intelligent AI agents. Meet our team and discover our values." />
        <meta name="keywords" content="DataHat AI, about us, AI company, enterprise automation, AI team" />
        <link rel="canonical" href="https://datahat.ai/about" />
        
        <meta property="og:title" content="About Us | DataHat AI" />
        <meta property="og:description" content="Pioneering enterprise AI automation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://datahat.ai/about" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DataHat AI",
            "description": "Enterprise AI automation platform",
            "url": "https://datahat.ai",
            "foundingDate": "2022",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": 50
            },
            "sameAs": [
              "https://linkedin.com/company/datahat-ai",
              "https://twitter.com/datahatai"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <PageHero
          badge="Our Story"
          title="About DataHat AI"
          description="We're on a mission to transform how enterprises operate by bridging the gap between data and action with intelligent AI agents."
        />

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="soft-glass p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-display text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower every enterprise with AI agents that turn data into action—automatically, 
                  intelligently, and with human oversight where it matters most. We believe the future 
                  of work is a partnership between humans and AI.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="soft-glass p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-display text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where enterprises operate at peak efficiency, where insights never go 
                  unacted upon, and where human talent is freed from repetitive work to focus 
                  on strategy, creativity, and meaningful customer relationships.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="soft-glass-hover p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced leaders from top technology companies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="soft-glass-hover p-6 text-center"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
                Global Presence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Headquartered in San Francisco with teams across North America, Europe, and Asia-Pacific. 
                We serve customers in over 30 countries worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground">San Francisco</span>
                <span className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground">New York</span>
                <span className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground">London</span>
                <span className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground">Singapore</span>
                <span className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground">Sydney</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Join Our Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking to transform your enterprise or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="glow">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/solutions">
                <Button size="lg" variant="outline">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
