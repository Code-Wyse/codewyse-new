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
  title: "Launch Your Startup in Days, Not Weeks | Codewyse",

  // other metadata
  description: "The NextJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
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
