"use client";

import {
    Button,
    Description,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiClock,
    FiGithub,
    FiLinkedin,
    FiMessageCircle,
    FiArrowUpRight,
    FiSend,
    FiCheckCircle,
    FiZap,
    FiGlobe,
} from "react-icons/fi";

const contactInfo = [
    {
        icon: FiMail,
        title: "EMAIL",
        value: "abusufianofficial001@gmail.com",
        link: "mailto:abusufianofficial001@gmail.com",
    },
    {
        icon: FiPhone,
        title: "PHONE",
        value: "+880 01618562254",
        link: "tel:+8801618562254",
    },
    {
        icon: FiMessageCircle,
        title: "WHATSAPP",
        value: "Chat on WhatsApp",
        link: "https://wa.me/8801618562254",
    },
    {
        icon: FiMapPin,
        title: "LOCATION",
        value: "Dhaka, Bangladesh · Serving Worldwide",
        link: "#",
    },
    {
        icon: FiClock,
        title: "AVAILABILITY",
        value: "Open to Freelance & Remote Projects",
        link: "mailto:abusufianofficial001@gmail.com",
    },
];

const socialLinks = [
    {
        name: "GitHub",
        icon: FiGithub,
        link: "https://github.com/AbuSufian-official",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        link: "https://www.linkedin.com/in/abusufian001/",
    },
];

const highlights = [
    { icon: FiClock, label: "Replies within 24 hours" },
    { icon: FiGlobe, label: "Remote friendly" },
    { icon: FiZap, label: "Available for new projects" },
];

const labelStyles =
    "text-[10px] font-black uppercase tracking-[0.18em] text-[#5b7391]";

const fieldStyles =
    "w-full rounded-xl border border-white/80 bg-white/80 px-4 text-sm font-medium text-[#102b4c] shadow-sm shadow-[#087df5]/5 outline-none transition-all duration-300 placeholder:text-[#8ba3bd] hover:border-[#8fd8ff] focus:border-[#087df5] focus:bg-white focus:ring-4 focus:ring-[#087df5]/10 aria-invalid:border-red-400 aria-invalid:ring-red-200/50";

export default function ContactSection() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

