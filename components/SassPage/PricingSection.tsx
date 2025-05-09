"use client";

// components/PricingSection.tsx
// faDiscord, faTrophy,
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import {
    faArrowRight,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '../Common/SectionHeader';

const PricingSection: React.FC = () => {
    return (
        <section className="bg-base-200 overflow-hidden pt-20 pb-20" id="pricing">
            <div className="py-24 pb-0 px-8 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className="font-medium text-primary mb-8"></p>
                    <SectionHeader
              headerInfo={{
                title: `Pricing`,
                subtitle: ``,
                description: ``,
              }}
            />
                    <h2 className="font-bold text-3xl lg:text-5xl text-black tracking-tight mb-8 max-w-2xl mx-auto">
                        Save hours of repetitive code, ship fast, get profitable!
                    </h2>
                    <p className="text-sm md:text-base flex justify-center items-center gap-2">
                        {/* <FontAwesomeIcon icon={faDollarSign} className="w-5 h-5 text-accent animate-pulse" /> */}
                        <span className='text-black'>
                            <span className="text-black">$100 off</span> for the first 7030 customers (11 left)
                        </span>
                    </p>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
                    {/* Starter Plan */}
                    <div className="relative w-[33%]">
                        <div className="h-full relative flex flex-col gap-5 lg:gap-8 z-10 p-8 rounded-lg bg-base-100">
                            <div className="flex justify-between items-center gap-4">
                                <p className="text-lg lg:text-xl font-bold">Starter</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex flex-col justify-end mb-[4px] text-lg">
                                    <p className="relative opacity-80">
                                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]"></span>
                                        <span className="text-base-content">$299</span>
                                    </p>
                                </div>
                                <p className="text-5xl tracking-tight font-extrabold">$199</p>
                                <div className="flex flex-col justify-end mb-[4px]">
                                    <p className="text-xs opacity-60 uppercase font-semibold">USD</p>
                                </div>
                            </div>
                            <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>NextJS boilerplate</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>SEO & Blog</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Mailgun emails</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Stripe / Lemon Squeezy</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>MongoDB / Supabase</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Google Oauth & Magic Links</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Google Oauth & Magic Links</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Google Oauth & Magic Links</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Google Oauth & Magic Links</span>
                                </li>
                            </ul>
                            <div className="flex justify-center flex-col items-center gap-3">
                                <button className="btn btn-primary group btn-wide plausible-event-name=Checkout"
                                    title="Go to ShipFast Checkout"><svg
                                        className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out"
                                        viewBox="0 0 375 509" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z">
                                        </path>
                                    </svg>Get ShipFast</button>
                                <p>Pay once. Build unlimited projects!</p>
                            </div>
                        </div>
                    </div>
                    {/* {All in } */}
                    <div className="relative w-[33%]">
                        <div className="h-full relative flex flex-col gap-5 lg:gap-8 z-10 p-8 rounded-lg bg-base-100">
                            <div className="flex justify-between items-center gap-4">
                                <p className="text-lg lg:text-xl font-bold">Starter</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex flex-col justify-end mb-[4px] text-lg">
                                    <p className="relative opacity-80">
                                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]"></span>
                                        <span className="text-base-content">$299</span>
                                    </p>
                                </div>
                                <p className="text-5xl tracking-tight font-extrabold">$199</p>
                                <div className="flex flex-col justify-end mb-[4px]">
                                    <p className="text-xs opacity-60 uppercase font-semibold">USD</p>
                                </div>
                            </div>
                            <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>NextJS boilerplate</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>SEO & Blog</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Mailgun emails</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Stripe / Lemon Squeezy</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>MongoDB / Supabase</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Google Oauth & Magic Links</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Google Oauth & Magic Links</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Google Oauth & Magic Links</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-[18px] h-[18px] opacity-80 shrink-0" />
                                    <span>Google Oauth & Magic Links</span>
                                </li>
                            </ul>
                            <div className="flex justify-center flex-col items-center gap-3">
                                <button className="btn btn-primary group btn-wide plausible-event-name=Checkout"
                                    title="Go to ShipFast Checkout"><svg
                                        className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out"
                                        viewBox="0 0 375 509" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z">
                                        </path>
                                    </svg>Get ShipFast</button>
                                <p>Pay once. Build unlimited projects!</p>
                            </div>
                        </div>
                    </div>

                    {/* ship-bundle  */}
                    <div className="relative w-[33%]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <span className="badge text-xs p-2 border-white rounded-full text-white text-accent-content bg-[#38a297] font-semibold border-0 bg-accent">
                                BUNDLE
                            </span>
                        </div>
                        <div className="absolute -inset-[1px] rounded-[8px] bg-accent z-10"></div>

                        <div className="h-full relative flex flex-col gap-5 lg:gap-8 z-10 p-8 rounded-lg border-[2px] border-[#38a297]  bg-base-100">
                            {/* Header */}
                            <div className="flex justify-between items-center gap-4">
                                <div>
                                    <p className="text-lg lg:text-xl font-bold">
                                        ShipFast <span className="text-accent">+ CodeFast</span>
                                    </p>
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="flex gap-2">
                                <div className="flex flex-col justify-end mb-[4px] text-lg">
                                    <p className="relative opacity-80">
                                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]"></span>
                                        <span className="text-base-content">$648</span>
                                    </p>
                                </div>
                                <p className="text-5xl tracking-tight font-extrabold">$299</p>
                                <div className="flex flex-col justify-end mb-[4px]">
                                    <p className="text-xs opacity-60 uppercase font-semibold">USD</p>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                <li className="h-full">
                                    <div className="space-y-6 flex-1 h-full">
                                        <div className="flex items-center gap-2">
                                            {/* <FontAwesomeIcon icon={faArrowRight} className="rotate-90 md:rotate-0 w-4 h-4" /> */}
                                            <span className="italic flex items-center gap-2 lg:text-lg">
                                                <FontAwesomeIcon icon={faArrowLeft} className="max-lg:rotate-90 w-5 h-5" />
                                                Everything in All-in, and...
                                            </span>
                                        </div>

                                        <div className="bg-base-300 border border-base-content/10 hover:border-base-content/30 duration-100 hover:shadow-2xl shadow-lg rounded-lg">
                                            <a
                                                href="https://codefa.st?ref=shipfast_pricing"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group block p-4 sm:p-6 space-y-2 duration-200"
                                            >
                                                <div className="flex gap-2.5 items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 text-green-600" />
                                                    <span className="lg:text-lg font-semibold text-accent">
                                                        CodeFast ($299 value)
                                                    </span>
                                                </div>
                                                <div className="leading-relaxed pb-1">
                                                    Learn to code in weeks, not months
                                                </div>
                                                <ul className="list-disc list-inside leading-normal pb-2.5">
                                                    <li>12 hours of content</li>
                                                    <li>Build a SaaS from 0</li>
                                                    <li>Entrepreneur mindset</li>
                                                </ul>

                                                {/* Avatar Group */}
                                                <div>
                                                    <div className="avatar-group justify-start -space-x-4">
                                                        {[
                                                            'user_avatart.jpeg',
                                                            'user_avatart.jpeg',
                                                            'user_avatart.jpeg',
                                                            'user_avatart.jpeg',
                                                            'user_avatart.jpeg',
                                                            'user_avatart.jpeg',
                                                            'user_avatart.jpeg',
                                                            'user_avatart.jpeg',
                                                            'user_avatart.jpeg'
                                                        ].map((img, i) => (
                                                            <div key={i} className="avatar w-10 h-10 !border-[1.5px]">
                                                                <img
                                                                    alt={`Avatar ${i}`}
                                                                    src={`/images/sass/${img}`}
                                                                    loading="lazy"
                                                                    className="rounded-full"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="opacity-80 text-sm mt-2">
                                                        1,000+ students love CodeFast
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            {/* CTA Button */}
                            <div className="space-y-3 items-center mx-auto">
                                <button
                                    className="btn btn-primary group btn-block btn-accent"
                                    title="Go to ShipFast Checkout"
                                >
                                    Get ShipFast + CodeFast
                                </button>
                                <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium">
                                    Pay once. Build unlimited projects!
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>

    )
}

export default PricingSection;