"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Products", "#products"],
    ["Wrappers", "#custom-wraps"],
    ["Delivery", "#delivery"],
    ["Purification", "#purification"],
    ["Inquiry", "#contact"],
    ["Staff", "#pos"],
    ["Admin", "/admin"],
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-[68px] items-center justify-between border-b border-white/10 bg-[#0a2540]/95 px-[5%] backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2.5 text-white transition-opacity hover:opacity-90">
        <div className="flex h-9 w-9 items-center justify-center rounded-[50%_50%_50%_0%] bg-[#38bdf8] text-sm font-bold text-[#0a2540]">
          BS
        </div>
        <div className="font-serif text-lg tracking-wider">
          Bhedetar<span className="text-[#38bdf8]"> Spring</span>
        </div>
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        <ul className="flex list-none gap-7">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="text-sm font-medium tracking-wider text-white/80 transition-colors hover:text-[#38bdf8]">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#contact" className="bg-[#38bdf8] px-5 py-2 text-sm font-bold text-[#0a2540] transition-opacity hover:opacity-90">
          Start Inquiry
        </Link>
      </div>

      <button
        className="flex cursor-pointer flex-col gap-1 p-1 md:hidden"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block h-0.5 w-6 rounded bg-white" />
        <span className="block h-0.5 w-6 rounded bg-white" />
        <span className="block h-0.5 w-6 rounded bg-white" />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-[68px] border-b border-white/10 bg-[#0a2540]/98 p-4 md:hidden">
          <ul className="flex list-none flex-col gap-4">
            {links.map(([label, href]) => (
              <li key={href}>
                <Link href={href} onClick={() => setIsOpen(false)} className="text-white/80 hover:text-[#38bdf8]">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="inline-block bg-[#38bdf8] px-4 py-2 font-bold text-[#0a2540] hover:opacity-90">
                Start Inquiry
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
