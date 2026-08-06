"use client";

import Image from "next/image";

export default function Products() {
  const products = [
    {
      name: "Spring Water 500ml",
      image: "/photos/bottle500.png",
      price: "Rs. 15",
      description:
        "Easy-carry bottle for events, retail stores, schools, travel, and daily hydration.",
      features: [
        "Pure Bhedetar Spring water",
        "Custom wrapper ready",
        "Perfect for events and retail",
      ],
    },
    {
      name: "Spring Water 1L",
      image: "/photos/bottle1l.png",
      price: "Rs. 25",
      description:
        "Ideal for offices, families, restaurants, roadside shops, and hospitality use.",
      features: [
        "Bulk order ready",
        "Long-lasting hydration",
        "Strong shelf presence",
      ],
    },
    {
      name: "Custom Branding",
      image: "/photos/Botttleboth.png",
      price: "Ask for Quote",
      description:
        "Personalized bottle wrappers for weddings, birthdays, hotels, corporate events, and promotional campaigns.",
      features: [
        "Custom label design",
        "Business branding",
        "Bulk event supply",
      ],
    },
  ];

  return (
    <section id="products" className="bg-[#f8fafc] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0e6ba8]">
            Products
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#0a2540] md:text-6xl">
            Bottle sizes for daily sales and special orders
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#475569]">
            Choose from standard Bhedetar Spring bottles or customize labels
            for weddings, hotels, businesses, events, and promotional
            campaigns.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-[#dbeafe] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#38bdf8] hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="flex h-72 items-center justify-center bg-gradient-to-b from-[#eff6ff] to-white p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={350}
                  height={400}
                  className="h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0a2540]">
                  {product.name}
                </h3>

                <p className="mt-3 min-h-[80px] text-sm leading-6 text-[#64748b]">
                  {product.description}
                </p>

                <div className="mt-4 text-3xl font-bold text-[#0e6ba8]">
                  {product.price}
                </div>

                <ul className="mt-5 space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[#475569]"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#38bdf8]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 block rounded-lg bg-[#0a2540] py-3 text-center font-bold text-white transition hover:bg-[#0e6ba8]"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}