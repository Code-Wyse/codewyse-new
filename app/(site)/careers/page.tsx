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
  title: "Careers — Build Web, Mobile, AI & ML and CRM Products at Codewyse",
  description:
    "Join Codewyse and build custom web apps, mobile apps, AI & ML solutions, SaaS platforms and CRM systems with a global team of engineers, designers and product thinkers.",
  keywords: [
    "Codewyse careers",
    "software engineer jobs",
    "AI ML engineer jobs",
    "Next.js developer jobs",
    "React developer jobs",
    "mobile developer jobs",
    "remote software jobs",
  ],
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Codewyse — Web, Mobile, AI & ML, SaaS and CRM Roles",
    description:
      "Join Codewyse and build custom web, mobile, AI & ML, SaaS and CRM products with a global team.",
    url: "/careers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Codewyse — Web, Mobile, AI & ML, SaaS and CRM Roles",
    description:
      "Join Codewyse and build custom web, mobile, AI & ML, SaaS and CRM products with a global team.",
  },
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
