export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  featured?: boolean;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "qualified-loan-leads-finance-companies",
    category: "Banking Marketing",
    title: "How Finance Companies Can Generate More Qualified Loan Leads",
    excerpt: "A practical framework for matching loan products, customer intent, eligibility, and follow-up into one acquisition journey.",
    date: "October 2, 2026",
    readingTime: "7 min read",
    featured: true,
    sections: [
      { heading: "Start with qualification, not volume", paragraphs: ["A large enquiry list is not automatically a strong pipeline. Useful loan campaigns begin by clarifying who the product is for, what need it solves, and what makes a prospect likely to meet the institution’s criteria."], bullets: ["Define the priority borrower profile", "Separate awareness from application intent", "Explain key requirements in plain language"] },
      { heading: "Build the journey around customer questions", paragraphs: ["Prospects usually need confidence about affordability, documentation, timing, and next steps before they enquire. A focused landing page should answer those questions without turning into a dense product brochure."], bullets: ["Lead with the customer outcome", "Use clear supporting eligibility guidance", "Give one obvious next action"] },
      { heading: "Connect marketing and follow-up", paragraphs: ["Campaign performance depends on what happens after the form. Define ownership, response expectations, qualification fields, and a simple feedback loop so marketing can learn which enquiries become useful conversations."] },
    ],
  },
  {
    slug: "digital-marketing-deposit-mobilization",
    category: "Financial Services",
    title: "A Digital Marketing Strategy for Deposit Mobilization",
    excerpt: "How to move from broad product promotion to segment-specific deposit acquisition journeys.",
    date: "September 22, 2026",
    readingTime: "6 min read",
    sections: [{ heading: "Treat deposits as distinct customer decisions", paragraphs: ["Salary, remittance, premium, children’s, women’s, and fixed-deposit products serve different moments and motivations. The campaign should reflect those differences."], bullets: ["Choose a priority segment", "Clarify the product promise", "Match content to the decision stage"] }, { heading: "Reduce friction between interest and action", paragraphs: ["Make documentation, branch or digital steps, and contact options easy to understand. Measure qualified enquiries and completed journeys, not reach alone."] }],
  },
  {
    slug: "ai-customer-acquisition-banking",
    category: "AI for Business",
    title: "How AI Can Improve Customer Acquisition in Banking",
    excerpt: "Useful AI applications across research, segmentation, content operations, lead handling, and reporting.",
    date: "September 10, 2026",
    readingTime: "8 min read",
    sections: [{ heading: "Use AI where it improves the system", paragraphs: ["AI is most valuable when it helps teams synthesize information, create consistent first drafts, identify patterns, and maintain repeatable workflows."], bullets: ["Research and persona synthesis", "Content briefs and repurposing", "Lead-routing support", "Reporting summaries"] }, { heading: "Keep strategy and review human", paragraphs: ["Financial communication requires judgment, accurate product information, appropriate approvals, and a clear owner. AI should support those controls, not bypass them."] }],
  },
  {
    slug: "better-financial-product-landing-pages",
    category: "Lead Generation",
    title: "Why Financial Institutions Need Better Product Landing Pages",
    excerpt: "A product page should help the right customer understand, trust, and act—not simply list features.",
    date: "August 28, 2026",
    readingTime: "5 min read",
    sections: [{ heading: "A page has one commercial job", paragraphs: ["A strong landing page connects a specific audience and need to a specific product and next step."], bullets: ["Lead with the customer benefit", "Explain requirements clearly", "Use relevant trust signals", "Measure the primary action"] }, { heading: "Design for decisions", paragraphs: ["Structure content around the questions people ask before they contact a branch, relationship manager, or digital channel."] }],
  },
  {
    slug: "seo-banks-finance-companies-nepal",
    category: "SEO",
    title: "SEO Opportunities for Banks and Finance Companies in Nepal",
    excerpt: "Build discoverability around high-intent customer questions, locations, products, and comparison needs.",
    date: "August 14, 2026",
    readingTime: "7 min read",
    sections: [{ heading: "Map search intent to useful pages", paragraphs: ["Product information, educational guidance, branch and service details, and frequently asked questions each serve different search needs."], bullets: ["Improve product-page depth", "Create question-led educational content", "Strengthen internal linking", "Keep official details current"] }, { heading: "Measure useful organic outcomes", paragraphs: ["Track qualified visits, product-page journeys, enquiries, and other meaningful actions rather than rankings in isolation."] }],
  },
  {
    slug: "market-qr-payments-to-merchants",
    category: "Merchant Marketing",
    title: "How to Market QR Payment Services to Merchants",
    excerpt: "Position merchant acquisition around operational value, trust, onboarding clarity, and sustained usage.",
    date: "July 31, 2026",
    readingTime: "6 min read",
    sections: [{ heading: "Go beyond the QR stand", paragraphs: ["Merchant acquisition is a business-banking relationship opportunity. Communication should connect acceptance to settlement visibility, customer convenience, support, and wider services."], bullets: ["Segment merchants by business type", "Make onboarding steps visible", "Support activation after sign-up", "Create a relationship follow-up plan"] }, { heading: "Measure activation, not only onboarding", paragraphs: ["A successful programme considers whether merchants understand, display, and continue using the service."] }],
  },
  {
    slug: "social-engagement-to-business-leads",
    category: "Customer Acquisition",
    title: "From Social Media Engagement to Actual Business Leads",
    excerpt: "Connect content, offers, landing pages, qualification, and follow-up into a measurable conversion path.",
    date: "July 16, 2026",
    readingTime: "5 min read",
    sections: [{ heading: "Give attention somewhere useful to go", paragraphs: ["Engagement becomes commercially useful when each campaign has an audience, offer, next step, and follow-up path."], bullets: ["Name the intended audience", "Use a relevant offer", "Create one next action", "Track beyond the platform"] }, { heading: "Close the learning loop", paragraphs: ["Sales feedback and lead quality should shape the next campaign, not remain separate from marketing reports."] }],
  },
  {
    slug: "90-day-digital-marketing-plan-sme",
    category: "Business Growth",
    title: "Building a 90-Day Digital Marketing Plan for an SME",
    excerpt: "A focused way to move from scattered activity to a clear offer, acquisition funnel, and measurement rhythm.",
    date: "July 2, 2026",
    readingTime: "8 min read",
    sections: [{ heading: "Month one: clarify", paragraphs: ["Define the priority customer, offer, conversion action, baseline, and the few channels that matter most."] }, { heading: "Month two: launch", paragraphs: ["Publish the core landing journey, establish a consistent content system, and begin a focused acquisition test."] }, { heading: "Month three: improve", paragraphs: ["Review lead quality and funnel performance, fix the biggest point of friction, and turn what works into a repeatable operating rhythm."] }],
  },
];

export const categories = ["All", ...Array.from(new Set(articles.map((article) => article.category)))];
