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
    slug: "exclusive-ai-masterclass-retail-fmcg",
    title: "Exclusive AI Masterclass for Retail and FMCG",
    description: "Learn, build and deliver on an actionable AI roadmap. Course delivered by a top Global CDO.",
    longDescription: `
      <p>Join us in Dubai for an exclusive AI Masterclass tailored for the Retail and FMCG sectors. This intensive session is designed to help leaders learn, build, and deliver on an actionable AI roadmap.</p>
      
      <p>Delivered by Kshitij Kumar (KK), a Top 100 Global Chief Data & AI Officer, this masterclass covers the strategic and practical aspects of implementing AI in your organization.</p>
      
      <h3>Masterclass Highlights:</h3>
      <ul>
        <li>Actionable AI Roadmap Development</li>
        <li>Real-world Use Cases in Retail and FMCG</li>
        <li>Strategies for Scaling AI Solutions</li>
        <li>Networking with Industry Peers</li>
      </ul>
    `,
    type: "workshop",
    date: "2026-01-15",
    time: "02:00 PM - 06:00 PM",
    duration: "4 hours",
    location: "Dubai, United Arab Emirates",
    isVirtual: false,
    speakers: [
      {
        name: "Kshitij Kumar (KK)",
        role: "Top 100 Global Chief Data & AI Officer",
        company: "Data-Hat AI",
        avatar: "/team/kshitij-kumar.jpg",
        bio: "Kshitij Kumar (KK) is a world-renowned data and AI leader, recognized as a Top 100 Global CDO."
      }
    ],
    agenda: [
      {
        time: "02:00 PM",
        title: "Welcome & Introduction",
        description: "Overview of the AI Landscape in Retail & FMCG"
      },
      {
        time: "03:00 PM",
        title: "Building the Roadmap",
        description: "Strategic frameworks for AI adoption"
      },
      {
        time: "04:30 PM",
        title: "Execution & Delivery",
        description: "Best practices for implementing AI solutions"
      },
      {
        time: "05:30 PM",
        title: "Networking & Q&A",
        description: "Connect with peers and discuss specific challenges"
      }
    ],
    featuredImage: "/events/dubai-masterclass.png",
    registrationUrl: "https://www.eventbrite.com/e/exclusive-ai-masterclass-for-retail-and-fmcg-tickets-1976429574060?aff=oddtdtcreator",
    isPast: false,
    tags: ["AI Masterclass", "Retail", "FMCG", "Dubai"]
  },
  {
    id: "2",
    slug: "exclusive-ai-masterclass-retail-fmcg-doha",
    title: "Exclusive AI Masterclass for Retail and FMCG - Doha",
    description: "Learn, build and deliver on an actionable AI roadmap. Course delivered by a top Global CDO.",
    longDescription: `
      <p>Join us in Doha for an exclusive AI Masterclass tailored for the Retail and FMCG sectors. This intensive session is designed to help leaders learn, build, and deliver on an actionable AI roadmap.</p>
      
      <p>Delivered by Kshitij Kumar (KK), a Top 100 Global Chief Data & AI Officer, this masterclass covers the strategic and practical aspects of implementing AI in your organization.</p>
      
      <h3>Masterclass Highlights:</h3>
      <ul>
        <li>Actionable AI Roadmap Development</li>
        <li>Real-world Use Cases in Retail and FMCG</li>
        <li>Strategies for Scaling AI Solutions</li>
        <li>Networking with Industry Peers</li>
      </ul>
    `,
    type: "workshop",
    date: "2026-01-08",
    time: "02:00 PM - 06:00 PM",
    duration: "4 hours",
    location: "Doha, Qatar",
    isVirtual: false,
    speakers: [
      {
        name: "Kshitij Kumar (KK)",
        role: "Top 100 Global Chief Data & AI Officer",
        company: "Data-Hat AI",
        avatar: "/team/kshitij-kumar.jpg",
        bio: "Kshitij Kumar (KK) is a world-renowned data and AI leader, recognized as a Top 100 Global CDO."
      }
    ],
    agenda: [
      {
        time: "02:00 PM",
        title: "Welcome & Introduction",
        description: "Overview of the AI Landscape in Retail & FMCG"
      },
      {
        time: "03:00 PM",
        title: "Building the Roadmap",
        description: "Strategic frameworks for AI adoption"
      },
      {
        time: "04:30 PM",
        title: "Execution & Delivery",
        description: "Best practices for implementing AI solutions"
      },
      {
        time: "05:30 PM",
        title: "Networking & Q&A",
        description: "Connect with peers and discuss specific challenges"
      }
    ],
    featuredImage: "/events/doha-masterclass.png",
    registrationUrl: "https://www.eventbrite.com/e/exclusive-ai-masterclass-for-retail-and-fmcg-tickets-1976429283190?aff=oddtdtcreator",
    isPast: false,
    tags: ["AI Masterclass", "Retail", "FMCG", "Doha"]
  },
  {
    id: "3",
    slug: "exclusive-ai-masterclass-retail-fmcg-london",
    title: "Exclusive AI Masterclass for Retail and FMCG - London",
    description: "Learn, build and deliver on an actionable AI roadmap. Course delivered by a top Global CDO.",
    longDescription: `
      <p>Join us in London for an exclusive AI Masterclass tailored for the Retail and FMCG sectors. This intensive session is designed to help leaders learn, build, and deliver on an actionable AI roadmap.</p>
      
      <p>Delivered by Kshitij Kumar (KK), a Top 100 Global Chief Data & AI Officer, this masterclass covers the strategic and practical aspects of implementing AI in your organization.</p>
      
      <h3>Masterclass Highlights:</h3>
      <ul>
        <li>Actionable AI Roadmap Development</li>
        <li>Real-world Use Cases in Retail and FMCG</li>
        <li>Strategies for Scaling AI Solutions</li>
        <li>Networking with Industry Peers</li>
      </ul>
    `,
    type: "workshop",
    date: "2026-01-22",
    time: "02:00 PM - 06:00 PM",
    duration: "4 hours",
    location: "London, United Kingdom",
    isVirtual: false,
    speakers: [
      {
        name: "Kshitij Kumar (KK)",
        role: "Top 100 Global Chief Data & AI Officer",
        company: "Data-Hat AI",
        avatar: "/team/kshitij-kumar.jpg",
        bio: "Kshitij Kumar (KK) is a world-renowned data and AI leader, recognized as a Top 100 Global CDO."
      }
    ],
    agenda: [
      {
        time: "02:00 PM",
        title: "Welcome & Introduction",
        description: "Overview of the AI Landscape in Retail & FMCG"
      },
      {
        time: "03:00 PM",
        title: "Building the Roadmap",
        description: "Strategic frameworks for AI adoption"
      },
      {
        time: "04:30 PM",
        title: "Execution & Delivery",
        description: "Best practices for implementing AI solutions"
      },
      {
        time: "05:30 PM",
        title: "Networking & Q&A",
        description: "Connect with peers and discuss specific challenges"
      }
    ],
    featuredImage: "/events/london-masterclass.png",
    registrationUrl: "https://www.eventbrite.com/e/exclusive-ai-masterclass-for-retail-and-fmcg-tickets-1976090841903?aff=oddtdtcreator",
    isPast: false,
    tags: ["AI Masterclass", "Retail", "FMCG", "London"]
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
        name: "Kshitij Kumar (KK)",
        role: "Top 100 Global Chief Data & AI Officer",
        company: "Data-Hat AI",
        avatar: "/team/kshitij-kumar.jpg",
        bio: "Kshitij Kumar (KK) is a world-renowned data and AI leader, recognized as a Top 100 Global CDO."
      },
      {
        name: "David Park",
        role: "Chief Revenue Officer",
        company: "Data-Hat AI",
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
        name: "Kshitij Kumar (KK)",
        role: "Top 100 Global Chief Data & AI Officer",
        company: "Data-Hat AI",
        avatar: "/team/kshitij-kumar.jpg",
        bio: "Kshitij Kumar (KK) is a world-renowned data and AI leader, recognized as a Top 100 Global CDO."
      },
      {
        name: "Emily Rodriguez",
        role: "Director of AI Ethics",
        company: "Data-Hat AI",
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
