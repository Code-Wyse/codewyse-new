import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import RecentWork from "@/components/RecentWorks/RecentWork";
import CookieConsent from "@/components/Cookies/CookieConsent";
import OurProcessSection from "@/components/services/OurProcessSection";

export const metadata: Metadata = {
  title:
    "Custom Web Apps, Mobile Apps, AI & ML and CRM Development",
  description:
    "Codewyse builds high-performance custom web apps, mobile apps, AI & ML solutions, SaaS products, MVPs and CRM systems. Next.js, React, Node.js and AI experts trusted by startups and enterprises worldwide.",
  keywords: [
    "custom web apps",
    "mobile app development",
    "AI and ML",
    "artificial intelligence",
    "machine learning",
    "CRM development",
    "SaaS development",
    "MVP development",
    "Next.js development",
    "React development",
    "Node.js development",
    "e-commerce development",
    "fintech app development",
    "healthcare app development",
    "software development company",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Codewyse | Custom Web Apps, Mobile Apps, AI & ML and CRM Development",
    description:
      "Custom web apps, mobile apps, AI & ML, SaaS, MVPs and CRM systems built by Codewyse — your scale-ready software partner.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Codewyse | Custom Web Apps, Mobile Apps, AI & ML and CRM Development",
    description:
      "Custom web apps, mobile apps, AI & ML, SaaS, MVPs and CRM systems built by Codewyse.",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      {/* <ServicesGridSection /> */}
      <Feature />
      <About />
      {/* <FeaturesTab /> */}
      <OurProcessSection />
      <RecentWork />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      <CookieConsent />
      {/* <Blog /> */}
    </main>
  );
}
