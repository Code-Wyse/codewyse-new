import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What services does CodeWyse offer?",
    ans: "We specialize in end-to-end web and mobile application development. Our offerings include UI/UX design, frontend and backend development, API integrations, eCommerce solutions, custom CMS platforms, and enterprise-grade mobile apps. Whether you’re building an MVP or scaling an existing product, our team delivers tailored digital solutions.",
  },
  {
    id: 2,
    quest: "Do you only work with startups?",
    ans: "While we love helping startups bring ideas to life, we also work with SMBs and enterprise clients across a range of industries. Our flexible engagement models and scalable team structure allow us to support businesses at any stage of their digital journey.",
  },
  {
    id: 3,
    quest: "What is the difference between the Time & Material model and the Project-Based model?",
    ans: () => (
      <>
        <p><strong>Time & Material (T&M):</strong></p>
        <br />
        <p>
          You are billed based on the actual hours worked. Ideal for flexible, evolving projects where scope may change.
        </p>
        <br />
        <p><strong>Project-Based:</strong></p>
        <br />
        <p>
          We define a fixed scope, timeline, and cost upfront. Perfect for well-defined projects with clear requirements.
          We’ll help you choose the model that best suits your goals and budget.
        </p>
      </>
    ),
  },
  {
    id: 4,
    quest: "How much do your development services cost?",
    ans: "Rates vary based on the service, resource expertise, and engagement model. For example, frontend developers may start at $175/hr, while full-stack senior developers and architects may range higher. We also offer full-day rates with savings and blended pricing for longer engagements. Contact us for a personalized rate card.",
  },
  {
    id: 5,
    quest: "What technologies do you use?",
    ans: "We use a modern tech stack tailored to your project needs. This includes React, Next.js, Vue, Node.js, Laravel, Flutter, React Native, Firebase, PostgreSQL, AWS, and more. We're always up-to-date with the latest frameworks and development practices.",
  },
  {
    id: 6,
    quest: "Can you help with design and branding too?",
    ans: "Yes! Our design team crafts user-first experiences through wireframes, prototypes, and fully polished UI/UX. We also support brand identity design including logos, color systems, and visual assets for your digital presence.",
  },
  {
    id: 7,
    quest: "How long does it take to launch a project?",
    ans: "Timelines depend on project complexity and scope. A basic MVP can take 4–6 weeks, while larger, multi-feature platforms may take 10–16+ weeks. We provide milestone-based timelines and weekly progress updates to keep everything transparent.",
  },
  {
    id: 8,
    quest: "Do you offer post-launch support?",
    ans: "Absolutely. We offer ongoing support, maintenance, performance monitoring, and feature enhancements to keep your product optimized and secure. Long-term partnerships are our specialty.",
  },
  {
    id: 9,
    quest: "What’s your process for starting a new project?",
    ans: "We begin with a discovery call to understand your goals. From there, we provide a proposal with scope, timeline, and budget. Once agreed, we move into design, development, testing, and launch—with regular check-ins every step of the way.",
  },
  {
    id: 10,
    quest: "How do I get started?",
    ans: "Simply reach out through our Contact Us page or click Apply Now to schedule a free consultation. We’ll walk you through next steps and help shape your vision into a scalable digital product.",
  },
];

export default faqData;
