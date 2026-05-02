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
    title: "Custom Web App Development",
    imageSrc: "/images/web-development-services.png",
    imageAlt: "Custom web app development services — Codewyse",
    description:
      "Custom web apps and SaaS platforms built on Next.js, React and Node.js — fast, SEO-ready, secure and built to scale from MVP to millions of users.",
  },
  {
    title: "Mobile App Development",
    imageSrc: "/images/mobile-development-services.png",
    imageAlt: "iOS and Android mobile app development — Codewyse",
    description:
      "iOS, Android and cross-platform mobile app development with React Native, Flutter, Swift and Kotlin — native-grade UX, App Store and Google Play delivery.",
  },
  {
    title: "AI & ML Development",
    imageSrc: "/images/ui-ux-services.png",
    imageAlt: "AI and machine learning development — Codewyse",
    description: (
      <>
        Generative AI, LLM integration, RAG pipelines, recommendation engines and predictive ML — production AI &amp; ML features that move the metrics inside your web and mobile apps.
      </>
    ),
  },
  {
    title: "Custom CRM Development",
    imageSrc: "/images/api-integration-icon.png",
    imageAlt: "Custom CRM development — Codewyse",
    description:
      "Tailor-made CRM systems that fit your sales, support and operations workflows — with integrations to HubSpot, Salesforce, Zoho, Stripe and Twilio.",
  },
  {
    title: "SaaS & MVP Development",
    imageSrc: "/images/prod-mvp-icon.png",
    imageAlt: "SaaS and MVP development — Codewyse",
    description:
      "Production-ready SaaS and MVP development with auth, billing, multi-tenancy and AI features — go from idea to paying users in weeks, not months.",
  },
  {
    title: "Cloud, DevOps & Scalable Architecture",
    imageSrc: "/images/scalable-architechture.png",
    imageAlt: "Cloud DevOps and scalable architecture — Codewyse",
    description:
      "Cloud-native architecture on AWS, GCP and Azure with CI/CD, containers and observability — fast, resilient and cost-efficient at any scale.",
  },
  {
    title: "API Development & Integrations",
    imageSrc: "/images/api-integration-icon.png",
    imageAlt: "API development and integrations — Codewyse",
    description:
      "REST and GraphQL API development plus integrations with Stripe, PayPal, Salesforce, HubSpot, Firebase, Algolia, OpenAI and more.",
  },
  {
    title: "Security & Compliance",
    imageSrc: "/images/security-icon.png",
    imageAlt: "Security and compliance by design — Codewyse",
    description:
      "Security-first engineering with encryption, RBAC, threat modeling and compliance for GDPR, HIPAA, SOC2 and PCI — embedded into every build.",
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