const data=Object.fromEntries(formData.entries())
console.log(data)


    };

    return (
        <main
            id="contact"
            className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#e4f1ff] via-[#f5faff] to-[#9bd5ff] text-[#102b4c]"
        >
            {/* ================= Background Design ================= */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
                aria-hidden="true"
            >
                {/* Soft brand wash */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(4,165,255,0.16),transparent_38%),radial-gradient(circle_at_84%_78%,rgba(8,125,245,0.16),transparent_40%)]" />

                {/* Geometric grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,125,245,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,125,245,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

                {/* Dotted pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#087df5_0.9px,transparent_0.9px)] bg-[size:24px_24px] opacity-[0.1]" />

                {/* Big rotating ring — top left */}
                <div className="about-deco absolute -left-52 -top-56 h-[520px] w-[520px] animate-[spin-slow_70s_linear_infinite] rounded-full border-[70px] border-[#75c7ff]/35" />

                {/* Dashed ring — right */}
                <div className="about-deco absolute -right-40 top-24 h-[440px] w-[440px] animate-[spin-slow_48s_linear_infinite_reverse] rounded-full border-2 border-dashed border-[#087df5]/25" />

                {/* Breathing glows */}
                <div className="about-deco absolute -left-24 top-1/3 h-72 w-72 animate-[float-y_9s_ease-in-out_infinite] rounded-full bg-[#53baff]/20 blur-[100px]" />

                <div className="about-deco absolute -right-24 bottom-10 h-[420px] w-[420px] animate-[float-y_11s_ease-in-out_infinite_1s] rounded-full bg-[#8bcfff]/25 blur-[110px]" />

                <div className="about-deco absolute bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 animate-[glow-pulse_7s_ease-in-out_infinite] rounded-full bg-[#bfe4ff]/30 blur-[90px]" />

                {/* Glass cubes */}
                <div className="about-deco absolute left-[9%] top-[22%] hidden h-12 w-12 animate-[spin-slow_22s_linear_infinite] rounded-xl border border-white/80 bg-gradient-to-br from-white/70 to-[#62caff]/30 shadow-[0_0_20px_rgba(0,145,255,0.25)] backdrop-blur-md lg:block" />

                <div className="about-deco absolute bottom-[26%] right-[8%] hidden h-10 w-10 animate-[spin-slow_18s_linear_infinite_reverse] rounded-xl border border-white/80 bg-gradient-to-br from-white/70 to-[#62caff]/30 shadow-[0_0_20px_rgba(0,145,255,0.25)] backdrop-blur-md lg:block" />

                {/* Floating bubbles */}
                <span className="about-deco absolute bottom-28 left-[26%] h-2 w-2 animate-[bubble-float_4.5s_ease-in-out_infinite] rounded-full bg-white/80" />

                <span className="about-deco absolute bottom-44 right-[24%] h-3 w-3 animate-[bubble-float_6s_ease-in-out_infinite_1.2s] rounded-full bg-white/70" />

                <span className="about-deco absolute bottom-20 right-[38%] h-1.5 w-1.5 animate-[bubble-float_5.2s_ease-in-out_infinite_0.6s] rounded-full bg-[#8fd8ff]/90" />

                <span className="about-deco absolute right-[16%] top-28 h-2.5 w-2.5 animate-[bubble-float_7s_ease-in-out_infinite_0.9s] rounded-full bg-[#087df5]/50" />

                {/* Glowing accent dot */}
                <div className="absolute left-[14%] top-[62%] h-2 w-2 rounded-full bg-[#087df5] shadow-[0_0_20px_5px_rgba(8,125,245,0.25)]" />
            </div>

            <section className="relative z-10 mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                {/* ================= Section Heading ================= */}
                <header className="mx-auto max-w-[720px] text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#087df5] shadow-sm shadow-[#087df5]/10 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#087df5]" />
                        Get in touch
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-[#102b4c] sm:text-5xl lg:text-[56px]">
                        Let&apos;s work{" "}
                        <span className="bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                            together.
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#425b79] sm:text-base">
                        Have a project in mind or looking for a dedicated
                        developer? Tell me what you&apos;re building and let&apos;s
                        turn it into something people love to use.
                    </p>

                    {/* Quick highlights */}
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <span
                                    key={item.label}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-3.5 py-2 text-[11px] font-bold text-[#425b79] shadow-sm backdrop-blur-md"
                                >
                                    <Icon className="text-[#087df5]" />
                                    {item.label}
                                </span>
                            );
                        })}
                    </div>
                </header>

                {/* ================= Contact Grid ================= */}
                <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-7">
                    {/* ================= Left: Contact Information ================= */}
                    <aside className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-6 shadow-[0_10px_40px_rgba(35,125,210,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#5cc6ff] hover:shadow-[0_24px_60px_rgba(8,125,245,0.2)] sm:p-8">
                        {/* Card decoration */}
                        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#8fd8ff]/35 blur-[80px] transition-colors duration-500 group-hover:bg-[#5cc6ff]/40" />

                        <div className="relative z-10">
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#087df5]">
                                Contact details
                            </span>

                            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#102b4c] sm:text-3xl">
                                Get In Touch
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-[#425b79]">
                                Feel free to reach out. I&apos;m always happy to
                                discuss new projects and opportunities.
                            </p>

                            {/* Contact items */}
                            <div className="mt-7 space-y-3">
                                {contactInfo.map((item) => {
                                    const Icon = item.icon;
                                    const isExternal = item.link.startsWith("http");

                                    return (
                                        <a
                                            key={item.title}
                                            href={item.link}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noreferrer" : undefined}
                                            className="group/item flex items-center gap-4 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-sm shadow-[#087df5]/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8fd8ff] hover:bg-white hover:shadow-lg hover:shadow-[#087df5]/10"
                                        >
                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/80 bg-white/85 text-lg text-[#087df5] shadow-sm transition-all duration-300 group-hover/item:scale-105 group-hover/item:bg-gradient-to-br group-hover/item:from-[#087df5] group-hover/item:to-[#04a5ff] group-hover/item:text-white group-hover/item:shadow-[0_8px_18px_rgba(8,125,245,0.4)]">
                                                <Icon />
                                            </span>

                                            <span className="min-w-0 flex-1">
                                                <span className="mb-1 block text-[10px] font-black tracking-[0.16em] text-[#8ba3bd]">
                                                    {item.title}
                                                </span>

                                                <span className="block break-words text-sm font-bold text-[#294d72] transition-colors duration-300 group-hover/item:text-[#087df5]">
                                                    {item.value}
                                                </span>
                                            </span>

                                            <FiArrowUpRight className="shrink-0 text-[#8ba3bd] transition-all duration-300 group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:text-[#087df5]" />
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Social links */}
                            <div className="mt-7">
                                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#5b7391]">
                                    Connect with me
                                </p>

                                <div className="flex flex-wrap gap-2.5">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;

                                        return (
                                            <a
                                                key={social.name}
                                                href={social.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group/social inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2.5 text-xs font-bold text-[#294d72] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8fd8ff] hover:bg-white hover:text-[#087df5] hover:shadow-md"
                                            >
                                                <Icon className="text-sm" />
                                                {social.name}
                                                <FiArrowUpRight className="text-[11px] transition-transform duration-300 group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-white/80 bg-gradient-to-r from-white/85 to-[#e4f4ff]/80 p-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#087df5] to-[#04a5ff] text-lg text-white shadow-[0_6px_16px_rgba(8,125,245,0.35)]">
                                    <FiCheckCircle />
                                </span>

                                <span>
                                    <span className="block text-sm font-black text-[#102b4c]">
                                        Available for new projects
                                    </span>

                                    <span className="mt-0.5 block text-xs text-[#5b7391]">
                                        Let&apos;s create something meaningful.
                                    </span>
                                </span>
                            </div>
                        </div>
                    </aside>

                    {/* ================= Right: Contact Form ================= */}
                    <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-6 shadow-[0_10px_40px_rgba(35,125,210,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-[#5cc6ff] hover:shadow-[0_24px_60px_rgba(8,125,245,0.2)] sm:p-8">
                        {/* Top gradient accent */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#087df5] via-[#04a5ff] to-[#8fd8ff]" />

                        {/* Card decoration */}
                        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#bfe4ff]/45 blur-[90px]" />

                        <div className="relative z-10">
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#087df5]">
                                Have a project?
                            </span>

                            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#102b4c] sm:text-3xl">
                                Send Me a Message
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-[#425b79]">
                                Tell me about your project, ideas, or anything
                                you&apos;d like to discuss.
                            </p>

                            {/* Form */}
                            <Form
                                className="mt-7 flex flex-col gap-5"
                                onSubmit={handleSubmit}
                            >
                                {/* First Name & Last Name */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <TextField
                                        name="firstName"
                                        isRequired
                                        className="flex flex-col gap-2"
                                    >
                                        <Label className={labelStyles}>
                                            First Name
                                        </Label>

                                        <Input
                                            placeholder="Your first name"
                                            autoComplete="given-name"
                                            className={`${fieldStyles} h-12`}
                                        />
                                    </TextField>

                                    <TextField
                                        name="lastName"
                                        className="flex flex-col gap-2"
                                    >
                                        <Label className={labelStyles}>
                                            Last Name
                                        </Label>

                                        <Input
                                            placeholder="Your last name"
                                            autoComplete="family-name"
                                            className={`${fieldStyles} h-12`}
                                        />
                                    </TextField>
                                </div>

                                {/* Email */}
                                <TextField
                                    name="email"
                                    type="email"
                                    isRequired
                                    className="flex flex-col gap-2"
                                >
                                    <Label className={labelStyles}>
                                        Email Address
                                    </Label>

                                    <Input
                                        type="email"
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        className={`${fieldStyles} h-12`}
                                    />
                                </TextField>

                                {/* Subject */}
                                <TextField
                                    name="subject"
                                    isRequired
                                    className="flex flex-col gap-2"
                                >
                                    <Label className={labelStyles}>
                                        Subject
                                    </Label>

                                    <Input
                                        placeholder="e.g. Website project, UI/UX design, Collaboration"
                                        className={`${fieldStyles} h-12`}
                                    />
                                </TextField>

                                {/* Message */}
                                <TextField
                                    name="message"
                                    isRequired
                                    className="flex flex-col gap-2"
                                >
                                    <Label className={labelStyles}>
                                        Your Message
                                    </Label>

                                    <TextArea
                                        rows={6}
                                        placeholder="Tell me about your project, scope, goals, and timeline..."
                                        className={`${fieldStyles} min-h-[160px] resize-y py-3`}
                                    />

                                    <Description className="text-[11px] font-medium text-[#8ba3bd]">
                                        Share as much detail as you can — it helps
                                        me reply with a useful plan.
                                    </Description>
                                </TextField>

                                {/* Submit button */}
                                <Button
                                    type="submit"
                                    className="group/btn mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#087df5] to-[#04a5ff] px-6 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_10px_25px_rgba(8,125,245,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(8,125,245,0.45)]"
                                >
                                    Send Message
                                    <FiSend className="text-base transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-1" />
                                </Button>

                                <p className="text-center text-xs text-[#8ba3bd]">
                                    I&apos;ll get back to you as soon as possible.
                                </p>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
