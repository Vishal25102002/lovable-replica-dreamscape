import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CommunityShowcase from "@/components/CommunityShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CommunityShowcase />
      <Footer />
    </div>
  );
};

export default Index;
