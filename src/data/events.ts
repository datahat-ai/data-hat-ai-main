export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  type: "webinar" | "workshop" | "conference" | "meetup";
  date: string;
  time: string;
  duration: string;
  location: string;
  isVirtual: boolean;
  speakers: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    bio: string;
  }[];
  agenda: {
    time: string;
    title: string;
    description: string;
  }[];
  featuredImage: string;
  registrationUrl: string;
  isPast: boolean;
  recordingUrl?: string;
  tags: string[];
}

export const events: Event[] = [
  {
    id: "1",
    slug: "ai-agents-enterprise-2025",
    title: "AI Agents in Enterprise: 2025 Outlook",
    description: "Join industry leaders for an exclusive look at how AI agents are transforming enterprise operations in 2025.",
    longDescription: `
      <p>The enterprise landscape is evolving rapidly, and AI agents are at the forefront of this transformation. Join us for an exclusive webinar where industry leaders share their insights on deploying AI agents at scale.</p>
      
      <p>This 90-minute session will cover the latest trends, real-world case studies, and practical strategies for implementing AI agents in your organization. Whether you're just starting your AI journey or looking to scale existing deployments, this webinar will provide actionable insights.</p>
      
      <h3>What You'll Learn:</h3>
      <ul>
        <li>The current state of AI agents in enterprise environments</li>
        <li>Key success factors from organizations that have deployed at scale</li>
        <li>Common pitfalls and how to avoid them</li>
        <li>A framework for evaluating AI agent opportunities in your organization</li>
      </ul>
    `,
    type: "webinar",
    date: "2025-01-15",
    time: "2:00 PM EST",
    duration: "90 minutes",
    location: "Virtual",
    isVirtual: true,
    speakers: [
      {
        name: "Sarah Chen",
        role: "Chief AI Officer",
        company: "DataHat AI",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        bio: "Sarah has over 15 years of experience in enterprise AI and has led AI transformations at Fortune 500 companies."
      },
      {
        name: "Michael Foster",
        role: "VP of Engineering",
        company: "TechCorp",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        bio: "Michael has built and scaled AI systems serving millions of users across multiple industries."
      }
    ],
    agenda: [
      {
        time: "2:00 PM",
        title: "Welcome & Introduction",
        description: "Setting the stage for AI agents in 2025"
      },
      {
        time: "2:15 PM",
        title: "The State of AI Agents",
        description: "Current capabilities, trends, and what's coming next"
      },
      {
        time: "2:45 PM",
        title: "Case Study Deep Dive",
        description: "Real-world examples from enterprise deployments"
      },
      {
        time: "3:15 PM",
        title: "Q&A Session",
        description: "Live questions from attendees"
      }
    ],
    featuredImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
    registrationUrl: "#",
    isPast: false,
    tags: ["AI Agents", "Enterprise", "2025 Trends"]
  },
  {
    id: "2",
    slug: "building-human-in-loop-systems",
    title: "Building Human-in-the-Loop AI Systems",
    description: "A hands-on workshop on designing AI systems that balance automation with human oversight.",
    longDescription: `
      <p>The most successful AI deployments maintain the right balance between automation and human oversight. This hands-on workshop will teach you how to design and implement human-in-the-loop systems that maximize both efficiency and trust.</p>
      
      <p>Over 3 hours, you'll work through real-world scenarios, design approval workflows, and learn best practices from organizations that have successfully deployed HITL systems at scale.</p>
      
      <h3>Workshop Outcomes:</h3>
      <ul>
        <li>Framework for deciding when to involve humans in AI workflows</li>
        <li>Design patterns for effective approval interfaces</li>
        <li>Metrics for measuring HITL system performance</li>
        <li>Hands-on experience with workflow design tools</li>
      </ul>
    `,
    type: "workshop",
    date: "2025-01-22",
    time: "10:00 AM EST",
    duration: "3 hours",
    location: "Virtual",
    isVirtual: true,
    speakers: [
      {
        name: "Emily Rodriguez",
        role: "Director of AI Ethics",
        company: "DataHat AI",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        bio: "Emily specializes in designing AI systems that augment human capabilities while maintaining accountability."
      }
    ],
    agenda: [
      {
        time: "10:00 AM",
        title: "Foundations of HITL Design",
        description: "Core principles and frameworks"
      },
      {
        time: "10:45 AM",
        title: "Design Exercise 1",
        description: "Mapping decision points in a workflow"
      },
      {
        time: "11:30 AM",
        title: "Approval Interface Patterns",
        description: "Best practices for human oversight interfaces"
      },
      {
        time: "12:15 PM",
        title: "Design Exercise 2",
        description: "Building an approval workflow"
      },
      {
        time: "12:45 PM",
        title: "Wrap-up & Resources",
        description: "Next steps and additional learning"
      }
    ],
    featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    registrationUrl: "#",
    isPast: false,
    tags: ["Workshop", "Human-in-the-Loop", "AI Design"]
  },
  {
    id: "3",
    slug: "ai-summit-2025",
    title: "Enterprise AI Summit 2025",
    description: "The premier conference for enterprise AI leaders, featuring keynotes, workshops, and networking.",
    longDescription: `
      <p>Join 500+ enterprise AI leaders for two days of learning, networking, and inspiration at the Enterprise AI Summit 2025. This is the premier event for organizations serious about AI transformation.</p>
      
      <p>The summit features keynotes from industry pioneers, hands-on workshops, and ample networking opportunities. Whether you're a C-suite executive, technology leader, or practitioner, you'll find valuable content and connections.</p>
      
      <h3>Summit Highlights:</h3>
      <ul>
        <li>Keynotes from AI pioneers at leading enterprises</li>
        <li>Track sessions for executives, architects, and practitioners</li>
        <li>Hands-on workshops with live demonstrations</li>
        <li>Networking receptions and 1:1 meeting opportunities</li>
        <li>Access to the latest AI tools and platforms</li>
      </ul>
    `,
    type: "conference",
    date: "2025-03-10",
    time: "9:00 AM EST",
    duration: "2 days",
    location: "San Francisco, CA",
    isVirtual: false,
    speakers: [
      {
        name: "Sarah Chen",
        role: "Chief AI Officer",
        company: "DataHat AI",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        bio: "Sarah has over 15 years of experience in enterprise AI."
      },
      {
        name: "James Mitchell",
        role: "CISO",
        company: "Global Finance Corp",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
        bio: "James leads security strategy for one of the world's largest financial institutions."
      },
      {
        name: "Lisa Wang",
        role: "Head of Automation",
        company: "Fortune 100 Retailer",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
        bio: "Lisa has automated over 1,000 processes across retail operations."
      }
    ],
    agenda: [
      {
        time: "Day 1 - 9:00 AM",
        title: "Opening Keynote",
        description: "The Future of Enterprise AI"
      },
      {
        time: "Day 1 - 10:30 AM",
        title: "Track Sessions",
        description: "Choose from Executive, Technical, or Practitioner tracks"
      },
      {
        time: "Day 1 - 6:00 PM",
        title: "Networking Reception",
        description: "Connect with fellow attendees and speakers"
      },
      {
        time: "Day 2 - 9:00 AM",
        title: "Hands-on Workshops",
        description: "Deep-dive sessions on specific topics"
      },
      {
        time: "Day 2 - 2:00 PM",
        title: "Closing Keynote",
        description: "Turning Vision into Action"
      }
    ],
    featuredImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop",
    registrationUrl: "#",
    isPast: false,
    tags: ["Conference", "Enterprise AI", "Networking"]
  },
  {
    id: "4",
    slug: "revenue-ops-automation-masterclass",
    title: "Revenue Ops Automation Masterclass",
    description: "Learn how leading companies are using AI to transform their revenue operations.",
    longDescription: `
      <p>Revenue operations is undergoing a fundamental transformation. AI agents are automating everything from lead scoring to quote optimization to renewal management. This masterclass will show you how.</p>
      
      <p>Join revenue leaders from companies that have successfully deployed AI-powered RevOps for an in-depth look at their strategies, technologies, and results.</p>
    `,
    type: "webinar",
    date: "2024-11-15",
    time: "1:00 PM EST",
    duration: "60 minutes",
    location: "Virtual",
    isVirtual: true,
    speakers: [
      {
        name: "David Park",
        role: "Chief Revenue Officer",
        company: "DataHat AI",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        bio: "David has scaled revenue teams at multiple successful startups."
      }
    ],
    agenda: [
      {
        time: "1:00 PM",
        title: "The RevOps Revolution",
        description: "How AI is transforming revenue operations"
      },
      {
        time: "1:20 PM",
        title: "Case Studies",
        description: "Real results from real companies"
      },
      {
        time: "1:40 PM",
        title: "Getting Started",
        description: "A roadmap for your RevOps transformation"
      },
      {
        time: "1:50 PM",
        title: "Q&A",
        description: "Live questions from attendees"
      }
    ],
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    registrationUrl: "#",
    isPast: true,
    recordingUrl: "#",
    tags: ["Revenue Ops", "Automation", "Sales"]
  },
  {
    id: "5",
    slug: "ai-governance-best-practices",
    title: "AI Governance Best Practices",
    description: "Essential frameworks for deploying AI responsibly in enterprise environments.",
    longDescription: `
      <p>As AI becomes more prevalent in enterprise decision-making, governance becomes critical. This webinar covers the frameworks, processes, and technologies needed to deploy AI responsibly.</p>
      
      <p>Learn from governance experts who have implemented AI oversight programs at major organizations.</p>
    `,
    type: "webinar",
    date: "2024-10-20",
    time: "11:00 AM EST",
    duration: "75 minutes",
    location: "Virtual",
    isVirtual: true,
    speakers: [
      {
        name: "Emily Rodriguez",
        role: "Director of AI Ethics",
        company: "DataHat AI",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        bio: "Emily specializes in responsible AI deployment."
      },
      {
        name: "James Mitchell",
        role: "CISO",
        company: "Global Finance Corp",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
        bio: "James leads security and governance at a major financial institution."
      }
    ],
    agenda: [
      {
        time: "11:00 AM",
        title: "Why Governance Matters",
        description: "The risks of ungoverned AI"
      },
      {
        time: "11:20 AM",
        title: "Governance Frameworks",
        description: "Practical frameworks for AI oversight"
      },
      {
        time: "11:45 AM",
        title: "Implementation Strategies",
        description: "Building governance into your AI program"
      },
      {
        time: "12:05 PM",
        title: "Q&A",
        description: "Live questions from attendees"
      }
    ],
    featuredImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    registrationUrl: "#",
    isPast: true,
    recordingUrl: "#",
    tags: ["Governance", "Ethics", "Compliance"]
  }
];

export const eventTypes = [
  "All",
  "webinar",
  "workshop",
  "conference",
  "meetup"
];
