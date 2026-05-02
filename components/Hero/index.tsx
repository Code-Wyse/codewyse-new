"use client";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import NewSectionHeader from "../Common/NewSectionHeader";
import { useAppointment } from "@/app/context/AppointmentContext";

const Hero = () => {
  const [email, setEmail] = useState("");
  const { open: openAppointment } = useAppointment();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" w-full md:w-1/2">
            <NewSectionHeader
            headerInfo={{
              title: "Custom Web Apps, Mobile Apps, AI & ML and CRM Development",
              subtitle: "",
              description: ``,

            }}
          />
              <h1 className="mb-5 pr-0 process__subtitle__header text-[22px] lg:pr-16 font-bold text-black !text-start dark:text-white lg:text-[28px] ">
                  Codewyse — Custom Web Apps, Mobile Apps, AI &amp; ML and CRM Development
              </h1>
              <p>
                Codewyse builds <strong>custom web apps, mobile apps, AI &amp; ML solutions, SaaS platforms, MVPs and CRM systems</strong> for startups and enterprises worldwide. Engineered on <strong>Next.js, React, React Native and Node.js</strong>, our products are built to scale from day one.<br /><br />
              </p>
              <ul className="new-list">
                <li>Custom Web App Development (Next.js, React, Node.js)</li>
                <li>iOS &amp; Android Mobile Apps (React Native, Flutter)</li>
                <li>AI &amp; ML, Generative AI and LLM Integration</li>
                <li>SaaS &amp; MVP Development for Startups</li>
                <li>Custom CRM Development &amp; Automation</li>
                <li>E-commerce, Fintech and Healthcare Software</li>
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
                      type="button"
                      aria-label="Book a call"
                      onClick={() => openAppointment()}
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho cursor-pointer"
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
                  alt=""
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt=""
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt=""
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative  w-full rounded-xl ">
                  <Image
                    className="object-contain dark:hidden"
                    src="/images/banner-sec/main-banner-sec_img.png"
                    alt="Codewyse — custom web apps, mobile apps, AI & ML and CRM development"
                     width={600}
                     height={400}
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
