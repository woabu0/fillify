import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Fillify - Free PDF Editor & Converter | Make PDFs Fillable Online",
  description: "Fillify is a free, fast, and secure online PDF editor and converter. Make any PDF fillable, edit PDF documents, and convert files instantly. No sign-up required, 100% free forever. Process your PDFs with our cloud-based tools - no downloads needed.",
  keywords: [
    "PDF editor",
    "PDF converter",
    "fillable PDF",
    "edit PDF online",
    "PDF form maker",
    "free PDF editor",
    "PDF tools",
    "online PDF editor",
    "make PDF fillable",
    "PDF form creator",
  ],
  authors: [{ name: "Fillify" }],
  creator: "Fillify",
  publisher: "Fillify",
  metadataBase: new URL("https://fillify0.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fillify - Free PDF Editor & Converter",
    description: "Edit PDFs, make them fillable, and convert files instantly. 100% free, no sign-up required. Fast, secure, and cloud-based PDF tools.",
    type: "website",
    locale: "en_US",
    url: "https://fillify0.vercel.app",
    siteName: "Fillify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fillify - Free PDF Editor & Converter",
    description: "Edit PDFs, make them fillable, and convert files instantly. 100% free, no sign-up required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.className} antialiased bg-gray-950`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
