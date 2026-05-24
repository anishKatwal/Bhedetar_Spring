export const deliveryAreas = [
  "Dharan",
  "Dhankuta",
  "Terathum",
  "Bhojpur",
  "Hile",
  "Itahari",
  "Inaruwa",
];

export default function DeliveryAreas() {
  return (
    <section id="delivery" className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0e6ba8]">
            Delivery coverage
          </p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#0a2540] md:text-6xl">
            From Bhedetar to nearby markets.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#475569]">
            We are preparing route-based delivery for retail, hotel, office,
            event, and jar supply orders across the eastern hills and nearby
            Tarai towns.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {deliveryAreas.map((area) => (
            <div key={area} className="border border-[#dbeafe] bg-[#f8fafc] p-5">
              <p className="text-lg font-bold text-[#0a2540]">{area}</p>
              <p className="mt-2 text-sm text-[#64748b]">
                Route delivery and bulk inquiry supported.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
