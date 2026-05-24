export default function Purification() {
  const steps = [
    ["Source selection", "Water is collected from a controlled source and checked before it enters production."],
    ["Pre-filtration", "Sediment and visible particles are reduced before finer treatment begins."],
    ["Activated carbon", "Taste, odor, and unwanted organic traces are polished for a cleaner profile."],
    ["Fine membrane filtration", "A finer barrier helps remove smaller impurities while protecting consistency."],
    ["UV treatment", "Ultraviolet exposure adds a non-chemical microbiological safety layer."],
    ["Ozone finishing", "Ozone is used as a final freshness and hygiene step before filling."],
    ["Quality check", "Batch checks track clarity, taste, seal condition, and production hygiene."],
    ["Sealed dispatch", "Bottles are capped, labeled, stored cleanly, and prepared for delivery."],
  ];

  return (
    <section id="purification" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0e6ba8]">
            Purification process
          </p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#0a2540] md:text-6xl">
            Clear steps from source to sealed bottle.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#475569]">
            Inspired by the discipline used by leading bottled-water companies,
            the process is written for customers to understand: protect the
            source, filter carefully, treat hygienically, and check before
            dispatch.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <div key={title} className="border border-[#dbeafe] bg-[#f8fafc] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#0a2540] text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-[#0a2540]">{title}</h3>
              <p className="mt-3 leading-7 text-[#64748b]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
