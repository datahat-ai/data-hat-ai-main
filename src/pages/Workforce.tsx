import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const agents = [
  {
    name: "Agent Apex",
    role: "Replenishment",
    description: "Your tireless inventory guardian. Apex monitors every SKU across every store, predicting stockouts before they happen and placing orders at the optimal moment.",
    skills: ["Lead-time optimization", "Safety-stock balancing", "Supplier coordination", "Demand sensing"],
    decisions: [
      { action: "Reorder triggered", sku: "SKU-7892", store: "Store 402", impact: "+$12,400" },
      { action: "Safety stock adjusted", sku: "SKU-3421", store: "Region West", impact: "-$8,200 in carrying cost" },
      { action: "Emergency order placed", sku: "SKU-1204", store: "Store 127", impact: "+$5,600" },
    ],
    totalImpact: "$847,000",
    gradient: "from-primary to-primary/60",
  },
  {
    name: "Agent Atlas",
    role: "Merchandise Planning",
    description: "The master of product placement. Atlas ensures the right products reach the right stores in the right quantities, maximizing sell-through rates.",
    skills: ["Store clustering", "Size curve optimization", "Seasonal planning", "Assortment rationalization"],
    decisions: [
      { action: "Allocation optimized", sku: "Category: Apparel", store: "150 stores", impact: "+18% sell-through" },
      { action: "Size mix adjusted", sku: "SKU-8834", store: "Urban stores", impact: "-23% markdowns" },
      { action: "New store allocation", sku: "Full catalog", store: "Store 892", impact: "$94,000 projected" },
    ],
    totalImpact: "$1.2M",
    gradient: "from-secondary to-secondary/60",
  },
  {
    name: "Agent Oracle",
    role: "Demand Forecasting",
    description: "Your crystal ball for retail. Oracle combines historical data, weather patterns, events, and market signals to predict demand with unprecedented accuracy.",
    skills: ["ML forecasting", "Promotional impact modeling", "External signal integration", "Trend detection"],
    decisions: [
      { action: "Demand spike predicted", sku: "Category: Beverages", store: "All stores", impact: "Weekend event +40%" },
      { action: "Trend identified", sku: "Plant-based products", store: "Suburban", impact: "+127% YoY growth" },
      { action: "Weather adjustment", sku: "Seasonal items", store: "Northeast", impact: "7-day forecast updated" },
    ],
    totalImpact: "87% Accuracy",
    gradient: "from-primary/80 to-secondary/80",
  },
];

const comparisons = [
  { feature: "Execution Speed", traditional: "Days to weeks", agentic: "Seconds to minutes" },
  { feature: "Context-Awareness", traditional: "Point-in-time snapshots", agentic: "Continuous real-time" },
  { feature: "Manual Work Required", traditional: "50+ hours/week", agentic: "< 2 hours/week" },
  { feature: "Scalability", traditional: "Linear with headcount", agentic: "Infinite with compute" },
];

const integrations = [
  "SAP", "Oracle", "NetSuite", "Microsoft Dynamics",
  "Shopify", "Salesforce", "Workday", "Excel",
  "Snowflake", "Databricks", "AWS", "Google Cloud",
];

const Workforce = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      
      <main className="pt-24">
        {/* Page Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-muted-foreground">3 Agents Ready to Deploy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Your New{" "}
              <span className="gradient-text">Operations Team</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              High-fidelity agents designed to plug into your existing ERP and 
              take over manual workflows. No training required.
            </p>
          </div>
        </section>
        
        {/* Agent Profile Cards */}
        <section className="py-16">
          <div className="container mx-auto px-6 space-y-12">
            {agents.map((agent, index) => (
              <div 
                key={index}
                className="glass-card overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Left - Identity */}
                  <div className={`p-8 lg:p-12 bg-gradient-to-br ${agent.gradient}/10`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center`}>
                        <span className="text-2xl font-bold text-primary-foreground">
                          {agent.name.split(" ")[1][0]}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{agent.name}</h2>
                        <p className="text-muted-foreground">{agent.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {agent.description}
                    </p>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                        Core Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-4 py-2 text-sm rounded-lg bg-white/10 text-foreground border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right - Workspace */}
                  <div className="p-8 lg:p-12 border-l border-white/10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold">Recent Decisions Made</h3>
                      <span className="text-xs text-muted-foreground">Last 24 hours</span>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {agent.decisions.map((decision, decisionIndex) => (
                        <div 
                          key={decisionIndex}
                          className="p-4 rounded-lg bg-white/5 border border-white/5"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-sm">{decision.action}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {decision.sku} • {decision.store}
                              </p>
                            </div>
                            <span className={`text-sm font-semibold ${
                              decision.impact.startsWith("+") ? "text-secondary" : "text-primary"
                            }`}>
                              {decision.impact}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10">
                      <span className="text-sm text-muted-foreground">Total Financial Impact</span>
                      <span className="text-2xl font-bold gradient-text">{agent.totalImpact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Capabilities Matrix */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Traditional Software</span> vs Agentic AI
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See why forward-thinking retailers are making the switch.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto glass-card overflow-hidden">
              <div className="grid grid-cols-3 text-sm font-semibold border-b border-white/10">
                <div className="p-4 text-muted-foreground">Capability</div>
                <div className="p-4 text-center border-x border-white/10">Traditional</div>
                <div className="p-4 text-center text-primary">Agentic AI</div>
              </div>
              
              {comparisons.map((row, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-3 text-sm border-b border-white/10 last:border-b-0"
                >
                  <div className="p-4 font-medium">{row.feature}</div>
                  <div className="p-4 text-center text-muted-foreground border-x border-white/10">
                    {row.traditional}
                  </div>
                  <div className="p-4 text-center text-secondary font-medium">
                    {row.agentic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Integration Map */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Plugs Into Your <span className="gradient-text">Existing Stack</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                No rip-and-replace. Our agents connect to your current systems in days, not months.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Center brain */}
              <div className="relative w-32 h-32 mx-auto mb-12">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse-glow" />
                <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                    <path d="M12 2a10 10 0 0 1 10 10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-semibold whitespace-nowrap">
                  Agent Brain
                </p>
              </div>
              
              {/* Integration grid */}
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {integrations.map((integration, index) => (
                  <div 
                    key={index}
                    className="glass-card-hover p-4 text-center group"
                  >
                    <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                        {integration[0]}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{integration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Safety & Guardrails */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built With <span className="gradient-text">Enterprise Guardrails</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Full transparency and control. You set the boundaries, agents operate within them.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card-hover p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Explainable Logic</h3>
                <p className="text-muted-foreground mb-4">
                  Every decision comes with a complete audit trail. Understand why an agent 
                  made a recommendation, what data it considered, and its confidence level.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Full decision reasoning logs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Data source attribution
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Confidence scoring
                  </li>
                </ul>
              </div>
              
              <div className="glass-card-hover p-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Human Overrides</h3>
                <p className="text-muted-foreground mb-4">
                  Set thresholds where agents require your approval. High-value orders, 
                  new suppliers, or unusual patterns automatically escalate to your team.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Configurable approval thresholds
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    One-click overrides
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Role-based permissions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer CTA */}
        <section className="py-24 bg-gradient-to-b from-primary/20 to-background border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your <span className="gradient-text">30-Day Pilot</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Deploy one agent, measure the impact, then scale across your operation. 
              No long-term commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glow" size="xl">
                Schedule Demo
              </Button>
              <Button variant="outline" size="xl">
                Talk to Sales
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              Average time to first value: 3 days
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Workforce;