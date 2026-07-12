import Image from "next/image";
import InquireButton from "./InquireButton";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 pb-28 sm:px-10">
      <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="relative flex justify-center lg:-ml-10 lg:justify-start">
          <Image
            src="/images/pricing-photo.png"
            alt="Gold Bride balloon backdrop with a woven swing chair and pink star balloons"
            width={467}
            height={521}
            className="h-auto w-64 sm:w-80"
          />
        </div>

        <div className="relative">
          <div className="relative rounded-[6rem_2rem_5rem_3rem] bg-[var(--color-sky)] px-8 py-12 sm:px-12 sm:py-14">
            <h2 className="mb-4 font-script text-5xl sm:text-6xl">Pricing</h2>
            <p className="mb-4 text-base leading-relaxed sm:text-lg">
              Whether you&apos;re looking for a full house transformation or a
              few key statement pieces, our pricing is as custom as your
              event.
            </p>
            <p className="mb-6 text-base leading-relaxed sm:text-lg">
              Since every celebration has its own unique vibe, guest count,
              and design needs, our rates are tailored to the specific
              details of your weekend. To give you the most accurate quote
              for your setup, please share a few details with us in the
              inquiry form. We&apos;ll get back to you with a personalized
              pricing guide designed specifically for your celebration!
            </p>
            <InquireButton />
          </div>
          <Image
            src="/images/martini-glasses.png"
            alt="Martini glasses illustration"
            width={172}
            height={120}
            className="absolute -top-12 right-6 w-28 sm:-top-14 sm:right-14 sm:w-36"
          />
        </div>
      </div>
    </section>
  );
}
