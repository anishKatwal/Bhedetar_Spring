export default function Benefits() {
  const benefits = [
    ["Local identity", "A brand rooted in Bhedetar with a design service that fits local events and businesses."],
    ["Custom wrapper service", "Create a bottle wrapper around the client's theme, message, date, sponsor, or brand."],
    ["Clear process", "The purification story is simple enough for customers to trust and staff to explain."],
    ["Bulk order thinking", "Product, inquiry, delivery, and credit details are already shaped for larger orders."],
    ["POS preparation", "The site includes a small ledger preview for customer, location, paid, and credit tracking."],
    ["Delivery-ready catalog", "Bottle sizes and order context are organized for retail, hotels, offices, and events."],
  ];

  return (
    <section id="benefits" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0e6ba8]">
            Why choose us
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#0a2540] md:text-6xl">
            More than a water bottle.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#475569]">
            Bhedetar Spring combines reliable drinking water with a practical
            custom-label service and a business workflow ready for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([title, description]) => (
            <div key={title} className="border border-[#dbeafe] bg-[#f8fafc] p-6">
              <div className="mb-4 h-2 w-14 bg-[#38bdf8]" />
              <h3 className="text-xl font-bold text-[#0a2540]">{title}</h3>
              <p className="mt-3 leading-7 text-[#64748b]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
