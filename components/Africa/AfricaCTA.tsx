"use client";
import Link from "next/link";

import { useAppointment } from "@/app/context/AppointmentContext";
import Eyebrow from "./Eyebrow";
import { ArrowRight } from "./icons";

// Same offer as the site-wide consultation popup.
const perks = ["Free 1-hour consultation", "Architecture & timeline estimate", "No strings attached"];

const Check = () => (
  <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AfricaCTA = () => {
  const { open: openAppointment } = useAppointment();

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-af-navy px-6 py-12 sm:px-10 md:py-14 lg:px-14 lg:py-16">
          {/* Dot texture, soft teal glow and the brand's teal/gold diagonal stripes */}
          <div
            className="absolute inset-0 -z-10 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-af-teal/20 blur-3xl" />
          <div
            className="absolute inset-y-0 right-0 -z-10 hidden w-40 bg-af-teal md:block"
            style={{ clipPath: "polygon(72% 0, 84% 0, 54% 100%, 42% 100%)" }}
          />
          <div
            className="absolute inset-y-0 right-0 -z-10 hidden w-40 bg-af-gold md:block"
            style={{ clipPath: "polygon(88% 0, 96% 0, 66% 100%, 58% 100%)" }}
          />

          {/* Right padding keeps the content clear of the stripes */}
          <div className="grid gap-10 md:pr-32 lg:pr-28 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <Eyebrow light>Let&apos;s Build Together</Eyebrow>
              <h2 className="font-afdisplay text-3xl font-bold leading-tight text-white md:text-[40px]">
                Ready to build what&apos;s next for <span className="text-af-teal">your business</span>?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-[17px]">
                Tell us about your goals and we&apos;ll help you plan, design and deliver the right technology
                solution.
              </p>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-af-teal text-af-ink">
                      <Check />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:max-w-xs lg:flex-col lg:justify-self-end">
              <button
                type="button"
                onClick={() => openAppointment()}
                className="flex cursor-pointer items-center justify-center gap-3 rounded-full bg-af-teal px-8 py-4 text-sm font-semibold text-af-ink shadow-[0_10px_30px_-10px] shadow-af-teal/60 transition-colors hover:bg-af-tealho"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="#our-work"
                className="flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                See Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-center text-sm text-white/60 sm:self-center lg:self-auto">
                or email{" "}
                <a href="mailto:info@codewyse.io" className="font-medium text-af-gold hover:underline">
                  info@codewyse.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfricaCTA;
