import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";

const contactReasons = [
  "General Inquiry",
  "Product Demo",
  "Partnership Opportunity",
  "Technical Support",
  "Media & Press",
  "Careers"
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          reason: formData.reason,
          message: formData.message,
          formType: "contact"
        }
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours. A confirmation email has been sent to your inbox."
      });
      
      setFormData({ name: "", email: "", company: "", reason: "", message: "" });
    } catch (error: any) {
      console.error("Error sending contact form:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at info@data-hat.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | DataHat AI - Get in Touch</title>
        <meta name="description" content="Contact DataHat AI for product demos, partnership opportunities, or general inquiries. Our team is ready to help transform your enterprise with AI." />
        <meta name="keywords" content="contact DataHat AI, AI demo, enterprise automation inquiry" />
        <link rel="canonical" href="https://datahat.ai/contact" />
        
        <meta property="og:title" content="Contact Us | DataHat AI" />
        <meta property="og:description" content="Get in touch with our team" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://datahat.ai/contact" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact DataHat AI",
            "description": "Get in touch with DataHat AI",
            "url": "https://datahat.ai/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "DataHat AI",
              "email": "hello@datahat.ai",
              "telephone": "+1 (555) 123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "100 Market Street, Suite 300",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94105",
                "addressCountry": "US"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <PageHero
          badge="Get in Touch"
          title="Contact Us"
          description="Have questions about DataHat AI? We'd love to hear from you. Our team typically responds within 24 hours."
        />

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-2"
              >
                <div className="soft-glass p-8">
                  <h2 className="text-2xl font-display text-foreground mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reason">Reason for Contact *</Label>
                        <Select
                          value={formData.reason}
                          onValueChange={(value) => setFormData({ ...formData, reason: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactReasons.map((reason) => (
                              <SelectItem key={reason} value={reason}>
                                {reason}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your needs..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" variant="glow" disabled={isSubmitting} className="gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {/* Direct Contact */}
                <div className="soft-glass p-6">
                  <h3 className="font-semibold text-foreground mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <a href="mailto:info@data-hat.com" className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <Mail className="w-5 h-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm">info@data-hat.com</p>
                      </div>
                    </a>
                    <a href="tel:+15551234567" className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <Phone className="w-5 h-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-sm">+1 (201) 212-5706</p>
                      </div>
                    </a>
                    {/*<div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Office</p>
                        <p className="text-sm">100 Market Street, Suite 300<br />San Francisco, CA 94105</p>
                      </div>
                    </div>*/}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="soft-glass p-6">
                  <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link to="/solutions" className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">Explore Solutions</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </Link>
                    <Link to="/events" className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">Upcoming Events</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </Link>
                  </div>
                </div>

                {/* Office Hours */}
                {/*<div className="soft-glass p-6">
                  <h3 className="font-semibold text-foreground mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </div>*/}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display text-foreground mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out our blog for insights and best practices
            </p>
            <Link to="/blog">
              <Button variant="outline">
                Visit Our Blog
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
