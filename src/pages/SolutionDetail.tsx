import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, TrendingUp, Users, Calculator, Headphones, UserCheck, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import DeployFormDialog from "@/components/DeployFormDialog";
import { solutions } from "@/data/solutions";
import { Helmet } from "react-helmet-async";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Users,
  Calculator,
  Headphones,
  UserCheck,
  Shield
};

const SolutionDetail = () => {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const IconComponent = iconMap[solution.icon] || TrendingUp;
  const relatedSolutions = solutions.filter((s) => solution.relatedSolutions.includes(s.slug));

  return (
    <>
      <Helmet>
        <title>{solution.title} | DataHat AI Solutions</title>
        <meta name="description" content={solution.description} />
        <meta name="keywords" content={`${solution.title}, AI automation, ${solution.category}, enterprise AI`} />
        <link rel="canonical" href={`https://datahat.ai/solutions/${solution.slug}`} />
        
        <meta property="og:title" content={`${solution.title} | DataHat AI`} />
        <meta property="og:description" content={solution.description} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://datahat.ai/solutions/${solution.slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": solution.title,
            "description": solution.description,
            "brand": {
              "@type": "Brand",
              "name": "DataHat AI"
            },
            "category": solution.category,
            "url": `https://datahat.ai/solutions/${solution.slug}`
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <Link 
                to="/solutions" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Solutions
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
                  {solution.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display text-foreground mb-4">
                {solution.title}
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                {solution.subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                {solution.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <DeployFormDialog
                  trigger={
                    <Button size="lg" variant="glow">
                      Get Started
                    </Button>
                  }
                />
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {solution.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-display text-foreground mb-12 text-center">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {solution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="soft-glass p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display text-foreground mb-12 text-center">
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {solution.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 soft-glass"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-display text-foreground mb-12 text-center">
                Use Cases
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {solution.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="soft-glass-hover p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        {relatedSolutions.length > 0 && (
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-display text-foreground mb-12 text-center">
                Related Solutions
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {relatedSolutions.map((related) => {
                  const RelatedIcon = iconMap[related.icon] || TrendingUp;
                  return (
                    <Link
                      key={related.id}
                      to={`/solutions/${related.slug}`}
                      className="group"
                    >
                      <div className="soft-glass-hover p-6 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <RelatedIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {related.subtitle}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Ready to Transform Your {solution.category} Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Deploy AI agents that deliver measurable results from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <DeployFormDialog
                trigger={
                  <Button size="lg" variant="glow">
                    Deploy Now
                  </Button>
                }
              />
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Schedule Demo
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

export default SolutionDetail;
