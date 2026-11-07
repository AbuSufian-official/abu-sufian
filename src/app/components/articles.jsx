"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

/* ==========================================
   ARTICLES SECTION
   - Editorial list layout (01 full width,
     02 + 03 in a two column row)
   - Unique patterned background (dot grid
     + diagonal hatch) in sky blue / white
   - Scroll reveal + hover animations
   ========================================== */

const articles = [
    {
        id: "a1",
        number: "01",
        category: "Web Development",
        date: "Jul 2025",
        readTime: "5 min read",
        title: "Why I Chose HTML, CSS & JS Over Frameworks First",
        excerpt:
            "Learning the fundamentals before frameworks gave me a deeper understanding of how the web actually works. Here's what I learned and why it matters.",
        url: "https://github.com/",
        featured: true,
    },
    {
        id: "a2",
        number: "02",
        category: "Artificial Intelligence",
        date: "Jun 2025",
        readTime: "7 min read",
        title: "How I Use AI to Code Faster Without Losing Understanding",
        excerpt:
            "AI tools like ChatGPT and Claude changed the way I write code. But there's a right and wrong way to use them — and I learned the hard way.",
        url: "https://github.com/",
        featured: false,
    },
    {
        id: "a3",
        number: "03",
        category: "Graphic Design",
        date: "May 2025",
        readTime: "4 min read",
        title: "Good Logo Design Is About Restraint, Not Decoration",
        excerpt:
            "After designing dozens of logos for clients, I've come to believe that the best logos are defined by what you leave out, not what you add.",
        url: "https://github.com/",
        featured: false,
    },
];

/* ---------- Single article row ---------- */
function ArticleRow({
    article,
    featured = false,
    className = "",
    revealed = false,
    delay = 0,
}) {
    return (
        <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className={`reveal ${revealed ? "is-visible" : ""} group relative flex gap-5 py-7 ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Hover glow behind the row */}
            <span className="pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-3xl bg-white/0 shadow-[0_0_0_rgba(8,125,245,0)] transition-all duration-500 group-hover:bg-white/65 group-hover:shadow-[0_16px_36px_rgba(8,125,245,0.14)]" />

            {/* Outlined number */}
            <span className="article-num relative z-10 shrink-0 select-none pt-1 text-5xl font-black leading-none sm:text-6xl">
                {article.number}
            </span>

            {/* Content */}
            <div className="relative z-10 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="rounded-full bg-gradient-to-r from-[#087df5] to-[#04a5ff] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow-[0_6px_16px_rgba(8,125,245,0.35)]">
                        {article.category}
                    </span>
                    <span className="text-xs font-bold text-[#5b7391]">
                        · {article.date} · {article.readTime}
                    </span>
                </div>

                <h3
                    className={`mt-3 font-black leading-tight text-[#102b4c] transition-colors duration-300 group-hover:text-[#087df5] ${
                        featured
                            ? "text-2xl sm:text-3xl lg:text-[34px]"
                            : "text-lg sm:text-xl"
                    }`}
                >
                    {article.title}
                </h3>

                <p
                    className={`mt-3 text-sm leading-6 text-[#5b7391] ${
                        featured ? "max-w-2xl" : "max-w-md"
                    }`}
                >
                    {article.excerpt}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#087df5]">
                    Read article
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
            </div>
        </a>
    );
}

/* ---------- Section ---------- */
function Articles() {
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
    const [first, second, third] = articles;

    return (
        <section
            id="articles"
            ref={sectionRef}
            className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#e4f1ff] via-[#f5faff] to-[#9bd5ff] py-16 md:py-24"
        >
            {/* ===== UNIQUE BACKGROUND PATTERN ===== */}

            {/* Dot grid */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(8,125,245,0.20) 1.5px, transparent 0)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Diagonal hatch */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.14]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, #087df5 0 2px, transparent 2px 16px)",
                }}
            />

            {/* White veil so the pattern stays subtle in the middle */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/45 via-white/25 to-white/50" />

            {/* Decorations */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/60 blur-2xl" />
            <div className="pointer-events-none absolute -left-20 bottom-16 h-56 w-56 rounded-full border-[40px] border-[#75c7ff]/35" />
            <div className="pointer-events-none absolute left-8 top-40 h-12 w-12 rounded-full bg-gradient-to-br from-[#5cc6ff] to-[#0b7df5] shadow-[0_12px_28px_rgba(8,127,245,0.45)]" />

            {/* ===== CONTENT ===== */}
            <div className="relative z-10 mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-xl">
                    <span
                        className={`${revealClass} inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#087df5]`}
                        style={{ transitionDelay: "0ms" }}
                    >
                        <span className="h-px w-8 bg-[#087df5]" />
                        Writing
                    </span>

                    <h2
                        className={`${revealClass} mt-4 text-3xl font-black leading-tight tracking-tight text-[#102b4c] sm:text-4xl lg:text-[44px]`}
                        style={{ transitionDelay: "90ms" }}
                    >
                        Latest{" "}
                        <span className="bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                            articles.
                        </span>
                    </h2>

                    <p
                        className={`${revealClass} mt-4 max-w-md text-sm leading-7 text-[#425b79] sm:text-base`}
                        style={{ transitionDelay: "180ms" }}
                    >
                        Thoughts on web development, design, AI tools, and the
                        developer journey.
                    </p>
                </div>

                {/* Featured article (01) */}
                <div className="mt-10 border-t border-[#087df5]/20 md:mt-12">
                    <ArticleRow
                        article={first}
                        featured
                        revealed={visible}
                        delay={120}
                    />
                </div>

                {/* Articles 02 + 03 */}
                <div className="grid border-t border-[#087df5]/20 sm:grid-cols-2">
                    <ArticleRow
                        article={second}
                        revealed={visible}
                        delay={220}
                        className="border-b border-[#087df5]/20 sm:border-b-0 sm:border-r sm:pr-8"
                    />
                    <ArticleRow
                        article={third}
                        revealed={visible}
                        delay={320}
                        className="border-b border-[#087df5]/20 sm:border-b-0 sm:pl-8"
                    />
                </div>

                {/* All Articles button */}
                <div
                    className={`${revealClass} mt-10 flex justify-center`}
                    style={{ transitionDelay: "120ms" }}
                >
                    <a
                        href="#articles"
                        className="group inline-flex items-center gap-2.5 rounded-full border border-[#087df5]/30 bg-white/80 px-7 py-3.5 text-xs font-black text-[#087df5] shadow-[0_6px_20px_rgba(35,125,210,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#087df5] hover:bg-gradient-to-r hover:from-[#087df5] hover:to-[#04a5ff] hover:text-white hover:shadow-[0_16px_34px_rgba(8,125,245,0.40)]"
                    >
                        All Articles
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Articles;
