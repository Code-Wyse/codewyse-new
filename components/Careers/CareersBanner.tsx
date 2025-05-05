'use client'; // Optional if using App Router

import Image from 'next/image';
import Link from 'next/link';
import '../../app/style.css';

// import css from "../../components/Careers/Module.css";


const CareersBanner = () => {
  return (
    <section className="banner--careers-desktop banner banner--careers pt-[140px] pb-[110px] " id="banner">
      <div className="container px-auto mx-auto max-lg:w-[90%]">
        <div>
          <div className="banner__content">
            {/* <nav className="nav nav--breadcrumbs" id="breadcrumbs"> */}
              {/* <span> */}
                {/* <span className="breadcrumb_last" aria-current="page">
                  Careers
                </span> */}
              {/* </span> */}
            {/* </nav> */}
          </div>
          <div className="banner__image-wrapper">
            <Image
              className="banner__image banner__image--desktop"
              src="/images/careers-header_full.png"
              alt="Banner desktop"
              width={1070}
              height={626}
              priority
            />
            <div className="banner__footer">
              <a className="banner__cta" href="#work-with-us">
                <Image
                  className="banner__cta-arrow"
                  src="/images/teal-arrow.svg"
                  alt="Careers"
                  width={16}
                  height={16}
                />
                See our opportunities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
