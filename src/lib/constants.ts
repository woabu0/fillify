export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
  ],
  company: [
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "/", label: "Privacy Policy" },
  ],
  support: [
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Help Center" },
  ],
} as const;

export const COMPANY_NAME = "Fillify";
export const COMPANY_DESCRIPTION = "The modern solution for PDF editing and conversion. Free, fast, and secure.";

