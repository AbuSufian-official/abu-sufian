"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    FiHome,
    FiSend,
    FiMenu,
    FiX,
} from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/", icon: <FiHome /> },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Articles", href: "#articles" },
        { name: "Uses", href: "#uses" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full px-2 pt-2">
            <div className="mx-auto max-w-[1400px] rounded-2xl border bg-[#ffffff63] border-white/80  px-4 py-2 shadow-[0_3px_15px_rgba(0,115,255,0.12)]">

                <div className="flex h-10 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="bg-gradient-to-b from-[#36b7ff] to-[#0875e9] bg-clip-text text-4xl font-black leading-none text-transparent">
                            <Image src="/logo.png"alt=" " width={65}height={50} />
                        </span>
                        <span className="text-[18px] font-extrabold tracking-tight text-[#1f1e1e]">
                            ABU SUFIAN
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-1.5 rounded-full px-4 py-2.5  font-bold transition-all duration-300 ${index === 0
                                        ? "bg-[#087cf5] text-white shadow-[0_3px_12px_rgba(0,124,245,0.3)]"
                                        : "text-[#172b45] hover:bg-white/70 hover:text-[#087cf5]"
                                    }`}
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Let's Talk Button */}
                    <Link
                        href="#contact"
                        className="hidden items-center gap-2 rounded-full bg-[#087cf5] px-4 py-2.5 text-xs font-bold text-white shadow-[0_3px_12px_rgba(0,124,245,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0068dc] md:flex"
                    >
                        Let's Talk
                        <FiSend className="text-sm" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg bg-[#087cf5] p-2 text-white md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <FiX size={21} /> : <FiMenu size={21} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="mt-3 flex flex-col gap-2 border-t bg-[#ffffffcb] border-blue-200/70 py-3 md:hidden">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${index === 0
                                        ? "bg-[#087cf5] text-white"
                                        : "text-[#172b45] hover:bg-white/70 hover:text-[#087cf5]"
                                    }`}
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#087cf5] px-4 py-3 text-sm font-bold text-white"
                        >
                            Let's Talk <FiSend />
                        </Link>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;
