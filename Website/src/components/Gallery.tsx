import Image from "next/image";

const photos = [
  {
    src: "/images/gallery-butterflies.png",
    alt: "Hanging pastel butterfly garland decor in a kitchen",
    width: 421,
    height: 482,
  },
  {
    src: "/images/gallery-bride-to-be.png",
    alt: "Gold Bride To Be balloon backdrop with silver fringe curtain",
    width: 421,
    height: 482,
  },
  {
    src: "/images/gallery-mimosa-bar.png",
    alt: "Mimosa bar table setup with fresh fruit and champagne",
    width: 421,
    height: 482,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
      <div className="grid gap-6 sm:grid-cols-3">
        {photos.map((p) => (
          <div key={p.src} className="relative">
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
