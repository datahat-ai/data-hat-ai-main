import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Lightbulb, Users, Award, Globe, Zap, Bot, TrendingUp, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import kshitijKumarAvatar from "@/assets/khitij-kumar.jpg";

const whyChooseUs = [
  {
    icon: Lightbulb,
    title: "Smarter Decisions with Your Data",
    description: "Transform raw data into actionable intelligence that drives strategic business decisions."
  },
  {
    icon: Zap,
    title: "Generate AI Impact Faster",
    description: "Accelerate your AI journey from concept to production with our proven methodologies."
  },
  {
    icon: Bot,
    title: "AI-Driven Process Automation",
    description: "Automate complex enterprise workflows with intelligent AI agents that learn and adapt."
  },
  {
    icon: TrendingUp,
    title: "Complexity to Clarity",
    description: "Turn complex data ecosystems into clear, actionable insights that drive measurable impact."
  }
];

const missionPoints = [
  { icon: Bot, title: "Develop Autonomous Agents" },
  { icon: Zap, title: "Automate Enterprise Workflows" },
  { icon: TrendingUp, title: "Predict Data Insights" },
  { icon: Target, title: "Deliver Strategic Impact" }
];

const achievements = [
  { value: "Top 100", label: "Chief Data Officers (2023, 2024)" },
  { value: "Top 100", label: "Data Influencers (2024)" },
  { value: "Top 40", label: "Chief AI/Analytics Officers" },
  { value: "Member", label: "Gartner Data and AI Board" }
];



const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Data-Hat AI - From Idea To Production</title>
        <meta name="description" content="Data-Hat AI assists enterprises in navigating the AI landscape and building profitable, scalable Enterprise AI solutions. Led by Kshitij Kumar, a Top 100 CDO." />
        <meta name="keywords" content="Data-Hat AI, about us, AI company, enterprise automation, AI team, Kshitij Kumar, generative AI, AI agents" />
        <link rel="canonical" href="https://data-hat.com/about" />
        
        <meta property="og:title" content="About Us | Data-Hat AI" />
        <meta property="og:description" content="From Idea To Production - Enterprise AI Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://data-hat.com/about" />
        <meta property="og:image" content="/og-image.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Data-Hat AI",
            "description": "Enterprise AI automation platform",
            "url": "https://data-hat.com",
            "founder": {
              "@type": "Person",
              "name": "Kshitij Kumar"
            },
            "sameAs": [
              "https://www.linkedin.com/company/data-hat-ai/",
              "https://x.com/Data_hat_ai",
              "https://www.youtube.com/@Data-Hat-AI"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <PageHero
          badge="About Us"
          title="From Idea To Production"
          description="Generative AI solutions are reshaping how we work, and AI Agents are the future. Data-Hat AI assists Enterprises in navigating the AI landscape and building profitable and scalable Enterprise AI solutions."
        />

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Improve Operational Efficiency and Reduce Cost. Faster.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="soft-glass-hover p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="soft-glass p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-display text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To redefine enterprise decision-making by empowering every business team with intelligent, 
                  responsible, and human-like AI agents that seamlessly understand, analyze, and act on data 
                  and transform complexity into clarity and insight into impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="soft-glass p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-display text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Effective utilization of Data through AI for improved business performance.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {missionPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <point.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{point.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Kshitij Kumar */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">About Kshitij Kumar</h2>
                <p className="text-lg text-muted-foreground">A Top 100 CDO | Data, Generative AI, and AI Agents Visionary</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-1"
                >
                  <div className="soft-glass p-6 text-center">
                    <img
                      src={kshitijKumarAvatar}
                      alt="Kshitij Kumar - Founder & CEO"
                      className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-foreground">Kshitij Kumar (KK)</h3>
                    <p className="text-primary font-medium">Founder & CEO</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="md:col-span-2 space-y-6"
                >
                  <div className="soft-glass p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Kshitij Kumar (KK) has served as Chief Data Officer and Enterprise Board member across 
                      prominent organizations including Haleon, Farfetch and OneFootball. Throughout his career, 
                      he has consistently demonstrated exceptional expertise and innovation in leveraging Data, 
                      AI/Generative AI, Machine Learning technologies, Responsible AI, and AI Governance to 
                      drive transformative business outcomes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With over 2 decades of experience in introducing and implementing Data and AI solutions 
                      in Large Enterprises in the US, UK and Europe, KK leads a global team of AI and ML experts 
                      designing Enterprise level AI, GenAI and AI Agent solutions.
                    </p>
                  </div>
                  
                  <div className="soft-glass p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">The Idea Behind Data Hat AI</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      As KK journeyed through different industries (from pharma to sports and from manufacturing 
                      to retail), he realized that the core problem that Enterprises faced was Big Data. Before 
                      an Enterprise could begin with any AI solution, they needed to clean, sort and connect data. 
                      So, he gathered the World's best AI and ML engineers to form Data-Hat AI, an Enterprise-level 
                      solution provider, developing GenAI and AI Agent tools that monetize Data and automate 
                      end-to-end business processes.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">Achievements</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognized globally for excellence in Data and AI leadership
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {achievements.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We go beyond product development. We collaborate with stakeholders and technology leaders 
              to build a Data and AI strategy, develop an MVP, and establish ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="glow">
                  Consult For AI
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