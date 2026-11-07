"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaPause, FaPlay, FaStar } from "react-icons/fa";

/* ==========================================
   PROJECTS SECTION
   - Auto sliding marquee (duplicated track)
   - Pauses on hover / focus / play button
   - Every card is a project link
   - "View Project" button + hover animations
   ========================================== */

const projects = [
    {
        id: "arij",
        title: "Arij As Sunnah",
        category: "Non-Profit",
        description: "Modern website for an Islamic NGO with donation flow and content hub.",
        tags: ["React", "Next.js", "MongoDB"],
        url: "https://github.com/",
        featured: true,
        monogram: "AS",
        gradient: "linear-gradient(135deg, #0b7df5 0%, #38b6ff 55%, #e8f7ff 100%)",
    },
    {
        id: "dental",
        title: "Best Dental Clinic",
        category: "Healthcare",
        description: "Appointment booking platform with dashboards for doctors and patients.",
        tags: ["Next.js", "Node.js", "Tailwind"],
        url: "https://github.com/",
        featured: false,
        monogram: "BD",
        gradient: "linear-gradient(135deg, #04a5ff 0%, #7fd4ff 50%, #ffffff 100%)",
    },
    {
        id: "tapyzon",
        title: "Tapyzon",
        category: "E-Commerce",
        description: "Full stack storefront with cart, Stripe payments and admin panel.",
        tags: ["React", "Redux", "Stripe"],
        url: "https://github.com/",
        featured: true,
        monogram: "TZ",
        gradient: "linear-gradient(135deg, #062a52 0%, #0b7df5 60%, #59c3ff 100%)",
    },
    {
        id: "shishu",
        title: "Shishu Academy",
        category: "Education",
        description: "Learning portal with courses, quizzes and progress tracking.",
        tags: ["Next.js", "MongoDB", "JWT"],
        url: "https://github.com/",
        featured: false,
        monogram: "SA",
        gradient: "linear-gradient(135deg, #0057b8 0%, #00a2ff 45%, #cfeeff 100%)",
    },
    {
        id: "taskflow",
        title: "TaskFlow Dashboard",
        category: "SaaS",
        description: "Realtime team dashboard with kanban boards and analytics charts.",
        tags: ["React", "Vite", "Firebase"],
        url: "https://github.com/",
        featured: false,
        monogram: "TF",
        gradient: "linear-gradient(135deg, #0891b2 0%, #38bdf8 50%, #f0faff 100%)",
    },
    {
        id: "recipe",
        title: "Recipe Corner",
        category: "Web App",
        description: "Recipe social app with search, bookmarks and community reviews.",
        tags: ["MERN", "Express", "Cloudinary"],
        url: "https://github.com/",
        featured: true,
        monogram: "RC",
        gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #dbeafe 100%)",
    },
];

