// Small uppercase label with a gold rule, used above each section title.
const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p
    className={`mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] ${
      light ? "text-white/70" : "text-af-body"
    }`}
  >
    <span className="h-0.5 w-8 rounded-full bg-af-gold" />
    {children}
  </p>
);

export default Eyebrow;
