"use client";

import { useEffect } from "react";
import { useRegion } from "@/lib/useRegion";

const AFRICA_TITLE = "Codewyse Africa | Web, Mobile, AI & Enterprise Software for African Businesses";

// Renders the global home page by default and swaps in the Africa version for
// African visitors, keeping the URL at "/". The static HTML (what crawlers and
// everyone else get) is always the global page.
const RegionSwitch = ({ africa, children }: { africa: React.ReactNode; children: React.ReactNode }) => {
  const region = useRegion();

  useEffect(() => {
    if (region !== "africa") return;
    const previous = document.title;
    document.title = AFRICA_TITLE;
    return () => {
      document.title = previous;
    };
  }, [region]);

  return <>{region === "africa" ? africa : children}</>;
};

export default RegionSwitch;
