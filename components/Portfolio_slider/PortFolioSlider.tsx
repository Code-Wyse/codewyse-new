'use client';

import React from 'react';
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import SectionHeader from '../Common/SectionHeader';
import Link from 'next/link';
import InnerSlides from './InnerSlides';

type PortfolioItem = {
  id: number | string;
  image: string;
};

interface Props {
  portfolio: PortfolioItem[];
}

const PortFolioSlider: React.FC<Props> = ({ portfolio }) => {
  return (
    <section id="project" className="mx-auto mt-15 max-w-c-1315 px-4 md:px-8 xl:px-0">
      <div className="flex flex-col">
        <h2 className="mb-[-29px] text-[18px] text-center font-bold text-black dark:text-white lg:text-[28px]">
          Our Recent Work
        </h2>

        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto  max-w-c-1235 px-4 md:px-8  xl:px-0"
        >
          <div className="swiper testimonial-01 mb-15 pb-25">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {portfolio.map((item) => (
                <SwiperSlide key={item.id}>
                  <InnerSlides image={item.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        <div className="flex hidden justify-center pb-4">
          <Link href="/projects">
            <button
              aria-label="Explore Projects"
              className="flex rounded-full bg-black px-7.5 py-2.5 text-white transition duration-300 hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
            >
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortFolioSlider;
