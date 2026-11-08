import WorkShowcase from "../components/work-showcase";

/* ==========================================
   PROJECTS PAGE
   Full showcase with tab system, glass cards
   and hover website previews
   ========================================== */

export const metadata = {
    title: "Projects | Abu Sufian",
    description:
        "A curated collection of full-stack web platforms, healthcare systems, and visual brand identities built by Abu Sufian.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-[70vh] bg-gradient-to-br from-[#e4f1ff] via-[#f5faff] to-[#9bd5ff] text-[#102b4c]">
            <WorkShowcase />
        </main>
    );
}
