export const siteConfig = {
  name: "indylaw",
  tagline: "AI-Powered Legal Research for India",
  domain: "indylaw.in",
  emails: {
    hello: "admin@theparalegalassist.co.in",
    support: "admin@theparalegalassist.co.in",
    sales: "admin@theparalegalassist.co.in",
  },
  ctas: {
    primary: "Request Demo",
    secondary: "View Architecture",
  },
  nav: [
    { label: "Features", href: "/features" },
    // { label: "Architecture", href: "/architecture" },
    { label: "Pricing", href: "/pricing" },
    { label: "Security", href: "/security" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
