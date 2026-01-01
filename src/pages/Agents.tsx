import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentDirectorySection from "@/components/AgentDirectorySection";
import { Helmet } from "react-helmet-async";

const Agents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Orkestra AI Agents - The Workforce of the Future</title>
        <meta
          name="description"
          content="Meet the intelligent AI Agents powering the Orkestra ecosystem. From merchandise planning to pricing optimization, our agents work 24/7 to maximize your retail performance."
        />
        <link rel="canonical" href="https://data-hat.com/agents" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Simple Page Header */}
        <section className="py-12 md:py-20 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-header mb-6">
            Meet Your New <span className="text-gradient">AI Workforce</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Orkestra isn't just software. It's a team of specialized AI Agents that work autonomously to optimize every aspect of your retail operations.
          </p>
        </section>

        {/* Reuse the existing directory section */}
        <div className="-mt-20">
             <AgentDirectorySection />
        </div>
       
      </main>
      
      <Footer />
    </div>
  );
};

export default Agents;
