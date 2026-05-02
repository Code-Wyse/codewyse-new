"use client";

import React, { createContext, useCallback, useContext, useState } from "react";

type AppointmentContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const AppointmentContext = createContext<AppointmentContextValue | null>(null);

export function AppointmentProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <AppointmentContext.Provider value={{ isOpen, open, close }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const ctx = useContext(AppointmentContext);
  if (!ctx) throw new Error("useAppointment must be used inside <AppointmentProvider>");
  return ctx;
}
