import type { Metadata } from "next";
import { Jacques_Francois, Beth_Ellen } from "next/font/google";
import "./globals.css";

const jacquesFrancois = Jacques_Francois({
  variable: "--font-jacques-francois",
  subsets: ["latin"],
  weight: ["400"],
});

const bethEllen = Beth_Ellen({
  variable: "--font-beth-ellen",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Charlottesville Bach",
  description: "Turning your bachelorette party dreams into a reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jacquesFrancois.variable} ${bethEllen.variable}`}>
      <body className="font-serif text-[var(--color-ink)] bg-[var(--color-cream)] antialiased">
        {children}
      </body>
    </html>
  );
}
