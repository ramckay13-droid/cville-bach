import Link from "next/link";

const navLinks = [
  { label: "services", href: "/services" },
  { label: "past work", href: "/#gallery" },
  { label: "about", href: "/#about" },
  { label: "inquire", href: "/#inquire" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-sky)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-4 sm:flex-row sm:justify-between sm:gap-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <HeartIcon />
          <span className="whitespace-nowrap">
            <span className="font-script text-2xl sm:text-3xl">charlottesville</span>{" "}
            <span className="text-base font-semibold tracking-wide sm:text-lg">
              BACH
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm sm:flex-nowrap sm:gap-9 sm:text-base">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="transition-opacity hover:opacity-70"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeartIcon() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 22 20"
      fill="none"
      className="shrink-0 text-[var(--color-ink)]"
    >
      <path
        d="M11 19S1 12.5 1 6.5C1 3 3.5 1 6.5 1c2 0 3.5 1 4.5 2.5C12 2 13.5 1 15.5 1 18.5 1 21 3 21 6.5 21 12.5 11 19 11 19z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
