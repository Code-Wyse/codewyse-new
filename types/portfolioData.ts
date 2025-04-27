// src/types/portfolioData.ts

export type Tab = {
    id: string;
    title: string;
    content: string;
  };
  
  export type Project = {
    slug: string;
    title: string;
    description: string;
    bannerImage: string;
    process: string;
    tabs: Tab[];
    lastImage: string;
    longDescription: string[];
  };
  
  export const projectData: Project[] = [
    {
      slug: "portfolio-one",
      title: "Custom Wordpress Website designs",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      bannerImage: "/images/project-details/banner-pic.jpg",
      process:
        "Risus viverra quam eget vitae fermentum. Mi, porta arcu quam turpis mauris aliquam ut...",
      tabs: [
        { id: "tabOne", title: "Web Design", content: "Design content..." },
        { id: "tabTwo", title: "Web Dev", content: "Development content..." },
        { id: "tabThree", title: "Branding", content: "Branding content..." },
      ],
      lastImage: "/images/project-details/last-portfolio_img.jpg",
      longDescription: [
        "Donec non magna tincidunt ante tempor blandit...",
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra...",
      ],
    },
    // …more projects
  ];
  