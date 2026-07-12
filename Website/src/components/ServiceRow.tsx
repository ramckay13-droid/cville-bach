import Image from "next/image";

type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Doodle = Photo & { className: string };

type ServiceRowProps = {
  title: string;
  description: string;
  includes: string[];
  photo: Photo;
  doodle?: Doodle;
  reverse?: boolean;
};

export default function ServiceRow({
  title,
  description,
  includes,
  photo,
  doodle,
  reverse,
}: ServiceRowProps) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className={`flex justify-center ${reverse ? "lg:order-2" : ""}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="h-auto w-full max-w-sm"
        />
      </div>
      <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
        <h2 className="mb-4 font-script text-5xl sm:text-6xl">{title}</h2>
        <p className="mb-6 text-base leading-relaxed sm:text-lg">
          {description}
        </p>
        <ul className="space-y-2 text-base sm:text-lg">
          {includes.map((item) => (
            <li key={item} className="flex items-baseline gap-2">
              <span aria-hidden>&bull;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {doodle && (
          <Image
            src={doodle.src}
            alt={doodle.alt}
            width={doodle.width}
            height={doodle.height}
            className={doodle.className}
          />
        )}
      </div>
    </div>
  );
}
