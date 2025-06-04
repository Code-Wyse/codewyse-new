"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import ServicesGridSection from "../services/ServicesGridSection";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="services" className="py-20 lg:py-25 xl:py-30">
        <div className="container">
          {/* <!-- Section Title Start --> */}
          <h2 className="mb-5 pr-0 process__subtitle__header w-full  text-[18px]  font-bold text-black  dark:text-white lg:text-[28px] ">
                 What Makes CodeWyse Different
              </h2>
          <SectionHeader
            headerInfo={{
              
              subtitle: "Your innovation partner for web, mobile, and emerging tech solutions.",
              description: `We don’t just build apps—we build future-ready platforms that solve real business problems.`,
            }}
          />
          {/* <!-- Section Title End --> */}
            {/* grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5 */}
          <div className="mt-12.5 "> 
            {/* <!-- Features item Start --> */}

            <ServicesGridSection />


            {/* {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))} */}
            {/* <!-- Features item End --> */}
          </div>
          {/* <div className="flex items-center justify-center mt-5">
            <button
              aria-label="get started button"
              className="flex rounded-full bg-primary pointer px-7.5 py-2.5 text-white duration-300 ease-in-out  hover:bg-primaryho">
              Book a Call
            </button>
          </div> */}
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
