import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/SassPage/HeroSection";
import MrrSection from "@/components/SassPage/MrrSection";
import HeadacheSection from "@/components/SassPage/HeadacheSection";
import FeatureSection from "@/components/SassPage/FeatureSection";
import ProductStorySection from "@/components/SassPage/ProductStorySection";

export const metadata: Metadata = {
  title: "Privacy Policy : Codewyse",

  // other metadata
  description: "Privacy Policy : Codewyse"
};

const page = () => {
  return (
  <>
    <HeroSection />
    <MrrSection />
    <HeadacheSection />
    <FeatureSection />
    <ProductStorySection />
    </>
  );
};

export default page;
