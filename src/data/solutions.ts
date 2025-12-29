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
  }
];

export const solutionCategories = [
  "All",
  "Revenue",
  "Customer",
  "Finance",
  "Support",
  "HR",
  "Compliance"
];
