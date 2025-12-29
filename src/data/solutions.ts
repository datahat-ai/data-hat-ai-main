export interface Solution {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  category: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  useCases: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  relatedSolutions: string[];
}

export const solutions: Solution[] = [
  {
    id: "1",
    slug: "revenue-operations",
    title: "Revenue Operations Automation",
    subtitle: "Accelerate Your Revenue Engine",
    description: "Deploy AI agents that optimize every stage of your revenue cycle—from lead qualification to deal closure to renewal management. Eliminate revenue leakage and accelerate growth with intelligent automation.",
    icon: "TrendingUp",
    category: "Revenue",
    features: [
      {
        title: "Intelligent Lead Scoring",
        description: "AI-powered lead scoring that adapts to your business patterns and continuously improves conversion predictions."
      },
      {
        title: "Automated Quote Optimization",
        description: "Generate optimized quotes based on customer segments, competitive dynamics, and margin targets."
      },
      {
        title: "Deal Velocity Tracking",
        description: "Monitor deal health in real-time and trigger interventions when opportunities stall."
      },
      {
        title: "Revenue Forecasting",
        description: "Accurate, AI-driven forecasts that account for pipeline quality, historical patterns, and market conditions."
      }
    ],
    benefits: [
      "40% faster quote-to-cash cycles",
      "25% improvement in forecast accuracy",
      "30% reduction in revenue leakage",
      "60% less time spent on manual data entry"
    ],
    useCases: [
      {
        title: "Enterprise SaaS",
        description: "Manage complex, multi-stakeholder deals with automated approval workflows and intelligent pricing recommendations."
      },
      {
        title: "Manufacturing",
        description: "Streamline configure-price-quote processes for complex product configurations and global pricing."
      },
      {
        title: "Financial Services",
        description: "Ensure compliance while accelerating deal closure with automated risk assessment and approval routing."
      }
    ],
    stats: [
      { value: "40%", label: "Faster Deal Cycles" },
      { value: "3x", label: "Pipeline Visibility" },
      { value: "$2.5M", label: "Avg. Annual Savings" }
    ],
    relatedSolutions: ["customer-success", "finance-operations"]
  },
  {
    id: "2",
    slug: "customer-success",
    title: "Customer Success Intelligence",
    subtitle: "Proactive Retention at Scale",
    description: "Transform customer success from reactive to proactive with AI agents that detect churn signals, personalize engagement, and orchestrate retention strategies automatically.",
    icon: "Users",
    category: "Customer",
    features: [
      {
        title: "Churn Prediction Engine",
        description: "Identify at-risk accounts weeks before traditional indicators with multi-signal AI analysis."
      },
      {
        title: "Health Score Automation",
        description: "Dynamic health scores that update in real-time based on product usage, support interactions, and engagement patterns."
      },
      {
        title: "Personalized Outreach",
        description: "AI-crafted communications tailored to each customer's situation, preferences, and lifecycle stage."
      },
      {
        title: "Expansion Opportunity Detection",
        description: "Identify upsell and cross-sell opportunities based on usage patterns and business triggers."
      }
    ],
    benefits: [
      "35% reduction in churn rate",
      "50% increase in expansion revenue",
      "80% faster response to customer signals",
      "4x more customers managed per CSM"
    ],
    useCases: [
      {
        title: "SaaS Platforms",
        description: "Scale customer success operations without proportionally scaling headcount."
      },
      {
        title: "Professional Services",
        description: "Maintain high-touch relationships while expanding your client portfolio."
      },
      {
        title: "Subscription Businesses",
        description: "Maximize lifetime value through intelligent retention and expansion strategies."
      }
    ],
    stats: [
      { value: "35%", label: "Churn Reduction" },
      { value: "50%", label: "More Expansions" },
      { value: "4x", label: "CSM Efficiency" }
    ],
    relatedSolutions: ["revenue-operations", "support-automation"]
  },
  {
    id: "3",
    slug: "finance-operations",
    title: "Finance Operations Automation",
    subtitle: "Intelligent Financial Workflows",
    description: "Automate complex financial processes with AI agents that handle reconciliation, anomaly detection, compliance monitoring, and reporting—with full auditability.",
    icon: "Calculator",
    category: "Finance",
    features: [
      {
        title: "Automated Reconciliation",
        description: "Match transactions across systems with AI that learns your business rules and handles exceptions intelligently."
      },
      {
        title: "Anomaly Detection",
        description: "Identify unusual patterns in financial data before they become problems."
      },
      {
        title: "Compliance Monitoring",
        description: "Continuous monitoring of financial processes against regulatory requirements and internal policies."
      },
      {
        title: "Intelligent Reporting",
        description: "Auto-generated financial reports with AI-powered insights and variance analysis."
      }
    ],
    benefits: [
      "90% reduction in manual reconciliation time",
      "Detect anomalies 10x faster than traditional methods",
      "100% audit trail for all automated decisions",
      "50% faster month-end close"
    ],
    useCases: [
      {
        title: "Multi-Entity Organizations",
        description: "Consolidate and reconcile across subsidiaries with intelligent matching and exception handling."
      },
      {
        title: "High-Volume Transactions",
        description: "Process thousands of daily transactions with consistent accuracy and full traceability."
      },
      {
        title: "Regulated Industries",
        description: "Maintain compliance while reducing manual overhead through intelligent automation."
      }
    ],
    stats: [
      { value: "90%", label: "Less Manual Work" },
      { value: "50%", label: "Faster Close" },
      { value: "100%", label: "Audit Coverage" }
    ],
    relatedSolutions: ["revenue-operations", "compliance-automation"]
  },
  {
    id: "4",
    slug: "support-automation",
    title: "Support & Service Automation",
    subtitle: "Intelligent Customer Support",
    description: "Deploy AI agents that resolve customer issues autonomously while seamlessly escalating complex cases to human experts with full context.",
    icon: "Headphones",
    category: "Support",
    features: [
      {
        title: "Intelligent Ticket Routing",
        description: "Route issues to the right team based on content, sentiment, customer value, and agent expertise."
      },
      {
        title: "Autonomous Resolution",
        description: "Resolve common issues automatically while maintaining a natural, helpful interaction."
      },
      {
        title: "Context-Rich Escalation",
        description: "When human help is needed, agents provide full context so customers never repeat themselves."
      },
      {
        title: "Knowledge Base Learning",
        description: "Continuously improve from resolved cases to handle more issues autonomously over time."
      }
    ],
    benefits: [
      "60% of tickets resolved autonomously",
      "75% faster first response time",
      "40% reduction in resolution time",
      "25% improvement in CSAT scores"
    ],
    useCases: [
      {
        title: "E-commerce",
        description: "Handle order inquiries, returns, and product questions at any scale."
      },
      {
        title: "Technology Companies",
        description: "Provide instant technical support with intelligent troubleshooting workflows."
      },
      {
        title: "Financial Services",
        description: "Securely handle account inquiries while maintaining compliance requirements."
      }
    ],
    stats: [
      { value: "60%", label: "Auto-Resolution" },
      { value: "75%", label: "Faster Response" },
      { value: "+25pts", label: "CSAT Improvement" }
    ],
    relatedSolutions: ["customer-success", "knowledge-management"]
  },
  {
    id: "5",
    slug: "hr-operations",
    title: "HR Operations Automation",
    subtitle: "Streamlined People Operations",
    description: "Transform HR from administrative overhead to strategic partner with AI agents that automate onboarding, compliance, and employee service delivery.",
    icon: "UserCheck",
    category: "HR",
    features: [
      {
        title: "Automated Onboarding",
        description: "Orchestrate the complete onboarding journey from offer acceptance to productive employee."
      },
      {
        title: "Employee Self-Service",
        description: "Answer HR questions instantly with AI that understands policies and personalizes responses."
      },
      {
        title: "Compliance Tracking",
        description: "Ensure certifications, training, and documentation stay current across your workforce."
      },
      {
        title: "Intelligent Workflows",
        description: "Automate approvals, notifications, and cross-departmental coordination."
      }
    ],
    benefits: [
      "80% reduction in onboarding administrative time",
      "Instant answers to 90% of employee questions",
      "100% compliance tracking accuracy",
      "50% faster approval workflows"
    ],
    useCases: [
      {
        title: "Fast-Growing Companies",
        description: "Scale HR operations without proportionally scaling the HR team."
      },
      {
        title: "Distributed Workforces",
        description: "Provide consistent HR support across time zones and locations."
      },
      {
        title: "Regulated Industries",
        description: "Maintain workforce compliance with automated tracking and alerts."
      }
    ],
    stats: [
      { value: "80%", label: "Admin Time Saved" },
      { value: "90%", label: "Self-Service Rate" },
      { value: "2x", label: "HR Team Efficiency" }
    ],
    relatedSolutions: ["support-automation", "compliance-automation"]
  },
  {
    id: "6",
    slug: "compliance-automation",
    title: "Compliance & Risk Automation",
    subtitle: "Continuous Compliance Assurance",
    description: "Deploy AI agents that monitor compliance in real-time, detect risks early, and automate evidence collection for audits—reducing compliance burden while improving coverage.",
    icon: "Shield",
    category: "Compliance",
    features: [
      {
        title: "Continuous Monitoring",
        description: "Real-time monitoring of processes, transactions, and controls against compliance requirements."
      },
      {
        title: "Risk Detection",
        description: "AI-powered identification of emerging risks before they become compliance issues."
      },
      {
        title: "Automated Evidence Collection",
        description: "Gather and organize audit evidence automatically, reducing preparation time dramatically."
      },
      {
        title: "Policy Enforcement",
        description: "Ensure policies are followed with automated checks and intelligent exception handling."
      }
    ],
    benefits: [
      "70% reduction in audit preparation time",
      "Real-time visibility into compliance status",
      "Early detection of potential violations",
      "Complete audit trail for all automated checks"
    ],
    useCases: [
      {
        title: "Financial Services",
        description: "Meet regulatory requirements with continuous monitoring and automated reporting."
      },
      {
        title: "Healthcare",
        description: "Maintain HIPAA compliance with automated access monitoring and audit trails."
      },
      {
        title: "Enterprise Organizations",
        description: "Manage SOX, GDPR, and other compliance requirements efficiently."
      }
    ],
    stats: [
      { value: "70%", label: "Audit Time Saved" },
      { value: "24/7", label: "Monitoring" },
      { value: "100%", label: "Audit Trail" }
    ],
    relatedSolutions: ["finance-operations", "hr-operations"]
  },
  {
    id: "7",
    slug: "inventory-ai",
    title: "Inventory AI Hub",
    subtitle: "Autonomous Stock Replenishment",
    description: "The central brain that orchestrates inventory across any retail network. Our AI Agent ensures the Right Product is in the Right Place at the Right Time.",
    icon: "Package",
    category: "Inventory",
    features: [
      {
        title: "Maximize Full-Price Revenue",
        description: "Move stock before it needs markdowns. Our AI predicts demand shifts and rebalances inventory proactively."
      },
      {
        title: "Minimize Working Capital",
        description: "Reduce safety stock requirements by up to 30% with predictive accuracy that replaces 'just-in-case' inventory."
      },
      {
        title: "Autonomous Operations",
        description: "24/7 AI-driven decisions that execute automatically, freeing your team to focus on strategy."
      },
      {
        title: "Industry-Specific Intelligence",
        description: "Each vertical has unique challenges. Our AI speaks your industry's language—FMCG, Fast Fashion, or Luxury."
      }
    ],
    benefits: [
      "30% reduction in safety stock requirements",
      "24/7 autonomous inventory decisions",
      "Full-price revenue maximization",
      "Industry-specific AI optimization"
    ],
    useCases: [
      {
        title: "FMCG & CPG",
        description: "From Warehouse to Shelf: Solving the 'Last 50 Feet' Problem with shelf availability AI and spoilage reduction."
      },
      {
        title: "Fast Fashion",
        description: "Chasing the Viral Hit: How to replenish trends in 48 hours with trend velocity tracking and size curve optimization."
      },
      {
        title: "Luxury Fashion",
        description: "Markdown Zero: The mathematical path to full-price sell-through with brand equity protection and scarcity planning."
      }
    ],
    stats: [
      { value: "30%", label: "Less Safety Stock" },
      { value: "24/7", label: "Autonomous Ops" },
      { value: "98%+", label: "Shelf Availability" }
    ],
    relatedSolutions: ["eliminate-stockouts", "reduce-markdowns", "fmcg-inventory", "fast-fashion-inventory", "luxury-inventory"]
  },
  {
    id: "8",
    slug: "eliminate-stockouts",
    title: "Eliminate Stockouts",
    subtitle: "Predict & Prevent Empty Shelves",
    description: "Empty shelves lose sales forever. Our AI predicts stockouts 48 hours in advance and triggers automatic replenishment from the nearest source.",
    icon: "AlertTriangle",
    category: "Inventory",
    features: [
      {
        title: "48-Hour Prediction",
        description: "AI analyzes sell-through velocity, seasonality, and external factors to predict stockouts 48 hours before they occur."
      },
      {
        title: "Smart Sourcing",
        description: "Automatically identifies the optimal source—nearby stores with excess stock or distribution centers—minimizing transfer time and cost."
      },
      {
        title: "Automated Execution",
        description: "Triggers automated transfer orders without human intervention. Stock arrives before the shelf goes empty."
      },
      {
        title: "Continuous Monitoring",
        description: "AI continuously monitors sell-through velocity across all locations, ensuring proactive management."
      }
    ],
    benefits: [
      "98%+ shelf availability guarantee",
      "48-hour advance stockout prediction",
      "4% revenue recovery from prevented stockouts",
      "Automated cross-location transfers"
    ],
    useCases: [
      {
        title: "Lost Sales Prevention",
        description: "Every out-of-stock moment is a sale that walks out the door—often to a competitor. Stop losing customers."
      },
      {
        title: "Customer Loyalty Protection",
        description: "Repeated stockouts train customers to shop elsewhere. 70% of customers switch brands after 2 stockout experiences."
      },
      {
        title: "Data Signal Preservation",
        description: "Stockouts corrupt demand signals, leading to under-ordering and perpetuating the problem. Break the cycle."
      }
    ],
    stats: [
      { value: "98%+", label: "Shelf Availability" },
      { value: "48hr", label: "Advance Prediction" },
      { value: "4%", label: "Revenue Recovery" }
    ],
    relatedSolutions: ["inventory-ai", "reduce-markdowns"]
  },
  {
    id: "9",
    slug: "reduce-markdowns",
    title: "Reduce Markdowns",
    subtitle: "Protect Margins & Brand Value",
    description: "Every markdown is a failure of prediction. Our AI moves stock to where it sells at full price—before discounting becomes necessary.",
    icon: "TrendingDown",
    category: "Inventory",
    features: [
      {
        title: "Early Detection",
        description: "AI identifies items trending toward overstock weeks before traditional systems—while there's still time to act."
      },
      {
        title: "Smart Rebalancing",
        description: "Matches slow-moving inventory with high-affinity stores based on local demand patterns and customer profiles."
      },
      {
        title: "Full-Price Sell-Through",
        description: "Stock sells at full margin in its new location. No discounts. No brand damage. Maximum profitability."
      },
      {
        title: "Proactive Approach",
        description: "Move from reactive clearance sales to proactive inventory optimization that protects margins."
      }
    ],
    benefits: [
      "50% markdown reduction achieved",
      "95% full-price sell-through rate",
      "15% margin improvement",
      "Brand equity protection"
    ],
    useCases: [
      {
        title: "Margin Protection",
        description: "A 30% markdown on slow-moving inventory can wipe out the profit margin of 3 full-price sales. Protect your margins."
      },
      {
        title: "Brand Value Preservation",
        description: "Constant sales train customers to wait for discounts. Your brand becomes associated with 'sale' not 'value'."
      },
      {
        title: "Proactive Inventory Management",
        description: "Traditional systems only flag problems when it's too late. Act while there's still time to maximize value."
      }
    ],
    stats: [
      { value: "50%", label: "Markdown Reduction" },
      { value: "95%", label: "Full-Price Sales" },
      { value: "15%", label: "Margin Improvement" }
    ],
    relatedSolutions: ["inventory-ai", "eliminate-stockouts"]
  },
  {
    id: "10",
    slug: "fmcg-inventory",
    title: "FMCG & CPG Inventory AI",
    subtitle: "From Warehouse to Shelf",
    description: "Solving the 'Last 50 Feet' Problem. For Supply Chain Directors at leading FMCG companies like P&G, Unilever, and Carrefour. Our AI ensures shelf availability while minimizing spoilage.",
    icon: "ShoppingCart",
    category: "Inventory",
    features: [
      {
        title: "Shelf Availability AI",
        description: "Predict stockouts 48 hours in advance and trigger automatic replenishment from the nearest distribution point."
      },
      {
        title: "Spoilage Reduction",
        description: "Dynamic routing of near-expiry products to high-velocity stores, reducing waste by up to 35%."
      },
      {
        title: "Trade Promotion Forecasting",
        description: "Accurately predict promotional lift and pre-position inventory to capture 100% of promotional demand."
      },
      {
        title: "Expiry Management",
        description: "Perishables lost to expiration cost FMCG retailers billions annually. Our AI predicts shelf-life risks and optimizes distribution."
      }
    ],
    benefits: [
      "98%+ shelf availability guarantee",
      "35% waste reduction achieved",
      "100% promotional demand capture",
      "Optimized distribution routes"
    ],
    useCases: [
      {
        title: "Expiry & Spoilage Prevention",
        description: "Perishables lost to expiration cost FMCG retailers billions annually. AI predicts shelf-life risks and optimizes distribution."
      },
      {
        title: "Shelf Availability Optimization",
        description: "Empty shelves lose sales forever. Real-time demand sensing ensures products are always where customers expect them."
      },
      {
        title: "Promotion Management",
        description: "Trade promotions often lead to stockouts or overstock. AI-driven forecasting aligns inventory with promotional lift."
      }
    ],
    stats: [
      { value: "98%+", label: "Shelf Availability" },
      { value: "35%", label: "Waste Reduction" },
      { value: "100%", label: "Promo Capture" }
    ],
    relatedSolutions: ["inventory-ai", "eliminate-stockouts", "reduce-markdowns"]
  },
  {
    id: "11",
    slug: "fast-fashion-inventory",
    title: "Fast Fashion Inventory AI",
    subtitle: "Chasing the Viral Hit",
    description: "How to Replenish Trends in 48 Hours. For Merchandisers at Zara, H&M, ASOS, and leading fast fashion retailers. Speed is everything—our AI keeps you ahead of the trend.",
    icon: "Zap",
    category: "Inventory",
    features: [
      {
        title: "Trend Velocity Tracking",
        description: "Real-time social listening combined with POS data identifies emerging trends before they peak."
      },
      {
        title: "Size Curve Optimization",
        description: "Store-level size profiling ensures every location has the right size mix for its customer base."
      },
      {
        title: "Inter-Store Balancing",
        description: "Automated stock transfers between stores based on real-time sell-through velocity."
      },
      {
        title: "Trend Prediction",
        description: "AI identifies rising trends 2 weeks before they peak, giving you time to act."
      }
    ],
    benefits: [
      "48-hour trend replenishment",
      "Perfect size mix per store",
      "2-week trend prediction window",
      "Minimized markdown exposure on fading trends"
    ],
    useCases: [
      {
        title: "Trend Capture",
        description: "Viral moments create sudden demand spikes. Missing the trend window means lost sales and brand relevance."
      },
      {
        title: "Overstock Prevention",
        description: "Yesterday's must-have is today's markdown liability. Speed-to-decision determines profitability."
      },
      {
        title: "Size Optimization",
        description: "The wrong size in the wrong store is as good as no stock. Size curve optimization is critical for fashion retail."
      }
    ],
    stats: [
      { value: "48hr", label: "Replenishment" },
      { value: "100%", label: "Size Match" },
      { value: "2wk", label: "Trend Lead" }
    ],
    relatedSolutions: ["inventory-ai", "reduce-markdowns", "luxury-inventory"]
  },
  {
    id: "12",
    slug: "luxury-inventory",
    title: "Luxury Fashion Inventory AI",
    subtitle: "Markdown Zero Strategy",
    description: "The Mathematical Path to Full-Price Sell-Through. For CFOs at LVMH, Kering, Richemont, and leading luxury houses. Protect brand equity while maximizing revenue.",
    icon: "Gem",
    category: "Inventory",
    features: [
      {
        title: "Brand Equity Protection",
        description: "AI-driven rebalancing moves slow sellers to high-affinity stores before markdowns become necessary."
      },
      {
        title: "Scarcity Planning",
        description: "Mathematically optimized stock levels maintain exclusivity while maximizing full-price sell-through."
      },
      {
        title: "Clienteling Intelligence",
        description: "Predict VIP client preferences and ensure products are available at their preferred stores."
      },
      {
        title: "Exclusivity Management",
        description: "Too available = not exclusive. Too scarce = lost sales. The balance is mathematical precision."
      }
    ],
    benefits: [
      "Zero markdown achievement possible",
      "Managed exclusivity optimization",
      "VIP client experience enhancement",
      "Full-price sell-through maximization"
    ],
    useCases: [
      {
        title: "Brand Equity Preservation",
        description: "Every markdown damages brand perception. 70% off racks tell customers your products aren't worth full price."
      },
      {
        title: "Scarcity Management",
        description: "Too available = not exclusive. Too scarce = lost sales. Mathematical precision determines the optimal balance."
      },
      {
        title: "Clienteling Excellence",
        description: "VIP clients expect their preferences anticipated and products available when they arrive."
      }
    ],
    stats: [
      { value: "0%", label: "Target Markdowns" },
      { value: "100%", label: "Exclusivity" },
      { value: "VIP", label: "Experience" }
    ],
    relatedSolutions: ["inventory-ai", "reduce-markdowns", "fast-fashion-inventory"]
  }
];

export const solutionCategories = [
  "All",
  "Revenue",
  "Customer",
  "Finance",
  "Support",
  "HR",
  "Compliance",
  "Inventory"
];
