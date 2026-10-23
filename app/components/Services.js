"use client";

import ServiceCard from "./ServiceCard";

import { FaCode } from "react-icons/fa6";

import { HiOutlineDesktopComputer } from "react-icons/hi";

import { HiOutlineShoppingBag } from "react-icons/hi2";

import { LuFileSearch } from "react-icons/lu";

import { IoSettingsOutline } from "react-icons/io5";

import { VscTools } from "react-icons/vsc";

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Modern, scalable web applications using Laravel, Next.js and REST APIs.",
  },
  {
    icon: HiOutlineDesktopComputer,
    title: "Frontend Development",
    description:
      "Responsive, pixel-perfect interfaces with Next.js, React.js and Tailwind CSS.",
  },
  {
    icon: HiOutlineShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "Complete online stores with Stripe, secure checkout and order management.",
  },
  {
    icon: LuFileSearch,
    title: "Admin Dashboards",
    description:
      "Custom CMS and management panels with clean UI and analytics.",
  },
  {
    icon: IoSettingsOutline,
    title: "Business Applications",
    description:
      "CRM, ERP and workflow automation systems tailored for your business.",
  },
  {
    icon: VscTools,
    title: "Maintenance & Support",
    description:
      "Performance optimization, security updates and long-term maintenance.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B1120] py-24"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm font-medium uppercase tracking-widest text-teal-400">
            What I Do
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white lg:text-5xl">
            Crafting Modern
            <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Digital Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I specialize in designing and developing modern, scalable and
            user-focused web applications using Laravel, React.js, Next.js and
            cloud-ready technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
