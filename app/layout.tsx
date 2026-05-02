import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ToasterContext from "./context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://codewyse.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Codewyse | Custom Web Apps, Mobile Apps, AI & ML and CRM Development",
    template: "%s | Codewyse",
  },
  description:
    "Codewyse builds custom web apps, mobile apps, AI & ML solutions, SaaS platforms, CRMs and MVPs. Trusted Next.js, React and Node.js development partner for startups and enterprises worldwide.",
  applicationName: "Codewyse",
  generator: "Next.js",
  keywords: [
    "Codewyse",
    "custom web apps",
    "web app development",
    "mobile app development",
    "iOS app development",
    "Android app development",
    "React Native development",
    "AI and ML",
    "AI development services",
    "machine learning solutions",
    "artificial intelligence",
    "generative AI",
    "LLM development",
    "CRM development",
    "custom CRM",
    "SaaS development",
    "MVP development",
    "Next.js development",
    "React development",
    "Node.js development",
    "TypeScript",
    "e-commerce development",
    "fintech app development",
    "healthcare app development",
    "EdTech development",
    "cloud applications",
    "API development",
    "UI UX design",
    "product engineering",
    "software development company",
  ],
  authors: [{ name: "Codewyse", url: SITE_URL }],
  creator: "Codewyse",
  publisher: "Codewyse",
  category: "Software Development",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Codewyse",
    title:
      "Codewyse | Custom Web Apps, Mobile Apps, AI & ML and CRM Development",
    description:
      "Custom web apps, mobile apps, AI & ML, SaaS, MVPs and CRM systems built by Codewyse — your scale-ready software development partner.",
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Codewyse — Smart Software Solutions Built to Scale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Codewyse | Custom Web Apps, Mobile Apps, AI & ML and CRM Development",
    description:
      "Custom web apps, mobile apps, AI & ML, SaaS, MVPs and CRM systems built by Codewyse.",
    site: "@codewyse20",
    creator: "@codewyse20",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "CODEWYSE",
  legalName: "CODEWYSE",
  alternateName: "Codewyse",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.jpg`,
  image: `${SITE_URL}/images/og-default.jpg`,
  description:
    "Codewyse builds custom web apps, mobile apps, AI & ML solutions, SaaS, CRMs and MVPs for startups and enterprises worldwide.",
  foundingDate: "2020",
  areaServed: "Worldwide",
  knowsAbout: [
    "Custom Web Application Development",
    "Mobile Application Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "SaaS Development",
    "CRM Development",
    "MVP Development",
    "Next.js",
    "React",
    "Node.js",
    "E-commerce",
    "Fintech",
    "Healthcare Software",
  ],
  sameAs: [
    "https://www.linkedin.com/company/codewyse",
    "https://x.com/codewyse20",
    "https://www.instagram.com/codewyse/",
    "https://github.com/Code-Wyse",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Codewyse",
  description:
    "Custom web apps, mobile apps, AI & ML, SaaS, CRMs and MVPs built by Codewyse.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`dark:bg-black ${inter.className}`}>
        <Providers>
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
