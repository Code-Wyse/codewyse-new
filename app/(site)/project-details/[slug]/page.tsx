// src/app/project-details/[slug]/page.tsx

import { projectData } from "@/types/portfolioData";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProjectTabs from "@/components/project-details/ProjectTabs";
import PortFolioSlider from "@/components/Portfolio_slider/PortFolioSlider";

// statically generate all slugs
export function generateStaticParams() {
  return projectData.map((p) => ({ slug: p.slug }));
}

// no explicit type annotation on the props!
export default async function ProjectDetails({ params, searchParams }) {
  const project = projectData.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="pt-[100px] pb-10">
      <div className="mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        {/* Banner */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src={project.bannerImage}
            width={900}
            height={370}
            alt="banner"
            className="object-cover object-center !h-[580px] w-full rounded-[8px]"
          />
          <div className="mt-10">

            <h4 className="mx-auto text-center mb-4 text-[18px] lg:text-[28px] text-center font-bold text-black dark:text-white md:w-4/5 xl:w-full">
              {project.title}
            </h4>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center">
              {project.description}
            </p>
          </div>
        </div>

        {/* Process & Tabs */}
        <div className="flex lg:flex-row flex-col  justify-between mt-20 gap-10">
          <div className="lg:w-[50%] w-[100%]">
            <h4 className="mb-5 pr-16 text-[18px] text-start lg:text-[28px] font-bold text-black dark:text-white">{project.processtitle}</h4>
            <p>{project.process}</p>
            <h4 className="mb-5 mt-5 pr-16 text-[18px] text-start lg:text-[28px] font-bold text-black dark:text-white">{project.processtitle2}</h4>
            <p>{project.process2}</p>
          </div>
          <div className="lg:w-[50%] w-[100%]">
            <ProjectTabs tabs={project.tabs} />
          </div>
        </div>

        {/* Image Grid */}
        <div className="mt-10">
           <PortFolioSlider portfolio={project.portfolio} />
        </div>

        {/* Last Section */}
        <div className="mt-10 mb-4 flex justify-between align-items-center gap-10 ">
          <div className="w-[50%] h-[400px]">
            <Image
              src={project.lastImage}
              width={633}
              height={200}
              alt="last"
              className="h-full object-contain rounded-[20px]"
            />
          </div>
          <div className="w-[50%] flex flex-col">
            <h4 className="mx-auto text-start mb-4 text-[18px] text-center lg:text-[28px] font-bold text-black  dark:text-white md:w-4/5 xl:w-full">
              {project.logndescTitle}
            </h4>

            {project.longDescription.map((p, i) => (
              <p key={i} className="mb-6">
                {p}
              </p>
            ))}
          </div>
        </div>
        {/* portfolio -images */}




        <div className="mt-10">
          <div className="w-full mx-auto">
            <h4 className="mx-auto text-center mb-4 text-[18px] text-center font-bold text-black lg:text-[28px] dark:text-white md:w-4/5 xl:w-full">
              Hear From The Cleint
            </h4>
            <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
              <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
                <div>
                  <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
                    {project.reviewName}
                  </h3>
                  <p>{project.designation}</p>
                </div>
                <Image width={60} height={50} className="" src={project.reviewimage} alt={project.reviewimage} />
              </div>

              <p>{project.review}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
