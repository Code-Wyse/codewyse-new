"use client";

import { useEffect, useState } from "react";
import type { Region } from "./region";

// Always "global" during server rendering and the first client render (so
// hydration matches the static HTML), then the detected region.
export function useRegion(): Region {
  const [region, setRegion] = useState<Region>("global");

  useEffect(() => {
    if (document.documentElement.getAttribute("data-region") === "africa") setRegion("africa");
  }, []);

  return region;
}
