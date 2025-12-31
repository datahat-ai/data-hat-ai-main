import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DataActionGapSection from "@/components/DataActionGapSection";
import ROICalculatorSection from "@/components/ROICalculatorSection";
import IndustryExpertiseSection from "@/components/IndustryExpertiseSection";
import SolutioningTransition from "@/components/SolutioningTransition";
import AgentDirectorySection from "@/components/AgentDirectorySection";
import HumanInLoopSection from "@/components/HumanInLoopSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ROICalculatorSection />
        <IndustryExpertiseSection />
        <DataActionGapSection />
        <SolutioningTransition />
        <AgentDirectorySection />
        <HumanInLoopSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;