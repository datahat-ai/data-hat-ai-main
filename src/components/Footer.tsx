import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Youtube, Twitter } from "lucide-react";
import DeployFormDialog from "./DeployFormDialog";
import datahatLogoWhite from "@/assets/datahat-logo-white.png";

const Footer = () => {
  return (
    <footer className="relative">
      <section className="bg-gradient-to-br from-primary to-blue-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Deploy your first AI Agent in 48 hours.
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Start your pilot program with zero upfront commitment.
          </p>
          <DeployFormDialog
            trigger={
              <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Start Your Pilot
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            }
          />
        </div>
      </section>

      <div className="bg-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <img src={datahatLogoWhite} alt="DataHat AI" className="h-8 mb-4" />
              <p className="text-background/60 text-sm mb-6">
                AI-powered agents for enterprise automation.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/data-hat-ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors text-background"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://x.com/Data_hat_ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors text-background"
                  aria-label="X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@Data-Hat-AI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors text-background"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href="https://medium.com/@data-hat-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors text-background"
                  aria-label="Medium"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-background font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-background/60 hover:text-background text-sm transition-colors">Home</Link></li>
                <li><Link to="/agents" className="text-background/60 hover:text-background text-sm transition-colors">Orkestra Agents</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-background font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-background/60 hover:text-background text-sm transition-colors">Blog</Link></li>
                <li><Link to="/events" className="text-background/60 hover:text-background text-sm transition-colors">Events & Webinars</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-background font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-background/60 hover:text-background text-sm transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-background/60 hover:text-background text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-background/40 text-sm">© 2024 DataHat AI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-background/40 hover:text-background/60 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-background/40 hover:text-background/60 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
