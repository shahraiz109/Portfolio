'use client';
import Hero from "./components/hero/hero";
import Services from "./components/heroLayout/services";
import Projects from "./components/heroLayout/Projects";
import Contact from "./components/heroLayout/Contact";
import Experience from "./components/experince/Experince";
import ScrollToTop from "./components/layout/ScrollToTop";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </main>
  );
}