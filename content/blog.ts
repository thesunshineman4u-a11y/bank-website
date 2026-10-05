export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  date: string;
  readingTime: string;
  featured?: boolean;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "choose-the-right-savings-account",
    category: "Savings",
    title: "How to Choose the Right Manjushree Savings Account",
    excerpt: "Compare minimum balances, customer segments, interest, and practical account benefits before you apply.",
    image: "/premium-savings-official.webp",
    imageAlt: "Manjushree Premium Savings Account customers reviewing their savings plan",
    imagePosition: "center",
    date: "October 3, 2026",
    readingTime: "5 min read",
    featured: true,
    sections: [
      { heading: "Begin with how you bank", paragraphs: ["The right account depends on how you receive income, the balance you plan to maintain, the services you use, and whether the account is for you or a family member."], bullets: ["Normal Saving for flexible everyday use", "Nari Saving for women customers", "Children Saving for customers below age 16", "Naulo Remit Saving for remittance recipients"] },
      { heading: "Compare the complete value", paragraphs: ["Look beyond the headline interest rate. Review the minimum balance, digital access, card benefits, service fees, insurance benefits, and document requirements together."] },
    ],
  },
  {
    slug: "virtual-credit-card-guide",
    category: "Cards",
    title: "A Practical Guide to the Manjushree Virtual Credit Card",
    excerpt: "Understand digital payments, published fees, monthly interest, limits, and EMI choices before using a VCC.",
    image: "/fonepay-vcc-offer.jpeg",
    imageAlt: "Manjushree Fonepay Virtual Credit Card cashback offer",
    imagePosition: "center 42%",
    date: "September 25, 2026",
    readingTime: "6 min read",
    sections: [
      { heading: "A card built for digital use", paragraphs: ["A Virtual Credit Card gives customers a card experience through a digital channel without relying on a physical card for online purchases."], bullets: ["Joining fee: NPR 550", "Annual and renewal fee: NPR 600", "Published interest: 2% per month"] },
      { heading: "Use it responsibly", paragraphs: ["Review the billing cycle, available limit, late-payment charge, over-limit charge, and applicable interest before making a purchase. Keep your login, PIN, and OTP private."] },
      { heading: "Understand EMI choices", paragraphs: ["The current schedule lists different EMI interest rates for 3 months, 6 and 9 months, and 12 months or longer. Confirm the latest terms before selecting an installment plan."] },
    ],
  },
  {
    slug: "merchant-qr-payments",
    category: "Merchant Banking",
    title: "Accepting Payments with Manjushree Merchant QR",
    excerpt: "How Fonepay QR and NEPALPAY QR support secure, interoperable payments for merchants.",
    image: "/product-merchant-qr.webp",
    imageAlt: "Merchant accepting a secure QR payment",
    imagePosition: "center 46%",
    date: "September 14, 2026",
    readingTime: "4 min read",
    sections: [
      { heading: "Choose the right QR format", paragraphs: ["Static QR is simple to display, while dynamic QR can carry transaction-specific information. The suitable option depends on your checkout and reconciliation process."] },
      { heading: "Serve more customers", paragraphs: ["Support for both Fonepay QR and NEPALPAY QR broadens payment acceptance. Fonepay-supported UPI also helps eligible Indian visitors pay at participating merchants."], bullets: ["Real-time transaction confirmation", "Settlement support", "Static and dynamic QR", "Merchant enrollment assistance"] },
    ],
  },
  {
    slug: "manjushree-smart-everyday-banking",
    category: "Digital Banking",
    title: "Everyday Banking with Manjushree Smart",
    excerpt: "Use alerts, payments, transfers, integrations, and support through one digital banking experience.",
    image: "/product-mobile-banking.webp",
    imageAlt: "Manjushree Smart mobile banking experience",
    imagePosition: "center 46%",
    date: "August 28, 2026",
    readingTime: "5 min read",
    sections: [
      { heading: "Stay connected to your account", paragraphs: ["Real-time alerts help customers follow account activity, while 24/7 access makes common banking tasks available beyond branch hours."] },
      { heading: "Pay and transfer securely", paragraphs: ["Manjushree Smart supports secure payments, cross-bank transfers, integrated payment services, and in-app customer support."], bullets: ["Use a strong, unique password", "Never disclose an OTP", "Review transaction details before confirming", "Report suspicious activity promptly"] },
    ],
  },
  {
    slug: "online-account-opening-documents",
    category: "Account Opening",
    title: "Documents for Online Account Opening",
    excerpt: "A simple checklist for Nepalese citizens, minors, and Non-Resident Nepalese applying online.",
    image: "/customer-conversation.png",
    imageAlt: "A Manjushree Finance representative helping customers understand account requirements",
    imagePosition: "center",
    date: "August 12, 2026",
    readingTime: "4 min read",
    sections: [
      { heading: "For Nepalese citizens", paragraphs: ["Prepare a passport-size photo, citizenship copies, signature, National ID document, and nominee documents when a nominee is included."] },
      { heading: "For minors", paragraphs: ["The application requires photographs of the minor and guardian, the guardian's citizenship copies and signature, the minor's birth certificate, and the guardian's National ID document."] },
      { heading: "For NRNs", paragraphs: ["Prepare a passport-size photo, citizenship copy, valid passport and visa, signature, NRN card, and nominee documents when applicable."] },
    ],
  },
  {
    slug: "remittance-partner-network",
    category: "Remittance",
    title: "Using Manjushree's Remittance Partner Network",
    excerpt: "Access domestic and international remittance services through multiple listed partners and branches.",
    image: "/product-remittance.webp",
    imageAlt: "Connected remittance services across regions",
    imagePosition: "center",
    date: "July 30, 2026",
    readingTime: "4 min read",
    sections: [
      { heading: "Multiple ways to receive money", paragraphs: ["Manjushree lists a broad partner network that includes Western Union, IME, City Express, Himal Remit, Prabhu Money Transfer, eSewa Money Transfer, and other services."] },
      { heading: "Prepare before visiting", paragraphs: ["Confirm the partner, reference details, required identification, branch availability, and applicable charges before your visit."] },
    ],
  },
];

export const categories = ["All", ...Array.from(new Set(articles.map((article) => article.category)))];
