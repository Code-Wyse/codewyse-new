import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Codewyse — Hire Web, Mobile, AI & ML and CRM Experts",
  description:
    "Get in touch with Codewyse to scope a custom web app, mobile app, AI & ML solution, SaaS product or CRM. Free consultation, global delivery.",
  keywords: [
    "contact Codewyse",
    "hire web developers",
    "hire mobile developers",
    "hire AI ML engineers",
    "hire CRM developers",
    "free software consultation",
  ],
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Contact Codewyse — Hire Web, Mobile, AI & ML and CRM Experts",
    description:
      "Scope a custom web, mobile, AI & ML, SaaS or CRM project with Codewyse.",
    url: "/support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Codewyse — Hire Web, Mobile, AI & ML and CRM Experts",
    description:
      "Scope a custom web, mobile, AI & ML, SaaS or CRM project with Codewyse.",
  },
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
