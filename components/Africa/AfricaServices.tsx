"use client";
import { useAppointment } from "@/app/context/AppointmentContext";
import Eyebrow from "./Eyebrow";
import { ArrowRight, Chip, Cloud, Devices, Layers, PenTool } from "./icons";

// Shown as the wide navy card; stack matches the global site's services copy.
const featured = {
  icon: Devices,
  title: "Web & Mobile Applications",
  text: "Custom web and mobile applications built for scale, from customer portals and marketplaces to iOS and Android apps.",
  stack: ["Next.js", "React", "React Native", "Flutter", "Node.js"],
};

const services = [
  {
    icon: Chip,
    tile: "bg-af-teal/10 text-af-teal group-hover:bg-af-teal group-hover:text-af-ink",
    title: "AI & Automation",
    text: "Intelligent solutions for real business impact, from AI features to automated workflows.",
  },
  {
    icon: Layers,
    tile: "bg-af-navy/10 text-af-navy group-hover:bg-af-navy group-hover:text-white",
    title: "Enterprise Solutions",
    text: "CRM, custom systems, integrations and more.",
  },
  {
    icon: Cloud,
    tile: "bg-af-gold/15 text-af-goldho group-hover:bg-af-gold group-hover:text-af-ink",
    title: "Cloud & Infrastructure",
    text: "Secure, scalable and high-performance solutions.",
  },
  {
    icon: PenTool,
    tile: "bg-af-teal/10 text-af-teal group-hover:bg-af-teal group-hover:text-af-ink",
    title: "Product Design & MVPs",
    text: "UI/UX, prototypes and MVPs that get you to market fast.",
  },
];

const LetsTalk = ({ light = false }: { light?: boolean }) => (
  <span
    className={`mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold ${
      light ? "text-af-teal" : "text-af-ink group-hover:text-af-tealho"
    }`}
  >
    Let&apos;s talk
    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
  </span>
);

const AfricaServices = () => {
  const { open: openAppointment } = useAppointment();
  const FeaturedIcon = featured.icon;

  return (
    <section id="services" className="scroll-mt-20 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="font-afdisplay text-3xl font-bold leading-tight text-af-ink md:text-[40px]">
              End-to-End <span className="text-af-teal">Technology</span> Solutions
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-end">
            <p className="max-w-md text-base leading-relaxed text-af-body md:text-[17px]">
              We build digital products and systems that help businesses operate more efficiently, create new
              opportunities and scale for the future.
            </p>
            <button
              type="button"
              onClick={() => openAppointment()}
              className="inline-flex shrink-0 cursor-pointer items-center gap-3 rounded-full bg-af-gold px-7 py-3.5 text-sm font-semibold text-af-ink transition-colors hover:bg-af-goldho"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured: spans two columns so its copy and stack have room */}
          <button
            type="button"
            onClick={() => openAppointment()}
            aria-label={`Talk to us about ${featured.title}`}
            className="group relative isolate flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-af-navy p-7 text-left shadow-[0_14px_36px_-12px_rgba(11,37,54,0.45)] transition-transform duration-200 hover:-translate-y-1 sm:col-span-2 md:p-9"
          >
            <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-af-teal/20 blur-3xl" />
            <div
              className="absolute inset-y-0 right-0 -z-10 hidden w-32 bg-af-teal sm:block"
              style={{ clipPath: "polygon(70% 0, 80% 0, 50% 100%, 40% 100%)" }}
            />
            <div
              className="absolute inset-y-0 right-0 -z-10 hidden w-32 bg-af-gold sm:block"
              style={{ clipPath: "polygon(86% 0, 93% 0, 63% 100%, 56% 100%)" }}
            />
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:pr-24">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-af-teal text-af-ink">
                <FeaturedIcon className="h-7 w-7" />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-af-gold">Core service</span>
                <h3 className="mt-2 font-afdisplay text-xl font-bold text-white md:text-2xl">{featured.title}</h3>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/75">{featured.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {featured.stack.map((tech) => (
                    <li key={tech} className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <span className="sm:pl-20">
              <LetsTalk light />
            </span>
          </button>

          {services.map(({ icon: Icon, tile, title, text }) => (
            <button
              key={title}
              type="button"
              onClick={() => openAppointment()}
              aria-label={`Talk to us about ${title}`}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white p-7 text-left shadow-[0_10px_30px_-12px_rgba(11,37,54,0.22)] ring-1 ring-af-navy/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(11,37,54,0.3)]"
            >
              {/* Accent bar that grows in on hover */}
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-af-teal to-af-gold transition-transform duration-300 group-hover:scale-x-100" />
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-200 ${tile}`}>
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-afdisplay text-lg font-bold leading-snug text-af-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-af-body">{text}</p>
              <LetsTalk />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfricaServices;
