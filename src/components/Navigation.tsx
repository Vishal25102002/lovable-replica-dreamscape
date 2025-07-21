import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full px-6 py-4 backdrop-blur-sm bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold text-foreground">Lovable</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Community
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Enterprise
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Learn
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Launched
          </a>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;