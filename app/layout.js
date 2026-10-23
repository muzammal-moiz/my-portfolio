// app/layout.js
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import CustomCursor from "./components/CustomCursor";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Muhammad Muzammal | Senior Full Stack Software Engineer",
  description:
    "Portfolio of Muhammad Muzammal, a Senior Full Stack Software Engineer specializing in Laravel, Vue.js, React.js and Next.js.",
  keywords:
    "Muhammad Muzammal, Full Stack Engineer, Laravel, Vue.js, React, Next.js, PHP, JavaScript",
  author: "Muhammad Muzammal",
  openGraph: {
    title: "Muhammad Muzammal | Senior Full Stack Software Engineer",
    description:
      "Scalable SaaS and business web applications with Laravel, Vue.js, React.js and Next.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Muzammal | Senior Full Stack Software Engineer",
    description:
      "Scalable SaaS and business web applications with Laravel, Vue.js, React.js and Next.js.",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f8f6f1]">
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />

        {/* Vercel Analytics */}
        <Analytics />

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
