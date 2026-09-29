import type { SVGProps } from "react";

// Line icons for the Africa site (24px grid, stroke = currentColor).
const Icon = ({ children, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

type P = SVGProps<SVGSVGElement>;

export const ArrowRight = (p: P) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);
export const ChevronLeft = (p: P) => (
  <Icon {...p}>
    <path d="M15 6l-6 6 6 6" />
  </Icon>
);
export const ChevronRight = (p: P) => (
  <Icon {...p}>
    <path d="M9 6l6 6-6 6" />
  </Icon>
);
export const Menu = (p: P) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);
export const Close = (p: P) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);
export const Globe = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
  </Icon>
);
export const BarChart = (p: P) => (
  <Icon {...p}>
    <rect x="3.5" y="12" width="4" height="8" rx="0.8" />
    <rect x="10" y="8" width="4" height="12" rx="0.8" />
    <rect x="16.5" y="4" width="4" height="16" rx="0.8" />
  </Icon>
);
export const Gear = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" />
  </Icon>
);
export const Layers = (p: P) => (
  <Icon {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 12.5l9 5 9-5" />
    <path d="M3 16.5l9 5 9-5" />
  </Icon>
);
export const Devices = (p: P) => (
  <Icon {...p}>
    <rect x="2.5" y="4" width="15" height="11" rx="1.5" />
    <path d="M7 19h6M10 15v4" />
    <rect x="16" y="9" width="5.5" height="11" rx="1.2" />
  </Icon>
);
export const Chip = (p: P) => (
  <Icon {...p}>
    <rect x="6" y="6" width="12" height="12" rx="1.5" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="0.6" />
    <path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
  </Icon>
);
export const Cloud = (p: P) => (
  <Icon {...p}>
    <path d="M7 18.5h10.5a4 4 0 00.6-8 6 6 0 00-11.6-1.3A4.7 4.7 0 007 18.5z" />
  </Icon>
);
export const PenTool = (p: P) => (
  <Icon {...p}>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.6 7.6" />
    <circle cx="11" cy="11" r="2" />
  </Icon>
);
export const Cart = (p: P) => (
  <Icon {...p}>
    <path d="M2.5 3.5h2.6l2.3 11.2a1.5 1.5 0 001.5 1.2h8.4a1.5 1.5 0 001.5-1.1L20.5 8H6.1" />
    <circle cx="9.5" cy="19.5" r="1.3" />
    <circle cx="17" cy="19.5" r="1.3" />
  </Icon>
);
export const CreditCard = (p: P) => (
  <Icon {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M2.5 10h19M6.5 15h4" />
  </Icon>
);
export const Truck = (p: P) => (
  <Icon {...p}>
    <path d="M2.5 6.5h11v10h-11zM13.5 10h4l3 3.5v3h-7" />
    <circle cx="6.5" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </Icon>
);
export const Heart = (p: P) => (
  <Icon {...p}>
    <path d="M20.4 5.6a5 5 0 00-7.1 0L12 6.9l-1.3-1.3a5 5 0 00-7.1 7.1L12 21l8.4-8.3a5 5 0 000-7.1z" />
  </Icon>
);
export const Building = (p: P) => (
  <Icon {...p}>
    <path d="M3.5 21h17M5.5 21V4.5h8V21M13.5 9h5v12" />
    <path d="M8 8h3M8 11.5h3M8 15h3M16 12.5h0M16 16h0" />
  </Icon>
);
