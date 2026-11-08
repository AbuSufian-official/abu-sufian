"use client";

import { useEffect, useRef, useState } from "react";

/* ==========================================
   CAREER CHRONOLOGY (05 / TRACK RECORD)
   - Vertical timeline: flowing light line,
     pulsing glow dots, glass cards
   - Every card reveals on scroll (staggered)
   - Hover: lift, shine sweep, accent bar
   ========================================== */

const milestones = [
    {
        date: "2024 — Present",
        title: "Full Stack Developer & Creative Technologist",
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Custom CMS Engines",
        ],
        body: "Architecting high-performance client applications, custom database backends, and AI-accelerated development pipelines. Leading end-to-end design and technical delivery with bespoke design systems.",
    },
    {
        date: "2023 — 2024",
        title: "Frontend & CMS Systems Developer",
        stack: [
            "HTML5",
            "CSS3",
            "Vanilla JavaScript",
            "PHP",
            "MySQL",
            "RESTful APIs",
        ],
        body: "Engineered robust, accessible web portals, custom admin dashboards, and database schemas for commercial organizations and service businesses across Bangladesh and abroad.",
    },
    {
        date: "2022 — 2023",
        title: "Visual Identity & Motion Artist",
        stack: [
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Premiere Pro",
            "After Effects",
        ],
        body: "Delivered comprehensive brand identity guidelines, vector logotypes, social marketing visuals, and commercial video assets for global brands and independent creators.",
    },
    {
        date: "Origins",
        title: "Computer Science Fundamentals & Visual Arts",
        stack: ["Computing Architecture", "Graphic Design", "Algorithmic Thinking"],
        body: "Developed a dual obsession with computer systems and digital graphics. Self-directed immersion into interface mechanics, design principles, and programming languages that paved the road for full-stack engineering.",
    },
];

/* ---------- One timeline entry (dot + glass card) ---------- */
function TimelineItem({ item, index }) {
    const itemRef = useRef(null);
    const [visible, setVisible] = useState(false);

    /* Reveal when the entry scrolls into view (staggered per index) */
    useEffect(() => {
        const el = itemRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className={`reveal ${visible ? "is-visible" : ""} relative pl-10 sm:pl-14`}
            style={{ transitionDelay: `${index * 90}ms` }}
        >
            {/* ===== Animated dot on the line ===== */}
            <span
                aria-hidden="true"
                className="absolute left-2 top-7 z-10 flex h-[18px] w-[18px] items-center justify-center sm:left-4"
            >
                {/* Pulsing ripple ring */}
                <span className="about-deco absolute inset-0 animate-ping rounded-full bg-[#087df5]/45" />
                {/* Glowing gradient core with white ring */}
                <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-[#087df5] to-[#04a5ff] shadow-[0_0_14px_rgba(8,125,245,0.85)] ring-2 ring-white">
                    <span className="h-1 w-1 rounded-full bg-white" />
                </span>
            </span>

            {/* ===== Glass card ===== */}
            <article className="group relative cursor-default overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/65 via-white/40 to-white/25 p-5 shadow-[0_8px_28px_rgba(35,125,210,0.12),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/95 hover:from-white/80 hover:via-white/55 hover:to-white/35 hover:shadow-[0_24px_52px_rgba(8,125,245,0.28),inset_0_1px_0_rgba(255,255,255,1)] sm:p-6">
                {/* Frosted dome sheen */}
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 via-white/10 to-transparent"
                />

                {/* Light sweep on hover */}
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-20 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 blur-[2px] group-hover:animate-[shine-sweep_0.9s_ease-out_forwards]"
                />

                {/* Date + role */}
                <div className="relative flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <span className="text-[11px] font-black tracking-widest text-[#087df5] uppercase">
                        {item.date}
                    </span>

                    <h3 className="text-sm font-extrabold text-[#102b4c] transition-colors duration-300 group-hover:text-[#087df5] sm:text-right sm:text-[15px]">
                        {item.title}
                    </h3>
                </div>

                {/* Tech chips */}
                <div className="relative mt-3.5 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-[#cfe8ff] bg-white/80 px-2.5 py-1 text-[10px] font-bold text-[#294d72] transition-all duration-300 group-hover:border-[#5cc6ff] group-hover:bg-white group-hover:text-[#0b72d9]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="relative mt-3.5 text-sm leading-6 text-[#425b79]">
                    {item.body}
                </p>

                {/* Bottom accent bar grows on hover */}
                <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#087df5] to-[#04a5ff] transition-all duration-500 ease-out group-hover:w-full"
                />
            </article>
        </div>
    );
}

function Timeline() {
    return (
        <section
            id="track-record"
            className="relative scroll-mt-24 overflow-hidden py-16 md:py-24"
        >
            {/* ---------- Background Decorations ---------- */}
            <div className="about-deco pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full border-[36px] border-white/55" />
            <div className="about-deco pointer-events-none absolute -right-24 bottom-16 h-72 w-72 animate-[spin-slow_55s_linear_infinite] rounded-full border-2 border-dashed border-[#087df5]/25" />
            <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#8bcfff]/25 blur-[90px]" />
            <span className="about-deco pointer-events-none absolute bottom-24 left-[30%] h-2.5 w-2.5 animate-[bubble-float_5.5s_ease-in-out_infinite] rounded-full bg-white/75" />
            <span className="about-deco pointer-events-none absolute top-32 right-[30%] h-3 w-3 animate-[bubble-float_6.5s_ease-in-out_infinite_1s] rounded-full bg-[#8fd8ff]/85" />

            {/* ---------- Content ---------- */}
            <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-[720px]">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-[11px] font-black tracking-widest text-[#087df5] uppercase shadow-sm backdrop-blur-md">
                        05 / Track Record
                    </span>

                    <h2 className="mt-5 text-3xl font-black leading-[1.15] tracking-tight text-[#102b4c] sm:text-4xl lg:text-[44px]">
                        Career{" "}
                        <span className="bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                            Chronology
                        </span>{" "}
                        &amp; Milestones
                    </h2>

                    <p className="mt-4 max-w-[620px] text-sm leading-7 text-[#425b79] sm:text-base">
                        A progressive history of shipping client solutions,
                        architectural platforms, and visual identity systems.
                    </p>
                </div>

                {/* ===== TIMELINE ===== */}
                <div className="relative mt-10 lg:mt-12">
                    {/* The line — gradient with a travelling light pulse */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-6 left-4 top-6 w-0.5 overflow-hidden rounded-full bg-gradient-to-b from-[#087df5]/15 via-[#087df5]/55 to-[#087df5]/15 sm:left-6"
                    >
                        <span className="about-deco absolute inset-x-0 -top-20 h-16 animate-[line-travel_3.5s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-white to-transparent" />
                    </div>

                    {/* Entries */}
                    <div className="space-y-6 sm:space-y-7">
                        {milestones.map((item, i) => (
                            <TimelineItem
                                key={item.date}
                                item={item}
                                index={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
