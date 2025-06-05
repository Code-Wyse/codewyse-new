import PojectBannerSection from '@/components/Projects/PojectBannerSection'
import ProjectsSections from '@/components/Projects/ProjectsSections'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Projects : Codewyse",

    // other metadata
    description: "Projects : Codewyse"
};

const page = () => {
  return (
<section className="pt-[50px] pb-10">
        <PojectBannerSection />
                <ProjectsSections />
        
        
        
        </section>
  )
}

export default page