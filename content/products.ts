import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Building2,
  CreditCard,
  Landmark,
  MonitorSmartphone,
  QrCode,
  Send,
  ShieldCheck,
} from "lucide-react";

export type ProductSection = {
  title: string;
  body: string;
  items?: string[];
};

export type Product = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  cardImagePosition?: string;
  highlights: string[];
  sections: ProductSection[];
  facts?: { label: string; value: string }[];
  icon: LucideIcon;
  sourceUrl?: string;
};

export const savingsAccounts = [
  { name: "Premium Saving", minimum: "NPR 10,000", interest: "3.75%" },
  { name: "Normal Saving", minimum: "NPR 0", interest: "2.75%" },
  { name: "Bishesh Bachat", minimum: "NPR 5,000", interest: "3.25%" },
  { name: "Nari Saving", minimum: "NPR 0", interest: "3.00%" },
  { name: "Children Saving", minimum: "NPR 0", interest: "3.00%" },
  { name: "Naulo Remit Saving", minimum: "NPR 1,000", interest: "4.75%" },
] as const;

export const products: Product[] = [
  {
    slug: "savings-accounts",
    title: "Savings Accounts",
    shortTitle: "Savings",
    category: "Savings & Deposits",
    summary: "Accounts for everyday banking, premium customers, women, children, salaried professionals, and remittance recipients.",
    image: "/premium-savings-official.webp",
    imageAlt: "Manjushree Premium Savings Account customers planning their finances together",
    cardImagePosition: "center",
    highlights: ["Six account choices", "Quarterly interest payment", "Online account opening", "Options with zero minimum balance"],
    sections: [
      { title: "Choose an account that fits", body: "The savings portfolio is designed around different life stages and banking needs. Premium Saving supports higher-value relationships, Nari Saving is designed for women, Children Saving helps families build an early saving habit, and Naulo Remit Saving serves customers receiving money from abroad." },
      { title: "Talab Bachat Khata", body: "A zero-balance account for salaried employees with free debit-card and mobile-banking service for five years, free cheque, statement and balance-certificate services, accident insurance up to NPR 10 lakh, and critical-illness coverage up to NPR 1 lakh.", items: ["Zero-balance maintenance", "Five years of free debit-card and mobile-banking service", "Accident insurance up to NPR 10 lakh", "Critical-illness coverage up to NPR 1 lakh"] },
      { title: "Children Saving", body: "Available for customers below age 16 with zero-balance maintenance and quarterly interest.", items: ["Free mobile banking", "Free SCT/UnionPay ATM withdrawal and balance enquiry", "Free DEMAT service"] },
    ],
    facts: [
      { label: "Interest payment", value: "Quarterly" },
      { label: "Eligible applicants", value: "Nepalese citizens, minors and NRNs" },
      { label: "Apply", value: "Online or through a branch" },
    ],
    icon: Landmark,
    sourceUrl: "https://online.manjushreefinance.com.np/",
  },
  {
    slug: "fixed-deposit",
    title: "Fixed Deposit",
    shortTitle: "Fixed Deposit",
    category: "Savings & Deposits",
    summary: "Build savings over a chosen period with multiple tenors and flexible interest-payment options.",
    image: "/product-savings.webp",
    imageAlt: "Long-term deposit growth represented by illuminated financial milestones",
    cardImagePosition: "68% 52%",
    highlights: ["Starts from NPR 10,000", "Multiple tenor choices", "Different interest-payment options", "For individuals and institutions"],
    sections: [
      { title: "Save with a defined term", body: "Fixed deposits are available from NPR 10,000 and let customers select from available tenors and interest-payment options based on their saving plan." },
      { title: "Before you place a deposit", body: "Rates and available tenors can change. Review the latest official interest-rate schedule or speak with a branch before confirming a deposit." },
    ],
    facts: [
      { label: "Starting amount", value: "NPR 10,000" },
      { label: "Tenor", value: "Multiple options" },
      { label: "Interest", value: "Based on the current published schedule" },
    ],
    icon: BadgeDollarSign,
    sourceUrl: "https://www.manjushreefinance.com.np/rates/interest-rate",
  },
  {
    slug: "cards-and-vcc",
    title: "Debit Card & Virtual Credit Card",
    shortTitle: "Cards & VCC",
    category: "Cards",
    summary: "Secure everyday access through a chip-enabled debit card, plus a Virtual Credit Card for digital payments.",
    image: "/product-vcc.webp",
    imageAlt: "Secure digital payment card technology",
    cardImagePosition: "67% 44%",
    highlights: ["Chip-enabled debit card", "SCT/UnionPay network", "Virtual Credit Card", "EMI options for VCC"],
    sections: [
      { title: "Debit Card", body: "The Manjushree debit card is chip-enabled and operates through SCT Network and UnionPay. Customers can make withdrawals and balance enquiries without charge at SCT/UnionPay member-bank ATMs nationwide.", items: ["Secure chip-enabled card", "Cash withdrawal and balance enquiry", "Merchant and digital-wallet transactions", "Nationwide SCT/UnionPay access"] },
      { title: "Virtual Credit Card", body: "The Manjushree Virtual Credit Card is designed for secure digital purchases without requiring a physical card. It has a published joining fee of NPR 550, annual and renewal fees of NPR 600, and interest of 2% per month.", items: ["Joining fee: NPR 550", "Annual fee: NPR 600", "Renewal fee: NPR 600", "Interest: 2% per month", "Late-payment fee: NPR 500", "Over-limit fee: NPR 500"] },
      { title: "VCC EMI options", body: "The current fee schedule lists an EMI processing fee of NPR 500 and premature settlement at 1% or NPR 500, whichever is higher.", items: ["3 months: 9.99%", "6 and 9 months: 11.49%", "12 months and above: 11.99%", "Penal interest: 3% per month after two cycles"] },
    ],
    facts: [
      { label: "Debit network", value: "SCT / UnionPay" },
      { label: "VCC joining fee", value: "NPR 550" },
      { label: "VCC annual fee", value: "NPR 600" },
      { label: "VCC interest", value: "2% per month" },
    ],
    icon: CreditCard,
    sourceUrl: "https://www.manjushreefinance.com.np/fee-and-charges",
  },
  {
    slug: "manjushree-smart",
    title: "Manjushree Smart Digital Banking",
    shortTitle: "Manjushree Smart",
    category: "Digital Banking",
    summary: "Access payments, transfers, alerts, support, and everyday banking from the Manjushree Smart platform.",
    image: "/product-mobile-banking.webp",
    imageAlt: "Mobile banking and secure digital account access",
    cardImagePosition: "50% 46%",
    highlights: ["24/7 banking access", "Real-time alerts", "Cross-bank transfers", "In-app support"],
    sections: [
      { title: "Banking in your hand", body: "Manjushree Smart brings essential banking services into one digital experience with secure payments, integrated services, customer support, and continuous access." },
      { title: "Core capabilities", body: "Use the platform to stay informed and complete common transactions without visiting a branch.", items: ["Real-time notifications and alerts", "Fast and secure payments", "Seamless cross-bank transfers", "Instant payment integrations", "In-app customer support"] },
    ],
    facts: [
      { label: "Availability", value: "24/7" },
      { label: "Transfers", value: "Within Manjushree and across banks" },
      { label: "Support", value: "Available in the app" },
    ],
    icon: MonitorSmartphone,
    sourceUrl: "https://bankxp.manjushreefinance.com.np/",
  },
  {
    slug: "merchant-qr",
    title: "Merchant QR Payments",
    shortTitle: "Merchant QR",
    category: "Merchant Services",
    summary: "Accept interoperable digital payments through Fonepay QR and NEPALPAY QR with transaction confirmation and settlement support.",
    image: "/product-merchant-qr.webp",
    imageAlt: "Merchant accepting a secure QR payment",
    cardImagePosition: "50% 46%",
    highlights: ["Fonepay QR", "NEPALPAY QR", "Static and dynamic QR", "UPI acceptance for Indian visitors"],
    sections: [
      { title: "One merchant solution, broader acceptance", body: "Manjushree supports both NEPALPAY QR and Fonepay QR so merchants can accept secure and interoperable payments from a wide customer base." },
      { title: "Designed for daily business", body: "Merchants receive real-time transaction confirmation and settlement support, with static or dynamic QR options to suit the operating model.", items: ["Easy merchant enrollment", "Real-time confirmation", "Static and dynamic QR", "Fonepay-supported UPI payments from Indian visitors"] },
    ],
    facts: [
      { label: "Networks", value: "Fonepay QR and NEPALPAY QR" },
      { label: "QR types", value: "Static and dynamic" },
      { label: "Settlement", value: "Real-time transaction confirmation" },
    ],
    icon: QrCode,
    sourceUrl: "https://www.manjushreefinance.com.np/digital/merchant-qr-sevice",
  },
  {
    slug: "remittance",
    title: "Remittance Services",
    shortTitle: "Remittance",
    category: "Transfers",
    summary: "Receive money through a broad domestic and international remittance partner network available across branches.",
    image: "/product-remittance.webp",
    imageAlt: "Fast and secure remittance connections across regions",
    highlights: ["Domestic and international partners", "Available across branches", "Multiple payout networks", "Account-conversion support"],
    sections: [
      { title: "A broad partner network", body: "Customers can access remittance services through established domestic and international partners at Manjushree branches." },
      { title: "Listed partners", body: "Availability may vary by location and partner operating arrangements.", items: ["Western Union", "IME", "City Express", "Himal Remit", "Prabhu Money Transfer", "eSewa Money Transfer", "Hulas Remit", "Ipay Reliable Remit", "Goodwill Remit"] },
    ],
    facts: [
      { label: "Coverage", value: "Domestic and international" },
      { label: "Access", value: "Across Manjushree branches" },
      { label: "Partners", value: "Nine listed networks" },
    ],
    icon: Send,
  },
  {
    slug: "payments-and-transfers",
    title: "Payments & Transfers",
    shortTitle: "Payments",
    category: "Transaction Banking",
    summary: "Move money through ConnectIPS, IPS, RTGS, intra-bank transfer, and branch-based payment instruments.",
    image: "/product-remittance.webp",
    imageAlt: "Connected payment and transfer network",
    highlights: ["ConnectIPS", "IPS and RTGS", "Intra-bank transfers", "Manager's Cheques"],
    sections: [
      { title: "Connected transfer options", body: "Choose between branch and digital transfer services depending on the amount, destination, timing, and payment purpose." },
      { title: "ConnectIPS", body: "ConnectIPS supports interbank transfers as well as payments for government taxes, insurance, wallet loading, and other supported services.", items: ["Interbank transfers", "Government payments", "Insurance payments", "Wallet loading", "Other integrated payments"] },
      { title: "Additional transfer services", body: "Manjushree also provides IPS, RTGS, Manager's Cheques and transfers between Manjushree accounts. Applicable limits and charges follow the current official schedule." },
    ],
    facts: [
      { label: "Digital channel", value: "ConnectIPS" },
      { label: "High-value transfer", value: "RTGS" },
      { label: "Internal transfer", value: "Within Manjushree accounts" },
    ],
    icon: Building2,
    sourceUrl: "https://manjushreefinance.com.np/detail/232/connectip",
  },
  {
    slug: "other-banking-services",
    title: "Other Banking Services",
    shortTitle: "Other Services",
    category: "Banking Services",
    summary: "DEMAT, C-ASBA, safe-deposit lockers, certificates, cheque services, and corporate web banking in one service network.",
    image: "/product-demat.jpg",
    imageAlt: "Secure banking services and account documentation",
    highlights: ["DEMAT and C-ASBA", "Safe-deposit lockers", "Statements and certificates", "Corporate web banking"],
    sections: [
      { title: "Capital-market services", body: "DEMAT and C-ASBA services are available alongside deposit-account services to support eligible capital-market transactions." },
      { title: "Everyday branch services", body: "Customers can also request supporting services through the branch network.", items: ["Safe-deposit lockers", "Account statements", "Balance and interest certificates", "Cheque-book and clearing services", "Corporate or firm web banking"] },
    ],
    facts: [
      { label: "Capital market", value: "DEMAT and C-ASBA" },
      { label: "Secure storage", value: "Safe-deposit lockers" },
      { label: "Business access", value: "Corporate web banking" },
    ],
    icon: ShieldCheck,
    sourceUrl: "https://www.manjushreefinance.com.np/fee-and-charges",
  },
];

export const featuredProducts = products.filter((product) => ["savings-accounts", "cards-and-vcc", "manjushree-smart", "merchant-qr"].includes(product.slug));
