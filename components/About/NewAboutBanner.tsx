'use client';

import Image from 'next/image';
import '../../app/style.css';


const NewAboutBanner = () => {
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
            <h1 className='text-[2.5rem] font-semibold  leading-[50px] pb-6'>
              About Codewyse — A Custom Web App, Mobile App, AI &amp; ML and CRM Development Company
            </h1>
            <p>
              Codewyse is a global software development company helping startups and enterprises grow with custom web apps, mobile apps, AI &amp; ML solutions, SaaS platforms and CRM systems. We combine senior engineering, product thinking and modern stacks — Next.js, React, React Native, Flutter, Node.js, Python and the latest AI tooling — to ship software that actually moves your business forward. We believe technology is only valuable when it truly serves the people who use it. That’s why we prioritize the needs of our clients and their end users in every project. By combining this human-centered approach with a passionate, forward-thinking team, CodeWyse delivers custom software, mobile apps, and emerging tech solutions that empower organizations — and simplify the way they work.
            </p>
          </div>
          <div className="grid__col--md-6 w-[100%] lg:w-[45%] w-full banner__content">
            <Image
              className="banner__imag !rounded-[20px]"
              src="/images/about-header.png"
              alt="About Codewyse"
              width={600}
              height={400}
              
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAboutBanner;
