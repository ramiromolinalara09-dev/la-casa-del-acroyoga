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
  metadataBase: new URL("https://lacasadelacroyoga.com"),
  openGraph: {
    title: "La Casa del Acroyoga · Mérida",
    description:
      "Diversión y seguridad garantizadas. No hace falta experiencia previa o venir en pareja.",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 1200,
        alt: "La Casa del Acroyoga · Mérida, Yucatán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Casa del Acroyoga · Mérida",
    description:
      "Diversión y seguridad garantizadas. No hace falta experiencia previa o venir en pareja.",
    images: ["/twitter-image.png"],
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
