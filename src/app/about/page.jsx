import Image from "next/image";
import {
    FaLinkedin,
    FaGithub,
    FaGlobe,
    FaEnvelope,
    FaDownload,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiCode } from "react-icons/fi";
import { SiReact } from "react-icons/si";
import {
    FaPenNib,
    FaFilm,
    FaCode,
    FaLayerGroup,
} from "react-icons/fa";
import TechStack from "../components/tech-stack";
import Timeline from "../components/timeline";

/* ==========================================
   ABOUT PAGE
   - Full-screen intro (name / title / portrait / social rail / resume)
   - Story + quick facts section below
   - Same brand colours & glass pattern as the home page
   ========================================== */

export const metadata = {
    title: "About | Abu Sufian",
    description:
        "Learn more about Abu Sufian — a dedicated MERN stack developer who loves turning ideas into clean, meaningful products.",
};

const socials = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/abusufian",
        icon: <FaLinkedin />,
    },
    {
        name: "GitHub",
        href: "https://github.com/abu-sufian",
        icon: <FaGithub />,
    },
    {
        name: "Website",
        href: "/",
        icon: <FaGlobe />,
    },
    {
        name: "Email",
        href: "mailto:abusufianofficial001@gmail.com",
        icon: <FaEnvelope />,
    },
];

const quickFacts = [
    { label: "Role", value: "MERN Stack Developer" },
    { label: "Core Stack", value: "React · Next.js · Node.js · MongoDB" },
    { label: "Availability", value: "Available for Remote Work" },
    {
        label: "Email",
        value: "abusufianofficial001@gmail.com",
        href: "mailto:abusufianofficial001@gmail.com",
    },
];

const chapters = [
    {
        chapter: "Chapter 01",
        icon: <FaPenNib />,
        meta: "2020 — 2022 • Visual Arts & Typography",
        title: "The Obsession with the Grid",
        body: "My journey did not begin in a terminal — it started on the design canvas. Mastering Adobe Photoshop and Illustrator trained my eye to spot microscopic misalignments, optical balance, and typographic pacing. That foundational discipline ensures that every user interface I engineer today feels deliberate, balanced, and free of generic AI slop.",
        quote:
            "Design isn't just decoration; it is the visual architecture of comprehension.",
    },
    {
        chapter: "Chapter 02",
        icon: <FaFilm />,
        meta: "2022 — 2023 • Motion & Temporal Dynamics",
        title: "Interfaces That Breathe",
        body: "Venturing into video editing and motion graphics via Premiere Pro and After Effects unlocked the dimension of time. I learned that transitions shouldn't be arbitrary eye candy; they must guide human attention, simulate physical mass and spring inertia, and make digital screens feel tactile, responsive, and alive.",
        quote:
            "Calculated motion turns cold pixels into memorable human experiences.",
    },
    {
        chapter: "Chapter 03",
        icon: <FaCode />,
        meta: "2023 — 2024 • Full Stack Engineering",
        title: "Bridging Canvas to Code",
        body: "Static comps always break without deep engineering mastery. I dove headfirst into semantic HTML5, CSS3, vanilla JavaScript, PHP, and MySQL — building bespoke content management engines, normalized databases, and production web portals completely from scratch. Knowing every layer eliminated designer-developer friction forever.",
        quote:
            "When one mind owns both design and execution, the product retains its soul.",
    },
    {
        chapter: "Chapter 04",
        icon: <FaLayerGroup />,
        meta: "2024 — Present • High-Leverage Architecture",
        title: "Scalable Systems & Velocity",
        body: "Today, I build robust, high-performance web products utilizing the modern MERN stack — MongoDB, Express, React, and Node.js with Next.js. Furthermore, I harness agentic AI workflows as a multiplier — accelerating architecture research, automated verification, and refactoring throughput while strictly enforcing hand-crafted design excellence.",
        quote:
            "Modern craftsmanship is classical discipline augmented by cutting-edge leverage.",
    },
];

