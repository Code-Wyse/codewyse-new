import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import CareersBanner from "@/components/Careers/CareersBanner";
import CulturePerksSection from "@/components/Careers/CulturePerksSection";
import CoreValues from "@/components/Careers/CoreValue";
import WorkWithUs from "@/components/Careers/WorkWithUs";
import CareersBannerMobile from "@/components/Careers/CareersBannerMobile";

export const metadata: Metadata = {
  title: "Terms And Condition : Codewyse",

  // other metadata
  description: "Terms And Condition : Codewyse"
};

const page = () => {
  return (
    <>
   <CareersBanner />
   <CareersBannerMobile />
   <CulturePerksSection />
   <CoreValues />
   <WorkWithUs />
   </>
  );
};

export default page;
