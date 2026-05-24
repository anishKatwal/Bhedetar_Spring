"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a2540] px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl font-bold">
              Bhedetar Spring
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Pure mountain water, custom bottle wrappers, and a simple sales
              workflow built for local growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-[#38bdf8]">About</a></li>
              <li><a href="#products" className="hover:text-[#38bdf8]">Products</a></li>
              <li><a href="#custom-wraps" className="hover:text-[#38bdf8]">Custom wrappers</a></li>
              <li><a href="#purification" className="hover:text-[#38bdf8]">Purification</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">Bottle sizes</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>500ml</li>
              <li>900ml</li>
              <li>1L</li>
              <li>20L</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">Business</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#contact" className="hover:text-[#38bdf8]">Inquiry</a></li>
              <li><a href="#pos" className="hover:text-[#38bdf8]">POS preview</a></li>
              <li>Wholesale</li>
              <li>Event supply</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 text-sm text-white/60 md:flex-row">
          <p>Copyright {currentYear} Bhedetar Spring. All rights reserved.</p>
          <p>Tamaso Studios {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
