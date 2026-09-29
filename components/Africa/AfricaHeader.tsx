"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useAppointment } from "@/app/context/AppointmentContext";
import AfricaWord from "./AfricaWord";
import { montserrat } from "./fonts";
import { ArrowRight, Close, Menu } from "./icons";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/#services" },
  { title: "Industries", href: "/#industries" },
  { title: "Our Work", href: "/#our-work" },
  { title: "About", href: "/#about" },
];

const AfricaHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openAppointment } = useAppointment();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${montserrat.variable} fixed left-0 top-0 z-99999 w-full bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-solid-6" : ""
      }`}
    >
      <div className="mx-auto flex h-18 max-w-c-1280 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Codewyse Africa home">
          <Image src="/images/logo/mark.png" alt="" width={44} height={41} priority />
          <span className="font-afdisplay leading-none">
            <span className="block text-[19px] font-extrabold tracking-wide text-af-ink">CODEWYSE</span>
            <AfricaWord className="block text-[13px] font-bold tracking-[0.3em]" />
          </span>
        </Link>

        <nav className="hidden xl:block" aria-label="Main">
          <ul className="flex items-center gap-10 text-sm font-medium text-af-ink">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`relative py-2 transition-colors hover:text-af-teal ${
                    item.title === "Home"
                      ? "font-semibold after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-af-teal"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <button
            type="button"
            onClick={openAppointment}
            className="flex cursor-pointer items-center gap-2.5 rounded-full bg-af-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-af-navy2"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="cursor-pointer p-1 text-af-ink xl:hidden"
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stroke bg-white px-4 pb-6 pt-2 shadow-solid-6 md:px-8 xl:hidden">
          <ul className="flex flex-col text-af-ink">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-stroke py-3.5 font-medium hover:text-af-teal"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openAppointment();
              }}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-af-navy px-6 py-3 text-sm font-semibold text-white"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default AfricaHeader;
