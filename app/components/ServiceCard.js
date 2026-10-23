"use client";

import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ icon, title, description }) {
  const Icon = icon;

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-teal-400/40
      hover:shadow-[0_20px_60px_rgba(20,184,166,.15)]
      "
    >
      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-500/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 text-3xl text-teal-400">
        <Icon />
      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold text-white">{title}</h3>

      {/* Description */}

      <p className="mt-5 leading-8 text-slate-400">{description}</p>

      {/* Bottom */}

      <div className="mt-8 flex items-center gap-2 font-medium text-teal-400">
        Learn More
        <ArrowUpRight
          size={18}
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </div>
  );
}
