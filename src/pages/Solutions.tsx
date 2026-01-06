import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Calculator, Headphones, UserCheck, Shield, Package, AlertTriangle, TrendingDown, ShoppingCart, Zap, Gem } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { solutions, solutionCategories } from "@/data/solutions";
import { Helmet } from "react-helmet-async";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Users,
  Calculator,
  Headphones,
  UserCheck,
  Shield,
  Package,
  AlertTriangle,
  TrendingDown,
  ShoppingCart,
  Zap,
  Gem
};

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSolutions = solutions.filter((solution) => {
    return selectedCategory === "All" || solution.category === selectedCategory;
  });

  return (
    <>
      <Helmet>
        <title>Solutions | DataHat AI - Enterprise AI Automation Solutions</title>
        <meta name="description" content="Discover AI-powered automation solutions for revenue operations, customer success, finance, support, HR, and compliance. Transform your enterprise with intelligent agents." />
        <meta name="keywords" content="AI solutions, enterprise automation, revenue operations, customer success, finance automation" />
        <link rel="canonical" href="https://data-hat.com/solutions" />
        
        <meta property="og:title" content="Solutions | DataHat AI" />
        <meta property="og:description" content="Enterprise AI automation solutions for every department" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://data-hat.com/solutions" />
        <meta property="og:image" content="/og-solutions.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-solutions.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "DataHat AI Solutions",
            "description": "Enterprise AI automation solutions",
            "url": "https://data-hat.com/solutions",
            "numberOfItems": solutions.length,
            "itemListElement": solutions.map((solution, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": solution.title,
                "description": solution.description,
                "url": `https://data-hat.com/solutions/${solution.slug}`
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <PageHero
          badge="AI-Powered Automation"
          title="Enterprise Solutions"
          description="Deploy intelligent AI agents across your organization. From revenue operations to compliance, our solutions transform how enterprises operate."
        />

        <section className="py-12">
          <div className="container mx-auto px-6">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {solutionCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index) => {
                const IconComponent = iconMap[solution.icon] || TrendingUp;
                
                return (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/solutions/${solution.slug}`} className="block group h-full">
                      <div className="soft-glass-hover h-full p-8 flex flex-col">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-7 h-7 text-primary" />
                        </div>
                        
                        <span className="text-sm text-primary font-medium mb-2">
                          {solution.category}
                        </span>
                        
                        <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {solution.title}
                        </h2>
                        
                        <p className="text-muted-foreground mb-6 flex-grow">
                          {solution.subtitle}
                        </p>

                        {/* Stats Preview */}
                        <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-border">
                          {solution.stats.slice(0, 3).map((stat, i) => (
                            <div key={i} className="text-center">
                              <p className="text-lg font-bold text-primary">{stat.value}</p>
                              <p className="text-xs text-muted-foreground">{stat.label}</p>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center text-primary font-medium">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can help you design and deploy AI agents tailored to your specific business needs.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="glow">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Solutions;
