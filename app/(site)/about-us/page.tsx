import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import FunFact from "@/components/FunFact";
import OurTeam from "@/components/AboutPage/OurTeam";

export const metadata: Metadata = {
    title: "Privacy Policy : Codewyse",

    // other metadata
    description: "Privacy Policy : Codewyse"
};

const page = () => {
    return (
        <section className="pt-[50px] pb-10">
                <Hero />
                <Brands />
                <div className="mt-10">
                <FunFact />
                </div>
                <OurTeam />

        </section>
    );
};

export default page;
