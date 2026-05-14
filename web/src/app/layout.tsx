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
  title: "Clases de Acroyoga en Mérida · La Casa del Acroyoga",
  description:
    "Estudio de acroyoga en Mérida, Yucatán. Clases lunes, miércoles y sábado para todos los niveles. Aprende paso a paso, en comunidad, sin experiencia previa.",
  metadataBase: new URL("https://lacasadelacroyoga.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "acroyoga Mérida",
    "clases de acroyoga Mérida",
    "estudio acroyoga Yucatán",
    "acroyoga para principiantes",
    "yoga acrobático Mérida",
    "talleres de acroyoga",
    "comunidad acroyoga Mérida",
  ],
  authors: [{ name: "La Casa del Acroyoga" }],
  openGraph: {
    title: "Clases de Acroyoga en Mérida · La Casa del Acroyoga",
    description:
      "Estudio de acroyoga en Mérida. Clases para todos los niveles, en comunidad y con apoyo constante. No necesitas experiencia previa ni venir en pareja.",
    url: "https://lacasadelacroyoga.com",
    siteName: "La Casa del Acroyoga",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 1200,
        alt: "La Casa del Acroyoga · Estudio de acroyoga en Mérida, Yucatán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clases de Acroyoga en Mérida · La Casa del Acroyoga",
    description:
      "Estudio de acroyoga en Mérida. Clases para todos los niveles, en comunidad. Sin experiencia previa ni pareja.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
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
