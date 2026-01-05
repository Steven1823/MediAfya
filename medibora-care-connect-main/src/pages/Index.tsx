import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhatIsMediboraSection from "@/components/WhatIsMediboraSection";
import EmmaSection from "@/components/EmmaSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import VisionSection from "@/components/VisionSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <ProblemSection />
        <WhatIsMediboraSection />
        <EmmaSection />
        <HowItWorksSection />
        <WhoWeServeSection />
        <VisionSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
