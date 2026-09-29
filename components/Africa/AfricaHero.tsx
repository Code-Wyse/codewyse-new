"use client";
import Image from "next/image";
import Link from "next/link";

import { useAppointment } from "@/app/context/AppointmentContext";
import AfricaWord from "./AfricaWord";
import { ArrowRight } from "./icons";

const AfricaHero = () => {
  const { open: openAppointment } = useAppointment();

  return (
    <section className="relative isolate overflow-hidden bg-af-navy pt-18">
      {/* Photo on the right, fading into the navy panel on the left */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[62%]">
        <Image
          src="/images/africa/hero.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-af-navy/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-af-navy lg:via-af-navy/40 lg:to-transparent" />
      </div>
      {/* Diagonal navy panel and gold corner accent */}
      <div
        className="absolute inset-y-0 left-0 -z-10 hidden w-[52%] bg-af-navy lg:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 -z-10 h-20 w-10 bg-af-gold md:h-28 md:w-14"
        style={{ clipPath: "polygon(0 35%, 100% 100%, 0 100%)" }}
      />

      <div className="mx-auto max-w-c-1280 px-4 py-20 md:px-8 md:py-24 xl:py-28">
        <div className="max-w-xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-0.5 w-8 rounded-full bg-af-gold" />
            Technology for Africa&apos;s Next Chapter
          </p>
          <h1 className="font-afdisplay text-[38px] font-bold leading-[1.1] text-white sm:text-5xl xl:text-[56px]">
            Transforming Businesses Across
            <AfricaWord className="mt-2 block text-[44px] font-extrabold tracking-[0.12em] sm:text-6xl xl:text-[68px]" />
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 md:text-[17px]">
            Codewyse Africa helps businesses design, build and scale innovative digital products, from web and
            mobile applications to AI, enterprise systems, industry-specific solutions and scalable infrastructure.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => openAppointment()}
              className="flex cursor-pointer items-center gap-3 rounded-full bg-af-teal px-7 py-3.5 text-sm font-semibold text-af-ink transition-colors hover:bg-af-tealho"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="#services"
              className="flex items-center gap-3 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfricaHero;
