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

      <div className="bg-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <img src={datahatLogoWhite} alt="DataHat AI" className="h-8 mb-4 md:mb-0" />
            <p className="text-background/40 text-sm">© 2024 DataHat AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
