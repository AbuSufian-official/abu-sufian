"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaNewspaper,
    FaEnvelope,
    FaWhatsapp,
    FaLinkedinIn,
    FaGithub,
    FaPhone,
    FaCalendarAlt,
    FaClock,
    FaHeart,
    FaPlay,
} from "react-icons/fa";

/* ==========================================
   FOOTER
   - Same design & colours as the reference
   - Logo replaces the "Abu Sufian" heading
   - Live date + clock bottom bar
   - Fully responsive, rich hover effects
   ========================================== */

const navLinks = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Project", href: "#projects", icon: <FaFolderOpen /> },
    { name: "Articles", href: "#articles", icon: <FaNewspaper /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
];

const connectLinks = [
    {
        label: "Email",
        value: "abusufianofficial001@gmail.com",
        href: "mailto:abusufianofficial001@gmail.com",
        icon: <FaEnvelope />,
    },
    {
        label: "WhatsApp",
        value: "+880 1786 123456",
        href: "https://wa.me/8801786123456",
        icon: <FaWhatsapp />,
    },
    {
        label: "LinkedIn",
        value: "/in/abusufian",
        href: "https://www.linkedin.com/in/abusufian",
        icon: <FaLinkedinIn />,
    },
    {
        label: "GitHub",
        value: "github.com/abu-sufian",
        href: "https://github.com/abu-sufian",
        icon: <FaGithub />,
    },
    {
        label: "Direct Call",
        value: "+880 1786 123456",
        href: "tel:+8801786123456",
        icon: <FaPhone />,
    },
];

