import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import CareersBanner from "@/components/Careers/CareersBanner";
import CulturePerksSection from "@/components/Careers/CulturePerksSection";
import CoreValues from "@/components/Careers/CoreValue";
import WorkWithUs from "@/components/Careers/WorkWithUs";

export const metadata: Metadata = {
  title: "Terms And Condition : Codewyse",

  // other metadata
  description: "Terms And Condition : Codewyse"
};

const page = () => {
  return (
    <>
   <CareersBanner />
   <CulturePerksSection />
   <CoreValues />
   <WorkWithUs />
   </>
  );
};

export default page;
