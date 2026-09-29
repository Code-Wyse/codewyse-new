import Image from "next/image";

import Eyebrow from "./Eyebrow";
import { Globe, Layers, Chip } from "./icons";

// Copy is drawn from the global About page; founding year from the site's Organization schema.
const pillars = [
  {
    icon: Layers,
    title: "One Accountable Team",
    text: "Discovery, UX/UI design, full-stack development, QA, DevOps and post-launch support, from idea to scale.",
  },
  {
    icon: Chip,
    title: "Modern, Proven Technology",
    text: "Web and mobile products built on Next.js, React, React Native, Flutter and Node.js, with AI where it moves the numbers.",
  },
  {
    icon: Globe,
    title: "Global Standards, Local Focus",
    text: "The engineering practices we use for clients worldwide, applied to the realities of African businesses.",
  },
];

const sectors = ["Fintech", "E-commerce", "Healthcare", "Logistics", "SaaS", "EdTech"];

const AfricaAbout = () => (
  <section id="about" className="scroll-mt-20 bg-af-mist py-16 lg:py-24">
    <div className="mx-auto grid max-w-c-1280 gap-12 px-4 md:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
      {/* Brand panel */}
      <div className="relative isolate overflow-hidden rounded-3xl bg-af-navy p-8 sm:p-10">
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="absolute -bottom-24 -right-24 -z-10 h-72 w-72 rounded-full bg-af-teal/20 blur-3xl" />
        <div
          className="absolute inset-y-0 right-0 -z-10 w-28 bg-af-teal"
          style={{ clipPath: "polygon(70% 0, 82% 0, 52% 100%, 40% 100%)" }}
        />
        <div
          className="absolute inset-y-0 right-0 -z-10 w-28 bg-af-gold"
          style={{ clipPath: "polygon(88% 0, 96% 0, 66% 100%, 58% 100%)" }}
        />

        <Image src="/images/logo/mark.png" alt="" width={64} height={59} />
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Building software since</p>
        <p className="font-afdisplay text-6xl font-extrabold leading-none text-white sm:text-7xl">
          20<span className="text-af-teal">20</span>
        </p>
        <p className="mt-4 max-w-xs pr-10 text-[15px] leading-relaxed text-white/75">
          Trusted by startups and enterprises to design, build and scale digital products.
        </p>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Sectors we build for</p>
        <ul className="mt-4 flex flex-wrap gap-2 pr-10">
          {sectors.map((sector) => (
            <li key={sector} className="rounded-full border border-white/20 px-3.5 py-1.5 text-[13px] font-medium text-white/90">
              {sector}
            </li>
          ))}
        </ul>
      </div>

      {/* Story and pillars */}
      <div>
        <Eyebrow>About Us</Eyebrow>
        <h2 className="font-afdisplay text-3xl font-bold leading-tight text-af-ink md:text-[40px]">
          Your Technology Partner for <span className="text-af-teal">Africa&apos;s</span>{" "}
          <span className="text-af-gold">Growth</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-af-body md:text-[17px]">
          Codewyse was founded to help businesses ship better software, faster. What began as a small team of
          passionate engineers has grown into a global partner for custom web and mobile apps, AI solutions and
          enterprise systems.
        </p>
        <p className="mt-4 text-base leading-relaxed text-af-body md:text-[17px]">
          Codewyse Africa brings that experience to businesses across the continent, focused on real business
          impact, not vanity tech.
        </p>

        <ul className="mt-9 space-y-6">
          {pillars.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-af-teal/10 text-af-teal">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-afdisplay text-base font-bold text-af-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-af-body">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AfricaAbout;