function Projects() {
    const [userPaused, setUserPaused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);

    const sectionRef = useRef(null);

    const isRunning = !userPaused && !hovered;

    /* Reveal on scroll */
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const revealClass = `reveal ${visible ? "is-visible" : ""}`;

    /* Track holds 2 identical copies -> translateX(-50%) loops seamlessly */
    const track = [...projects, ...projects];

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#e4f1ff] via-[#f5faff] to-[#9bd5ff] py-16 md:py-24"
        >
            {/* ---------- Background Decorations ---------- */}

            {/* Big soft circle (top right) */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/60 blur-2xl" />

            {/* Sky ring (bottom left) */}
            <div className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full border-[45px] border-[#75c7ff]/35" />

            {/* Blue sphere (top left) */}
            <div className="pointer-events-none absolute left-10 top-24 h-12 w-12 rounded-full bg-gradient-to-br from-[#5cc6ff] to-[#0b7df5] shadow-[0_12px_28px_rgba(8,127,245,0.45)]" />

            {/* ---------- Content ---------- */}

            <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

                {/* ===== HEADER ===== */}
                <div className="mx-auto max-w-2xl text-center">
                    <span
                        className={`${revealClass} inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#087df5]`}
                        style={{ transitionDelay: "0ms" }}
                    >
                        <span className="h-px w-8 bg-[#087df5]" />
                        Featured Work
                        <span className="h-px w-8 bg-[#087df5]" />
                    </span>

                    <h2
                        className={`${revealClass} mt-4 text-3xl font-black leading-tight tracking-tight text-[#102b4c] sm:text-4xl lg:text-[42px]`}
                        style={{ transitionDelay: "90ms" }}
                    >
                        Projects I&apos;m{" "}
                        <span className="bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                            proud of.
                        </span>
                    </h2>

                    <p
                        className={`${revealClass} mx-auto mt-4 max-w-xl text-sm leading-7 text-[#425b79] sm:text-base`}
                        style={{ transitionDelay: "180ms" }}
                    >
                        A curated selection of my recent work — spanning web
                        development, design systems, and creative projects.
                    </p>
                </div>

                {/* ===== AUTO SLIDER ===== */}
                <div
                    className="relative mt-10 md:mt-12"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onFocus={() => setHovered(true)}
                    onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                            setHovered(false);
                        }
                    }}
                >
                    <div className="relative overflow-hidden py-3">
                        <ul
                            className="flex w-max list-none p-0"
                            style={{
                                animationName: "project-marquee",
                                animationDuration: "48s",
                                animationTimingFunction: "linear",
                                animationIterationCount: "infinite",
                                animationPlayState: isRunning ? "running" : "paused",
                            }}
                        >
                            {track.map((project, index) => {
                                const isClone = index >= projects.length;

                                return (
                                    <li
                                        key={`${project.id}-${index}`}
                                        aria-hidden={isClone}
                                        className={`reveal ${visible ? "is-visible" : ""} mr-5`}
                                        style={{
                                            transitionDelay: `${(index % projects.length) * 90}ms`,
                                        }}
                                    >
                                        {/* ---- Single Project Card (the link) ---- */}
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            tabIndex={isClone ? -1 : undefined}
                                            className="group relative flex h-full w-[265px] flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/75 shadow-[0_6px_24px_rgba(35,125,210,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2.5 hover:border-[#5cc6ff] hover:shadow-[0_24px_48px_rgba(8,125,245,0.30)] sm:w-[310px] lg:w-[345px]"
                                        >
                                            {/* ===== COVER ===== */}
                                            <div
                                                className="relative h-[185px] shrink-0 overflow-hidden sm:h-[205px]"
                                                style={{ background: project.gradient }}
                                            >
                                                {/* Grid pattern */}
                                                <div
                                                    className="absolute inset-0 opacity-25"
                                                    style={{
                                                        backgroundImage:
                                                            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                                                        backgroundSize: "26px 26px",
                                                    }}
                                                />

                                                {/* Floating bubbles */}
                                                <span className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-white/25 animate-[float-y_3.5s_ease-in-out_infinite]" />
                                                <span className="absolute -bottom-8 right-4 h-20 w-20 rounded-full bg-white/20 animate-[float-y_4.5s_ease-in-out_infinite_0.6s]" />

                                                {/* Mock browser bar */}
                                                <div className="absolute inset-x-3 top-3 flex items-center gap-1.5 rounded-xl border border-white/50 bg-white/25 px-3 py-2 backdrop-blur-md">
                                                    <span className="h-2 w-2 rounded-full bg-white/90" />
                                                    <span className="h-2 w-2 rounded-full bg-white/70" />
                                                    <span className="h-2 w-2 rounded-full bg-white/50" />
                                                    <span className="ml-2 h-3.5 flex-1 rounded-full bg-white/40" />
                                                </div>

                                                {/* Monogram logo */}
                                                <div className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/70 bg-white/85 shadow-[0_12px_30px_rgba(4,42,82,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                                                    <span className="text-2xl font-black tracking-tight text-[#087df5]">
                                                        {project.monogram}
                                                    </span>
                                                </div>

                                                {/* Featured badge */}
                                                {project.featured && (
                                                    <span className="absolute left-3 top-14 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#087df5] to-[#04a5ff] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow-[0_6px_16px_rgba(8,125,245,0.45)]">
                                                        <FaStar className="animate-pulse" />
                                                        Featured
                                                    </span>
                                                )}

                                                {/* Dark overlay for the button */}
                                                <span className="absolute inset-0 bg-gradient-to-t from-[#04203d]/85 via-[#04203d]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                                {/* Shine sweep */}
                                                <span className="pointer-events-none absolute inset-0 overflow-hidden">
                                                    <span className="absolute inset-y-0 -left-1/3 w-1/3 bg-white/30 opacity-0 blur-[3px] group-hover:opacity-100 group-hover:animate-[shine-sweep_0.9s_ease-out_forwards]" />
                                                </span>

                                                {/* View Project button */}
                                                <span className="absolute bottom-4 left-1/2 flex translate-y-8 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[11px] font-black uppercase tracking-wider text-[#087df5] opacity-0 shadow-[0_12px_28px_rgba(4,42,82,0.45)] transition-all duration-500 delay-100 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:shadow-[0_16px_34px_rgba(4,42,82,0.55)]">
                                                    View Project
                                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                                                </span>
                                            </div>

                                            {/* ===== BODY ===== */}
                                            <div className="relative z-10 flex flex-1 flex-col gap-2 p-4">
                                                <div className="flex items-center justify-between gap-2">
                                                    <h3 className="truncate text-base font-extrabold text-[#102b4c] transition-colors duration-300 group-hover:text-[#087df5]">
                                                        {project.title}
                                                    </h3>
                                                    <span className="shrink-0 rounded-full bg-[#e8f4ff] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-[#0b72d9]">
                                                        {project.category}
                                                    </span>
                                                </div>

                                                <p className="text-xs leading-5 text-[#5b7391]">
                                                    {project.description}
                                                </p>

                                                <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="rounded-full border border-[#cfe8ff] bg-white/80 px-2.5 py-1 text-[10px] font-bold text-[#294d72] transition-colors duration-300 group-hover:border-[#5cc6ff] group-hover:text-[#0b72d9]"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* ===== EDGE FADES ===== */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 bg-gradient-to-r from-[#eaf5ff] via-[#eaf5ff]/70 to-transparent sm:w-24" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 bg-gradient-to-l from-[#eaf5ff] via-[#eaf5ff]/70 to-transparent sm:w-24" />
                    </div>
                </div>

                {/* ===== CONTROLS ===== */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

                    {/* Pause / Play */}
                    <button
                        type="button"
                        onClick={() => setUserPaused((value) => !value)}
                        aria-label={userPaused ? "Play project slider" : "Pause project slider"}
                        className="group inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-white/75 px-5 py-3 text-xs font-black text-[#102b4c] shadow-[0_5px_18px_rgba(35,125,210,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5cc6ff] hover:text-[#087df5] hover:shadow-[0_12px_28px_rgba(8,125,245,0.22)]"
                    >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#087df5] to-[#04a5ff] text-[9px] text-white shadow-[0_4px_10px_rgba(8,125,245,0.45)] transition-transform duration-300 group-hover:scale-110">
                            {userPaused ? <FaPlay /> : <FaPause />}
                        </span>
                        {userPaused ? "Play" : "Pause"}
                    </button>

                    {/* Hint */}
                    <p className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-[#5b7391]/80 sm:block">
                        {userPaused
                            ? "Slider paused"
                            : hovered
                                ? "Paused while you browse"
                                : "Hover a card to pause"}
                    </p>

                    {/* View All Projects */}
                    <Link
                        href="#projects"
                        className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#087df5] to-[#079fff] px-6 py-3.5 text-xs font-black text-white shadow-[0_10px_26px_rgba(8,125,245,0.38)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(8,125,245,0.5)]"
                    >
                        View All Projects
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Projects;
