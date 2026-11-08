"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaServer, FaLayerGroup } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiCode } from "react-icons/fi";

/* ==========================================
   PROJECT WORK SHOWCASE (Selected Works)
   - Tab system: Frontend / Backend / Full Stack
     (each tab shows its tech stack chips)
   - Glass cards, hover reveals a website
     preview mock, whole card = website link
   - Mouse-follow glow + animated background
   ========================================== */

const categories = [
    {
        id: "all",
        label: "all",
        icon: <FiCode />,
        stack: [
            ""
        ]
    },
    {
        id: "frontend",
        label: "Frontend",
        icon: <FiCode />,
        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind",
            "React",
            "Next.js",
            "HeroUI",
            "shadcn/ui",
            "daisyUI",
        ],
    },
    {
        id: "backend",
        label: "Backend",
        icon: <FaServer />,
        stack: ["Node.js", "Express.js", "MongoDB", "BetterAuth"],
    },
    {
        id: "fullstack",
        label: "Full Stack",
        icon: <FaLayerGroup />,
        stack: [
            "HTML",
            "Tailwind",
            "JavaScript",
            "Next.js",
            "Express.js",
            "BetterAuth",
            "JWT",
            "MongoDB",
            "shadcn/ui",
            "HeroUI",
        ],
    },
];

const projects = [
    {
        id: "bazardor",
        title: "Bazar Dor",
        category: "Market Prices",
        types: ["frontend", "all"],
        description:
            "Daily market price tracker that compares essential grocery prices across local markets in Bangladesh.",
        tags: ["Next.js", "React", "Tailwind"],
        url: "https://github.com/",
        domain: "bazardor.app",
        image: "/bazardor.png",
        hoverImage: "/bazardor-website.png",
    },
    {
        id: "booknook",
        title: "BookNook",
        category: "Online Library",
        types: [ "backend", "fullstack", "all"],
        description:
            "Book borrowing platform with explore, borrow, return, and personal shelf management.",
        tags: ["React", "Node.js", "MongoDB"],
        url: "https://github.com/",
        domain: "booknook.app",
        image: "/BookNook.png",
        hoverImage: "/booknook-website.png",
    },
    {
        id: "devstack",
        title: "DevStack",
        category: "Developer Platform",
        types: ["frontend",  "all"],
        description:
            "Developer resource hub for tutorials, code snippets, tools, and community sharing.",
        tags: ["Next.js", "Tailwind", "MongoDB"],
        url: "https://github.com/",
        domain: "devstack.dev",
        image: "/devstack.png",
        hoverImage: "/devstack-website.png",
    },
    {
        id: "fitlog",
        title: "FitLog",
        category: "Health & Fitness",
        types: ["frontend", "all"],
        description:
            "Fitness dashboard to track workouts, calories, weekly activity, and personal goals.",
        tags: ["React", "Node.js", "MongoDB"],
        url: "https://github.com/",
        domain: "fitlog.app",
        image: "/FITLOG.png",
        hoverImage: "/fitlog-website.png",
    },
];

/* ---------- Animated stat (count-up on reveal) ---------- */
function Stat({ value, suffix = "", pad = false, label, start }) {
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!start) return;

        /* Reduced motion -> jump to the final value on the next frame
           (async, so no cascading render from the effect body) */
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const id = requestAnimationFrame(() => setN(value));
            return () => cancelAnimationFrame(id);
        }

        let frame;
        const t0 = performance.now();
        const dur = 1400;

        const tick = (now) => {
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(value * eased));
            if (p < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [start, value]);

    const shown = pad ? String(n).padStart(2, "0") : String(n);

    return (
        <div className="text-center">
            <div className="text-3xl font-black tracking-tight text-[#102b4c] sm:text-[40px]">
                {shown}
                <span className="text-[#087df5]">{suffix}</span>
            </div>
            <div className="mt-1 text-[10px] font-black tracking-[0.22em] text-[#5b7391] uppercase sm:text-[11px]">
                {label}
            </div>
        </div>
    );
}

