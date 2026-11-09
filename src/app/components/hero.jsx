"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from 'react'

import {
    FaHome,
    FaPaperPlane,
    FaArrowRight,
    FaDownload,
    FaGithub,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
} from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

import { FiMenu, FiX, FiCode } from "react-icons/fi";

function Hero() {

    const technologies = [
        {
            name: "React",
            icon: <SiReact />,
            color: "text-[#08b9e9]",
        },
        {
            name: "NEXT.js",
            icon: <SiNextdotjs />,
            color: "text-[#111827]",
        },
        {
            name: "NodeJS",
            icon: <SiNodedotjs />,
            color: "text-[#399b49]",
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
            color: "text-[#159b54]",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
            color: "text-[#06b6d4]",
        },
        {
            name: "GitHub",
            icon: <FaGithub />,
            color: "text-black",
        },
    ];


    return (
        
<>

            <div
                id="home"
                className="relative overflow-hidden bg-gradient-to-br from-[#e4f1ff] via-[#f5faff] to-[#9bd5ff] text-[#102b4c]"
            >
                {/* ================= BACKGROUND DECORATIONS ================= */}

                {/* Big ring (top left) */}
                <div className="pointer-events-none absolute -left-48 -top-70 h-[480px] w-[480px] rounded-full border-[65px] border-[#75c7ff]/40" />

                {/* Soft glow (right) */}
                <div className="pointer-events-none absolute -right-48 top-40 h-[500px] w-[500px] rounded-full bg-[#8bcfff]/20 blur-[100px]" />

                {/* Soft glow (bottom left) */}
                <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#53baff]/20 blur-[100px]" />

                <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-14 pt-8 sm:px-6 md:pt-12 lg:px-8">




                    {/* ================= HERO SECTION ================= */}

                    <section className="relative mt-2 grid items-center gap-8 px-2 py-6 md:mt-0 md:grid-cols-2 md:gap-6 md:py-8 lg:gap-10">

                        {/* LEFT CONTENT */}

                        <div className=" relative z-20  space-y-4 md:order-1" data-gsap-load-stagger>

                            {/* Availability */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-[#087ff5fb] px-3 py-1 text-[10px] font-bold text-[#ffff]">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-[#ffff]" />
                                Available for Remote Work
                            </div>

                            {/* Heading */}
                            <div>
                                <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-[#102b4c] sm:text-5xl lg:text-[48px] xl:text-[52px]">
                                    Hi, I'm{" "}
                                    <span className="bg-gradient-to-r from-[#087df5] to-[#04a5ff] bg-clip-text text-transparent">
                                        Abu Sufian
                                    </span>
                                </h1>

                                <h2 className="mt-1 text-3xl font-extrabold leading-tight tracking-tight text-[#102b4c] sm:text-4xl lg:text-[35px]">
                                    MERN Stack Developer
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="max-w-[480px] text-sm font-medium leading-6 text-[#425b79] sm:text-base">
                                I build modern, fast and user-friendly web applications
                                with a passion for clean code and great user experience.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap items-center gap-3 pt-1">

                                <Link
                                    href="#projects"
                                    className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#087df5] to-[#079fff] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-blue-300/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    View My Projects
                                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                                </Link>

                                <a
                                    href="/abu-sufian-developer-cv.pdf"
                                    download
                                    className="flex items-center gap-2 rounded-full border border-[#80baff] bg-white/80 px-5 py-3 text-xs font-bold text-[#172d49] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                                >
                                    Download CV
                                    <FaDownload />
                                </a>

                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3 pt-1">

                                {[
                                    {
                                        icon: <FaGithub />,
                                        href: "https://github.com/AbuSufian-official",
                                    },
                                    {
                                        icon: <FaLinkedin />,
                                        href: "https://www.linkedin.com/in/abusufian001/",
                                    },
                                    {
                                        icon: <FaFacebook />,
                                        href: "https://www.facebook.com/abu.sufian.siam.600887",
                                    },
                                    
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white/70 text-base text-[#152d49] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#087df5] hover:text-white"
                                    >
                                        {social.icon}
                                    </a>
                                ))}

                            </div>
                        </div>

                        {/* ================= RIGHT IMAGE ================= */}

                        {/* Height scales with screen size -> image stays responsive */}
                        <div className="relative flex h-[300px] items-end justify-center sm:h-[360px] md:order-2 md:h-[400px] lg:h-[470px]" data-gsap-load="scale">

                            {/* Outer Circle */}
                            <div className="absolute bottom-0 left-1/2 h-[270px] w-[270px] -translate-x-1/2 rounded-full border border-white/50 sm:h-[340px] sm:w-[340px] md:h-[380px] md:w-[380px] lg:h-[450px] lg:w-[450px]" />

                            {/* Profile Image -> fills the box, scales on every screen */}
                            <div className="absolute bottom-0 left-1/2 z-10 h-full w-full max-w-[430px] -translate-x-1/2">
                                <Image
                                    src="/abu-sufian.png"
                                    alt="Abu Sufian - MERN Stack Developer"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain object-bottom drop-shadow-[0_12px_12px_rgba(0,48,100,0.15)]"
                                />
                            </div>

                            {/* Floating Code Card */}
                            <div className="absolute right-0 top-10 z-20 hidden rotate-[-10deg] rounded-2xl border border-white/70 bg-white/45 p-4 shadow-lg shadow-blue-300/30 backdrop-blur-xl sm:block lg:right-2 lg:top-14">

                                <FiCode className="text-3xl font-bold text-[#087df5]" />

                                <div className="mt-2 text-2xl font-black text-[#102b4c]">
                                    MERN
                                </div>

                                <p className="text-[10px] font-semibold text-[#294d72]">
                                    Stack Developer
                                </p>
                            </div>

                            {/* Floating Glass Cube 1 */}
                            <div className="absolute left-0 top-20 h-10 w-10 rotate-[-25deg] rounded-lg border border-white/80 bg-gradient-to-br from-white/70 to-[#62caff]/30 shadow-[0_0_20px_rgba(0,145,255,0.25)] backdrop-blur-md sm:h-14 sm:w-14" />

                            {/* Floating Glass Cube 2 */}
                            <div className="absolute bottom-28 right-2 h-10 w-10 rotate-[25deg] rounded-lg border border-white/80 bg-gradient-to-br from-white/70 to-[#62caff]/30 shadow-[0_0_20px_rgba(0,145,255,0.25)] backdrop-blur-md sm:h-12 sm:w-12" />

                            {/* Floating Glass Cube 3 */}
                            <div className="absolute right-0 top-2 hidden h-14 w-14 rotate-12 rounded-lg border border-white/80 bg-gradient-to-br from-white/70 to-[#62caff]/30 shadow-lg backdrop-blur-md sm:block" />

                        </div>
                    </section>


                    {/* ================= TECHNOLOGY BAR ================= */}

                    <section className="relative z-30 rounded-2xl border border-white/80 bg-white/45 px-4 py-5 shadow-[0_5px_25px_rgba(35,125,210,0.10)] backdrop-blur-xl sm:px-8" data-gsap-load>

                        <div className="grid grid-cols-2 items-center gap-5 sm:grid-cols-3 lg:grid-cols-7 lg:gap-3">

                            {/* Trusted Text */}
                            <div className="flex items-center justify-center gap-4 lg:justify-start">
                                <div>
                                    <p className="text-xs font-extrabold text-[#102b4c]">
                                        Trusted By
                                    </p>
                                    <p className="text-xs font-semibold text-[#102b4c]">
                                        Amazing People
                                    </p>
                                </div>

                                <div className="hidden h-12 w-px bg-blue-400/60 lg:block" />
                            </div>

                            {/* Technology Icons */}
                            {technologies.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <span className={`text-2xl ${tech.color}`}>
                                        {tech.icon}
                                    </span>

                                    <span className="text-xs font-bold text-[#172d49] sm:text-sm">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </section>



                </div>
            </div>
        </>
    )
}

export default Hero
