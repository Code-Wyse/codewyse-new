import CoreNewValue from '@/components/services/CoreNewValue'
import OurProcessSection from '@/components/services/OurProcessSection'
import TeamSection from '@/components/services/TeamSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Services : Codewyse",

  // other metadata
  description: "Services : Codewyse"
};



function page() {
    return (
        <section className="pt-[50px] pb-10 new_bgg">

            <CoreNewValue />
            <OurProcessSection />
            <TeamSection />
        </section>
    )
}

export default page