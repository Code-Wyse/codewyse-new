import CoreNewValue from '@/components/services/CoreNewValue'
import OurProcessSection from '@/components/services/OurProcessSection'
import TeamSection from '@/components/services/TeamSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title:
    "Services — Custom Web Apps, Mobile Apps, AI & ML, SaaS and CRM Development",
  description:
    "Codewyse services: custom web app development, iOS and Android mobile apps, AI & ML solutions, generative AI, SaaS platforms, MVPs and tailor-made CRM systems built with Next.js, React and Node.js.",
  keywords: [
    "web app development services",
    "mobile app development services",
    "AI development services",
    "machine learning services",
    "custom CRM development",
    "SaaS development services",
    "MVP development services",
    "Next.js agency",
    "React development agency",
    "Node.js development services",
    "generative AI services",
    "LLM integration services",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title:
      "Services — Custom Web Apps, Mobile Apps, AI & ML, SaaS and CRM Development",
    description:
      "Custom web, mobile, AI & ML, SaaS and CRM development services from Codewyse.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Services — Custom Web Apps, Mobile Apps, AI & ML, SaaS and CRM Development",
    description:
      "Custom web, mobile, AI & ML, SaaS and CRM development services from Codewyse.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Codewyse Software Development Services",
  provider: { "@type": "Organization", name: "CODEWYSE", url: "https://codewyse.io" },
  areaServed: "Worldwide",
  serviceType: [
    "Custom Web App Development",
    "Mobile App Development",
    "AI & Machine Learning Development",
    "Generative AI and LLM Integration",
    "SaaS Product Development",
    "Custom CRM Development",
    "MVP Development",
    "E-commerce Development",
    "Fintech Software Development",
    "Healthcare Software Development",
  ],
  url: "https://codewyse.io/services",
};



function page() {
    return (
        <section className="pt-[50px] pb-10 new_bgg">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <CoreNewValue />
            <OurProcessSection />
            <TeamSection />
        </section>
    )
}

export default page