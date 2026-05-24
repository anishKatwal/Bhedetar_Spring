"use client";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0a2540] px-5 pb-16 pt-28 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,107,168,0.72),rgba(56,189,248,0.24)_42%,rgba(10,37,64,0.95))]" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-[linear-gradient(135deg,transparent_0_18%,rgba(255,255,255,0.12)_18%_19%,transparent_19%_38%,rgba(255,255,255,0.12)_38%_39%,transparent_39%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.72fr]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#bae6fd]">
            Bhedetar, Dhankuta
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
            Bhedetar Spring
          </h1>
          <p className="mt-6 text-2xl font-light leading-9 text-white/90 md:text-3xl">
            Pure mountain water with custom bottle wrappers for weddings,
            birthdays, hiking trips, hotels, offices, and local events.
          </p>
          <p className="mt-4 text-lg text-white/70">
            Clean water. Personal design. Delivered across eastern Nepal.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("custom-wraps")}
              className="bg-[#38bdf8] px-8 py-4 text-lg font-bold text-[#0a2540] transition-all hover:bg-white"
            >
              Design Wrapper
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-[#38bdf8] px-8 py-4 text-lg font-bold text-[#38bdf8] transition-all hover:bg-[#38bdf8] hover:text-[#0a2540]"
            >
              Send Inquiry
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-[#fde68a] md:text-4xl">8</div>
              <p className="text-sm text-white/70">Quality steps</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-[#fde68a] md:text-4xl">4</div>
              <p className="text-sm text-white/70">Bottle sizes</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-[#fde68a] md:text-4xl">7</div>
              <p className="text-sm text-white/70">Delivery areas</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex h-[520px] w-full max-w-sm items-end justify-center">
          <div className="absolute bottom-0 h-[470px] w-[180px] rounded-t-[72px] border border-white/40 bg-white/85 shadow-2xl">
            <div className="mx-auto mt-8 h-20 w-16 rounded-t-lg bg-[#dbeafe]" />
            <div className="mx-5 mt-12 border-y border-[#0e6ba8]/30 bg-[#0a2540] px-4 py-8 text-center">
              <p className="font-serif text-3xl font-bold">Bhedetar</p>
              <p className="text-sm uppercase tracking-[0.2em] text-[#38bdf8]">Spring</p>
              <p className="mt-5 text-xs leading-5 text-white/70">Jaruwa packaging style</p>
            </div>
          </div>
          <div className="absolute bottom-10 left-2 border border-white/20 bg-white/10 p-4 backdrop-blur">
            <p className="text-sm font-bold text-[#bae6fd]">Wedding label</p>
            <p className="text-xs text-white/70">Names, date, venue</p>
          </div>
          <div className="absolute right-0 top-20 border border-white/20 bg-white/10 p-4 backdrop-blur">
            <p className="text-sm font-bold text-[#bae6fd]">Hiking pack</p>
            <p className="text-xs text-white/70">Route, team, sponsor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
