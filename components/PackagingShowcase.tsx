import Image from "next/image";

export default function PackagingShowcase() {
  return (
    <section id="packaging" className="bg-[#1e293b] px-5 py-20 text-[#f8fafc]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#38bdf8]">
              Jaruwa packaging
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl text-white">
              A colder, cleaner, hill-born look.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#cbd5e1]">
              Based on your reference, this direction uses waterfall imagery,
              deep blue labels, mineral-balance messaging, and clear bottle
              closeups. It feels premium without losing the local hill-water
              identity.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Pure", "Refreshing", "Trusted"].map((word) => (
                <div
                  key={word}
                  className="border border-[#334155] bg-[#334155]/30 p-4 text-center font-bold text-[#38bdf8]"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative h-[280px] overflow-hidden border border-[#334155]">
              <Image
                src="/photos/photo1.jpeg"
                alt="Bhedetar Hills"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-slate-900/10 p-6"></div>
            </div>

            <div className="relative h-[280px] overflow-hidden border border-[#334155]">
              <Image
                src="/photos/photo2.jpeg"
                alt="Pure Spring Water"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-slate-900/10 p-6"></div>
            </div>

            <div className="relative h-[320px] overflow-hidden border border-[#334155]">
              <Image
                src="/photos/photo3.jpeg"
                alt="Water Quality"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-slate-900/10 p-6"></div>
            </div>

            <div className="relative h-[280px] overflow-hidden border border-[#334155]">
              <Image
                src="/photos/photo4.jpg"
                alt="Water Processing"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-slate-900/10 p-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}