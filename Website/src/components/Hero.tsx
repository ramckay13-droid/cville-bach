import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[480px] w-full sm:h-[560px] lg:h-[620px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Woven rattan textured backdrop"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2b1810]/50" />
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <Image
            src="/images/logo-hero.png"
            alt="Charlottesville Bach"
            width={2373}
            height={1355}
            priority
            className="h-auto w-full max-w-md drop-shadow-lg sm:max-w-xl lg:max-w-2xl"
          />
        </div>
      </div>
      <div className="absolute right-6 bottom-[-77px] z-10 w-[9.6rem] sm:right-16 sm:bottom-[-96px] sm:w-48">
        <Image
          src="/images/heart-badge.png"
          alt="Turning your bachelorette party dreams into a reality"
          width={327}
          height={320}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
