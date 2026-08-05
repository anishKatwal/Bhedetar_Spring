export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-24"
    >
      {/* Topographic contour watermark — evokes the Bhedetar hillside the spring rises from */}
      <svg
        className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] text-[#0e6ba8] opacity-[0.06]"
        viewBox="0 0 400 400"
        fill="none"
      >
        {[40, 80, 120, 160, 200].map((r) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-[1.05fr_0.85fr]">
        {/* Copy column */}
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#17b8a4]" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#0e6ba8]">
              Sourced in Bhedetar, Dhankuta
            </p>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-[1.08] text-[#0a2540] md:text-6xl">
            Spring water, finished with a label made for your moment.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#475569]">
            Bhedetar Spring draws clean hill water and pairs it with dependable
            local delivery and a bottle you can actually make your own. Every
            order starts the same way: your occasion, wrapped around our water.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-8 text-[#475569]">
            We supply corporate events, conferences, hotels, restaurants,
            caterers, weddings, sports fixtures, school programs, religious
            gatherings, and private celebrations — each run labeled with the
            host&apos;s branding, message, or artwork, so every bottle doubles
            as a keepsake and a quiet piece of marketing.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {[
              "1,420m elevation source",
              "Same-week local delivery",
              "Labels printed per order",
            ].map((stat) => (
              <span
                key={stat}
                className="rounded-full border border-[#dbeafe] bg-[#f8fafc] px-4 py-2 text-sm font-semibold text-[#0a2540]"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Specimen label card */}
        <div className="relative border border-[#dbeafe] bg-[#f8fafc] p-7 shadow-sm">
          <div className="absolute -top-3 left-7 flex h-9 w-9 items-center justify-center rounded-full border border-[#dbeafe] bg-white font-serif text-sm font-bold text-[#0e6ba8] shadow-sm">
            BS
          </div>

          <p className="mb-6 pt-3 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#64748b]">
            Specimen Label
          </p>

          <div className="grid gap-4">
            {[
              ["Origin", "Bhedetar, Dhankuta"],
              ["Focus", "Pure spring water, custom wrap, local delivery"],
              ["Finish", "Full-colour wrap, matte or gloss laminate"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-l-4 border-[#0e6ba8] bg-white p-4"
              >
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#64748b]">
                  {label}
                </p>
                <p className="mt-1 text-base font-bold leading-snug text-[#0a2540]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-dashed border-[#cbd5e1] pt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">
            Every batch labeled to the occasion
          </div>
        </div>
      </div>
    </section>
  );
}