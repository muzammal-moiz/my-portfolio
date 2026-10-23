"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "./components/ProfileCard";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import TechStackSection from "./components/TechStackSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <main className="overflow-hidden bg-[#f8f6f1]">
      <div data-aos="fade-up">
        <HeroSection />
      </div>

      <div data-aos="fade-up">
        <ExperienceSection />
      </div>

      <div data-aos="fade-up">
        <ProjectsSection />
      </div>

      <div data-aos="fade-up">
        <TechStackSection />
      </div>

      <div data-aos="fade-up">
        <ContactSection />
      </div>
    </main>
  );
}
