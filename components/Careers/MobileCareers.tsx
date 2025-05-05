'use client';

import Image from 'next/image';

const CareersBannerMobile = () => {
  return (
    <section className="banner--careers-mobile banner banner--careers" id="mobile-banner">
      <div className="container">
        <div style={{ paddingTop: '45px' }}>
          <div className="banner__content">
            <nav className="nav nav--breadcrumbs" id="breadcrumbs">
              <span>
                <span className="breadcrumb_last" aria-current="page">
                  Careers
                </span>
              </span>
            </nav>
          </div>
          <div className="banner__image-wrapper flex-container">
            <Image
              className="banner__image banner__image--mobile"
              src="/images/careers-header_mobile.png"
              alt="Header mobile"
              width={343}
              height={645}
              priority
            />
            <div className="banner__footer">
              <a className="banner__cta" href="#work-with-us">
                <Image
                  className="banner__cta-arrow"
                  src="/images/teal-arrow.svg"
                  alt="Opportunities"
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

export default CareersBannerMobile;
