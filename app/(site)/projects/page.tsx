import PojectBannerSection from '@/components/Projects/PojectBannerSection'
import ProjectsSections from '@/components/Projects/ProjectsSections'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title:
        "Our Projects — Web, Mobile, AI & ML, SaaS and CRM Case Studies",
    description:
        "Explore Codewyse projects: custom web apps, mobile apps, AI & ML solutions, SaaS platforms, e-commerce builds and CRM systems delivered for clients worldwide.",
    keywords: [
        "Codewyse projects",
        "web app case studies",
        "mobile app portfolio",
        "AI ML case studies",
        "SaaS case studies",
        "CRM case studies",
        "software portfolio",
    ],
    alternates: { canonical: "/projects" },
    openGraph: {
        title: "Our Projects — Web, Mobile, AI & ML, SaaS and CRM Case Studies",
        description:
            "Web, mobile, AI & ML, SaaS and CRM case studies built by Codewyse.",
        url: "/projects",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Projects — Web, Mobile, AI & ML, SaaS and CRM Case Studies",
        description:
            "Web, mobile, AI & ML, SaaS and CRM case studies built by Codewyse.",
    },
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