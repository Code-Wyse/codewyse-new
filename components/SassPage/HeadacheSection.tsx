import React from 'react'
import CloudIconSvg from '../IconsSvg/CloudIconSvg'
import ArrowDownIconSvg from '../IconsSvg/ArrowDownIconSvg'

function HeadacheSection() {
    return (
        <section className="relative py-24 px-8">
            <div className="relative bg-[#38a297]  text-neutral-content rounded-lg p-8 md:p-16 max-w-lg mx-auto text-center text-lg">
                <div className="leading-relaxed space-y-4 md:space-y-6">
                    <div className="text-black space-y-1">
                        <p><span className="text-[#fff] font-medium">4 hrs</span> to set up emails</p>
                        <p>+ <span className="text-[#fff] font-medium">6 hrs</span> designing a landing page</p>
                        <p>+ <span className="text-[#fff] font-medium">4 hrs</span> to handle Stripe webhooks</p>
                        <p>+ <span className="text-[#fff] font-medium">2 hrs</span> for SEO tags</p>
                        <p>+ <span className="text-[#fff] font-medium">1 hr</span> applying for Google Oauth</p>
                        <p>+ <span className="text-[#fff] font-medium">3 hrs</span> for DNS records</p>
                        <p>+ <span className="text-[#fff] font-medium">2 hrs</span> for protected API routes</p>
                        <p>+ <span className="text-[#fff] font-medium">∞ hrs</span> overthinking...</p>
                    </div>
                    <div className="text-xl font-semibold flex flex-col md:flex-row items-center justify-center gap-3">
                        <p className='text-black'>= <span className="text-[#fff] font-medium">22+ hours</span> of headaches</p>
                        <CloudIconSvg />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 inset-x-0 text-center flex gap-1 justify-center items-center text-sm opacity-80">
            <ArrowDownIconSvg />
                <p className="s">There's an easier way</p>
            </div>
        </section>
    )
}

export default HeadacheSection