import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CommunityShowcase from "@/components/CommunityShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CommunityShowcase />
    </div>
  );
};

export default Index;
