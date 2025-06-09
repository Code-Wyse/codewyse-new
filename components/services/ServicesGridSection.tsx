// components/CoreValues.tsx
import Image from "next/image";
import "../../app/style.css";



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
      "We specialize in mobile-first solutions, crafting scalable, maintainable apps optimized for iOS and Android platforms. Our mobile applications are designed for performance, user experience, and future-proofing, enabling seamless user engagement and powerful backend support across industries.",
  },
  {
    title: "Web Development",
    imageSrc: "/images/web-development-services.png",
    imageAlt: "Do The Right Thing",
    description:
      "From simple websites to complex web platforms, our web development services cover frontend, backend, and full-stack solutions. We build responsive, scalable, and secure websites using modern technologies to ensure fast performance, intuitive UI, and excellent user experience.",
  },
  {
    title: "UI & UX",
    imageSrc: "/images/ui-ux-services.png",
    imageAlt: "Balance",
    description: (
      <>
        We design visually appealing, user-centric interfaces that drive engagement and conversion. By blending creativity with usability, our UX/UI designs ensure intuitive navigation, optimized workflows, and brand consistency across web and mobile platforms, enhancing the user journey at every touchpoint.
      </>
    ),
  },
  {
    title: "Quality Assurance",
    imageSrc: "/images/qa-services.png",
    imageAlt: "Client",
    description:
      "Our QA process ensures every product is thoroughly tested for functionality, performance, and security. We conduct manual and automated testing throughout the development lifecycle, delivering bug-free, reliable digital solutions that meet the highest standards of quality and user satisfaction.",
  },
  {
    title: "Blockchain & Smart Contracts",
    imageSrc: "/images/blockchain-icon.png",
    imageAlt: "Client",
    description:
      "We develop decentralized applications and secure smart contracts using Ethereum, Solidity, and other blockchain technologies. Our services ensure transparency, trust, and automation for industries like finance, supply chain, and healthcare through custom blockchain development and smart contract implementation.",
  },
    {
    title: "Product Strategy & MVP Development",
    imageSrc: "/images/prod-mvp-icon.png",
    imageAlt: "Client",
    description:
      "From idea to launch, we help you validate your concept and build a lean Minimum Viable Product (MVP). Our team aligns product features with market needs, providing technical direction, wireframes, and a scalable foundation to turn your vision into a successful product.",
  },
     {
    title: "Scalable Architecture & DevOps",
    imageSrc: "/images/scalable-architechture.png",
    imageAlt: "Client",
    description:
      "We design scalable system architectures and implement DevOps practices to streamline deployment and operations. From CI/CD pipelines to cloud infrastructure, we ensure your digital products are agile, robust, and ready for scale with minimal downtime and maximum efficiency.",
  },
       {
    title: "Integrations",
    imageSrc: "/images/api-integration-icon.png",
    imageAlt: "Client",
    description:
      "We integrate third-party APIs and build custom platform extensions to enhance functionality and interoperability. Our services ensure seamless data exchange, improved performance, and automation by connecting your systems to popular tools and platforms like Stripe, Salesforce, Shopify, and more.",
  },
         {
    title: "Security & Compliance by Design",
    imageSrc: "/images/security-icon.png",
    imageAlt: "Client",
    description:
      "Security is embedded in every stage of development. We ensure your product meets industry compliance standards (like GDPR, HIPAA, SOC2) through secure coding practices, threat modeling, encryption, and access control—providing peace of mind for both you and your users.",
  },

];

const ServicesGridSection = () => {
  return (
    <section className="section--core-values !p-0">
      <div className="container">
        {/* <h2 className="text-center">Our Services</h2> */}
        <div className="development__row flex gap-4">
          {coreValues.map((value, index) => (
            <div key={index} className="development__card--wrapper " style={{
                width: '22%',

            }}>
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

export default ServicesGridSection;
