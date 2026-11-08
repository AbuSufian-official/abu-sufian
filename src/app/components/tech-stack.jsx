"use client";

import { useEffect, useRef, useState } from "react";

import {
    SiHtml5,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiPhp,
    SiMysql,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiFigma,
    SiGit,
    SiGithub,
} from "react-icons/si";
import { FaCss3, FaPalette, FaServer, FaLayerGroup, FaKey } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { FaRobot, FaClapperboard } from "react-icons/fa6";
import {
    TbBrandAdobePhotoshop,
    TbBrandAdobeIllustrator,
    TbBrandAdobePremiere,
    TbBrandAdobeAfterEffect,
} from "react-icons/tb";

/* ==========================================
   TECH STACK SECTION (04 / SKILLS & TECH STACK)
   - Tab system: groups technologies, every tab
     shows its technologies (with counts)
   - Cursor-following glow background + floating
     animated decorations
   - Rich card hover: lift, shine sweep, cursor
     spotlight, icon pop
   ========================================== */

const groups = [
    { id: "all", label: "All Stacks", icon: <FaLayerGroup /> },
    { id: "frontend", label: "Frontend", icon: <FiCode /> },
    { id: "backend", label: "Backend & DB", icon: <FaServer /> },
    { id: "design", label: "UI/UX & Design", icon: <FaPalette /> },
    { id: "motion", label: "Motion & Video", icon: <FaClapperboard /> },
    { id: "ai", label: "Tools & AI", icon: <FaRobot /> },
];

const technologies = [
    /* ---- Frontend (7) ---- */
    { name: "HTML5", group: "frontend", icon: <SiHtml5 />, color: "#e34f26" },
    { name: "CSS3", group: "frontend", icon: <FaCss3 />, color: "#1572b6" },
    { name: "JavaScript", group: "frontend", icon: <SiJavascript />, color: "#d4a200" },
    { name: "TypeScript", group: "frontend", icon: <SiTypescript />, color: "#3178c6" },
    { name: "React", group: "frontend", icon: <SiReact />, color: "#087df5" },
    { name: "Next.js", group: "frontend", icon: <SiNextdotjs />, color: "#102b4c" },
    { name: "Tailwind CSS", group: "frontend", icon: <SiTailwindcss />, color: "#06b6d4" },

    /* ---- Backend & DB (7) ---- */
    { name: "PHP", group: "backend", icon: <SiPhp />, color: "#777bb4" },
    { name: "MySQL", group: "backend", icon: <SiMysql />, color: "#00758f" },
    { name: "Node.js", group: "backend", icon: <SiNodedotjs />, color: "#399b49" },
    { name: "Express.js", group: "backend", icon: <SiExpress />, color: "#102b4c" },
    { name: "MongoDB", group: "backend", icon: <SiMongodb />, color: "#159b54" },
    { name: "Mongoose", group: "backend", icon: <SiMongoose />, color: "#880000" },
    { name: "BetterAuth", group: "backend", icon: <FaKey />, color: "#087df5" },

    /* ---- UI/UX & Design (3) ---- */
    { name: "Figma", group: "design", icon: <SiFigma />, color: "#f24e1e" },
    { name: "Photoshop", group: "design", icon: <TbBrandAdobePhotoshop />, color: "#31a8ff" },
    { name: "Illustrator", group: "design", icon: <TbBrandAdobeIllustrator />, color: "#f28b00" },

    /* ---- Motion & Video (3) ---- */
    { name: "Premiere Pro", group: "motion", icon: <TbBrandAdobePremiere />, color: "#7b61ff" },
    { name: "After Effects", group: "motion", icon: <TbBrandAdobeAfterEffect />, color: "#9a8cff" },
    { name: "CapCut", group: "motion", icon: <FaClapperboard />, color: "#102b4c" },

    /* ---- Tools & AI (3) ---- */
    { name: "Git", group: "ai", icon: <SiGit />, color: "#f05032" },
    { name: "GitHub", group: "ai", icon: <SiGithub />, color: "#102b4c" },
    { name: "AI Engineering", group: "ai", icon: <FaRobot />, color: "#087df5" },
];

