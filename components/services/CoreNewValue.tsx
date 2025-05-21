// components/CoreValues.tsx
import Image from "next/image";

type CoreValue = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string | any;
};

const coreValues: CoreValue[] = [
 {
    title: "Mobile App Development",
    imageSrc: "/images/mobile-development-services.png",
    imageAlt: "Empower People",
    description:
      "Mobile-first since 2009. We create products that are easier for you to scale and maintain, while working flawlessly on the world’s most ubiquitous device – our phones.",
  },
  {
    title: "Web Development",
    imageSrc: "/images/web-development-services.png",
    imageAlt: "Do The Right Thing",
    description:
      "We can build your site from scratch or optimize the software you’re currently using. With seamless API integration and a simplified backend, you have all the features and none of the hassle.",
  },
  {
    title: "User Experience & Interface Design",
    imageSrc: "/images/ui-ux-services.png",
    imageAlt: "Balance",
    description: (
      <>
        The way information is presented can completely change how you feel about it. That’s why our team of UX/UI experts meticulously craft stunning visuals and exceptional user experiences.
      </>
    ),
  },
  {
    title: "Quality Assurance",
    imageSrc: "/images/qa-services.png",
    imageAlt: "Client",
    description:
      "Codewyse prioritizes QA from project outset. Quality assurance goes beyond testing, playing a crucial role in preventing surprises, aligning with budget and deadlines.",
  },
  {
    title: "Blockchain & Smart Contracts",
    imageSrc: "/images/blockchain-icon.png",
    imageAlt: "Client",
    description:
      "Codewyse prioritizes QA from project outset. Quality assurance goes beyond testing, playing a crucial role in preventing surprises, aligning with budget and deadlines.",
  },
    {
    title: "Product Strategy & MVP Development",
    imageSrc: "/images/prod-mvp-icon.png",
    imageAlt: "Client",
    description:
      "Codewyse prioritizes QA from project outset. Quality assurance goes beyond testing, playing a crucial role in preventing surprises, aligning with budget and deadlines.",
  },
     {
    title: "Scalable Architecture & DevOps",
    imageSrc: "/images/scalable-architechture.png",
    imageAlt: "Client",
    description:
      "Codewyse prioritizes QA from project outset. Quality assurance goes beyond testing, playing a crucial role in preventing surprises, aligning with budget and deadlines.",
  },
       {
    title: "API Integrations & Platform Extensions",
    imageSrc: "/images/api-integration-icon.png",
    imageAlt: "Client",
    description:
      "Codewyse prioritizes QA from project outset. Quality assurance goes beyond testing, playing a crucial role in preventing surprises, aligning with budget and deadlines.",
  },
         {
    title: "Security & Compliance by Design",
    imageSrc: "/images/security-icon.png",
    imageAlt: "Client",
    description:
      "Codewyse prioritizes QA from project outset. Quality assurance goes beyond testing, playing a crucial role in preventing surprises, aligning with budget and deadlines.",
  },

];

const CoreNewValue = () => {
  return (
    <section className="section--core-values">
      <div className="container">
        <h2 className="mb-5 pr-0 process__subtitle__header w-full  text-[18px]  font-bold text-black  dark:text-white lg:text-[28px] ">
              Our Services
              </h2>
        <div className="development__row">
          {coreValues.map((value, index) => (
            <div key={index} className="development__card--wrapper">
              <div className="development__card">
                <h4 className="card-title">
                {value.title}
                </h4>
                <div className="card-img">
                  <Image
                    src={value.imageSrc}
                    alt={value.imageAlt}
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <div className="development-card__content">
                  <h4 className="card-title">{value.title}</h4>
                  <p className="development-card__text">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreNewValue;
