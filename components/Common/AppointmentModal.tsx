"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppointment } from "@/app/context/AppointmentContext";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@codewyse.io";

const todayISO = () => {
  const d = new Date();
  const off = d.getTimezoneOffset();
  const local = new Date(d.getTime() - off * 60 * 1000);
  return local.toISOString().slice(0, 10);
};

const AppointmentModal = () => {
  const { isOpen, close } = useAppointment();

  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    time: "",
    topic: "",
    message: "",
  });

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!form.name || !form.email || !form.date || !form.time) {
      toast.error("Please fill in name, email, date and time.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Appointment Request — ${form.name}`,
          _template: "table",
          _captcha: "false",
          form_type: "Appointment Request",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          preferred_date: form.date,
          preferred_time: form.time,
          topic: form.topic,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || (data && data.success === "false")) {
        throw new Error(data?.message || "Failed to send appointment request.");
      }

      toast.success("Appointment request sent! We'll be in touch shortly.");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        date: "",
        time: "",
        topic: "",
        message: "",
      });
      close();
    } catch (err: any) {
      toast.error(err?.message || "Could not send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-title"
      className="fixed inset-0 z-[999999] flex items-center justify-center px-4 py-8"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-blacksection sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-black transition hover:bg-gray-100 dark:text-white dark:hover:bg-white/10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <h2
          id="appointment-title"
          className="mb-1 text-2xl font-semibold text-black dark:text-white"
        >
          Book an Appointment
        </h2>
        <p className="mb-6 text-sm text-waterloo">
          Tell us about your project. We&rsquo;ll confirm a time that works for you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-stroke bg-transparent px-3 py-2 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-stroke bg-transparent px-3 py-2 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-stroke bg-transparent px-3 py-2 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                Company
              </label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-md border border-stroke bg-transparent px-3 py-2 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                Preferred date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                min={todayISO()}
                value={form.date}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-stroke bg-transparent px-3 py-2 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                Preferred time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-stroke bg-transparent px-3 py-2 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-black dark:text-white">
              What can we help with?
            </label>
            <select
              name="topic"
              value={form.topic}
              onChange={handleChange}
              className="w-full rounded-md border border-stroke bg-transparent px-3 py-2 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:text-white"
            >
              <option value="">Select a topic</option>
              <option value="Custom Web App Development">Custom Web App Development</option>
              <option value="Mobile App Development">Mobile App Development (iOS / Android)</option>
              <option value="AI & ML Development">AI &amp; ML Development</option>
              <option value="Custom CRM Development">Custom CRM Development</option>
              <option value="SaaS / MVP Development">SaaS / MVP Development</option>
              <option value="E-commerce / Fintech / Healthcare">E-commerce / Fintech / Healthcare</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-black dark:text-white">
              Project details
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border border-stroke bg-transparent px-3 py-2 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:text-white"
              placeholder="Briefly describe your project, timeline, and goals."
            />
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={close}
              className="rounded-full border border-stroke px-6 py-2.5 text-sm font-medium text-black transition hover:bg-gray-50 dark:border-strokedark dark:text-white dark:hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primaryho disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Request Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
