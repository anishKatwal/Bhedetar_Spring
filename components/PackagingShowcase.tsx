export default function PackagingShowcase() {
  return (
    <section id="packaging" className="bg-[#071827] px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#7dd3fc]">
              Jaruwa packaging
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
              A colder, cleaner, hill-born look.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Based on your reference, this direction uses waterfall imagery,
              deep blue labels, mineral-balance messaging, and clear bottle
              closeups. It feels premium without losing the local hill-water
              identity.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Pure", "Refreshing", "Trusted"].map((word) => (
                <div key={word} className="border border-white/15 bg-white/8 p-4 text-center font-bold">
                  {word}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="min-h-44 border border-white/15 bg-[linear-gradient(rgba(7,24,39,0.35),rgba(7,24,39,0.85)),linear-gradient(135deg,#0f3d4f,#102a43_45%,#dbeafe_47%,#0f3d4f_50%,#081c2e)] p-6">
              <p className="text-2xl font-light leading-9">Born in the untouched eastern hills of Nepal</p>
            </div>
            <div className="min-h-44 border border-white/15 bg-[linear-gradient(rgba(7,24,39,0.2),rgba(7,24,39,0.7)),radial-gradient(circle_at_50%_0%,#e0f2fe,#38bdf8_16%,#0f3d4f_42%,#071827_70%)] p-6">
              <p className="mt-20 text-2xl font-light">Where purity begins</p>
            </div>
            <div className="min-h-44 border border-white/15 bg-[linear-gradient(90deg,#0a2540,#1e3a5f,#0a2540)] p-6">
              <div className="mx-auto h-36 w-16 rounded-t-[30px] border border-white/40 bg-white/20">
                <div className="mx-1 mt-16 bg-[#164e7a] py-3 text-center text-[10px] font-bold">
                  JARUWA
                </div>
              </div>
            </div>
            <div className="min-h-44 border border-white/15 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.5),transparent_18%),linear-gradient(#0c2f4f,#071827)] p-6">
              <div className="mx-auto h-40 w-20 rounded-t-[34px] border border-white/50 bg-white/70 pt-16">
                <div className="bg-[#0e3f68] px-2 py-4 text-center">
                  <p className="font-serif text-lg font-bold">JARUWA</p>
                  <p className="text-[10px] tracking-[0.2em] text-[#bae6fd]">SPRING</p>
                </div>
              </div>
            </div>
            <div className="min-h-44 border border-white/15 bg-[linear-gradient(115deg,#071827,#164e63,#dbeafe_48%,#164e63_52%,#071827)] p-6">
              <p className="mt-24 text-3xl font-bold italic">JARUWA SPRING</p>
            </div>
            <div className="min-h-44 border border-white/15 bg-[linear-gradient(rgba(7,24,39,0.25),rgba(7,24,39,0.85)),radial-gradient(circle,#e0f2fe,#38bdf8_8%,#0a2540_55%)] p-6">
              <p className="text-2xl font-bold">Carefully processed</p>
              <p className="text-xl text-white/75">to preserve nature&apos;s balance</p>
              <div className="mt-5 bg-white p-3 text-xs text-[#0a2540]">
                Calcium / Magnesium / Sodium / TDS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
