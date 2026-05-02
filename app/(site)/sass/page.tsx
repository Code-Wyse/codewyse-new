import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/SassPage/HeroSection";
import MrrSection from "@/components/SassPage/MrrSection";
import HeadacheSection from "@/components/SassPage/HeadacheSection";
import FeatureSection from "@/components/SassPage/FeatureSection";
import ProductStorySection from "@/components/SassPage/ProductStorySection";
import PricingSection from "@/components/SassPage/PricingSection";
import FAQ from "@/components/FAQ";
import TestimonialsSection from "@/components/SassPage/TestimonialsSection";
import BoostAppSection from "@/components/SassPage/BoostAppSection";

export const metadata: Metadata = {
  title: "SaaS & MVP Development — Launch Your Startup in Days, Not Weeks",
  description:
    "Codewyse delivers production-ready SaaS and MVP development on Next.js, React and Node.js — go from idea to launch fast with built-in auth, payments, AI features and CRM integrations.",
  keywords: [
    "SaaS development",
    "MVP development",
    "Next.js boilerplate",
    "startup development",
    "AI SaaS",
    "build a SaaS",
    "launch MVP",
    "React SaaS",
  ],
  alternates: { canonical: "/sass" },
  openGraph: {
    title: "SaaS & MVP Development — Launch Your Startup in Days, Not Weeks",
    description:
      "Production-ready SaaS and MVP development on Next.js, React and Node.js by Codewyse.",
    url: "/sass",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS & MVP Development — Launch Your Startup in Days, Not Weeks",
    description:
      "Production-ready SaaS and MVP development on Next.js, React and Node.js by Codewyse.",
  },
};

const page = () => {
  return (
  <>
    <HeroSection />
    <MrrSection />
    <HeadacheSection />
    <FeatureSection />
    <ProductStorySection />
    <PricingSection />
    <FAQ />
    <TestimonialsSection />
    <BoostAppSection />
    </>
  );
};

export default page;
