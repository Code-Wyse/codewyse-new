"use client";
import Image from "next/image";
import { useAppointment } from "@/app/context/AppointmentContext";
import { useCallback, useEffect, useRef, useState } from "react";

import Eyebrow from "./Eyebrow";
import { ArrowRight, Building, Cart, ChevronLeft, ChevronRight, CreditCard, Heart, Truck } from "./icons";

const industries = [
  {
    icon: Cart,
    title: "Digital Commerce",
    text: "E-commerce, marketplaces and retail solutions.",
    image: "/images/africa/industry-commerce.jpg",
  },
  {
    icon: CreditCard,
    title: "Fintech",
    text: "Payment systems, wallets and financial platforms.",
    image: "/images/africa/industry-fintech.jpg",
  },
  {
    icon: Truck,
    title: "Logistics",
    text: "Fleet management, tracking and supply chain solutions.",
    image: "/images/africa/industry-logistics.jpg",
  },
  {
    icon: Heart,
    title: "Healthcare",
    text: "Digital health platforms and patient systems.",
    image: "/images/africa/industry-healthcare.jpg",
  },
  {
    icon: Building,
    title: "Enterprise",
    text: "Custom business systems and digital transformation.",
    image: "/images/africa/industry-enterprise.jpg",
  },
];

const AfricaIndustries = () => {
  const { open: openAppointment } = useAppointment();
  const track = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  const arrowClass =
    "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-stroke bg-white text-af-ink transition-colors hover:border-af-teal hover:text-af-teal disabled:cursor-default disabled:bg-af-mist disabled:text-af-body/40 disabled:hover:border-stroke";

  return (
    <section id="industries" className="scroll-mt-20 bg-af-mist py-16 lg:py-24">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto] lg:items-end lg:gap-12">
          <div>
            <Eyebrow>Industries We Serve</Eyebrow>
            <h2 className="font-afdisplay text-3xl font-bold leading-tight text-af-ink md:text-[40px]">
              Solutions for <br className="hidden sm:block" />
              <span className="whitespace-nowrap text-af-teal">Real-World</span> Industries
            </h2>
          </div>
          <p className="text-base leading-relaxed text-af-body md:text-[17px]">
            We work with businesses across key industries to solve real challenges and drive growth through
            technology.
          </p>
          <div className="flex gap-3">
            <button type="button" aria-label="Previous industries" onClick={() => scroll(-1)} disabled={!canPrev} className={arrowClass}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Next industries" onClick={() => scroll(1)} disabled={!canNext} className={arrowClass}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={track}
          onScroll={updateArrows}
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 md:-mx-8 md:scroll-px-8 md:px-8 xl:mx-0 xl:px-0"
        >
          {industries.map(({ icon: Icon, title, text, image }) => (
            <button
              key={title}
              type="button"
              onClick={() => openAppointment()}
              aria-label={`Talk to us about ${title}`}
              className="group relative flex h-[320px] cursor-pointer text-left w-[240px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-xl bg-af-navy xl:w-auto xl:flex-1"
            >
              <div className="absolute inset-x-0 top-0 h-[62%] overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 20vw, 240px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-af-navy/70 via-45% to-af-navy to-60%" />
              <div className="relative p-5 pb-6">
                <Icon className="mb-4 h-8 w-8 text-white" />
                <h3 className="font-afdisplay text-base font-bold text-white">{title}</h3>
                <p className="mt-1.5 pr-9 text-[13px] leading-relaxed text-white/80">{text}</p>
                <span className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/60 text-white transition-colors group-hover:border-af-teal group-hover:bg-af-teal group-hover:text-af-ink">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfricaIndustries;
