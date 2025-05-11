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
          className="is-layout-flex wp-container-3 gap-20 wp-block-columns"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {/* Left Column - Image */}
          <div className="is-layout-flow wp-block-column" style={{ flexBasis: '40%' }}>
            <figure className="wp-block-image size-large">
              <Image
                className="wp-image-7165"
                src="/images/about-us/all-started-1024x1024.png"
                alt="About background"
                width={186}
                height={186}
              />
            </figure>
          </div>

          {/* Right Column - Text */}
          <div className="is-layout-flow wp-block-column" style={{ flexBasis: '60%' }}>
            <h2 style={{
                fontSize: '2.625rem',
                lineHeight: 'normal',
                fontWeight: 'bold'
            }}>How it all Started</h2>

            <p>
              Since 2009 Iversoft had been a mobile-first technology leader. From building the first Solitaire game
              available on iOS to mobile apps for superstars like Michael Bublé and Billy Talent to some of the first
              digital tradeshow kiosks for Audi to now – we have always been a mobile-first technology leader.
            </p>

            {/* Extra content shown only when expanded */}
            {expanded && (
              <p>
                Today, Iversoft focuses on partnering with organizations to solve the most daunting business and customer
                engagement challenges with data-driven strategy and cutting-edge technology. Modern businesses can reach
                clients, excite customers, offer services and grow their business faster than ever, from anywhere – but
                only if their technology and infrastructure are built to support it. Iversoft is the partner of choice for
                companies that want to streamline, mobilize and grow their business.
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
