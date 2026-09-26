import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import NoteCard from "@/components/NoteCard";

export const metadata: Metadata = {
  title: "Engineering Notes | Sanchitha Prasad — Software Engineer",
  description:
    "Engineering notes and technical writing by Sanchitha Prasad — things learned while building real software.",
};

const notes = [
  {
    title: "Understanding BOM in Restaurant POS Systems",
    summary:
      "How recipes, ingredients and inventory relationships can be modelled in a restaurant POS system. Exploring the Bill of Materials concept in a food service context.",
    tag: "Architecture",
    href: "/notes/bom-restaurant-pos",
    date: "2024",
  },
  {
    title: "Designing Multi-Tenant Authorization",
    summary:
      "Thinking about tenants, branches, roles, permissions and access resolution. How to design a permission system that scales across multiple tenants and branches.",
    tag: "Engineering",
    href: "/notes/multi-tenant-auth",
    date: "2024",
  },
  {
    title: "What Happens When a POS Goes Offline?",
    summary:
      "Exploring local storage, synchronization and recovery strategies for POS systems that need to operate without a network connection.",
    tag: "Resilience",
    href: "/notes/pos-offline",
    date: "2024",
  },
  {
    title: "Designing ERP Systems Around Business Processes",
    summary:
      "Why understanding workflows matters before designing tables and APIs. How business process analysis changes the way you model data and behaviour.",
    tag: "ERP",
    href: "/notes/erp-business-processes",
    date: "2024",
  },
  {
    title: "From Business Requirement to Technical Solution",
    summary:
      "A practical approach to translating requirements into maintainable software. Moving from understanding to design to implementation without losing clarity.",
    tag: "Process",
    href: "/notes/requirements-to-solution",
    date: "2024",
  },
  {
    title: "Clean Architecture in Practice",
    summary:
      "What Clean Architecture actually looks like in a real .NET application — the good, the trade-offs and where the boundaries matter most.",
    tag: "Architecture",
    href: "/notes/clean-architecture-practice",
    date: "2024",
  },
];

const tags = ["All", "Architecture", "Engineering", "Resilience", "ERP", "Process"];

export default function NotesPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Header */}
        <section className="bg-[#F8F7F4] pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel label="Engineering Notes" />
              <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.08] mb-6">
                Things I&apos;ve learned while building real software.
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                Notes on architecture, patterns, engineering decisions and the messy reality of
                building software that has to work in production.
              </p>
            </div>
          </div>
        </section>

        {/* Tags filter - visual only */}
        <section className="py-6 bg-white border-t border-b border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-2 text-xs font-bold rounded-full border cursor-pointer transition-colors ${
                    tag === "All"
                      ? "bg-[#2563EB] text-white border-[#2563EB]"
                      : "bg-white text-[#6B7280] border-[#E4E2DC] hover:border-[#2563EB]/40 hover:text-[#2563EB]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Notes grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {notes.map((note, i) => (
                <ScrollReveal key={note.title} delay={i * 60}>
                  <NoteCard {...note} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
