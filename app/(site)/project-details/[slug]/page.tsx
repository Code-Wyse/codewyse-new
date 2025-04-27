// src/app/project-details/[slug]/page.tsx

import { projectData } from "@/types/portfolioData";
import { notFound } from "next/navigation";
import Image from "next/image";
import SectionHeader from "@/components/Common/SectionHeader";
import ImageGrid from "@/components/project-details/ImageGrid";
import ProjectTabs from "@/components/project-details/ProjectTabs";

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
            className="object-cover object-center !h-[370px] w-full rounded-[8px]"
          />
          <div className="mt-10">
            <SectionHeader headerInfo={{ title: "Our Recent Work", subtitle: "", description: "" }} />
            <h4 className="mx-auto text-center mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2">
              {project.title}
            </h4>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center">
              {project.description}
            </p>
          </div>
        </div>

        {/* Process & Tabs */}
        <div className="flex justify-between mt-20 gap-10">
          <div className="w-[50%]">
            <h4 className="mb-5 pr-16 text-4xl font-bold text-black dark:text-white">The process</h4>
            <p>{project.process}</p>
          </div>
          <div className="w-[50%]">
            <ProjectTabs tabs={project.tabs} />
          </div>
        </div>

        {/* Image Grid */}
        <div className="mt-10">
          <ImageGrid />
        </div>

        {/* Last Section */}
        <div className="mt-10 flex justify-between gap-10">
          <div className="w-[50%]">
            <Image
              src={project.lastImage}
              width={633}
              height={200}
              alt="last"
              className="h-[45%] object-cover rounded-[20px]"
            />
          </div>
          <div className="w-[50%] flex flex-col">
            {project.longDescription.map((p, i) => (
              <p key={i} className="mb-6">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
