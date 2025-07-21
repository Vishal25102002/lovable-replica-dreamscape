import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Copy, Users } from "lucide-react";

const CommunityShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "modern-portfolio-showcase",
      category: "Portfolio",
      remixes: "12,840",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      author: {
        name: "Emily Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 2,
      title: "saas-landing-generator",
      category: "Landing Page",
      remixes: "8,920",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      author: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b820?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 3,
      title: "creative-agency-template",
      category: "Business",
      remixes: "6,750",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      author: {
        name: "Jessica Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 4,
      title: "e-commerce-storefront",
      category: "E-commerce",
      remixes: "9,430",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      author: {
        name: "Michael Torres",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 5,
      title: "blog-publishing-platform",
      category: "Blog",
      remixes: "5,280",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      author: {
        name: "Sarah Martinez",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b820?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 6,
      title: "startup-dashboard-ui",
      category: "Dashboard",
      remixes: "7,640",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      author: {
        name: "Alex Thompson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
      }
    }
  ];

  const categories = [
    "Popular", "Discover", "Portfolio", "Landing Page", "Business", "E-commerce", "Blog", "Dashboard"
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">From the Community</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={index === 0 ? "default" : "secondary"}
                className={index === 0 ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Badge>
            ))}
            <Button variant="outline" size="sm" className="ml-auto">
              View All
            </Button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Hover Actions */}
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="bg-white/90 text-primary">
                    <Copy className="w-3 h-3 mr-1" />
                    Remix
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 text-primary">
                    <Eye className="w-3 h-3 mr-1" />
                    Preview
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={project.author.avatar}
                      alt={project.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{project.author.name}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Users className="w-3 h-3 mr-1" />
                    {project.remixes} Remixes
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;