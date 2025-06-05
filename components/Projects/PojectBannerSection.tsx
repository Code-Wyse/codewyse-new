'use client';

import Image from 'next/image';
import '../../app/style.css';


const PojectBannerSection = () => {
  return (
    <section className="banner pt-10 banner--about" id="banner">
      <div className="container">
        <div className="grid--flex-md lg:flex flex-col lg:flex-row mt-10 lg:mt-0    items-center justify-between  grid--flex-centered">
          <div className="grid__col--md-6 w-[100%] lg:w-[45%] w-full banner__content">
            {/* <nav className="nav hidden nav--breadcrumbs" id="breadcrumbs">
              <span>
                <span className="breadcrumb_last" aria-current="page">
                  About
                </span>
              </span>
            </nav> */}
            <h1 className='text-[4.5rem] font-bold leading-[70px] pb-7'>
              Check Out <br /> Our Work
            </h1>
            <p>
              We seek out clients with interesting and complex challenges. Click through some of our favourite projects to learn how we meet those challenges and create meaningful, enjoyable experiences for our clients and their users.</p>
          </div>
          <div className="grid__col--md-6 w-[100%] lg:w-[45%] w-full banner__content">
            <Image
            style={{
              borderRadius: '28px',
            }}
              className="banner__image rounded-lg"
              src="/images/about-header.png"
              alt="About Codewyse"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PojectBannerSection;
