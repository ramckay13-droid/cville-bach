import type { Metadata } from "next";
import Header from "@/components/Header";
import ServiceRow from "@/components/ServiceRow";
import InquireButton from "@/components/InquireButton";

export const metadata: Metadata = {
  title: "Services | Charlottesville Bach",
  description:
    "Custom balloon garlands, themed backdrops, table scapes, and pre-arrival setup for your Charlottesville bachelorette weekend.",
};

const services = [
  {
    title: "Custom Balloon Garlands",
    description:
      "From ceiling-to-floor installations to compact accent clusters, we design organic balloon garlands and script balloon phrases in your color palette — the instant photo backdrop for your welcome dinner or big night out.",
    includes: [
      "Organic garland installs",
      'Number & script balloons like "Bride To Be"',
      "Color palette matched to your theme",
    ],
    photo: {
      src: "/images/gallery-bride-to-be.png",
      alt: "Gold Bride To Be balloon backdrop with silver fringe curtain",
      width: 421,
      height: 482,
    },
    doodle: {
      src: "/images/bride-sash.png",
      alt: "",
      width: 216,
      height: 298,
      className: "absolute -bottom-10 right-0 w-20 rotate-6 sm:w-24",
    },
  },
  {
    title: "Themed Backdrop Walls",
    description:
      "Disco, tropical, western, or classic bachelorette glam — we build a backdrop wall that sets the tone the moment your group walks in, styled around foil fringe, streamers, and statement balloon clusters.",
    includes: [
      "Foil fringe & streamer walls",
      "Statement balloon clusters",
      "Fully custom to your theme",
    ],
    photo: {
      src: "/images/pricing-photo.png",
      alt: "Gold Bride balloon backdrop with a woven swing chair and pink star balloons",
      width: 467,
      height: 521,
    },
    doodle: {
      src: "/images/disco-ball.png",
      alt: "",
      width: 181,
      height: 248,
      className: "absolute -bottom-10 right-0 w-20 sm:w-24",
    },
  },
  {
    title: "Table Scapes & Signage",
    description:
      "Mimosa bars, dessert spreads, and welcome tables styled with custom signage, linens, and fresh touches — so the first photo of the weekend is just as good as the last.",
    includes: [
      "Mimosa & dessert bar styling",
      "Custom signage & place cards",
      "Fresh florals & table linens",
    ],
    photo: {
      src: "/images/gallery-mimosa-bar.png",
      alt: "Mimosa bar table setup with fresh fruit and champagne",
      width: 421,
      height: 482,
    },
    doodle: {
      src: "/images/martini-glasses.png",
      alt: "",
      width: 172,
      height: 120,
      className: "absolute -bottom-8 right-0 w-24 sm:w-28",
    },
  },
  {
    title: "Pre-Arrival Setup",
    description:
      "We arrive before you do. Hangover kits assembled, the fridge stocked with drinks and snacks, and every surface staged and ready — so all you have to do is walk in and start celebrating.",
    includes: [
      "Fridge & bar stocking",
      "Hangover kit assembly",
      "Final walkthrough before you arrive",
    ],
    photo: {
      src: "/images/gallery-butterflies.png",
      alt: "Hanging pastel butterfly garland decor in a kitchen stocked with drinks",
      width: 421,
      height: 482,
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center sm:px-10 sm:pt-24">
          <h1 className="font-script text-6xl sm:text-7xl">Our Services</h1>
          <p className="mt-4 text-base leading-relaxed sm:text-lg">
            Every celebration gets a custom plan. Here&apos;s a closer look at
            how we bring your bachelorette weekend to life, from the first
            balloon to the last mimosa.
          </p>
        </section>

        <div className="mx-auto max-w-6xl space-y-24 px-6 pb-16 sm:space-y-28 sm:px-10">
          {services.map((service, i) => (
            <ServiceRow key={service.title} {...service} reverse={i % 2 === 1} />
          ))}
        </div>

        <section className="mx-auto max-w-6xl px-6 pb-28 text-center sm:px-10">
          <h2 className="mb-4 font-script text-5xl sm:text-6xl">
            Ready to plan your weekend?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed sm:text-lg">
            Share a few details about your group and dates, and we&apos;ll put
            together a personalized plan and pricing guide.
          </p>
          <InquireButton />
        </section>
      </main>
    </>
  );
}
