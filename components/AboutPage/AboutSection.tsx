'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div className="pt-20 pb-10 container--indented container">
      <div className="content--revealer"
      
       style={{
    // padding: '30px',
    boxShadow: '0 0 15px #ccc',
    borderRadius: '15px',
    WebkitBoxShadow: '0 0 15px #ccc',
    MozBoxShadow: '0 0 15px #ccc',
    WebkitBorderRadius: '15px',
    MozBorderRadius: '15px',
            padding: '50px 25px',
            width: "60%",
            margin: '0 auto'
  }}
    >
        <div
          className="is-layout-flex wp-container-3 gap-10 wp-block-columns"
          style={{ display: 'flex', flexWrap: 'nowrap' }}
        >
          {/* Left Column - Image */}
          <div className="is-layout-flow wp-block-column" style={{ flexBasis: '30%' }}>
            <figure className="wp-block-image size-large">
              <Image
                className="wp-image-7165"
                src="/images/about-us/all-started-1024x1024.png"
                alt="About background"
                width={286}
                height={286}
              />
            </figure>
          </div>

          {/* Right Column - Text */}
          <div className="is-layout-flow wp-block-column" style={{ flexBasis: '60%' }}>
            {/* <h2 style={{
                fontSize: '2.625rem',
                lineHeight: 'normal',
                fontWeight: 'bold',
                padding:'0 0 10px 0',
            }}>How it all Started </h2> */}
                        <h2 className="mb-5 pr-0 process__subtitle__header w-full  !text-start text-[18px]  font-bold text-black  dark:text-white lg:text-[28px] ">
                How it all Started
              </h2>

            <p>
              CodeWyse was founded with a clear vision: to empower businesses through intelligent, user-centric digital solutions. What began as a small team of passionate developers has grown into a full-service technology partner trusted by startups and enterprises alike. From crafting bespoke web and mobile applications to building secure, scalable platforms, we’ve always focused on delivering real-world impact through technology. 
            </p>

            {/* Extra content shown only when expanded */}
            {expanded && (
              <p style={{
                padding:'10px 0 0 0'
              }}>
                Today, CodeWyse partners with organizations across industries to tackle complex challenges using strategy-led development, modern tech stacks, and a commitment to quality. Our clients count on us to build products that enhance efficiency, engage users, and scale with confidence. Whether you're launching an MVP or transforming a legacy system, CodeWyse is your dedicated partner in digital innovation.
              </p>
            )}

            <button
              onClick={toggleContent}
              className="content--revealer__toggle"
              aria-expanded={expanded}
              style={{
                marginTop: '1rem',
                background: 'none',
                border: 'none',
                color: '#0070f3',
                cursor: 'pointer',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              {/* <i className="material-icons" aria-hidden="true">
                {expanded ? 'remove' : 'add'}
              </i> */}
              <span>{expanded ? 'Read Less' : 'Read More'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
