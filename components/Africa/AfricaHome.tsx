import { montserrat } from "./fonts";
import AfricaHero from "./AfricaHero";
import ValueStrip from "./ValueStrip";
import AfricaServices from "./AfricaServices";
import AfricaIndustries from "./AfricaIndustries";
import AfricaApproach from "./AfricaApproach";
import AfricaCTA from "./AfricaCTA";
import AfricaAbout from "./AfricaAbout";
import RecentWork from "@/components/RecentWorks/RecentWork";
import CookieConsent from "@/components/Cookies/CookieConsent";

// The Africa version of the home page, shown at "/" to African visitors.
const AfricaHome = () => (
  <main className={`${montserrat.variable} bg-white`}>
    <AfricaHero />
    <ValueStrip />
    <AfricaAbout />
    <AfricaServices />
    <AfricaIndustries />
    <div id="our-work" className="scroll-mt-20 bg-white pb-8 pt-16 lg:pt-24">
      <RecentWork variant="africa" />
    </div>
    <AfricaApproach />
    <AfricaCTA />
    <CookieConsent />
  </main>
);

export default AfricaHome;
