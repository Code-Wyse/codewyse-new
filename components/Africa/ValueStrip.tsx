import { BarChart, Gear, Globe, Layers } from "./icons";

const values = [
  { icon: BarChart, title: "Practical Solutions", text: "Technology that solves real business problems." },
  { icon: Gear, title: "Industry Expertise", text: "Solutions for key African industries." },
  { icon: Layers, title: "End-to-End Delivery", text: "From strategy to design, development and support." },
  { icon: Globe, title: "Regional Focus", text: "Built for African businesses with global standards." },
];

const ValueStrip = () => (
  <section className="border-b border-stroke bg-white">
    <div className="mx-auto grid max-w-c-1280 grid-cols-1 gap-y-8 px-4 py-10 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:py-12">
      {values.map(({ icon: Icon, title, text }, i) => (
        <div
          key={title}
          className={`flex items-start gap-4 lg:px-6 ${i > 0 ? "lg:border-l lg:border-stroke" : "lg:pl-0"}`}
        >
          <Icon className={`h-9 w-9 shrink-0 ${i % 2 ? "text-af-teal" : "text-af-navy"}`} />
          <div>
            <h3 className="font-afdisplay text-[15px] font-bold text-af-ink">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-af-body">{text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ValueStrip;
