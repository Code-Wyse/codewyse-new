'use client';

import Image from 'next/image';
import '../../app/style.css';


const NewAboutBanner = () => {
  return (
    <section className="banner banner--about" id="banner">
      <div className="container">
        <div className="grid--flex-md flex items-center justify-between  grid--flex-centered">
          <div className="grid__col--md-6 lg:w-[45%] w-full banner__content">
            <nav className="nav nav--breadcrumbs" id="breadcrumbs">
              <span>
                <span className="breadcrumb_last" aria-current="page">
                  About
                </span>
              </span>
            </nav>
            <h1 className='text-[3.375rem] leading-auto mb-2'>
              Iversoft is a mobile-first software development company that improves how organizations do business
            </h1>
            <p>
              How? It’s all about people. We understand that a technology’s value is its ability to serve the people who
              use it. So we put the needs of our clients and their customers at the centre of everything we do. Combine
              this philosophy with a passionate team driven to redefine what’s possible and you get digital solutions
              that do what they’re supposed to: simplify your life.
            </p>
          </div>
          <div className="grid__col--md-6 lg:w-[45%] w-full banner__content">
            <Image
              className="banner__image"
              src="/images/about-header.png"
              alt="About Iversoft"
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

export default NewAboutBanner;
