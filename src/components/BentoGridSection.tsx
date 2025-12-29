import React from "react";
import { RefreshCcw, BarChart3, Tag, Layers } from "lucide-react";

const AgentBentoGrid = () => {
  const agents = [
    {
      title: "Replenishment Agent",
      desc: "Eliminate stockouts with autonomous inventory flow across 1,000+ locations.",
      metric: "22% Reduced Waste",
      icon: <RefreshCcw className="text-blue-400" />,
      size: "col-span-2",
    },
    {
      title: "Pricing Optimizer",
      desc: "Dynamic markdown execution based on SKU velocity.",
      metric: "+8% Gross Margin",
      icon: <Tag className="text-cyan-400" />,
      size: "col-span-1",
    },
    {
      title: "Merchandise Planner",
      desc: "Solve the size-curve problem at a hyper-local level.",
      metric: "98% Size Availability",
      icon: <Layers className="text-indigo-400" />,
      size: "col-span-1",
    },
    {
      title: "Demand Forecaster",
      desc: "Probabilistic forecasting that ingests weather, events, and micro-trends.",
      metric: "92% Accuracy",
      icon: <BarChart3 className="text-emerald-400" />,
      size: "col-span-2",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 max-w-6xl mx-auto">
      {agents.map((agent, i) => (
        <div
          key={i}
          className={`${agent.size} group relative overflow-hidden bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500`}
        >
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
          <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl border border-white/5">{agent.icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{agent.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{agent.desc}</p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter bg-blue-400/10 px-2 py-1 rounded-full">
              {agent.metric}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgentBentoGrid;
