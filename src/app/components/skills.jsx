"use client";

import { useEffect, useRef, useState } from "react";
import { FaPalette, FaCode, FaVideo, FaRocket } from "react-icons/fa";

/* ==========================================
   SKILLS & EXPERTISE SECTION
   - Cards reveal on scroll (staggered)
   - Skill bars fill + percentage count-up
     smoothly when each card enters view
   - Sky blue / white brand palette
   ========================================== */

const skillGroups = [
    {
        id: "design",
        title: "Graphic Design",
        level: "Professional",
        icon: <FaPalette />,
        skills: [
            { name: "Adobe Photoshop", value: 82 },
            { name: "Adobe Illustrator", value: 78 },
            { name: "Brand Identity", value: 75 },
            { name: "Logo Design", value: 72 },
            { name: "Social Media Design", value: 85 },
            { name: "Print Design", value: 68 },
            { name: "UI Graphics", value: 70 },
        ],
    },
    {
        id: "web",
        title: "Web Development",
        level: "Professional",
        icon: <FaCode />,
        skills: [
            { name: "HTML5", value: 72 },
            { name: "CSS3", value: 68 },
            { name: "JavaScript", value: 55 },
            { name: "PHP", value: 60 },
            { name: "MySQL", value: 50 },
            { name: "Git & GitHub", value: 58 },
            { name: "Responsive Design", value: 75 },
        ],
    },
    {
        id: "video",
        title: "Video Editing",
        level: "Intermediate",
        icon: <FaVideo />,
        skills: [
            { name: "Adobe Premiere Pro", value: 50 },
            { name: "Adobe After Effects", value: 42 },
            { name: "Motion Graphics", value: 35 },
            { name: "Short-form Content", value: 52 },
            { name: "Video Production", value: 38 },
        ],
    },
    {
        id: "learning",
        title: "Currently Learning",
        level: "In Progress",
        icon: <FaRocket />,
        skills: [
            { name: "React", value: 30 },
            { name: "TypeScript", value: 22 },
            { name: "Next.js", value: 25 },
            { name: "Node.js", value: 20 },
            { name: "Express.js", value: 18 },
            { name: "MongoDB", value: 20 },
            { name: "REST APIs", value: 28 },
            { name: "Tailwind CSS", value: 35 },
            { name: "AI-assisted Dev", value: 40 },
        ],
    },
];

const levelStyles = {
    Professional:
        "bg-gradient-to-r from-[#087df5] to-[#04a5ff] text-white shadow-[0_6px_16px_rgba(8,125,245,0.40)]",
    Intermediate:
        "border border-[#5cc6ff] bg-white/85 text-[#0b72d9] shadow-sm",
    "In Progress":
        "border border-dashed border-[#087df5]/70 bg-[#e8f4ff] text-[#0b72d9]",
};

/* Animation timing */
const FILL_MS = 1100;
const STAGGER_MS = 70;

const clamp01 = (value) => Math.min(Math.max(value, 0), 1);
const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

