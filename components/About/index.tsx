"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useAppointment } from "@/app/context/AppointmentContext";

const About = () => {
  const { open: openAppointment } = useAppointment();
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2 rounded-xl overflow-hidden"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="Codewyse custom web, mobile, AI and CRM development team"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-light-01.png"
                alt="Codewyse custom web, mobile, AI and CRM development team"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "}
                Custom Web Apps, Mobile Apps and AI &amp; ML Development for Visionary Brands
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Idea to Launch — Codewyse Builds Custom Web Apps, Mobile Apps, AI &amp; ML and CRM Systems
              </h2>
              <p>
                We help startups and enterprises turn bold ideas into production-grade <strong>custom web apps, mobile apps, AI &amp; ML solutions, SaaS products and CRM systems</strong>. Whether you need a full <strong>Next.js / React / Node.js</strong> team or specialist <strong>AI engineers</strong>, Codewyse is your software development partner from concept to launch and beyond.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Custom Web App &amp; Mobile App Development
                  </h3>
                  <p>End-to-end design, development and deployment of high-performance custom web apps and iOS / Android mobile apps using Next.js, React, React Native, Flutter and Node.js.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  AI &amp; Machine Learning Engineering
                  </h3>
                  <p>From generative AI features and LLM integration to predictive ML models and intelligent automation, we ship AI &amp; ML capabilities that move your business metrics.</p>
                </div>
                
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Custom CRM Development &amp; Automation
                  </h3>
                  <p>Tailor-made CRMs that fit your sales, support and operations workflows — with deep integrations into HubSpot, Salesforce, Stripe, Twilio, and your existing tools.</p>
                </div>
                
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  SaaS &amp; MVP Development for Startups
                  </h3>
                  <p>Production-ready SaaS platforms and MVPs with auth, payments, multi-tenant architecture and AI features baked in — go from idea to paying users fast.</p>
                </div>
                
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    05
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  E-commerce, Fintech &amp; Healthcare Software
                  </h3>
                  <p>Industry-grade builds for e-commerce, fintech and healthcare — secure, compliant (HIPAA, SOC2, PCI) and scaled on cloud-native infrastructure.</p>
                </div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
              From MVP to Market — Web, Mobile, AI &amp; CRM
              </h4>
              <h2 className="relative mt-7.5 mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Everything You Need to Launch a Custom Web App, Mobile App, AI Product or CRM
              </h2>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Custom Web Apps &amp; SaaS Platforms
                  </h3>
                  <p>Business dashboards, SaaS products, internal tools and customer portals — built on Next.js and Node.js, fully tailored to your workflow.</p>
                </div>
                
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Mobile App Development (iOS &amp; Android)
                  </h3>
                  <p>Cross-platform and native mobile apps built with React Native, Flutter and Swift / Kotlin — shipped to the App Store and Google Play.</p>
                </div>
                
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  AI &amp; ML Solutions and Custom CRMs
                  </h3>
                  <p>Generative AI, LLM integrations, recommendation engines, and tailor-made CRM systems that fit your sales and operations.</p>
                </div>
                
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  End-to-End Product Engineering
                  </h3>
                  <p>Discovery, UX/UI design, full-stack development, QA, DevOps and post-launch support — one accountable team from idea to scale.</p>
                </div>
                
              </div>
              <div >
              <h2 className="relative mt-7.5 mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                  Let&rsquo;s Build Your Web App, Mobile App, AI Product or CRM
                  </h2>
              <p>
              Your product deserves a world-class team. Let Codewyse turn your vision into a scalable, secure custom web app, mobile app, AI &amp; ML solution, SaaS platform or CRM system.
                  </p>
                <button
                  type="button"
                  onClick={() => openAppointment()}
                  className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out mt-4 w-[80%] lg:w-[40%] gap-4 hover:bg-primaryho cursor-pointer"
                >
                  Book a Call
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2 rounded-xl overflow-hidden"
            >
              <Image
                src="/images/about/about-light-02.png"
                alt="Codewyse custom web, mobile, AI and CRM development team"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-02.svg"
                alt="Codewyse custom web, mobile, AI and CRM development team"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
