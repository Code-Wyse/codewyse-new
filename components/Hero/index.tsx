"use client";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import NewSectionHeader from "../Common/NewSectionHeader";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
   const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();

    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/codewyse/30min?primary_color=3ba196',
      });
    } else {
      console.warn('Calendly script not loaded yet.');
    }
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" w-full md:w-1/2">
            <NewSectionHeader
            headerInfo={{
              title: "Build Smarter. Launch Faster. Scale Fearlessly.",
              subtitle: "",
              description: ``,
          
            }}
          />
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                  
              </h4> */}
              <h2 className="mb-5 pr-0 process__subtitle__header text-[22px] lg:pr-16 font-bold text-black !text-start dark:text-white lg:text-[28px] ">
                  Custom Web & Mobile App Development Powered by AI, Blockchain & Automation
              </h2>
              <p>
                At CodeWyse, we engineer scalable digital products for startups and enterprises using future-ready tech—so you can launch confidently and grow without limits.<br /><br />
                {/* ✅ RPA & AI Automation<br />
                ✅ Scalable Web Platforms<br />
                ✅ iOS & Android Apps<br />
                ✅ Blockchain Solutions<br />
                ✅ UI/UX Design & Optimization<br /> */}
              </p>
              <ul className="new-list">
                <li>
                RPA & AI Automation
                </li>
                <li>
                Scalable Web Platforms
                </li>
                <li>iOS & Android Apps</li>
                <li>Blockchain Solutions</li>
                <li>UI/UX Design & Optimization</li>
              </ul>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    /> */}
                    <button
                      aria-label="get started button"
                      onClick={openCalendly}
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Book a Call
                    </button>
                  </div>
                </form>

                {/* <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p> */}
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-700/444 w-full rounded-xl overflow-hidden">
                  <Image
                    className="object-contain dark:hidden"
                    src="/images/banner-sec/main-banner-sec_img.png"
                    alt="Hero"
                      width={450}
                      height={500}
                  />
                  {/* <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/banner-sec/main-banner-sec_img.png"
                    alt="Hero"
                    width={500}
                    height={500}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
