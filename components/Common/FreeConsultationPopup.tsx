"use client";

import { useEffect, useState } from "react";
import { useAppointment } from "@/app/context/AppointmentContext";

const STORAGE_KEY = "codewyse_consult_popup_dismissed";
const SHOW_DELAY_MS = 2200;

const FreeConsultationPopup = () => {
  const [visible, setVisible] = useState(false);
  const { open: openAppointment } = useAppointment();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY) === "1") return;

    const t = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  const handleClaim = () => {
    dismiss();
    openAppointment();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-title"
      className="fixed inset-0 z-[9999990] flex items-center justify-center px-4 py-8"
    >
      <div
        className="absolute inset-0 bg-black/60 animate-[fadeIn_.25s_ease-out]"
        onClick={dismiss}
      />

      <div className="relative z-10 w-full max-w-4xl min-h-[560px] md:min-h-[600px] overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-blacksection animate-[popIn_.35s_cubic-bezier(.2,.9,.3,1.2)]">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-black shadow-sm transition hover:bg-white dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px]">
          <div className="relative flex items-center justify-center bg-gradient-to-br from-[#3ba196] to-[#1f6f68] p-6 sm:p-8">
            <ConsultIllustration />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-yellow-300 animate-pulse" />
              Limited Offer
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-primary">
              Free for new clients
            </p>
            <h2
              id="consult-title"
              className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl"
            >
              Get a <span className="text-primary">1-Hour Free Consultation</span> with Codewyse
            </h2>
            <p className="mb-5 text-sm text-waterloo dark:text-gray-300">
              Talk to a senior engineer about your <strong>web app, mobile app, AI &amp; ML, SaaS, MVP or CRM</strong> idea. We&rsquo;ll scope the project, surface risks, and map a realistic roadmap — no strings attached.
            </p>

            <ul className="mb-6 space-y-2 text-sm text-black dark:text-gray-200">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Architecture &amp; tech-stack recommendation
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Effort &amp; timeline estimate
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                AI / automation opportunities in your product
              </li>
            </ul>

            <div className="flex flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleClaim}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primaryho cursor-pointer"
              >
                Claim My Free Hour
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={dismiss}
                className="rounded-full px-6 py-3 text-sm font-medium text-waterloo transition hover:text-black dark:hover:text-white cursor-pointer"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(20px) scale(.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes badgeBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .consult-illustration .badge-1h {
          transform-box: fill-box;
          transform-origin: center;
          animation: badgeBob 3s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .consult-illustration .badge-1h { animation: none; }
        }
      `}</style>
    </div>
  );
};

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary">
    <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ConsultIllustration = () => (
  <svg
    viewBox="0 0 320 320"
    className="consult-illustration w-full max-w-[300px] drop-shadow-xl"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="screen" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#e6f7f4" />
      </linearGradient>
      <linearGradient id="bubble" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#cdeee9" />
      </linearGradient>
    </defs>

    {/* floating orbs (static) */}
    <circle cx="40" cy="50" r="6" fill="#fff" opacity=".5" />
    <circle cx="280" cy="80" r="4" fill="#fff" opacity=".4" />
    <circle cx="290" cy="240" r="5" fill="#fff" opacity=".5" />

    {/* laptop */}
    <rect x="60" y="120" width="200" height="120" rx="10" fill="#1a3d3a" />
    <rect x="68" y="128" width="184" height="100" rx="6" fill="url(#screen)" />

    {/* code lines on screen */}
    <rect x="80" y="142" width="60" height="6" rx="3" fill="#3ba196" />
    <rect x="80" y="156" width="100" height="6" rx="3" fill="#cfe8e4" />
    <rect x="80" y="170" width="80" height="6" rx="3" fill="#cfe8e4" />
    <rect x="80" y="184" width="120" height="6" rx="3" fill="#cfe8e4" />
    <rect x="80" y="198" width="70" height="6" rx="3" fill="#3ba196" />
    <rect x="80" y="212" width="50" height="6" rx="3" fill="#cfe8e4" />

    {/* laptop base */}
    <rect x="50" y="240" width="220" height="10" rx="4" fill="#0f2f2c" />

    {/* speech bubble with clock */}
    <g>
      <path
        d="M210 60 q40 0 40 30 q0 30 -40 30 q-10 0 -18 -4 l-14 8 l4 -14 q-12 -8 -12 -20 q0 -30 40 -30 z"
        fill="url(#bubble)"
      />
      <circle cx="226" cy="92" r="14" fill="none" stroke="#1a3d3a" strokeWidth="2.2" />
      <line x1="226" y1="92" x2="226" y2="83" stroke="#1a3d3a" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="226" y1="92" x2="233" y2="96" stroke="#1a3d3a" strokeWidth="2.2" strokeLinecap="round" />
    </g>

    {/* floating badge "1h" — animated via CSS transform on the group */}
    <g className="badge-1h">
      <circle cx="80" cy="90" r="22" fill="#fff" />
      <circle cx="80" cy="90" r="22" fill="none" stroke="#3ba196" strokeWidth="3" />
      <text
        x="80"
        y="96"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="#1a3d3a"
      >
        1h
      </text>
    </g>

    {/* sparkles (static) */}
    <g fill="#fff" opacity=".75">
      <path d="M50 200 l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 z" />
      <path d="M270 170 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 z" />
    </g>
  </svg>
);

export default FreeConsultationPopup;
