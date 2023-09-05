import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HeroImg from "/assets/hero.svg";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </>
  );
}
