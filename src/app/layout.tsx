import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { portfolio } from "@/content/profile";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${portfolio.identity.name} · Backend & Software Engineer`,
  description: portfolio.identity.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${newsreader.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-serif text-base leading-[1.6] sm:text-[17px]">
        {children}
      </body>
    </html>
  );
}
