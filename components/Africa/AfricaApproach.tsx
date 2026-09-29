import Image from "next/image";

import Eyebrow from "./Eyebrow";

const steps = [
  { title: "Understand", text: "We listen and define your goals." },
  { title: "Design", text: "We create the right solution." },
  { title: "Build", text: "We develop and test for scale." },
  { title: "Support", text: "We keep your systems running and growing." },
];

const AfricaApproach = () => (
  <section className="grid bg-af-navy lg:grid-cols-[minmax(0,32fr)_minmax(0,68fr)] 2xl:grid-cols-[minmax(0,30fr)_minmax(0,70fr)]">
    {/* City photo; on desktop it bleeds to the left edge with teal/gold diagonal accents */}
    <div className="relative h-56 sm:h-72 lg:h-auto">
      <Image src="/images/africa/approach.jpg" alt="" fill sizes="(min-width: 1024px) 32vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-af-navy to-transparent to-50% lg:hidden" />
      <div
        className="absolute inset-y-0 right-0 hidden w-40 bg-af-teal lg:block"
        style={{ clipPath: "polygon(55% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 hidden w-40 bg-af-gold lg:block"
        style={{ clipPath: "polygon(75% 0, 100% 0, 100% 100%, 30% 100%)" }}
      />
      <div
        className="absolute inset-y-0 -right-px hidden w-40 bg-af-navy lg:block"
        style={{ clipPath: "polygon(90% 0, 100% 0, 100% 100%, 50% 100%)" }}
      />
    </div>

    {/* Right padding lines the content up with the 1280px page container on wide screens */}
    <div className="px-4 pb-16 pt-6 md:px-8 lg:py-20 lg:pl-14 lg:pr-[max(2rem,calc((100vw_-_80rem)/2_+_2rem))] xl:py-24 xl:pl-16">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] xl:items-end xl:gap-14">
        <div>
          <Eyebrow light>Our Approach</Eyebrow>
          <h2 className="font-afdisplay text-3xl font-bold leading-tight text-white md:text-[40px]">
            From Ideas to <br />
            <span className="text-af-teal">Lasting</span> <span className="text-af-gold">Impact</span>
          </h2>
        </div>
        <p className="max-w-xl text-[15px] leading-relaxed text-white/80 md:text-base">
          We combine deep technical expertise with an understanding of African business environments to deliver
          practical, scalable and sustainable technology solutions.
        </p>
      </div>

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 xl:mt-14 2xl:grid-cols-4">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="group relative flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-af-gold/50 hover:bg-white/[0.06]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-af-gold font-afdisplay text-sm font-bold text-white transition-colors group-hover:bg-af-gold group-hover:text-af-ink">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 pt-0.5">
              <h3 className="font-afdisplay text-base font-bold text-white">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default AfricaApproach;
