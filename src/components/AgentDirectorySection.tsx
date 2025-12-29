import { TrendingUp, Tag, Shirt, Cloud } from "lucide-react";
import { useEffect, useState } from "react";

const agents = [
  {
    id: "Agent-R1",
    name: "Replenishment Agent",
    description: "Autonomous inventory optimization that prevents stockouts before they happen.",
    icon: TrendingUp,
    color: "bg-emerald-500",
    bgGradient: "from-emerald-500/20 to-emerald-500/5",
    borderGlow: "hover:shadow-emerald-500/20",
    progressColor: "bg-emerald-500",
    status: "EXECUTING",
    tasks: [
      "Analyzing SKU 402 velocity...",
      "Adjusting safety stock levels",
      "Optimizing DC allocation"
    ],
    impact: "+12% availability",
  },
  {
    id: "Agent-P1",
    name: "Pricing Optimizer",
    description: "Dynamic pricing decisions based on real-time competitive and demand signals.",
    icon: Tag,
    color: "bg-purple-500",
    bgGradient: "from-purple-500/20 to-purple-500/5",
    borderGlow: "hover:shadow-purple-500/20",
    progressColor: "bg-purple-500",
    status: "ACTIVE",
    tasks: [
      "Monitoring competitor prices",
      "Calculating margin impact",
      "Updating price matrix"
    ],
    impact: "+8% gross margin",
  },
  {
    id: "Agent-M1",
    name: "Merchandise Planner",
    description: "AI-powered assortment and allocation decisions at store-SKU level.",
    icon: Shirt,
    color: "bg-blue-500",
    bgGradient: "from-blue-500/20 to-blue-500/5",
    borderGlow: "hover:shadow-blue-500/20",
    progressColor: "bg-blue-500",
    status: "ACTIVE",
    tasks: [
      "Running cluster analysis",
      "Optimizing size curves",
      "Rebalancing inventory"
    ],
    impact: "-22% dead stock",
  },
  {
    id: "Agent-D1",
    name: "Demand Forecaster",
    description: "Multi-horizon forecasting with external signal integration.",
    icon: Cloud,
    color: "bg-orange-500",
    bgGradient: "from-orange-500/20 to-orange-500/5",
    borderGlow: "hover:shadow-orange-500/20",
    progressColor: "bg-orange-500",
    status: "EXECUTING",
    tasks: [
      "Ingesting weather data",
      "Calculating promo uplift",
      "Detecting trend shifts"
    ],
    impact: "92% forecast accuracy",
  },
];

const AgentDirectorySection = () => {
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTaskIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(progressInterval);
  }, []);
  return (
    <section className="relative py-24">
      {/* Connector line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <div className="connector-dot" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-mono font-medium text-sm uppercase tracking-wider">Agent Directory</span>
          <h2 className="text-3xl md:text-4xl font-display text-header mt-4">
            The Momentum Ecosystem
          </h2>
          <p className="text-muted-foreground mt-4">
            Agents that share DNA—each optimizes its domain while collectively maximizing revenue across your retail network.
          </p>
        </div>

        {/* Active Workforce Panel Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${agent.bgGradient} backdrop-blur-xl border border-white/20 shadow-2xl ${agent.borderGlow} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-md" />
              
              {/* Content */}
              <div className="relative p-6 space-y-5">
                {/* Header with ID and Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${agent.color} flex items-center justify-center shadow-lg`}>
                      <agent.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-muted-foreground">{agent.id}</span>
                      <h3 className="font-bold text-header text-lg">{agent.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-700">{agent.status}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">{agent.description}</p>

                {/* Mini Task View */}
                <div className="bg-foreground/5 rounded-2xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Live Tasks</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    {agent.tasks.map((task, taskIndex) => (
                      <div 
                        key={task} 
                        className={`flex items-center gap-2 transition-all duration-300 ${
                          taskIndex === activeTaskIndex ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          taskIndex === activeTaskIndex ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'
                        }`} />
                        {task}
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-3 pt-3 border-t border-border/30">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Processing</span>
                      <span className="text-[10px] font-mono text-muted-foreground">{progress}%</span>
                    </div>
                    <div className="h-1 bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${agent.progressColor} rounded-full transition-all duration-100 ease-linear`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Impact */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">Typical Impact</span>
                  <span className="font-bold text-primary text-lg">{agent.impact}</span>
                </div>
              </div>

              {/* Decorative 3D effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Connector line bottom */}
      <div className="absolute left-1/2 bottom-0 w-0.5 h-20 border-l-2 border-dashed border-border" />
    </section>
  );
};

export default AgentDirectorySection;
