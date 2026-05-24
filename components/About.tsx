export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0e6ba8]">
            About Bhedetar Spring 
          </p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#0a2540] md:text-6xl">
            Mountain water with a label that belongs to your moment.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#475569]">
            Bhedetar Spring is built around clean water, dependable delivery,
            and a more personal bottle experience. Our vision is simple: let
            every client design the wrapper around the bottle for the occasion
            they are living.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#475569]">
            Birthdays, weddings, hiking groups, school events, sport events, business
            meetings, pujas, hotel tables, sports days, and family gatherings
            can all carry their own message, color, name, date, or artwork.
            The bottle becomes useful first, memorable second.
          </p>
        </div>

        <div className="border border-[#dbeafe] bg-[#f8fafc] p-6 shadow-sm">
          <div className="grid gap-4">
            {[
              ["Source", "Bhedetar, Dhankuta"],
              ["Focus", "Pure water, custom wrappers, local delivery"],
              ["Events", "Birthday, wedding, hiking, corporate, retail"],
              ["Vision", "Make every bottle feel made for the client"],
            ].map(([label, value]) => (
              <div key={label} className="border-l-4 border-[#0e6ba8] bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#64748b]">
                  {label}
                </p>
                <p className="mt-1 text-lg font-bold text-[#0a2540]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
