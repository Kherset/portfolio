import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";

const playfair_Display_init = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfairDisplay",
});

const nunito_init = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Jeremy Twardowski · Full-Stack Web Developer",
  description: "Personnal Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito_init.variable} ${playfair_Display_init.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
