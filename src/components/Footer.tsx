import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Lovable</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Create beautiful apps and websites by chatting with AI. Turn your ideas into reality faster than ever.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="hover:bg-muted transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-muted transition-colors duration-200">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-muted transition-colors duration-200">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-muted transition-colors duration-200">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Templates</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Tutorials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates and features delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-muted/50 border-border hover:border-primary/50 transition-colors duration-200"
              />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Lovable. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;