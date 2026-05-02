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
              Codewyse was founded to help businesses ship better software faster. What began as a small team of passionate engineers has grown into a global <strong>custom web app, mobile app, AI &amp; ML and CRM development</strong> partner trusted by startups and enterprises. From bespoke Next.js web platforms and React Native mobile apps to generative AI features and tailor-made CRM systems, we focus on real business impact, not vanity tech.
            </p>

            {/* Extra content shown only when expanded */}
            {expanded && (
              <p style={{
                padding:'10px 0 0 0'
              }}>
                Today, Codewyse partners with organizations across SaaS, fintech, healthcare, e-commerce and EdTech to deliver custom web apps, mobile apps, AI &amp; ML solutions, SaaS products and CRM systems. Whether you're launching an MVP, integrating AI into an existing product, or modernizing a legacy CRM, Codewyse is your end-to-end software partner.
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
