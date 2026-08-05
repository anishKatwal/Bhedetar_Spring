"use client";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0a2540] px-5 pb-20 pt-32 text-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,107,168,0.72),rgba(56,189,248,0.24)_42%,rgba(10,37,64,0.95))]" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-[linear-gradient(135deg,transparent_0_18%,rgba(255,255,255,0.08)_18%_19%,transparent_19%_38%,rgba(255,255,255,0.08)_38%_39%,transparent_39%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-140px)] max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Left Content Column */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#38bdf8]">
            Bhedetar, Dhankuta
          </p>
          <h1 className="font-serif text-5xl font-bold leading-none tracking-tight md:text-7xl">
            Bhedetar Spring
          </h1>
          <p className="mt-6 text-xl font-light leading-relaxed text-white/90 md:text-2xl">
            Pure mountain water featuring custom bottle wrappers tailored for weddings, 
            birthdays, corporate events, and local Nepalese hospitality.
          </p>
          <p className="mt-4 text-base text-white/60">
            Clean alpine sourcing. Personal design. Delivered across eastern Nepal.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("custom-wraps")}
              className="bg-[#38bdf8] px-8 py-4 text-base font-bold text-[#0a2540] transition-all hover:bg-white hover:shadow-lg hover:shadow-[#38bdf8]/20"
            >
              Design Wrapper
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:border-[#38bdf8] hover:text-[#38bdf8]"
            >
              Send Inquiry
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <div className="mb-1 text-3xl font-bold text-[#fde68a] md:text-4xl">8</div>
              <p className="text-xs uppercase tracking-wider text-white/50">Quality steps</p>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold text-[#fde68a] md:text-4xl">4</div>
              <p className="text-xs uppercase tracking-wider text-white/50">Bottle sizes</p>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold text-[#fde68a] md:text-4xl">7</div>
              <p className="text-xs uppercase tracking-wider text-white/50">Delivery areas</p>
            </div>
          </div>
        </div>

        {/* Right Graphic Column (Mockup Bottle & Intersecting Overlays) */}
        <div className="relative">
          <Image
            src="/photos/bottle.png"
            alt="Bhedetar Spring Water Bottle"
            width={220}
            height={560}
            priority
            className="object-contain ml-[80px]"
          />

          {/* Jaruwa Centered Custom Label - Positioned directly over the middle of the bottle */}
          <div className="absolute mt-[620px] ml-[920px] w-[160px] -translate-x-1/2 -translate-y-1/2 z-10 w-[230px] bg-[#0a2540]/90 py-4 text-center shadow-2xl border-y-2 border-[#38bdf8] backdrop-blur-sm">
            <p className="font-serif text-2xl font-bold tracking-wide text-white mt-[20px]">
              Bhedetar
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#38bdf8] mt-0.5">
              Spring
            </p>
            <div className="my-3 h-[1px] w-12 bg-white/20 mx-auto" />
            <p className="text-[9px] font-medium uppercase tracking-widest text-white/60 px-1">
              100%
            </p>
          </div>

          {/* Floating Feature Badges - Placed correctly out in relative layout space */}
          <div className="absolute mb-[125px] ml-[630px] bottom-16 -left-12 z-20 transform rounded-lg border border-white/20 bg-black/40 p-4 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105 max-w-[160px]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
              Wedding label
            </p>
            <p className="mt-0.5 text-[11px] text-white/80 leading-tight">
              Names, date & custom themes
            </p>
          </div>

          <div className="absolute mr-[60px] mt-[50px] top-24 -right-12 z-20 transform rounded-lg border border-white/20 bg-black/40 p-4 shadow-xl backdrop-blur-md transition-transform hover:scale-105 duration-300 max-w-[160px]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
              Hiking pack
            </p>
            <p className="text-[11px] text-white/80 mt-0.5 leading-tight">
              Route matrix, sponsors & maps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
