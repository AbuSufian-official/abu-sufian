"use client"
import Image from "next/image";
import { toast, Bounce } from 'react-toastify';
import { Button } from "@heroui/react";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Articles from "./components/articles";

export default function Home() {
  
  return (
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Articles/>
    </main>
  );
}
