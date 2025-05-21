"use client";
import React from 'react'
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import SectionHeader from '../Common/SectionHeader';
import { RecentsWordData } from './RecentsWordData';
import RecentsWorkSlides from './RecentsWorkSlides';
import Link from 'next/link';

function RecentWork() {
    return (
        <section id="project" className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            <div className="flex flex-col  ">
                <h2 className="mb-5 pr-0 process__subtitle__header w-full  text-[18px]  font-bold text-black  dark:text-white lg:text-[28px] ">
                 Our Recent Work
              </h2>
                <SectionHeader
                    headerInfo={{
                        subtitle: "",
                        description: ``,
                    }}
                />
                <div className="">
                    <h4 className='mx-auto text-center mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3'>Custom Web & Mobile Development That Drives Results</h4>
                    <p className='mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center'>We specialize in building powerful, user-first digital experiences — from responsive websites to high-performance mobile apps. Whether you're launching a startup or scaling an enterprise, our team brings your vision to life with clean code, intuitive design, and scalable architecture.</p>
                </div>
                <div className="hello">
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: -20,
                            },

                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
                    >
                        {/* <!-- Slider main container --> */}
                        <div className="swiper testimonial-01 mb-15 pb-25">
                            {/* <!-- Additional required wrapper --> */}
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                autoplay=
                                {{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination]}
                                breakpoints={{
                                    // when window width is >= 640px
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {RecentsWordData.map((work) => (
                                    <SwiperSlide key={work?.id}>
                                        <RecentsWorkSlides work={work} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </motion.div>
                </div>
                <div className="flex justify-center pb-4">
                    <Link href="/projects">
                        <button
                            aria-label="get started button"
                            className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                        >
                            Explore More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default RecentWork