function Footer() {
    /* Live date + clock (avoids hydration mismatch) */
    const [now, setNow] = useState(null);

    useEffect(() => {
        /* First tick is scheduled (not synchronous) to satisfy lint */
        let first = requestAnimationFrame(() => setNow(new Date()));
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => {
            cancelAnimationFrame(first);
            clearInterval(timer);
        };
    }, []);

    const dateLabel = now
        ? now.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
          })
        : "—";

    const timeLabel = now
        ? now.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
          })
        : "—";

    const year = now ? String(now.getFullYear()) : "";

    return (
        <footer
            id="contact"
            className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#0d7ff0] via-[#0a5cc8] to-[#052a5e] text-white"
        >
            {/* ===== ANIMATED WAVE STACK (3 parallax layers) ===== */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[110px] overflow-hidden sm:h-[150px] lg:h-[178px]"
                aria-hidden="true"
            >
                <div className="wave-bob absolute inset-0 origin-bottom animate-[wave-bob_7s_ease-in-out_infinite]">
                    {/* Layer 1 — deepest tone (slowest = farthest) */}
                    <svg
                        className="wave-layer absolute bottom-0 left-0 h-full w-[200%] animate-[wave-drift_34s_linear_infinite]"
                        viewBox="0 0 2880 200"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#2f9dff"
                            fillOpacity="0.9"
                            d="M0,145 C240,105 480,105 720,145 C960,185 1200,185 1440,145 C1680,105 1920,105 2160,145 C2400,185 2640,185 2880,145 L2880,0 L0,0 Z"
                        />
                    </svg>

                    {/* Layer 2 — light blue band */}
                    <svg
                        className="wave-layer absolute bottom-0 left-0 h-full w-[200%] animate-[wave-drift_24s_linear_infinite]"
                        viewBox="0 0 2880 200"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#63c8ff"
                            d="M0,105 C240,60 480,60 720,105 C960,150 1200,150 1440,105 C1680,60 1920,60 2160,105 C2400,150 2640,150 2880,105 L2880,0 L0,0 Z"
                        />
                    </svg>

                    {/* Layer 3 — white crest (fastest, glowing edge) */}
                    <svg
                        className="wave-layer absolute bottom-0 left-0 h-full w-[200%] animate-[wave-drift_16s_linear_infinite] drop-shadow-[0_8px_16px_rgba(255,255,255,0.45)]"
                        viewBox="0 0 2880 200"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            d="M0,70 C240,25 480,25 720,70 C960,115 1200,115 1440,70 C1680,25 1920,25 2160,70 C2400,115 2640,115 2880,70 L2880,0 L0,0 Z"
                        />
                    </svg>
                </div>

                {/* Shimmer bubbles drifting over the waves */}
                <span className="wave-bubble absolute left-[26%] top-[45%] h-2 w-2 animate-[bubble-float_4.5s_ease-in-out_infinite] rounded-full bg-white/70" />
                <span className="wave-bubble absolute left-[58%] top-[62%] h-1.5 w-1.5 animate-[bubble-float_6s_ease-in-out_infinite_1.2s] rounded-full bg-white/60" />
                <span className="wave-bubble absolute right-[16%] top-[40%] h-2.5 w-2.5 animate-[bubble-float_5.2s_ease-in-out_infinite_0.6s] rounded-full bg-white/55" />
            </div>

            {/* Decorative glow circle (right side, like the reference) */}
            <div className="pointer-events-none absolute -right-32 top-24 h-[380px] w-[380px] rounded-full border-[55px] border-white/10" />
            <div className="pointer-events-none absolute -left-24 bottom-24 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

            {/* ===== CONTENT ===== */}
            <div className="relative z-10 mx-auto max-w-[1200px] px-5 pb-6 pt-[120px] sm:px-6 sm:pt-[150px] lg:px-8 lg:pt-[170px]">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.95fr_1.25fr_1.05fr] lg:gap-0">

                    {/* ---------- 1) LOGO + TAGLINE ---------- */}
                    <div className="lg:pr-8">
                        <Link
                            href="/"
                            className="group block w-[150px] sm:w-[175px]"
                            aria-label="Abu Sufian — home"
                        >
                            <Image
                                src="/logo.png"
                                alt="Abu Sufian"
                                width={168}
                                height={112}
                                style={{ width: "100%", height: "auto" }}
                                className="transition-all duration-500 group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:drop-shadow-[0_14px_28px_rgba(255,255,255,0.35)]"
                            />
                        </Link>

                        <p className="mt-3 max-w-[300px] text-sm leading-6 text-white/85 sm:text-[15px]">
                            Building the web, one project at a time.
                            Let&apos;s create something amazing together.
                        </p>

                        {/* Decorative line + dot */}
                        <div className="mt-6 flex items-center gap-3">
                            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/70" />
                            <span className="h-3 w-3 rounded-full bg-[#8fd8ff] shadow-[0_0_12px_rgba(143,216,255,0.9)] transition-all duration-300 hover:scale-150" />
                            <span className="h-px w-12 bg-gradient-to-r from-white/70 to-transparent" />
                        </div>
                    </div>

                    {/* ---------- 2) NAVIGATION ---------- */}
                    <div className="lg:border-l lg:border-white/20 lg:px-8">
                        <h3 className="group flex items-center gap-2.5 text-lg font-extrabold sm:text-xl">
                            <FaPlay className="text-sm text-[#8fd8ff] transition-transform duration-300 group-hover:translate-x-1" />
                            Navigation
                        </h3>

                        <ul className="mt-5 space-y-1">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-3 rounded-xl px-2 py-2.5 text-[15px] font-semibold text-white/90 transition-all duration-300 hover:translate-x-1.5 hover:bg-white/10 hover:text-white"
                                    >
                                        <span className="text-[#8fd8ff] transition-all duration-300 group-hover:scale-125 group-hover:text-white">
                                            {link.icon}
                                        </span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ---------- 3) CONNECT ---------- */}
                    <div className="lg:border-l lg:border-white/20 lg:px-8">
                        <h3 className="group flex items-center gap-2.5 text-lg font-extrabold sm:text-xl">
                            <FaPlay className="text-sm text-[#8fd8ff] transition-transform duration-300 group-hover:translate-x-1" />
                            Connect
                        </h3>

                        <ul className="mt-5 space-y-2.5">
                            {connectLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target={
                                            item.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel="noreferrer"
                                        className="group flex items-center gap-3"
                                    >
                                        {/* Circular icon */}
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-base text-white transition-all duration-400 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:border-white group-hover:bg-gradient-to-br group-hover:from-[#8fd8ff] group-hover:to-[#2f9dff] group-hover:text-[#052a5e] group-hover:shadow-[0_10px_22px_rgba(143,216,255,0.45)]">
                                            {item.icon}
                                        </span>

                                        <span className="min-w-0">
                                            <span className="block text-sm font-extrabold text-white transition-colors duration-300 group-hover:text-[#8fd8ff]">
                                                {item.label}
                                            </span>
                                            <span className="block truncate text-xs text-white/75 transition-colors duration-300 group-hover:text-white">
                                                {item.value}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ---------- 4) QUOTE ---------- */}
                    <div className="lg:border-l lg:border-white/20 lg:pl-8">
                        <span className="block font-serif text-6xl font-black leading-none text-[#8fd8ff] transition-all duration-500 hover:scale-110 hover:text-white">
                            &ldquo;
                        </span>

                        <p className="mt-1 font-serif text-2xl italic leading-snug text-white sm:text-[28px]">
                            Dream Big,
                            <br />
                            Code Better,
                            <br />
                            Grow Stronger.
                        </p>

                        {/* Underline swoosh */}
                        <svg
                            className="mt-3 h-5 w-40 text-[#8fd8ff]"
                            viewBox="0 0 160 20"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M4 14C40 4 110 2 156 10"
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* ---------- BOTTOM BAR ---------- */}
                <div className="mt-10 flex flex-col items-center gap-3 rounded-3xl border border-white/25 bg-white/10 px-5 py-4 backdrop-blur-md transition-all duration-300 hover:border-white/45 hover:bg-white/15 sm:mt-12 sm:flex-row sm:justify-between sm:gap-4 sm:rounded-full lg:px-7">
                    {/* Date */}
                    <span className="flex items-center gap-2 text-xs font-bold text-white sm:text-sm">
                        <FaCalendarAlt className="text-[#8fd8ff]" />
                        {dateLabel}
                    </span>

                    <span className="hidden h-5 w-px bg-white/35 sm:block" />

                    {/* Clock */}
                    <span className="flex items-center gap-2 text-xs font-bold text-white tabular-nums sm:text-sm">
                        <FaClock className="text-[#8fd8ff]" />
                        {timeLabel}
                    </span>

                    <span className="hidden h-px flex-1 bg-white/30 lg:block" />

                    {/* Copyright */}
                    <p className="text-center text-xs font-semibold text-white/90 sm:text-sm">
                        © {year}{" "}
                        <span className="font-black text-[#8fd8ff]">
                            Abu Sufian
                        </span>
                        . All rights reserved.
                    </p>

                    <span className="hidden h-px flex-1 bg-white/30 lg:block" />

                    {/* Made with love */}
                    <p className="flex items-center gap-1.5 text-xs font-bold text-white/90 sm:text-sm">
                        Made with
                        <FaHeart className="text-[#ff7aa8] transition-transform duration-300 hover:scale-125" />
                        for a better web
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
