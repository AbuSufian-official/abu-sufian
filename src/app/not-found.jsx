import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import {
    FaArrowRight,
    FaCompass,
    FaExclamationCircle,
    FaHome,
    FaShieldAlt,
} from "react-icons/fa";

export default async function NotFound() {
    // Render at request time so the current year isn't frozen at build time.
    await connection();

    return (
        <main className="relative flex min-h-[calc(100svh-4.5rem)] flex-1 items-center justify-center overflow-hidden bg-blue-100 px-3 py-10 sm:px-6 sm:py-16">

            {/* Background Decorations */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-sky-300/40 blur-3xl sm:-left-32 sm:-top-32 sm:h-96 sm:w-96" />
                <div className="absolute -bottom-28 -right-16 h-64 w-64 rounded-full bg-blue-300/40 blur-3xl sm:-bottom-40 sm:-right-20 sm:h-96 sm:w-96" />
                <div className="absolute right-[15%] top-[12%] h-14 w-14 rounded-full bg-white/50 blur-xl sm:h-20 sm:w-20" />
                <div className="absolute bottom-[15%] left-[12%] h-16 w-16 rounded-full bg-sky-300/30 blur-xl sm:h-24 sm:w-24" />
            </div>

            {/* Main Glass Card */}
            <section className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/80 px-4 py-10 text-center shadow-[0_20px_80px_rgba(2,124,212,0.15)] backdrop-blur-2xl sm:rounded-[35px] sm:px-12 sm:py-16">

                {/* Top Status */}
                {/* <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 shadow-sm sm:mb-8 sm:px-5">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                    </span>
                    <span className="truncate text-[10px] font-bold tracking-[2px] text-sky-700 sm:text-xs sm:tracking-[3px]">
                        PAGE NOT FOUND
                    </span>
                </div> */}

                {/* Logo and Rotating Status */}
                <div className="relative mx-auto mb-6 flex h-52 w-52 max-w-full items-center justify-center sm:mb-8 sm:h-72 sm:w-72">

                    {/* Rotating Outer Ring */}
                    <div aria-hidden="true" className="absolute inset-0 animate-spin rounded-full border-2 border-dashed border-sky-400/50" />

                    {/* Rotating Circular Text */}
                    <div aria-hidden="true" className="absolute inset-2 animate-[spin_14s_linear_infinite]">
                        <svg viewBox="0 0 250 250" className="h-full w-full">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 125,125 m -108,0 a 108,108 0 1,1 216,0 a 108,108 0 1,1 -216,0"
                                />
                            </defs>
                            <text
                                fill="#0284c7"
                                fontSize="11"
                                fontWeight="bold"
                                letterSpacing="3"
                            >
                                <textPath href="#circlePath">
                                    404 &bull; PAGE NOT FOUND &bull; 404 &bull; PAGE NOT
                                    FOUND &bull;
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* Logo Glow */}
                    <div aria-hidden="true" className="absolute h-32 w-32 animate-pulse rounded-full bg-sky-400/20 blur-2xl sm:h-40 sm:w-40" />

                    {/* Logo Container */}
                    <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white bg-white/90 p-4 shadow-[0_10px_40px_rgba(2,132,199,0.2)] sm:h-40 sm:w-40 sm:p-5">
                        <Image
                            src="/logo.png"
                            alt="Abu Sufian logo"
                            width={150}
                            height={100}
                            priority
                            className="h-auto w-full object-contain"
                        />
                    </div>

                    {/* Floating Compass Icon */}
                    <div aria-hidden="true" className="absolute -right-1 top-6 z-20 flex h-9 w-9 animate-bounce items-center justify-center rounded-full border border-white bg-sky-500 text-white shadow-lg sm:top-12 sm:h-11 sm:w-11">
                        <FaCompass size={14} className="sm:hidden" />
                        <FaCompass size={16} className="hidden sm:block" />
                    </div>

                    {/* Floating Shield */}
                    <div aria-hidden="true" className="absolute -bottom-1 left-1 z-20 flex h-8 w-8 animate-pulse items-center justify-center rounded-full border border-white bg-white text-sky-500 shadow-lg sm:left-3 sm:h-10 sm:w-10">
                        <FaShieldAlt size={14} className="sm:hidden" />
                        <FaShieldAlt size={17} className="hidden sm:block" />
                    </div>
                </div>

                {/* 404 Text */}
                <div className="mb-3">
                    <h1 className="bg-gradient-to-r from-sky-500 via-blue-600 to-sky-400 bg-clip-text text-[clamp(4rem,20vw,8rem)] font-black leading-none tracking-tight text-transparent">
                        404
                    </h1>
                    <h2 className="mt-2 text-xl font-extrabold text-slate-800 sm:text-2xl md:text-3xl">
                        Oops! Lost in Space?
                    </h2>
                </div>

                {/* Description */}
                <p className="mx-auto mb-7 max-w-md px-1 text-sm leading-7 text-slate-600 sm:mb-8 sm:text-base">
                    The page you are looking for doesn&apos;t exist or may have been
                    moved. Don&apos;t worry! Let&apos;s get you back to a safe place.
                </p>

                {/* Page Status */}
                <div className="mx-auto mb-7 flex w-full max-w-sm items-center gap-3 rounded-2xl border border-sky-200/80 bg-white/60 px-4 py-3 text-left shadow-sm sm:mb-8 sm:w-fit sm:px-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                        <FaExclamationCircle size={14} />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                            Page Status
                        </p>
                        <p className="truncate text-sm font-bold text-sky-600">
                            Not Found
                        </p>
                    </div>
                    <span className="ml-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.7)]" />
                </div>

                {/* Go Home Button */}
                <Link
                    href="/"
                    className="group relative mx-auto flex w-full max-w-xs items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(2,132,199,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(2,132,199,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 active:scale-95 sm:px-8 sm:py-4 sm:text-base"
                >
                    <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <FaHome className="relative shrink-0 transition-transform duration-300 group-hover:-translate-y-1" />
                    <span className="relative">GO TO HOME</span>
                    <FaArrowRight className="relative shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>

                {/* Footer */}
                <p className="mt-8 text-[10px] font-medium tracking-wider text-slate-400 sm:mt-10 sm:text-xs">
                    © {new Date().getFullYear()} AB • ALL RIGHTS RESERVED
                </p>
            </section>
        </main>
    );
}
