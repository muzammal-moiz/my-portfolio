"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");

    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    const elements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, .cursor-hover",
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [isMobile]);

  // Hide cursor on mobile/touch devices
  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-7 w-7 rounded-full border border-teal-400/40"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hovered ? 0 : 1,
        }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.8)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 3 : 8,
          height: hovered ? 3 : 8,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />
    </>
  );
}
