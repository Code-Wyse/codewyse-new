"use client";
import React from 'react'
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import SectionHeader from '../Common/SectionHeader';
import { RecentsWordData } from '../RecentWorks/RecentsWordData';
import RecentsWorkSlides from '../RecentWorks/RecentsWorkSlides';


function ProjectsSections() {
    return (
        <section id="project" className="mx-auto  px-4 md:px-8 xl:px-0">
            <div className="container">
            <div className="flex flex-col  ">
                {/* <SectionHeader
                    headerInfo={{
                        title: "🚀 Our Recent Work",
                        subtitle: "",
                        description: ``,
                    }}
                /> */}
                {/* <div className="">
                    <h4 className='mx-auto text-center mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3'>Custom Web & Mobile Development That Drives Results</h4>
                    <p className='mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center'>We specialize in building powerful, user-first digital experiences — from responsive websites to high-performance mobile apps. Whether you're launching a startup or scaling an enterprise, our team brings your vision to life with clean code, intuitive design, and scalable architecture.</p>
                </div> */}
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
                        className="animate_top mx-auto mt-15  px-4 md:px-8 xl:mt-20 xl:px-0"
                    >
                        {/* <!-- Slider main container --> */}
                        <div className="swiper testimonial-01 mb-15 pb-25">
                            {/* <!-- Additional required wrapper --> */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {RecentsWordData.map((work) => (
                                    <SwiperSlide key={work?.id}>
                                        <RecentsWorkSlides  roundedClass2='px-5 py-2' roundedClass='px-5 py-2' NewClass='bottom-3 ' work={work} />
                                    </SwiperSlide>
                                ))}
                                </div>
                           
                        </div>
                    </motion.div>
                </div>
                <div className="flex hidden justify-center pb-4">
                    <button
                        aria-label="get started button"
                        className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                        View All
                    </button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default ProjectsSections