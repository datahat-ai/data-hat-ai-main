import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DataActionGapSection from "@/components/DataActionGapSection";
import ROICalculatorSection from "@/components/ROICalculatorSection";
import IndustryExpertiseSection from "@/components/IndustryExpertiseSection";
import SolutioningTransition from "@/components/SolutioningTransition";
import AgentDirectorySection from "@/components/AgentDirectorySection";
import HumanInLoopSection from "@/components/HumanInLoopSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DataHat AI - Enterprise AI Agents & Automation</title>
        <meta name="description" content="DataHat AI builds autonomous AI agents that transform enterprise operations. From inventory management to workforce automation, we deliver ROI-driven AI solutions." />
        <meta name="keywords" content="AI agents, enterprise AI, autonomous agents, inventory AI, workforce automation, DataHat" />
        <link rel="canonical" href="https://data-hat.com/" />
        
        <meta property="og:title" content="DataHat AI - Enterprise AI Agents & Automation" />
        <meta property="og:description" content="Building the autonomous enterprise with intelligent AI agents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://data-hat.com/" />
        <meta property="og:image" content="/og-image.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <DataActionGapSection />
        <ROICalculatorSection />
        <IndustryExpertiseSection />
        <SolutioningTransition />
        <AgentDirectorySection />
        <HumanInLoopSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;