function TechStack() {
    const [active, setActive] = useState("all");

    const sectionRef = useRef(null);
    const glow1Ref = useRef(null);
    const glow2Ref = useRef(null);

    /* ---- Counts shown on every tab button ---- */
    const countOf = (id) =>
        id === "all"
            ? technologies.length
            : technologies.filter((t) => t.group === id).length;

    const visible =
        active === "all"
            ? technologies
            : technologies.filter((t) => t.group === active);

    /* ---- Mouse-follow glow: two layers, different lag = depth ---- */
    useEffect(() => {
        const section = sectionRef.current;
        if (!section || !glow1Ref.current) return;

        /* park both glows in the centre until the first move */
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
            /* slower layer trails behind for parallax depth */
            glow2Ref.current.style.transform =
                `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
    };

    /* ---- Cursor spotlight inside a card ---- */
    const handleCardMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <section
            id="skills"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative scroll-mt-24 overflow-hidden py-16 md:py-24"
        >
            {/* ---------- Mouse-follow glow layers ---------- */}
            <div
                ref={glow1Ref}
                aria-hidden="true"
                className="mouse-glow pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#087df5]/16 blur-[90px]"
                style={{ transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)" }}
            />
            <div
                ref={glow2Ref}
                aria-hidden="true"
                className="mouse-glow pointer-events-none absolute left-0 top-0 h-[640px] w-[640px] rounded-full bg-[#53baff]/12 blur-[120px]"
                style={{ transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)" }}
            />

            {/* ---------- Static / floating decorations ---------- */}
            <div className="about-deco pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full border-[36px] border-white/55" />
            <div className="about-deco pointer-events-none absolute -right-20 bottom-10 h-52 w-52 animate-[spin-slow_50s_linear_infinite] rounded-full border-2 border-dashed border-[#087df5]/25" />
            <span className="about-deco pointer-events-none absolute bottom-24 left-[18%] h-2.5 w-2.5 animate-[bubble-float_5s_ease-in-out_infinite] rounded-full bg-white/75" />
            <span className="about-deco pointer-events-none absolute top-28 right-[22%] h-3 w-3 animate-[bubble-float_6.5s_ease-in-out_infinite_1s] rounded-full bg-[#8fd8ff]/85" />
            <span className="about-deco pointer-events-none absolute bottom-40 right-[36%] h-2 w-2 animate-[bubble-float_4.5s_ease-in-out_infinite_0.5s] rounded-full bg-white/60" />

            {/* ---------- Content ---------- */}
            <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-[760px]">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-[11px] font-black tracking-widest text-[#087df5] uppercase shadow-sm backdrop-blur-md">
                        04 / Skills &amp; Tech Stack
                    </span>

                    <h2 className="mt-5 text-3xl font-black leading-[1.15] tracking-tight text-[#102b4c] sm:text-4xl lg:text-[44px]">
                        Technical Arsenal &amp;{" "}
                        <span className="bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                            Capabilities
                        </span>
                    </h2>

                    <p className="mt-4 max-w-[640px] text-sm leading-7 text-[#425b79] sm:text-base">
                        A battle-tested spectrum of modern programming languages,
                        reactive frameworks, relational databases, and
                        industry-standard creative suites I deploy to build
                        high-performance web products.
                    </p>
                </div>

                {/* ===== TAB BUTTONS (each shows its count) ===== */}
                <div
                    role="tablist"
                    aria-label="Technology groups"
                    className="mt-8 flex flex-wrap gap-3"
                >
                    {groups.map((group) => {
                        const isActive = active === group.id;

                        return (
                            <button
                                key={group.id}
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActive(group.id)}
                                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-black tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087df5]/50 ${
                                    isActive
                                        ? "border-transparent bg-gradient-to-r from-[#087df5] to-[#079fff] text-white shadow-[0_10px_26px_rgba(8,125,245,0.38)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(8,125,245,0.5)]"
                                        : "border-white/80 bg-white/70 text-[#425b79] shadow-sm backdrop-blur-md hover:-translate-y-0.5 hover:border-[#5cc6ff] hover:text-[#087df5] hover:shadow-[0_10px_24px_rgba(8,125,245,0.18)]"
                                }`}
                            >
                                <span
                                    className={`text-sm ${isActive ? "text-white" : "text-[#087df5]"}`}
                                >
                                    {group.icon}
                                </span>
                                {group.label}
                                <span
                                    className={`rounded-full px-2 py-0.5 text-[10px] font-black tabular-nums ${
                                        isActive
                                            ? "bg-white/25 text-white"
                                            : "bg-[#087df5]/10 text-[#087df5]"
                                    }`}
                                >
                                    {countOf(group.id)}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* ===== TECHNOLOGY CARDS (keyed = replays entrance on tab change) ===== */}
                <div
                    key={active}
                    role="tabpanel"
                    className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-5"
                >
                    {visible.map((tech, i) => (
                        <div
                            key={tech.name}
                            onMouseMove={handleCardMove}
                            style={{ animationDelay: `${i * 45}ms` }}
                            className="tech-card group relative cursor-default overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/55 via-white/35 to-white/20 p-4 text-center shadow-[0_8px_32px_rgba(35,125,210,0.12),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-2xl animate-[card-pop_0.5s_cubic-bezier(0.22,1,0.36,1)_both] transition-all duration-500 hover:-translate-y-2 hover:border-white/95 hover:from-white/75 hover:via-white/50 hover:to-white/30 hover:shadow-[0_24px_56px_rgba(8,125,245,0.30),inset_0_1px_0_rgba(255,255,255,1)]"
                        >
                            {/* Frosted dome sheen (top half highlight) */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 via-white/10 to-transparent"
                            />

                            {/* Cursor spotlight (only visible on hover) */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                    background:
                                        "radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(8,125,245,0.16), transparent 70%)",
                                }}
                            />

                            {/* Light sweep across the glass */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-20 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 blur-[2px] group-hover:animate-[shine-sweep_0.9s_ease-out_forwards]"
                            />

                            {/* Glass icon tile */}
                            <span
                                className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-white/70 bg-white/45 text-3xl shadow-[0_8px_20px_rgba(4,42,82,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-white group-hover:bg-white/70 group-hover:shadow-[0_14px_30px_rgba(8,125,245,0.35),inset_0_1px_0_rgba(255,255,255,1)]"
                                style={{ color: tech.color }}
                            >
                                {tech.icon}
                            </span>

                            {/* Name */}
                            <p className="relative mt-3 truncate text-xs font-extrabold text-[#172d49] transition-colors duration-300 group-hover:text-[#087df5] sm:text-[13px]">
                                {tech.name}
                            </p>

                            {/* Bottom accent bar grows on hover */}
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#087df5] to-[#04a5ff] transition-all duration-500 ease-out group-hover:w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;
