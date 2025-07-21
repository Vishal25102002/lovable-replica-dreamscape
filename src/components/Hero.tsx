import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Paperclip, Globe, ArrowUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Build something{" "}
            <span className="inline-flex items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3">
                <span className="text-2xl md:text-3xl">❤️</span>
              </div>
              Lovable
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light">
            Create apps and websites by chatting with AI
          </p>
        </div>

        {/* Chat Interface Mockup */}
        <div className="mb-12 animate-fade-in [animation-delay:0.2s]">
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-glow p-6 max-w-2xl mx-auto hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              <div className="relative">
                <textarea
                  className="w-full h-24 bg-gradient-to-r from-white/10 to-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-[inset_0_2px_15px_rgba(0,0,0,0.15)]"
                  placeholder="Ask Lovable to create a modern portfolio website..."
                  readOnly
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white/80 hover:text-white hover:bg-white/10 border border-white/20"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Attach
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white/80 hover:text-white hover:bg-white/10 border border-white/20"
                  >
                    <Paperclip className="w-4 h-4 mr-2" />
                    Attach
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white/80 hover:text-white hover:bg-white/10 border border-white/20"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Public
                  </Button>
                </div>
                
                <Button
                  size="sm"
                  className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
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