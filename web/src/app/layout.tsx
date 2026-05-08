import type { Metadata } from "next";
import { Outfit, Cormorant } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Casa del Acroyoga · Mérida, Yucatán",
  description:
    "Acroyoga en comunidad en Mérida. Diversión y seguridad garantizadas. No hace falta experiencia previa o venir en pareja.",
  metadataBase: new URL("https://lacasadelacroyoga.mx"),
  icons: {
    icon: "/icons/favicon.svg",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "La Casa del Acroyoga · Mérida",
    description:
      "Diversión y seguridad garantizadas. No hace falta experiencia previa o venir en pareja.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${outfit.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
