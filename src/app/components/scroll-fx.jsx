"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   SCROLL FX
   - Lenis smooth scrolling (whole website)
   - GSAP scroll reveals for every page
   - Load-in animations for above-the-fold content
   - Gentle parallax on background decorations
   - Respects prefers-reduced-motion
   ========================================== */

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Next keeps previously visited pages mounted but hidden; skip those. */
const isVisible = (el) =>
    el instanceof HTMLElement && el.getClientRects().length > 0;

/* Elements that must not be animated by GSAP because an existing
   CSS reveal already owns them, or because they are hidden helpers. */
const isAnimatable = (el) =>
    isVisible(el) &&
    !el.closest(".reveal") &&
    el.dataset.gsapIgnore !== "true";

/* ---------- Scroll-triggered group reveal ---------- */
function revealGroup(trigger, elements, { stagger = 0.08, y = 40, delay = 0 } = {}) {
    if (!trigger || !elements.length) return;

    gsap.set(elements, { opacity: 0, y });

    let played = false;

    const play = () => {
        if (played) return;
        played = true;

        gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger,
            delay,
            overwrite: true,
            onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
        });
    };

    /* If the block is already in view (e.g. top of a new page), play
       immediately instead of waiting for a scroll event. */
    if (trigger.getBoundingClientRect().top < window.innerHeight * 0.88) {
        play();
        return;
    }

    ScrollTrigger.create({
        trigger,
        start: "top 88%",
        once: true,
        onEnter: play,
    });
}

/* ---------- Load-in group (above the fold) ---------- */
function loadGroup(elements, { stagger = 0.08, y = 28, delay = 0.05 } = {}) {
    if (!elements.length) return;

    gsap.fromTo(
        elements,
        { opacity: 0, y },
        {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger,
            delay,
            clearProps: "transform,opacity",
        }
    );
}

/* ---------- Load-in with a soft scale (portrait / hero media) ---------- */
function loadScale(el) {
    if (!el) return;

    gsap.fromTo(
        el,
        { opacity: 0, scale: 0.94, y: 22 },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.1,
            clearProps: "transform,opacity",
        }
    );
}

/* ---------- Background decoration parallax ---------- */
function setupParallax() {
    const nodes = new Set([
        ...document.querySelectorAll("main .pointer-events-none.absolute"),
        ...document.querySelectorAll("main .about-deco"),
        ...document.querySelectorAll("footer > .pointer-events-none.absolute"),
        ...document.querySelectorAll("footer .about-deco"),
    ]);

    let index = 0;

    nodes.forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        if (!isVisible(el)) return;
        if (el.closest("a, button, article, aside, form, header, .reveal, .mouse-glow")) return;
        if (el.classList.contains("mouse-glow")) return;
        if (/\banimate-/.test(el.className)) return;
        if (/(^|\s)inset-0(\s|$)/.test(el.className)) return;
        if (el.querySelector("svg")) return; /* leave the footer wave stack alone */

        /* Only parallax decorations attached directly to a section,
           page wrapper, or a dedicated aria-hidden background layer. */
        const parent = el.parentElement;
        if (!parent) return;

        const attachedToLayout =
            parent.matches("section, main, footer, #home") ||
            parent.getAttribute("aria-hidden") === "true";

        if (!attachedToLayout) return;

        const trigger =
            el.closest("section, footer, #home") || el.closest("main") || el;
        const distance = 38 + (index % 3) * 18;
        const direction = index % 2 === 0 ? -1 : 1;

        index += 1;

        gsap.to(el, {
            y: direction * distance,
            ease: "none",
            scrollTrigger: {
                trigger,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
            },
        });
    });
}

export default function ScrollFX() {
    const pathname = usePathname();
    const lenisRef = useRef(null);
    const previousPath = useRef(null);

    /* ---------- Smooth scrolling (Lenis + GSAP ticker) ---------- */
    useEffect(() => {
        if (prefersReducedMotion()) return;

        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.4,
        });

        lenisRef.current = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        /* Smooth-scroll in-page anchor links (navbar, "View Projects", etc.) */
        const handleAnchorClick = (event) => {
            if (
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            const anchor = event.target.closest?.('a[href^="#"]');
            if (!anchor) return;

            const hash = anchor.getAttribute("href");
            if (!hash || hash === "#") return;

            let target;
            try {
                target = document.querySelector(hash);
            } catch {
                return;
            }

            if (!target) return;

            event.preventDefault();
            lenis.scrollTo(target, { offset: -88, duration: 1.2 });
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
            gsap.ticker.remove(raf);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    /* ---------- Per-page animations ---------- */
    useEffect(() => {
        const reduced = prefersReducedMotion();
        const previous = previousPath.current;
        previousPath.current = pathname;

        /* Start every client-side navigation at the top (Lenis-aware). */
        if (previous !== null && previous !== pathname) {
            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
        }

        if (reduced) {
            ScrollTrigger.refresh();
            return;
        }

        const ctx = gsap.context(() => {
            /* Above-the-fold entrance animations */
            document.querySelectorAll("[data-gsap-load-stagger]").forEach((group) => {
                if (!isVisible(group)) return;
                loadGroup(Array.from(group.children).filter(isAnimatable));
            });

            document.querySelectorAll("[data-gsap-load]").forEach((el) => {
                if (!isVisible(el)) return;
                if (el.dataset.gsapLoad === "scale") {
                    loadScale(el);
                } else {
                    loadGroup([el]);
                }
            });

            /* Scroll-triggered staggered groups */
            document.querySelectorAll("[data-gsap-stagger]").forEach((group) => {
                if (!isVisible(group)) return;
                const children = Array.from(group.children).filter(isAnimatable);
                revealGroup(group, children);
            });

            /* Individual scroll reveals */
            document.querySelectorAll("[data-gsap]").forEach((el) => {
                if (!isAnimatable(el)) return;
                revealGroup(el, [el]);
            });

            setupParallax();
        });

        /* Layout can shift after images/fonts settle — recalculate. */
        const refresh = () => ScrollTrigger.refresh();
        const refreshTimer = window.setTimeout(refresh, 250);
        window.addEventListener("load", refresh, { once: true });

        return () => {
            window.clearTimeout(refreshTimer);
            window.removeEventListener("load", refresh);
            ctx.revert();
        };
    }, [pathname]);

    return null;
}
