import type { LucideIcon } from "lucide-react";
import {
  Bot,
  ChartNoAxesCombined,
  Landmark,
  Megaphone,
  MousePointerClick,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string;
  whatWeDo: string;
  deliverables: string[];
  idealClient: string;
  outcome: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "ai-powered-digital-marketing-strategy",
    title: "AI-Powered Digital Marketing Strategy",
    shortTitle: "Digital Strategy",
    summary: "A practical growth roadmap shaped around your objectives, customer segments, competition, and resources.",
    problem: "Marketing activity is spread across channels without one commercial direction or a reliable way to prioritize.",
    whatWeDo: "We translate your business model and growth goals into a focused, AI-assisted digital strategy your team can act on.",
    deliverables: ["Business analysis", "Audience segmentation", "Competitor review", "Customer journey", "Content pillars", "Channel strategy", "KPI framework", "30/60/90-day plan"],
    idealClient: "Leadership and marketing teams that need a clear, shared plan before investing further.",
    outcome: "A prioritized marketing system tied to business goals, owners, timelines, and meaningful KPIs.",
    icon: Sparkles,
  },
  {
    slug: "financial-product-marketing",
    title: "Banking & Financial Product Marketing",
    shortTitle: "Financial Product Marketing",
    summary: "Customer-centered campaigns for deposits, lending, digital banking, cards, remittance, and merchant services.",
    problem: "Strong financial products are often communicated in technical language or promoted to broad, poorly matched audiences.",
    whatWeDo: "We align product benefits, eligibility, customer intent, trust signals, and channel strategy into coherent campaigns.",
    deliverables: ["Product positioning", "Customer segmentation", "Campaign concepts", "Landing-page plan", "Deposit campaigns", "Loan campaigns", "Digital adoption campaigns", "Merchant acquisition plan"],
    idealClient: "Banks, finance companies, cooperatives, fintechs, insurers, and related financial businesses.",
    outcome: "Clearer product communication and more intentional acquisition journeys for priority customer segments.",
    icon: Landmark,
  },
  {
    slug: "lead-generation",
    title: "Lead Generation & Customer Acquisition",
    shortTitle: "Lead Generation",
    summary: "Connected funnels, landing pages, targeting, and follow-up systems designed around qualified demand.",
    problem: "Traffic and enquiries are inconsistent, difficult to qualify, or disconnected from sales follow-up.",
    whatWeDo: "We design the full path from first touch to qualified enquiry and create a practical measurement plan.",
    deliverables: ["Lead funnel", "Landing pages", "Lead magnets", "Forms", "Paid campaign plan", "Conversion tracking", "Lead qualification", "Follow-up workflows"],
    idealClient: "Organizations with a clear offer that need a dependable pipeline of relevant prospects.",
    outcome: "A measurable acquisition flow that makes it easier to attract, qualify, and follow up with prospects.",
    icon: MousePointerClick,
  },
  {
    slug: "seo-content-marketing",
    title: "SEO & Content Marketing",
    shortTitle: "SEO & Content",
    summary: "Search-led content systems that answer real customer questions and build long-term authority.",
    problem: "Potential customers cannot find useful answers, product pages are thin, and content lacks a search strategy.",
    whatWeDo: "We connect keyword intent with helpful content, technical recommendations, and stronger internal journeys.",
    deliverables: ["Keyword strategy", "Technical SEO review", "Content calendar", "Blog strategy", "Product content", "Local SEO", "On-page optimization", "Internal linking plan"],
    idealClient: "Businesses that want durable organic visibility and a credible educational presence.",
    outcome: "A clear route to improving discoverability, relevance, and conversion from high-intent search traffic.",
    icon: Search,
  },
  {
    slug: "social-media-paid-advertising",
    title: "Social Media & Paid Advertising",
    shortTitle: "Social & Paid Media",
    summary: "Channel plans, creative direction, paid campaigns, retargeting, and reporting that move beyond likes.",
    problem: "Content is published frequently but is not connected to customer journeys, offers, or measurable action.",
    whatWeDo: "We define the role of each channel and build campaigns around audience intent, creative clarity, and conversion.",
    deliverables: ["Campaign planning", "Creative direction", "Copywriting", "Targeting", "Retargeting", "Facebook and Instagram", "LinkedIn and YouTube", "Google Ads planning"],
    idealClient: "Brands that need disciplined social and paid-media execution tied to business priorities.",
    outcome: "More coherent campaigns, clearer measurement, and a stronger connection between attention and action.",
    icon: Megaphone,
  },
  {
    slug: "ai-marketing-automation",
    title: "AI & Marketing Automation",
    shortTitle: "AI & Automation",
    summary: "Responsible AI workflows for research, content operations, nurturing, reporting, and customer communication.",
    problem: "Teams experiment with AI tools but lack governance, repeatable workflows, quality control, and business context.",
    whatWeDo: "We identify practical automation opportunities while keeping strategy, review, and customer judgment human-led.",
    deliverables: ["AI-assisted content workflows", "Automated lead nurturing", "CRM workflows", "Follow-up sequences", "Reporting automation", "Prompt systems", "Quality review steps", "Marketing operations plan"],
    idealClient: "Teams that want to use AI productively without sacrificing accuracy, judgment, or brand trust.",
    outcome: "Faster, more consistent marketing operations with clear human ownership and review.",
    icon: Bot,
  },
  {
    slug: "website-conversion-optimization",
    title: "Website & Conversion Optimization",
    shortTitle: "Conversion Optimization",
    summary: "Sharper website journeys, landing pages, trust signals, and calls to action that support customer decisions.",
    problem: "Visitors arrive but cannot quickly understand the offer, find the right information, or take the next step.",
    whatWeDo: "We review the experience from customer intent to conversion and prioritize the changes with the strongest impact.",
    deliverables: ["Website audit", "UX recommendations", "Landing pages", "CTA optimization", "Conversion funnels", "Analytics plan", "Trust-signal review", "Speed recommendations"],
    idealClient: "Businesses with an established site that is not producing enough qualified enquiries.",
    outcome: "A clearer, lower-friction website journey designed to turn relevant visits into meaningful action.",
    icon: Workflow,
  },
  {
    slug: "analytics-growth-consulting",
    title: "Analytics & Growth Consulting",
    shortTitle: "Analytics & Growth",
    summary: "Decision-focused measurement, funnel analysis, and recurring optimization around commercial outcomes.",
    problem: "Reports show activity but do not explain what is working, where customers drop off, or what to do next.",
    whatWeDo: "We define useful KPIs, structure decision-ready dashboards, and turn performance data into priorities.",
    deliverables: ["KPI definition", "Dashboard planning", "Funnel analysis", "Campaign analysis", "Monthly reviews", "Attribution guidance", "Experiment backlog", "Optimization recommendations"],
    idealClient: "Teams that need clearer performance visibility and a consistent improvement rhythm.",
    outcome: "Better marketing decisions based on useful evidence rather than channel activity alone.",
    icon: ChartNoAxesCombined,
  },
];

