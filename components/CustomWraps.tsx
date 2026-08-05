export default function CustomWraps() {
  const ideas = [
    "Hotels, resorts, and guest room branded water",
    "Travel agencies and tour package branding",
    "Airports, lounges, and VIP hospitality services",
    "Adventure tourism and trekking package water",
    "Conference halls and event venues",
  ];

  return (
    <section id="custom-wraps" className="bg-[#f8fafc] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0e6ba8]">
              Custom bottle wrappers
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-[#0a2540] md:text-6xl">
              Your event on the bottle, our water inside.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#475569]">
              Clients can bring their own design, ask us to prepare one, or
              choose a clean template. We prepare the wrapper around the bottle
              size, confirm the proof, and then bottle for the order.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ideas.map((idea) => (
              <div key={idea} className="border border-[#dbeafe] bg-white p-5 shadow-sm">
                <div className="mb-4 h-2 w-16 bg-[#38bdf8]" />
                <p className="font-semibold leading-7 text-[#0a2540]">{idea}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {["Share idea", "Approve design", "Print wrapper", "Deliver bottles"].map(
            (step, index) => (
              <div key={step} className="border border-[#bae6fd] bg-white p-5">
                <p className="text-sm font-bold text-[#0e6ba8]">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-lg font-bold text-[#0a2540]">{step}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
