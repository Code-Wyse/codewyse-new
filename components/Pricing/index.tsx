"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section id="launchkits" className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `LAUNCH KITS`,
                subtitle: `Flexible Options for Every Stage of Your SaaS Journey`,
                description: `Choose from our expertly crafted boilerplates to match your startup’s needs—from rapid MVP launches to fully customized, production-ready SaaS platforms. One-time pricing, no recurring fees.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              $499{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                One-Time
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
              Starter Boilerplate 
              </h4>
              <p>The essentials to kick off your SaaS MVP.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  NextJS boilerplate
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  SEO & Blog
                  </li>
                  <li className="mb-4 text-black  last:mb-0 dark:text-manatee">
                  Mailgun emails
                  </li>
                  <li className="mb-4 text-black  last:mb-0 dark:text-manatee">
                  Stripe / Lemon Squeezy
                  </li>
                  <li className="mb-4 text-black  last:mb-0 dark:text-manatee">
                  MongoDB / Supabase
                  </li>
                  <li className="mb-4 text-black  last:mb-0 dark:text-manatee">
                  Google Oauth & Magic Links
                  </li>
                  <li className="mb-4 text-black  last:mb-0 dark:text-manatee">
                  Components & animations
                  </li>
                  <li className="mb-4 text-black  last:mb-0 dark:text-manatee">
                  ChatGPT prompts for terms & privacy
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              $999{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                One-Time
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
              Pro Boilerplate
              </h4>
              <p>Upgrade with more structure, integrations, and admin features.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
              <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  NextJS boilerplate
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  SEO & Blog
                  </li>
                  <li className="mb-4 text-black   last:mb-0 dark:text-manatee">
                  Mailgun emails
                  </li>
                  <li className="mb-4 text-black   last:mb-0 dark:text-manatee">
                  Stripe / Lemon Squeezy
                  </li>
                  <li className="mb-4 text-black   last:mb-0 dark:text-manatee">
                  MongoDB / Supabase
                  </li>
                  <li className="mb-4 text-black   last:mb-0 dark:text-manatee">
                  Google Oauth & Magic Links
                  </li>
                  <li className="mb-4 text-black   last:mb-0 dark:text-manatee">
                  Components & animations
                  </li>
                  <li className="mb-4 text-black   last:mb-0 dark:text-manatee">
                  ChatGPT prompts for terms & privacy
                  </li>
                  <li className="mb-4 text-black   last:mb-0 dark:text-manatee">
                  Discord community & Leaderboard
                  </li>
                  <li className="mb-4 text-black   last:mb-0 dark:text-manatee">
                  $1,210 worth of discounts
                  </li>
                  <li className="mb-4 text-black   last:mb-0 dark:text-manatee">
                  Lifetime updates
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              From $2,500{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                One-Time
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
              Custom SaaS Starter
              </h4>
              <p>Tailored build with extra power and flexibility.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  Custom Module Development
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  Multi-language & i18n Support
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  Custom Design System Branding
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  CRO-Optimized Landing Page Pack
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  Full Analytics Dashboard Setup
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
          <a
                href="/saas"
                className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out mt-4 w-[20%] gap-4 hover:bg-primaryho"
              >
                <span className="duration-300 group-hover:pr-2">Explore More</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
