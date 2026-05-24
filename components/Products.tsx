export default function Products() {
  const products = [
    {
      name: "Spring Water 500ml",
      price: "Rs. 10",
      description: "Easy carry bottle for events, retail, schools, and daily use.",
      features: ["Jaruwa packaging option", "Custom wrapper ready", "Quick chilled sales"],
    },
    {
      name: "Spring Water 900ml",
      price: "Rs. 20",
      description: "A practical size for meetings, travel groups, and restaurants.",
      features: ["Good table size", "Jaruwa blue label", "Event label option"],
    },
    {
      name: "Spring Water 1L",
      price: "Rs. 25",
      description: "Family, office, and roadside-shop bottle with better volume.",
      features: ["Daily hydration", "Home delivery ready", "Strong shelf presence"],
    },
    {
      name: "Spring Water 20L",
      price: "Rs. 60",
      description: "Commercial jar for hotels, offices, cafes, and repeat supply.",
      features: ["Commercial use", "Credit ledger ready", "Route delivery"],
    },
    {
      name: "Jaruwa ad",
      price: "Ask",
      description: "Packaged-water supply with a deep blue hill-water label direction.",
      features: ["Retail packaging", "Mineral table label", "Bulk order ready"],
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
            Bottle sizes for daily sales and special orders.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#475569]">
            Start with standard Bhedetar Spring bottles or add custom wrappers
            for events, businesses, and wholesale clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <div key={product.name} className="border border-[#dbeafe] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#38bdf8] hover:shadow-lg">
              <div className="mb-5 flex h-28 items-end justify-center bg-[#eff6ff]">
                <div className="h-24 w-12 rounded-t-[28px] border border-[#93c5fd] bg-white">
                  <div className="mx-1 mt-10 bg-[#0e6ba8] py-2 text-center text-[10px] font-bold text-white">
                    BS
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0a2540]">{product.name}</h3>
              <p className="mt-2 min-h-16 text-sm leading-6 text-[#64748b]">{product.description}</p>
              <div className="mt-4 text-2xl font-bold text-[#0e6ba8]">{product.price}</div>
              <ul className="mt-5 space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#475569]">
                    <span className="h-1.5 w-1.5 bg-[#38bdf8]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 block bg-[#0a2540] py-3 text-center font-bold text-white transition hover:bg-[#0e6ba8]">
                Inquire
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
