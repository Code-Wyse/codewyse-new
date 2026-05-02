import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import FunFact from "@/components/FunFact";
import OurTeam from "@/components/AboutPage/OurTeam";
import NewAboutBanner from "@/components/About/NewAboutBanner";
import HistorySlider from "@/components/AboutPage/HistorySlider";
import AboutSection from "@/components/AboutPage/AboutSection";
import WhatDefinesUs from "@/components/AboutPage/WhatDefinesUs";

export const metadata: Metadata = {
    title: "About Codewyse — Custom Software, AI & ML and CRM Experts",
    description:
        "Learn about Codewyse: a global software development company building custom web apps, mobile apps, AI & ML solutions, SaaS platforms and CRMs for ambitious startups and enterprises.",
    keywords: [
        "about Codewyse",
        "software development company",
        "custom web app developers",
        "mobile app developers",
        "AI ML company",
        "CRM development company",
        "SaaS development company",
    ],
    alternates: { canonical: "/about-us" },
    openGraph: {
        title: "About Codewyse — Custom Software, AI & ML and CRM Experts",
        description:
            "Codewyse is a global software development company building custom web apps, mobile apps, AI & ML, SaaS and CRMs.",
        url: "/about-us",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Codewyse — Custom Software, AI & ML and CRM Experts",
        description:
            "Codewyse is a global software development company building custom web apps, mobile apps, AI & ML, SaaS and CRMs.",
    },
};

const page = () => {
    return (
        <section className="pt-[50px] pb-10">
                {/* <Hero /> */}
                <NewAboutBanner />
                <Brands />
                <AboutSection />
                <HistorySlider />
                <WhatDefinesUs />
                {/* <div className="mt-10">
                <FunFact />
                </div> */}
                <OurTeam />

        </section>
    );
};

export default page;