/* ---------- Single glass project card (whole card = link) ---------- */
function ProjectCard({ project, index }) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            style={{ animationDelay: `${index * 80}ms` }}
            className="work-card group relative flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-white/65 via-white/40 to-white/25 shadow-[0_8px_28px_rgba(35,125,210,0.12),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl animate-[card-pop_0.5s_cubic-bezier(0.22,1,0.36,1)_both] transition-all duration-500 hover:-translate-y-2 hover:border-white/95 hover:from-white/80 hover:via-white/55 hover:to-white/35 hover:shadow-[0_28px_56px_rgba(8,125,245,0.28),inset_0_1px_0_rgba(255,255,255,1)]"
        >
            {/* ===== COVER ===== */}
            <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-[#eaf5ff]">
                {/* Main project thumbnail */}
                <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category} project thumbnail`}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(50vw - 42px), 560px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Website screenshot revealed on hover */}
                <div className="absolute inset-0 z-[1] translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <Image
                        src={project.hoverImage}
                        alt={`${project.title} website preview`}
                        fill
                        sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(50vw - 42px), 560px"
                        className="object-cover object-top"
                    />
                </div>

                {/* Category badge (stays above the preview) */}
                <span className="absolute left-3 top-3 z-20 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[9px] font-black tracking-wider text-[#0b72d9] uppercase shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:border-white group-hover:bg-white">
                    {project.category}
                </span>

                {/* Dark veil for the visit button */}
                <span className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#04203d]/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Visit website pill */}
                <span className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 translate-y-6 items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-[10px] font-black tracking-wider text-[#087df5] uppercase opacity-0 shadow-[0_12px_28px_rgba(4,42,82,0.45)] transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Visit Website
                    <FaArrowUpRightFromSquare className="text-[9px]" />
                </span>
            </div>

            {/* ===== BODY ===== */}
            <div className="relative z-10 flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-extrabold tracking-tight text-[#102b4c] transition-colors duration-300 group-hover:text-[#087df5] sm:text-xl">
                        {project.title}
                    </h3>

                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#cfe8ff] bg-white text-sm text-[#087df5] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#087df5] group-hover:bg-[#087df5] group-hover:text-white group-hover:shadow-[0_10px_22px_rgba(8,125,245,0.4)]">
                        <FaArrowUpRightFromSquare className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-[#425b79]">
                    {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
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

            {/* Bottom accent bar */}
            <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 z-30 h-1 w-0 bg-gradient-to-r from-[#087df5] to-[#04a5ff] transition-all duration-500 ease-out group-hover:w-full"
            />

            {/* Light sweep */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 z-30 w-1/3 -skew-x-20 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 blur-[2px] group-hover:animate-[shine-sweep_0.9s_ease-out_forwards]"
            />
        </a>
    );
}

function WorkShowcase() {
    const [active, setActive] = useState("frontend");
    const [visible, setVisible] = useState(false);

    const sectionRef = useRef(null);
    const glow1Ref = useRef(null);
    const glow2Ref = useRef(null);

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

    /* Mouse-follow glow layers */
    useEffect(() => {
        const section = sectionRef.current;
        if (!section || !glow1Ref.current) return;

        const rect = section.getBoundingClientRect();
        const centre = `translate3d(${rect.width / 2}px, ${rect.height / 2}px, 0) translate(-50%, -50%)`;
        glow1Ref.current.style.transform = centre;
        if (glow2Ref.current) glow2Ref.current.style.transform = centre;
    }, []);

    const handleMouseMove = (e) => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (glow1Ref.current) {
            glow1Ref.current.style.transform =
                `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
        if (glow2Ref.current) {
            glow2Ref.current.style.transform =
                `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
    };

    const revealClass = `reveal ${visible ? "is-visible" : ""}`;

    const current = categories.find((c) => c.id === active);
    const countOf = (id) =>
        projects.filter((p) => p.types.includes(id)).length;
    const filtered = projects.filter((p) => p.types.includes(active));

    return (
        <section
            id="projects"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative scroll-mt-24 overflow-hidden py-16 md:py-24"
        >
            {/* ---------- Mouse-follow glow layers ---------- */}
            <div
                ref={glow1Ref}
                aria-hidden="true"
                className="mouse-glow pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#087df5]/16 blur-[90px]"
                style={{
                    transition:
                        "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
            />
            <div
                ref={glow2Ref}
                aria-hidden="true"
                className="mouse-glow pointer-events-none absolute left-0 top-0 h-[640px] w-[640px] rounded-full bg-[#53baff]/12 blur-[120px]"
                style={{
                    transition:
                        "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
            />

            {/* ---------- Static / floating decorations ---------- */}
            <div className="about-deco pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full border-[36px] border-white/55" />
            <div className="about-deco pointer-events-none absolute -right-20 bottom-16 h-52 w-52 animate-[spin-slow_50s_linear_infinite] rounded-full border-2 border-dashed border-[#087df5]/25" />
            <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-[#8bcfff]/25 blur-[90px]" />
            <span className="about-deco pointer-events-none absolute bottom-24 left-[20%] h-2.5 w-2.5 animate-[bubble-float_5s_ease-in-out_infinite] rounded-full bg-white/75" />
            <span className="about-deco pointer-events-none absolute top-32 right-[24%] h-3 w-3 animate-[bubble-float_6.5s_ease-in-out_infinite_1s] rounded-full bg-[#8fd8ff]/85" />

            {/* ---------- Content ---------- */}
            <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                {/* ===== HEADER ===== */}
                <div className="mx-auto max-w-2xl text-center">
                    <span
                        className={`${revealClass} inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-[11px] font-black tracking-widest text-[#087df5] uppercase shadow-sm backdrop-blur-md`}
                        style={{ transitionDelay: "0ms" }}
                    >
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#087df5]" />
                        Selected Works • 2022–2026
                    </span>

                    <h2
                        className={`${revealClass} mt-5 text-3xl font-black leading-[1.15] tracking-tight text-[#102b4c] sm:text-4xl lg:text-[46px]`}
                        style={{ transitionDelay: "90ms" }}
                    >
                        Crafting Digital{" "}
                        <span className="bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                            Experiences
                        </span>{" "}
                        That Matter
                    </h2>

                    <p
                        className={`${revealClass} mx-auto mt-4 max-w-xl text-sm leading-7 text-[#425b79] sm:text-base`}
                        style={{ transitionDelay: "180ms" }}
                    >
                        A curated collection of full-stack web platforms,
                        healthcare systems, and visual brand identities built
                        with precision and distinction.
                    </p>
                </div>

                {/* ===== STATS ===== */}
                <div
                    className={`${revealClass} mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-14`}
                    style={{ transitionDelay: "260ms" }}
                >
                    <Stat
                        value={4}
                        pad
                        label="Projects"
                        start={visible}
                    />
                    <span className="hidden h-12 w-px bg-[#087df5]/25 sm:block" />
                    <Stat
                        value={100}
                        suffix="%"
                        label="Production Live"
                        start={visible}
                    />
                    <span className="hidden h-12 w-px bg-[#087df5]/25 sm:block" />
                    <Stat
                        value={3}
                        suffix="+"
                        label="Years Exp"
                        start={visible}
                    />
                </div>

                {/* ===== TABS ===== */}
                <div
                    className={`${revealClass} mt-9 flex flex-wrap justify-center gap-3`}
                    style={{ transitionDelay: "340ms" }}
                >
                    {categories.map((cat) => {
                        const isActive = active === cat.id;

                        return (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setActive(cat.id)}
                                aria-pressed={isActive}
                                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-black tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087df5]/50 ${
                                    isActive
                                        ? "border-transparent bg-gradient-to-r from-[#087df5] to-[#079fff] text-white shadow-[0_10px_26px_rgba(8,125,245,0.38)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(8,125,245,0.5)]"
                                        : "border-white/80 bg-white/70 text-[#425b79] shadow-sm backdrop-blur-md hover:-translate-y-0.5 hover:border-[#5cc6ff] hover:text-[#087df5] hover:shadow-[0_10px_24px_rgba(8,125,245,0.18)]"
                                }`}
                            >
                                <span
                                    className={`text-sm ${isActive ? "text-white" : "text-[#087df5]"}`}
                                >
                                    {cat.icon}
                                </span>
                                {cat.label}
                                <span
                                    className={`rounded-full px-2 py-0.5 text-[10px] font-black tabular-nums ${
                                        isActive
                                            ? "bg-white/25 text-white"
                                            : "bg-[#087df5]/10 text-[#087df5]"
                                    }`}
                                >
                                    {countOf(cat.id)}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* ===== ACTIVE CATEGORY TECH STACK CHIPS ===== */}
                {/* Keys must be unique per sibling: identical keys on two
                    siblings make React lose (leak) the old chips row on tab
                    change, so the previous stack title would never unmount */}
                <div
                    key={`chips-${active}`}
                    className="mt-6 flex flex-wrap items-center justify-center gap-2"
                >
                    <span className="mr-1 text-[11px] font-black tracking-[0.2em] text-[#5b7391] uppercase">
                        {current.label} Stack
                    </span>

                    {current.stack.map((tech, i) => (
                        <span
                            key={tech}
                            style={{ animationDelay: `${i * 45}ms` }}
                            className="work-card cursor-default rounded-full border border-white/70 bg-white/65 px-3 py-1.5 text-[11px] font-bold text-[#294d72] shadow-sm backdrop-blur-md animate-[card-pop_0.45s_cubic-bezier(0.22,1,0.36,1)_both] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5cc6ff] hover:text-[#087df5]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* ===== PROJECT GRID (keyed = replays pop-in on tab change) ===== */}
                <div
                    key={`grid-${active}`}
                    className="mt-8 grid gap-5 sm:grid-cols-2 lg:gap-6"
                >
                    {filtered.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                        />
                    ))}
                </div>

                {/* ===== CTA ===== */}
                <div
                    className={`${revealClass} mt-10 flex justify-center`}
                    style={{ transitionDelay: "120ms" }}
                >
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#087df5] to-[#079fff] px-6 py-3.5 text-xs font-black text-white shadow-[0_10px_26px_rgba(8,125,245,0.38)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(8,125,245,0.5)]"
                    >
                        Explore More on GitHub
                        <FaArrowRight className="transition-transform group-hover:translate-x-1.5" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default WorkShowcase;
