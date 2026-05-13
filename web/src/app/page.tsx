import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Offerings } from "@/components/Offerings";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { FirstClass } from "@/components/FirstClass";
import { Gallery } from "@/components/Gallery";
import { Schedule } from "@/components/Schedule";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offerings />
        <About />
        <Benefits />
        <FirstClass />
        <Gallery />
        <Schedule />
        <FAQ />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
