import Image from "next/image";

const media = [
  {
    kind: "video",
    src: "/photos/video1.mp4",
    title: "Rinsing, filling, and capping monoblock",
    detail: "Enclosed Filmatic Systems machine for hygienic bottle processing.",
  },
  {
    kind: "video",
    src: "/photos/video3.mov",
    title: "Bottle inspection and prior to labelling",
    detail: "Close-up checks around the filled and labelled bottle output.",
  },
  {
    kind: "video",
    src: "/photos/video2.mov",
    title: " label finish and packaging",
    detail: "Reverse osmosis and filtration controls before water reaches filling.",
  },
];

export default function ProductionGallery() {
  return (
    <section id="photos" className="bg-[#f5fbff] px-5 py-20 text-[#0a2540]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0284c7]">
            Plant photos
          </p>
          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            Production machinery in view
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#31546d]">
            A closer look at the processing, filling, capping, labeling, and
            shrink-wrap units used around the Bhedetar Spring line.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {media.map((item) => (
            <article
              key={item.src}
              className="overflow-hidden border border-[#cfe8f5] bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] bg-[#d9edf7]">
                {item.kind === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <video
                    className="h-full w-full object-cover"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 leading-7 text-[#42647a]">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
