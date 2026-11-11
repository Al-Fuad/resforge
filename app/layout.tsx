import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const dmMono = DM_Mono({ weight: ["300", "400", "500"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://resforge.org"),
  title: "ResForge — Research, made resilient.",
  description: "ResForge is an independent research team working on reliable AI, cognitive systems, and efficient on-device intelligence.",
  openGraph: {
    title: "ResForge — Research, made resilient.",
    description: "Applied research in reliable AI, cognitive systems, and on-device intelligence.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