function AboutPage() {
    return (
        <main className="bg-gradient-to-br from-[#e4f1ff] via-[#f5faff] to-[#9bd5ff] text-[#102b4c]">
            {/* ==========================================
                INTRO — name left, title right, portrait center,
                social rail + resume button at the bottom
                ========================================== */}
            <section className="relative flex min-h-[calc(100vh-80px)] flex-col overflow-hidden">
                {/* ---------- Animated Background Decorations ---------- */}

                {/* Big ring (top left) — slowly rotates */}
                <div className="about-deco pointer-events-none absolute -left-48 -top-70 h-[480px] w-[480px] animate-[spin-slow_60s_linear_infinite] rounded-full border-[65px] border-[#75c7ff]/40" />

                {/* Big dashed ring (right) — counter-rotates */}
                <div className="about-deco pointer-events-none absolute -right-40 top-1/4 h-[420px] w-[420px] animate-[spin-slow_45s_linear_infinite_reverse] rounded-full border-2 border-dashed border-[#087df5]/25" />

                {/* Soft glow (right) — drifts up & down */}
                <div className="about-deco pointer-events-none absolute -right-48 top-40 h-[500px] w-[500px] animate-[float-y_7s_ease-in-out_infinite] rounded-full bg-[#8bcfff]/20 blur-[100px]" />

                {/* Soft glow (bottom left) — drifts up & down */}
                <div className="about-deco pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 animate-[float-y_9s_ease-in-out_infinite_1s] rounded-full bg-[#53baff]/20 blur-[100px]" />

                {/* Blue sphere (bottom left) — bobs gently */}
                <div className="about-deco pointer-events-none absolute bottom-28 left-8 h-14 w-14 animate-[float-y_5s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-[#5cc6ff] to-[#0b7df5] shadow-[0_12px_28px_rgba(8,127,245,0.45)]" />

                {/* Small glass cube (top center-left) — spins slowly */}
                <div className="about-deco pointer-events-none absolute left-[12%] top-[18%] hidden h-12 w-12 animate-[spin-slow_20s_linear_infinite] rounded-lg border border-white/80 bg-gradient-to-br from-white/70 to-[#62caff]/30 shadow-[0_0_20px_rgba(0,145,255,0.25)] backdrop-blur-md lg:block" />

                {/* Small glass cube (bottom right) — spins slowly */}
                <div className="about-deco pointer-events-none absolute bottom-[30%] right-[10%] hidden h-10 w-10 animate-[spin-slow_16s_linear_infinite_reverse] rounded-lg border border-white/80 bg-gradient-to-br from-white/70 to-[#62caff]/30 shadow-[0_0_20px_rgba(0,145,255,0.25)] backdrop-blur-md lg:block" />

                {/* Floating bubbles — rise and fade */}
                <span className="about-deco pointer-events-none absolute bottom-24 left-[30%] h-2 w-2 animate-[bubble-float_4.5s_ease-in-out_infinite] rounded-full bg-white/70" />
                <span className="about-deco pointer-events-none absolute bottom-40 right-[26%] h-3 w-3 animate-[bubble-float_6s_ease-in-out_infinite_1.2s] rounded-full bg-white/60" />
                <span className="about-deco pointer-events-none absolute bottom-16 right-[38%] h-1.5 w-1.5 animate-[bubble-float_5.2s_ease-in-out_infinite_0.6s] rounded-full bg-[#8fd8ff]/80" />

                {/* ---------- Content ---------- */}
                <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-4 pb-6 pt-8 sm:px-6 lg:px-8">
                    {/* ===== TOP: NAME + TITLE ===== */}
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
                        {/* Hello, I'm — Abu Sufian */}
                        <div>
                            <span className="text-sm font-bold tracking-wide text-[#087df5]">
                                Hello, I&apos;m
                            </span>

                            <h1 className="mt-2 text-5xl font-black leading-[1.05] tracking-tight text-[#102b4c] sm:text-6xl lg:text-[72px]">
                                Abu
                                <br />
                                Sufian
                            </h1>
                        </div>

                        {/* Creative Developer & Designer */}
                        <div className="md:pt-3 md:text-right">
                            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-[#102b4c] sm:text-4xl lg:text-[42px]">
                                Creative
                                <span className="block bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                                    Developer
                                </span>
                                <span className="block">&amp; Designer</span>
                            </h2>
                        </div>
                    </div>

                    {/* ===== CENTER: PORTRAIT (bigger, with design elements) ===== */}
                    <div className="relative mt-6 flex min-h-[420px] flex-1 items-end justify-center sm:min-h-[500px] lg:min-h-[560px]">
                        {/* Breathing blue glow behind the portrait */}
                        <div className="about-deco pointer-events-none absolute bottom-4 h-[360px] w-[360px] animate-[glow-pulse_5s_ease-in-out_infinite] rounded-full bg-[#087df5]/25 blur-[80px] sm:h-[480px] sm:w-[480px]" />

                        {/* Rotating dashed ring */}
                        <div className="about-deco pointer-events-none absolute bottom-0 h-[340px] w-[340px] animate-[spin-slow_30s_linear_infinite] rounded-full border-2 border-dashed border-[#087df5]/35 sm:h-[460px] sm:w-[460px]" />

                        {/* Counter-rotating thin ring with orbit dots */}
                        <div className="about-deco pointer-events-none absolute bottom-0 h-[380px] w-[380px] animate-[spin-slow_40s_linear_infinite_reverse] rounded-full border border-white/70 sm:h-[500px] sm:w-[500px]">
                            {/* Orbiting dots pinned on the ring */}
                            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#5cc6ff] to-[#0b7df5] shadow-[0_0_14px_rgba(8,127,245,0.8)]" />
                            <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#04a5ff] shadow-[0_0_12px_rgba(4,165,255,0.8)]" />
                            <span className="absolute -left-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
                            <span className="absolute -right-1.5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#8fd8ff] shadow-[0_0_10px_rgba(143,216,255,0.9)]" />
                        </div>

                        {/* Glowing platform base under the portrait */}
                        <div className="pointer-events-none absolute bottom-0 h-16 w-[70%] max-w-[560px] rounded-[50%] bg-gradient-to-r from-transparent via-[#087df5]/35 to-transparent blur-xl" />
                        <div className="about-deco pointer-events-none absolute bottom-1 h-8 w-[55%] max-w-[440px] animate-[glow-pulse_4s_ease-in-out_infinite_1s] rounded-[50%] bg-gradient-to-r from-transparent via-[#8fd8ff]/60 to-transparent blur-lg" />

                        {/* Portrait image — BIG */}
                        <div className="absolute bottom-0 left-1/2 z-10 h-full w-full max-w-[540px] -translate-x-1/2 sm:max-w-[620px] lg:max-w-[680px]">
                            <Image
                                src="/abu-sufian.png"
                                alt="Abu Sufian - MERN Stack Developer"
                                fill
                                loading="eager"
                                sizes="(max-width: 768px) 100vw, 680px"
                                className="object-contain object-bottom drop-shadow-[0_20px_28px_rgba(0,48,100,0.22)]"
                            />
                        </div>

                        {/* Floating badge — MERN (top right of portrait) */}
                        <div className="about-deco absolute right-0 top-6 z-20 hidden animate-[float-y_6s_ease-in-out_infinite] rotate-[-8deg] rounded-2xl border border-white/70 bg-white/55 p-4 shadow-lg shadow-blue-300/30 backdrop-blur-xl sm:block lg:right-4 lg:top-10">
                            <FiCode className="text-3xl font-bold text-[#087df5]" />
                            <div className="mt-2 text-2xl font-black text-[#102b4c]">MERN</div>
                            <p className="text-[10px] font-semibold text-[#294d72]">Stack Developer</p>
                        </div>

                        {/* Floating badge — Available (left of portrait) */}
                        <div className="about-deco absolute left-0 top-16 z-20 hidden animate-[float-y_7s_ease-in-out_infinite_1.5s] rounded-full border border-white/80 bg-white/60 px-4 py-2 shadow-lg shadow-blue-300/25 backdrop-blur-xl sm:flex sm:items-center sm:gap-2 lg:left-2 lg:top-24">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
                            <span className="text-[11px] font-extrabold text-[#172d49]">Available for Work</span>
                        </div>

                        {/* Floating badge — React (bottom left) */}
                        <div className="about-deco absolute bottom-24 left-2 z-20 hidden animate-[float-y_5.5s_ease-in-out_infinite_0.8s] rotate-[8deg] items-center gap-2 rounded-2xl border border-white/70 bg-white/55 px-4 py-3 shadow-lg shadow-blue-300/30 backdrop-blur-xl sm:flex lg:bottom-32 lg:left-8">
                            <SiReact className="text-2xl text-[#08b9e9]" />
                            <span className="text-xs font-extrabold text-[#102b4c]">React</span>
                        </div>
                    </div>

                    {/* ===== BOTTOM: SOCIAL RAIL + RESUME BUTTON ===== */}
                    <div className="relative mt-6 flex items-end justify-between gap-4">
                        {/* Social icons — vertical on desktop, row on mobile */}
                        <div className="flex gap-3 lg:flex-col lg:gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={social.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noreferrer"
                                    aria-label={social.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/70 text-base text-[#152d49] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#087df5] hover:text-white hover:shadow-lg hover:shadow-blue-300/60"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Resume download button */}
                        <a
                            href="/cv.pdf"
                            download
                            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#087df5] to-[#079fff] px-6 py-3 text-xs font-black tracking-wider text-white uppercase shadow-lg shadow-blue-300/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            Resume
                            <FaArrowUpRightFromSquare className="text-[11px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ==========================================
                STORY + QUICK FACTS
                ========================================== */}
            <section
                id="story"
                className="relative scroll-mt-24 overflow-hidden py-16 md:py-24"
            >
                {/* Background Decorations */}
                <div className="pointer-events-none absolute -left-20 top-4 h-64 w-64 rounded-full bg-[#bfe4ff]/70" />
                <div className="pointer-events-none absolute -left-10 top-1/3 h-44 w-44 rounded-full border-[35px] border-white/60" />
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/50 blur-2xl" />

                <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        {/* ===== LEFT: STORY ===== */}
                        <div className="space-y-5">
                            {/* Badge */}
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold text-[#087df5] shadow-sm backdrop-blur-md">
                                About Me
                            </span>

                            {/* Heading */}
                            <h2 className="max-w-[540px] text-3xl font-black leading-[1.2] tracking-tight text-[#102b4c] sm:text-4xl lg:text-[42px]">
                                A Passionate{" "}
                                <span className="bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                                    Developer
                                </span>{" "}
                                <span className="mr-1 inline-block h-4 w-4 rounded-full border-[3px] border-[#087df5]/40 align-middle" />
                                on a Journey of Growth
                            </h2>

                            {/* Paragraph */}
                            <p className="max-w-[540px] text-sm leading-7 text-[#425b79] sm:text-base">
                                <span className="font-semibold text-[#172d49] underline decoration-[#087df5]/70 decoration-2 underline-offset-4">
                                    I&apos;m Abu Sufian, a dedicated MERN stack developer
                                </span>{" "}
                                who loves turning ideas into reality. I enjoy solving
                                problems, learning new technologies and building
                                meaningful products that people love to use.
                            </p>

                            {/* Download resume (secondary) */}
                            <a
                                href="/cv.pdf"
                                download
                                className="group inline-flex items-center gap-2 rounded-full border border-[#80baff] bg-white/80 px-6 py-3 text-sm font-bold text-[#172d49] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                            >
                                <FaDownload className="text-[#087df5]" />
                                Download Resume
                            </a>
                        </div>

                        {/* ===== RIGHT: QUICK FACTS ===== */}
                        <div className="rounded-2xl border border-white/80 bg-white/70 p-6 shadow-[0_5px_25px_rgba(35,125,210,0.10)] backdrop-blur-xl sm:p-8">
                            <h3 className="text-base font-extrabold text-[#102b4c] sm:text-lg">
                                Quick Facts
                            </h3>

                            <div className="mt-5 space-y-4">
                                {quickFacts.map((fact) => {
                                    const value = fact.href ? (
                                        <a
                                            href={fact.href}
                                            className="font-semibold text-[#087df5] underline decoration-[#087df5]/40 underline-offset-4 transition-colors hover:text-[#04a5ff]"
                                        >
                                            {fact.value}
                                        </a>
                                    ) : (
                                        <span className="font-semibold text-[#172d49]">
                                            {fact.value}
                                        </span>
                                    );

                                    return (
                                        <div
                                            key={fact.label}
                                            className="flex flex-col gap-1 border-b border-blue-100 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:gap-4"
                                        >
                                            <span className="w-32 shrink-0 text-xs font-black tracking-wider text-[#087df5] uppercase">
                                                {fact.label}
                                            </span>

                                            <span className="text-sm text-[#425b79]">
                                                {value}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================
                STORY BEHIND THE SCREEN — chapter cards
                ========================================== */}
            <section
                id="chapters"
                className="relative scroll-mt-24 overflow-hidden py-16 md:py-24"
            >
                {/* ---------- Background Decorations ---------- */}
                <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#bfe4ff]/60 blur-2xl" />
                <div className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full border-[30px] border-white/50" />
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#53baff]/15 blur-[80px]" />

                <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                    {/* ===== Section Header ===== */}
                    <div className="max-w-[720px]">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-[11px] font-black tracking-widest text-[#087df5] uppercase shadow-sm backdrop-blur-md">
                            02 / The Genesis &amp; Evolution
                        </span>

                        <h2 className="mt-5 text-3xl font-black leading-[1.15] tracking-tight text-[#102b4c] sm:text-4xl lg:text-[44px]">
                            The Story Behind the{" "}
                            <span className="bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                                Screen
                            </span>
                        </h2>

                        <p className="mt-4 max-w-[620px] text-sm leading-7 text-[#425b79] sm:text-base">
                            Great software doesn&apos;t happen by accident. It is forged
                            at the intersection where visual geometry, motion dynamics,
                            and back-end logic meet.
                        </p>
                    </div>

                    {/* ===== Chapter Cards (2x2) ===== */}
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-7">
                        {chapters.map((chapter) => (
                            <article
                                key={chapter.chapter}
                                className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-6 shadow-[0_6px_24px_rgba(35,125,210,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2.5 hover:border-[#5cc6ff] hover:shadow-[0_28px_56px_rgba(8,125,245,0.28)] sm:p-7"
                            >
                                {/* Gradient sheen that sweeps across on hover */}
                                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-20 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 blur-[2px] group-hover:animate-[shine-sweep_0.9s_ease-out_forwards]" />

                                {/* Top row: chapter badge + icon */}
                                <div className="relative flex items-start justify-between gap-4">
                                    <span className="inline-flex items-center rounded-full border border-[#087df5]/25 bg-[#087df5]/8 px-3.5 py-1.5 text-[10px] font-black tracking-widest text-[#087df5] uppercase transition-all duration-500 group-hover:border-[#087df5]/60 group-hover:bg-[#087df5] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(8,125,245,0.4)]">
                                        {chapter.chapter}
                                    </span>

                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/80 bg-white/85 text-lg text-[#087df5] shadow-[0_8px_20px_rgba(4,42,82,0.12)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#087df5] group-hover:to-[#04a5ff] group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(8,125,245,0.45)]">
                                        {chapter.icon}
                                    </span>
                                </div>

                                {/* Meta line */}
                                <p className="relative mt-5 text-[11px] font-black tracking-wider text-[#5b7391] uppercase transition-colors duration-500 group-hover:text-[#087df5]">
                                    {chapter.meta}
                                </p>

                                {/* Title */}
                                <h3 className="relative mt-2.5 text-xl font-extrabold tracking-tight text-[#102b4c] transition-colors duration-500 group-hover:text-[#087df5] sm:text-[22px]">
                                    {chapter.title}
                                </h3>

                                {/* Body */}
                                <p className="relative mt-3 text-sm leading-6 text-[#425b79]">
                                    {chapter.body}
                                </p>

                                {/* Quote block */}
                                <blockquote className="relative mt-5 rounded-r-xl border-l-[3px] border-[#087df5]/40 bg-white/70 px-4 py-3.5 transition-all duration-500 group-hover:border-l-[#087df5] group-hover:bg-[#087df5]/6 group-hover:shadow-[inset_0_0_20px_rgba(8,125,245,0.06)]">
                                    <p className="text-[13px] leading-6 font-medium text-[#294d72] italic">
                                        &ldquo;{chapter.quote}&rdquo;
                                    </p>
                                </blockquote>

                                {/* Bottom accent line that grows on hover */}
                                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#087df5] to-[#04a5ff] transition-all duration-500 ease-out group-hover:w-full" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==========================================
                TECH STACK — tabs + mouse-follow background
                ========================================== */}
            <TechStack />

            {/* ==========================================
                TRACK RECORD — animated timeline
                ========================================== */}
            <Timeline />
        </main>
    );
}

export default AboutPage;
