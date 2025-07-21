import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Paperclip, Globe, ArrowUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
            Build something{" "}
            <span className="inline-flex items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-2xl md:text-3xl">❤️</span>
              </div>
              <span className="text-primary">Lovable</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Create apps and websites by chatting with AI
          </p>
        </div>

        {/* Chat Interface Mockup */}
        <div className="mb-12 animate-fade-in [animation-delay:0.2s]">
          <Card className="bg-card border-border shadow-elegant p-6 max-w-2xl mx-auto hover:shadow-glow transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              <div className="relative">
                <textarea
                  className="w-full h-24 bg-transparent border-2 border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30"
                  placeholder="Ask Lovable to create a modern portfolio website..."
                  readOnly
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-muted-foreground hover:text-foreground hover:bg-muted border-border"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Attach
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-muted-foreground hover:text-foreground hover:bg-muted border-border"
                  >
                    <Paperclip className="w-4 h-4 mr-2" />
                    Files
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-muted-foreground hover:text-foreground hover:bg-muted border-border"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Public
                  </Button>
                </div>
                
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;