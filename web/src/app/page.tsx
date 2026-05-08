import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Schedule } from "@/components/Schedule";
import { FirstClass } from "@/components/FirstClass";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Schedule />
        <FirstClass />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
