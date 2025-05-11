'use client';

import Image from 'next/image';
import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <section className="section-team  services" style={{
        padding: '250px'
    }}>
      <div className="container">
        <div className="team">
          <div className="team-hero-wrapper services">
            {/* <Image src="/assets/images/team-metting-new.png" alt="" width={0} height={0} /> */}

            <div className="team-curve">
              <Image
                src="/images/services/team-curve.png"
                alt="Curve"
                width={400}
                height={100}
              />
            </div>

            <div className="team__hero">
              <Image
                src="/images/services/teams-metting.png"
                alt="Teams meeting"
                width={600}
                height={400}
              />
            </div>
          </div>

          <div className="team__content">
            <h2 className="team__title pb-3">Dedicated Teams</h2>
            <p className="team__text">
              Maximize value with team members whose skill-sets are tailored to the needs of your project. Our model includes: Lower costs, greater flexibility, and expert collaboration for successful software development every single time.
            </p>
            <a className="mt-5 team__btn" href="/iversoft-dedicated-team/">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
