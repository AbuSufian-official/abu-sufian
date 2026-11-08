import Link from "next/link";
import { FaArrowRight, FaRocket, FaLightbulb, FaHandshake } from "react-icons/fa";

/* ==========================================
   ABOUT SECTION
   Left  -> badge, heading, text, button
   Right -> 3 feature cards
   ========================================== */

const features = [
    {
        icon: <FaRocket />,
        title: "Clean Code",
        description: "Write clean, maintainable and scalable code.",
    },
    {
        icon: <FaLightbulb />,
        title: "Creative Mind",
        description: "Turn ideas into innovative solutions.",
    },
    {
        icon: <FaHandshake />,
        title: "Team Player",
        description: "Collaborate and grow together.",
    },
];

function About() {
    return (
        <section
            id="about"
            className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#e4f1ff] via-[#f5faff] to-[#9bd5ff] py-16 md:py-24"
        >
            {/* ---------- Background Decorations ---------- */}

            {/* Big soft circle (top left) */}
            <div className="pointer-events-none absolute -left-20 top-4 h-64 w-64 rounded-full bg-[#bfe4ff]/70" />

            {/* White ring (left middle) */}
            <div className="pointer-events-none absolute -left-10 top-1/3 h-44 w-44 rounded-full border-[35px] border-white/60" />

            {/* Blue sphere (bottom left) */}
            <div className="pointer-events-none absolute bottom-10 left-6 h-14 w-14 rounded-full bg-gradient-to-br from-[#5cc6ff] to-[#0b7df5] shadow-[0_12px_28px_rgba(8,127,245,0.45)]" />

            {/* Soft glow (top right) */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/50 blur-2xl" />

            {/* ---------- Content ---------- */}

            <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

                    {/* ===== LEFT CONTENT ===== */}
                    <div className="space-y-5">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold text-[#087df5] shadow-sm backdrop-blur-md">
                            <FaArrowRight className="rotate-180 text-[10px]" />
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
                            meaningful products.
                        </p>

                        {/* Button */}
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#087df5] to-[#079fff] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-300/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            Know More About Me
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* ===== RIGHT FEATURE CARDS ===== */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-[0_5px_25px_rgba(35,125,210,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(35,125,210,0.18)]"
                            >
                                {/* Icon */}
                                <span className="text-3xl text-[#087df5]">
                                    {feature.icon}
                                </span>

                                {/* Title */}
                                <h3 className="mt-4 text-base font-extrabold text-[#102b4c]">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-1.5 text-xs leading-5 text-[#5b7391]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
