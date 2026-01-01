import { TrendingUp, Tag, Shirt, Cloud } from "lucide-react";

export const agents = [
  {
    id: "Agent-M1",
    name: "Merchandise Planner",
    description: "AI-powered assortment and allocation decisions at store SKU level.",
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
];
