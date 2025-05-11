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
    title: "Privacy Policy : Codewyse",

    // other metadata
    description: "Privacy Policy : Codewyse"
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