/* ---------- Single skill card ---------- */
function SkillCard({ group, index }) {
    const cardRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [elapsed, setElapsed] = useState(0);

    /* Reveal + start the animation when the card scrolls into view */
    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    /* Drive one shared timeline (ms) for every bar in this card */
    useEffect(() => {
        if (!inView) return;

        const total = (group.skills.length - 1) * STAGGER_MS + FILL_MS;
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let frame;
        const start = performance.now();

        const tick = (now) => {
            /* Reduced motion: jump straight to the final state */
            const passed = reduceMotion ? total : now - start;
            setElapsed(passed >= total ? total : passed);
            if (passed < total) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, group.skills.length]);

    return (
        <div
            ref={cardRef}
            className={`reveal ${inView ? "is-visible" : ""}`}
            style={{ transitionDelay: `${index * 110}ms` }}
        >
            <article className="group relative h-full overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_6px_24px_rgba(35,125,210,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#5cc6ff] hover:shadow-[0_24px_46px_rgba(8,125,245,0.26)] sm:p-6">
                {/* Soft brand glow (follows hover) */}
                <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#5cc6ff]/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* ===== CARD HEADER ===== */}
                <div className="relative flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#087df5] to-[#04a5ff] text-lg text-white shadow-[0_8px_20px_rgba(8,125,245,0.40)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                            {group.icon}
                        </span>

                        <div>
                            <h3 className="text-base font-extrabold text-[#102b4c] sm:text-lg">
                                {group.title}
                            </h3>
                            <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-[#5b7391]">
                                {group.skills.length} skills
                            </p>
                        </div>
                    </div>

                    <span
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-wider ${levelStyles[group.level]}`}
                    >
                        {group.level === "In Progress" && (
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#087df5]" />
                        )}
                        {group.level}
                    </span>
                </div>

                {/* ===== SKILL BARS ===== */}
                <div className="relative mt-5 space-y-3.5">
                    {group.skills.map((skill, skillIndex) => {
                        /* Staggered, eased progress for this skill (0 → 1) */
                        const progress = easeOutCubic(
                            clamp01(
                                (elapsed - skillIndex * STAGGER_MS) / FILL_MS
                            )
                        );
                        const width = skill.value * progress;
                        const label = Math.round(width);

                        return (
                            <div key={skill.name}>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="truncate text-xs font-bold text-[#294d72] sm:text-[13px]">
                                        {skill.name}
                                    </span>
                                    <span className="shrink-0 text-[11px] font-black tabular-nums text-[#087df5]">
                                        {label}%
                                    </span>
                                </div>

                                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#dcecff]">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-[#087df5] to-[#3ec4ff] shadow-[0_0_10px_rgba(8,125,245,0.55)]"
                                        style={{ width: `${width}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </article>
        </div>
    );
}

/* ---------- Section ---------- */
function Skills() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

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

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#e4f1ff] via-[#f5faff] to-[#9bd5ff] py-16 md:py-24"
        >
            {/* ---------- Background Decorations ---------- */}

            {/* Soft glow (top right) */}
            <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-white/60 blur-2xl" />

            {/* Sky ring (bottom right) */}
            <div className="pointer-events-none absolute -right-20 bottom-6 h-56 w-56 rounded-full border-[40px] border-[#75c7ff]/35" />

            {/* Blue sphere (left) */}
            <div className="pointer-events-none absolute left-6 top-1/3 h-12 w-12 rounded-full bg-gradient-to-br from-[#5cc6ff] to-[#0b7df5] shadow-[0_12px_28px_rgba(8,127,245,0.45)]" />

            {/* ---------- Content ---------- */}
            <div className="relative z-10 mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
                {/* ===== HEADER ===== */}
                <div className="mx-auto max-w-2xl text-center">
                    <span
                        className={`${revealClass} inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#087df5]`}
                        style={{ transitionDelay: "0ms" }}
                    >
                        <span className="h-px w-8 bg-[#087df5]" />
                        Skills &amp; Expertise
                        <span className="h-px w-8 bg-[#087df5]" />
                    </span>

                    <h2
                        className={`${revealClass} mt-4 text-3xl font-black leading-tight tracking-tight text-[#102b4c] sm:text-4xl lg:text-[42px]`}
                        style={{ transitionDelay: "90ms" }}
                    >
                        What I bring to{" "}
                        <span className="bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                            the table.
                        </span>
                    </h2>

                    <p
                        className={`${revealClass} mx-auto mt-4 max-w-xl text-sm leading-7 text-[#425b79] sm:text-base`}
                        style={{ transitionDelay: "180ms" }}
                    >
                        A multi-disciplinary skill set spanning development,
                        design, and video — plus a growing modern stack being
                        actively learned.
                    </p>
                </div>

                {/* ===== SKILL CARDS ===== */}
                <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 lg:gap-6">
                    {skillGroups.map((group, index) => (
                        <SkillCard key={group.id} group={group} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
