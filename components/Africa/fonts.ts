import { Montserrat } from "next/font/google";

// Display face for the Africa site headings; body text stays on Inter.
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-af-display",
});
