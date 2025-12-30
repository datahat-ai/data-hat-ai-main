import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DeployFormDialog from "./DeployFormDialog";
import datahatLogoWhite from "@/assets/datahat-logo-white.png";

const Footer = () => {
  return (
    <footer className="relative">
      <section className="bg-gradient-to-br from-primary to-blue-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Deploy your first Agent in 48 hours.
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
              <p className="text-background/60 text-sm">
                AI-powered agents for enterprise automation.
              </p>
            </div>
            
            <div>
              <h4 className="text-background font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-background/60 hover:text-background text-sm transition-colors">Home</Link></li>
                <li><Link to="/workforce" className="text-background/60 hover:text-background text-sm transition-colors">Torque Agents</Link></li>
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
