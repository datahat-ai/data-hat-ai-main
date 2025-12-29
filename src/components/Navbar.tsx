import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import DeployFormDialog from "./DeployFormDialog";
import datahatLogo from "@/assets/datahat-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={datahatLogo} alt="DataHat AI" className="h-8" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Platform</Link>
            <Link to="/workforce" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Momentum Agents</Link>
            <Link to="/solutions" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Solutions</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Blog</Link>
            <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Events</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">About</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <DeployFormDialog
              trigger={<Button size="sm" variant="glow">Deploy Momentum</Button>}
            />
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
