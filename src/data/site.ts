import {
  Bot,
  Braces,
  ChartNoAxesCombined,
  DatabaseZap,
  Layers3,
  SearchCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  summary: string;
  problem: string;
  implementations: string[];
  outcomes: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Web Design",
    summary:
      "Distinct digital experiences built around clarity, trust, and conversion.",
    problem: "Generic sites blur your value and lose qualified attention.",
    implementations: [
      "Positioning-led page systems",
      "Responsive visual direction",
      "Conversion-focused landing pages",
    ],
    outcomes:
      "A sharper brand presence and a clearer path from interest to action.",
    icon: Layers3,
  },
  {
    title: "Web Development",
    summary:
      "Fast, scalable websites engineered for reliability and long-term growth.",
    problem:
      "Slow, fragile platforms create friction for customers and internal teams.",
    implementations: [
      "Modern React builds",
      "CMS and commerce platforms",
      "API and third-party integrations",
    ],
    outcomes: "A dependable digital foundation that is easy to evolve.",
    icon: Braces,
  },
  {
    title: "UI/UX Design",
    summary:
      "Intuitive product and platform interfaces shaped around real user behavior.",
    problem:
      "Complex journeys and unclear interfaces reduce adoption and conversion.",
    implementations: [
      "User flows and wireframes",
      "Design systems",
      "Product and portal interfaces",
    ],
    outcomes:
      "More confident users, fewer dead ends, and consistent experiences.",
    icon: Sparkles,
  },
  {
    title: "AI Automation",
    summary:
      "Intelligent agents and workflows that take repetitive work off your team.",
    problem:
      "Manual tasks consume time and make consistent follow-through difficult.",
    implementations: [
      "AI assistants and agents",
      "Lead qualification",
      "Knowledge and support workflows",
    ],
    outcomes: "Faster operations with human oversight where it matters.",
    icon: Bot,
  },
  {
    title: "AI Voice & Chatbots",
    summary:
      "Always-on conversational systems for calls, web chat, and customer support.",
    problem:
      "Missed calls and delayed responses allow valuable opportunities to disappear.",
    implementations: [
      "AI receptionists",
      "Website chatbots",
      "Booking and routing logic",
    ],
    outcomes: "Responsive customer journeys across voice and chat.",
    icon: Workflow,
  },
  {
    title: "CRM Systems",
    summary:
      "Connected pipelines that turn scattered contacts into visible opportunities.",
    problem:
      "Disconnected tools obscure ownership, status, and the next best action.",
    implementations: [
      "CRM setup and migration",
      "Pipeline architecture",
      "Segmentation and reporting",
    ],
    outcomes: "One reliable view of every lead and customer relationship.",
    icon: DatabaseZap,
  },
  {
    title: "Business Automation",
    summary:
      "Integrated operating systems that move data and work between your tools.",
    problem:
      "Copy-paste processes create delays, errors, and invisible bottlenecks.",
    implementations: [
      "Workflow automation",
      "Platform integrations",
      "Internal operations systems",
    ],
    outcomes: "Less manual administration and more consistent execution.",
    icon: Workflow,
  },
  {
    title: "SEO & AEO",
    summary:
      "Technical and content foundations for search engines and AI answer systems.",
    problem:
      "Strong offers remain invisible without accessible, structured information.",
    implementations: [
      "Technical SEO",
      "Content architecture",
      "Answer-engine optimization",
    ],
    outcomes:
      "Greater discoverability across traditional and AI-assisted search.",
    icon: SearchCheck,
  },
  {
    title: "Conversion Optimization",
    summary:
      "Evidence-led improvements that make existing traffic work harder.",
    problem:
      "Traffic without clear journeys or useful feedback loops wastes acquisition spend.",
    implementations: [
      "Journey audits",
      "Landing page experiments",
      "Analytics and funnel refinement",
    ],
    outcomes: "A more effective path from visit to qualified conversation.",
    icon: ChartNoAxesCombined,
  },
];

export const projects = [
  {
    name: "VALO Legal",
    sector: "Legal technology",
    description:
      "A connected client-acquisition system spanning a focused landing experience, GoHighLevel CRM, Vapi AI receptionist, appointment booking, call notes, segmentation, and trigger-based follow-up.",
    tags: ["Web", "GoHighLevel", "Vapi", "Automation"],
    accent: "from-blue-500/30 via-cyan-400/10 to-transparent",
  },
  {
    name: "Securemedy",
    sector: "Workforce technology",
    description:
      "Digital operations concepts for a security workforce, including AI reception, website and employee-portal chat, recruitment automation, and AWS-connected systems.",
    tags: ["Voice AI", "Chatbots", "AWS", "Operations"],
    accent: "from-emerald-400/25 via-cyan-400/10 to-transparent",
  },
  {
    name: "ZAR Interiors",
    sector: "Interiors & commerce",
    description:
      "A growth and technology roadmap bringing together marketing campaigns, operational thinking, digital adoption, and an e-commerce vision.",
    tags: ["Growth", "Commerce", "Operations"],
    accent: "from-purple-500/30 via-fuchsia-400/10 to-transparent",
  },
  {
    name: "Lounge Masters",
    sector: "Furniture e-commerce",
    description:
      "A responsive WooCommerce store for custom furniture with a clear product journey, checkout, and payment integration.",
    tags: ["WooCommerce", "E-commerce", "Responsive"],
    accent: "from-orange-400/25 via-purple-400/10 to-transparent",
  },
  {
    name: "YV Health & Beauty",
    sector: "Beauty & wellness",
    description:
      "Digital work supporting a modern wellness and skincare presence with a clear path toward a more connected customer experience.",
    tags: ["Brand experience", "Web", "Growth"],
    accent: "from-pink-400/25 via-purple-400/10 to-transparent",
  },
];

export const engagements = [
  {
    name: "Launch",
    description:
      "For a focused website, landing system, or decisive digital refresh.",
    includes: [
      "Strategy and positioning",
      "Responsive experience design",
      "Production-ready implementation",
      "Analytics foundation",
    ],
  },
  {
    name: "Growth",
    description:
      "For businesses connecting their website, CRM, lead flow, and follow-up.",
    includes: [
      "Everything in Launch",
      "CRM and pipeline architecture",
      "Lead capture and routing",
      "Automated follow-up workflows",
    ],
    featured: true,
  },
  {
    name: "Custom Systems",
    description:
      "For intelligent agents, advanced integrations, portals, and operational platforms.",
    includes: [
      "System discovery and architecture",
      "AI voice or chat experiences",
      "Complex platform integrations",
      "Ongoing optimization options",
    ],
  },
];
