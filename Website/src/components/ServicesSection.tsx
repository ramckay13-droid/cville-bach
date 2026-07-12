import Image from "next/image";
import InquireButton from "./InquireButton";

const services = [
  "Custom Balloon Garlands",
  "Themed Backdrop Walls",
  "Table Scapes & Signage",
  "Pre-Arrival Setup",
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 sm:px-10 sm:pt-32">
      <div className="grid gap-20 lg:grid-cols-[2fr_1fr] lg:gap-16">
        <div className="relative">
          <div className="relative rounded-[2rem_6rem_3rem_5rem] bg-[var(--color-sky)] px-8 py-12 sm:px-12 sm:py-14">
            <h2 className="mb-4 font-script text-5xl sm:text-6xl">Party Perfect</h2>
            <p className="mb-4 text-base leading-relaxed sm:text-lg">
              Charlottesville&apos;s premier decorating service, specializing in
              custom bachelorette transformations. Whether you&apos;re staying
              in a cozy downtown Airbnb or a sprawling farmhouse near the
              vineyards, we arrive before you do to make sure your space is
              photo-ready and party-perfect.
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              From massive balloon installations and themed backdrops to fully
              stocked &quot;hangover kits&quot; and fridge stocking, we handle
              the aesthetics so you can focus on the memories.
            </p>
          </div>
          <Image
            src="/images/bride-sash.png"
            alt="Bride sash illustration"
            width={216}
            height={298}
            className="absolute -top-8 right-4 w-20 rotate-6 sm:-top-10 sm:right-8 sm:w-28"
          />
        </div>

        <div className="relative flex flex-col justify-center pb-16 lg:pb-24">
          <h2 className="mb-4 font-script text-5xl sm:text-6xl">Our Services</h2>
          <p className="mb-6 text-base leading-relaxed sm:text-lg">
            From massive balloon installations and themed backdrops to fully
            stocked &quot;hangover kits&quot; and fridge stocking, we handle
            the aesthetics so you can focus on the memories.
          </p>
          <ul className="mb-8 space-y-2 text-base sm:text-lg">
            {services.map((s) => (
              <li key={s} className="flex items-baseline gap-2">
                <span aria-hidden>&bull;</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <InquireButton />
          <Image
            src="/images/disco-ball.png"
            alt="Disco ball illustration"
            width={181}
            height={248}
            className="absolute right-0 bottom-0 w-24 sm:w-32"
          />
        </div>
      </div>
    </section>
  );
}
