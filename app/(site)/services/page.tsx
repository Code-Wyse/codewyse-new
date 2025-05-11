import CoreValues from '@/components/Careers/CoreValue'
import OurProcessSection from '@/components/services/OurProcessSection'
import TeamSection from '@/components/services/TeamSection'
import React from 'react'


function page() {
    return (
        <section className="pt-[50px] pb-10">

<CoreValues />
<OurProcessSection />
<TeamSection />
        </section>
    )
}

export default page