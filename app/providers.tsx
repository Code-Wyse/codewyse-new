"use client";

import "@/lib/fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AppointmentProvider } from "./context/AppointmentContext";
import AppointmentModal from "@/components/Common/AppointmentModal";
import FreeConsultationPopup from "@/components/Common/FreeConsultationPopup";

config.autoAddCss = false;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppointmentProvider>
      {children}
      <AppointmentModal />
      <FreeConsultationPopup />
    </AppointmentProvider>
  );
}
