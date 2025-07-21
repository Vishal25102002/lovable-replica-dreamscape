import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full px-6 py-6 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-xl">L</span>
          </div>
          <span className="text-2xl font-bold text-foreground tracking-tight">Lovable</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
            Community
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
            Enterprise
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
            Learn
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
            Launched
          </a>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200">
            Log in
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200">
            Get started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;