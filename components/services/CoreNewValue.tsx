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
    title: "Custom Web App Development",
    imageSrc: "/images/web-development-services.png",
    imageAlt: "Custom web app development services — Codewyse",
    description:
      "Custom web app development on Next.js, React, TypeScript and Node.js. We build responsive, secure, SEO-ready web platforms — from marketing sites and dashboards to multi-tenant SaaS — engineered for speed, scale and conversion.",
  },
  {
    title: "Mobile App Development (iOS & Android)",
    imageSrc: "/images/mobile-development-services.png",
    imageAlt: "iOS and Android mobile app development — Codewyse",
    description:
      "iOS, Android and cross-platform mobile app development with React Native, Flutter, Swift and Kotlin. Native-grade performance, App Store and Google Play delivery, and tight backend integrations across industries.",
  },
  {
    title: "AI & ML Development",
    imageSrc: "/images/ui-ux-services.png",
    imageAlt: "Artificial intelligence and machine learning development — Codewyse",
    description: (
      <>
        Artificial intelligence and machine learning solutions: generative AI, LLM integration (OpenAI, Anthropic, open-source models), retrieval-augmented generation (RAG), recommendation engines, computer vision and predictive ML — shipped as production features inside your web and mobile apps.
      </>
    ),
  },
  {
    title: "Custom CRM Development",
    imageSrc: "/images/api-integration-icon.png",
    imageAlt: "Custom CRM development services — Codewyse",
    description:
      "Custom CRM development for sales, support and operations teams. Tailor-made pipelines, automations and reporting, plus deep integrations with HubSpot, Salesforce, Zoho, Pipedrive, Stripe and Twilio — so your CRM finally fits your business.",
  },
  {
    title: "SaaS & MVP Development",
    imageSrc: "/images/prod-mvp-icon.png",
    imageAlt: "SaaS and MVP development services — Codewyse",
    description:
      "Production-ready SaaS and MVP development: auth, billing, multi-tenant data models, role-based access and AI features built in. Validate, launch and scale your startup idea in weeks instead of months.",
  },
  {
    title: "E-commerce, Fintech & Healthcare Software",
    imageSrc: "/images/security-icon.png",
    imageAlt: "E-commerce, fintech and healthcare software development — Codewyse",
    description:
      "Industry-grade builds for e-commerce, fintech and healthcare on Shopify, WooCommerce, custom storefronts, Stripe and FHIR — secure, compliant (PCI, HIPAA, SOC2, GDPR) and built to handle real transaction volume.",
  },
  {
    title: "UI / UX Design",
    imageSrc: "/images/ui-ux-services.png",
    imageAlt: "UI UX design services — Codewyse",
    description:
      "User-centred UI/UX design for web apps, mobile apps and SaaS products. Research, wireframes, design systems and pixel-perfect handoff — interfaces that drive engagement, retention and conversion.",
  },
  {
    title: "Cloud, DevOps & Scalable Architecture",
    imageSrc: "/images/scalable-architechture.png",
    imageAlt: "Cloud DevOps and scalable architecture — Codewyse",
    description:
      "Cloud-native architecture on AWS, GCP and Azure with CI/CD, containers, Kubernetes and observability. We design infrastructure that keeps your custom web apps, mobile apps and AI workloads fast, resilient and cost-efficient at scale.",
  },
  {
    title: "API Development & Integrations",
    imageSrc: "/images/api-integration-icon.png",
    imageAlt: "API development and integrations — Codewyse",
    description:
      "REST and GraphQL API development plus integrations with CRMs, ERPs, payment gateways and AI providers — Stripe, PayPal, Salesforce, HubSpot, Firebase, Algolia, OpenAI and more.",
  },
  {
    title: "QA & Test Automation",
    imageSrc: "/images/qa-services.png",
    imageAlt: "Quality assurance and test automation services — Codewyse",
    description:
      "Manual and automated QA across the development lifecycle — unit, integration, end-to-end and performance testing — so your custom web apps, mobile apps and CRMs ship bug-free and stay reliable.",
  },
  {
    title: "Security & Compliance by Design",
    imageSrc: "/images/security-icon.png",
    imageAlt: "Security and compliance by design — Codewyse",
    description:
      "Security-first engineering: threat modeling, encryption, RBAC, audit logging and compliance with GDPR, HIPAA, SOC2 and PCI — embedded into every web app, mobile app, AI system and CRM we build.",
  },
  {
    title: "Blockchain & Smart Contracts",
    imageSrc: "/images/blockchain-icon.png",
    imageAlt: "Blockchain and smart contract development — Codewyse",
    description:
      "Decentralized apps and secure smart contracts on Ethereum, Solana and Layer-2 networks. Token systems, NFT platforms and on-chain data exchange for finance, supply chain and healthcare use cases.",
  },
];

const CoreNewValue = () => {
  return (
    <section className="section--core-values">
      <div className="container">
        <h1 className="mb-5 pr-0 process__subtitle__header w-full  text-[18px]  font-bold text-black  dark:text-white lg:text-[28px] ">
              Our Services — Custom Web Apps, Mobile Apps, AI &amp; ML and CRM Development
              </h1>
        <p className="mb-8 max-w-3xl text-base text-black dark:text-white">
          Codewyse delivers full-cycle <strong>custom web app development, mobile app development, AI &amp; ML, SaaS, MVP and CRM development</strong> services. We help startups and enterprises ship modern software on Next.js, React, React Native, Flutter, Node.js and Python — secure, scalable and compliant by default.
        </p>
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
