import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Projects | Sanchitha Prasad — Software Engineer",
  description:
    "Software projects by Sanchitha Prasad — including AromaPOS, Rental ERP and Evolve Corporate Platform. Real systems, technical challenges and practical solutions.",
};

const projects = [
  {
    number: "01",
    title: "AromaPOS",
    label: "Multi-Tenant POS & Backoffice",
    description:
      "A restaurant POS and BackOffice platform designed around multi-tenancy, branches, POS operations, inventory, recipes/BOM, permissions and offline scenarios.",
    tags: [".NET", "ASP.NET Core", "React", "SQL Server", "CQRS", "Clean Architecture"],
    image: "/aromapos-new.jpg",
    href: "/projects/aromapos",
  },
  {
    number: "02",
    title: "Rental ERP — Baseplan",
    label: "Enterprise Business System",
    description:
      "Enterprise rental and equipment management platform covering Sales, Rentals, Service, Parts, Financials, integrations and complex business rules.",
    tags: [".NET", "Baseplan ERP", "Web APIs", "SQL Server", "Business Workflows"],
    image: "/rental-erp-new.jpg",
    href: "/projects/rental-erp",
  },
  {
    number: "03",
    title: "Evolve Corporate & Business Solutions",
    label: "Corporate Digital Platform · Ongoing Project",
    description:
      "A modern corporate digital platform and business solution suite built for finance, advisory, transformation services and structured digital publishing.",
    tags: ["React", "CMS", "SEO", "Ongoing Project", "Content Architecture"],
    image: "/evolve-new.jpg",
    href: "/projects/evolve",
  },
  {
    number: "04",
    title: "SriATM — Crypto Exchange House",
    label: "Financial Exchange Platform",
    description:
      "Sri Lanka's 1st Crypto Exchange House developed using Laravel, featuring secure transaction processing, wallet integration, user access management and real-time exchange rates.",
    tags: ["Laravel", "PHP", "Crypto Exchange", "Web APIs", "Financial Systems"],
    image: "/sriatm.jpg",
    href: "/projects/sriatm",
  },
  {
    number: "05",
    title: "Tequila POS",
    label: "Specialized Hospitality POS Terminal",
    description:
      "A specialized point-of-sale desktop terminal and management solution designed for bars, taquerias, and hospitality venues, featuring rapid order entry, tab tracking, bottle inventory and hardware integrations.",
    tags: ["C#", ".NET", "Desktop POS", "SQL Server", "Hardware Integration"],
    image: "/tequila-pos.jpg",
    href: "/projects/tequila-pos",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Header */}
        <section className="bg-[#F8F7F4] pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel label="Selected Work" />
              <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.08] mb-6">
                Projects I&apos;ve built.
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                Real systems, technical challenges and practical solutions. Each project represents
                real engineering decisions made in the context of real business requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Projects List */}
        <section className="py-16 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 100}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Approach note */}
        <section className="py-16 bg-[#F8F7F4] border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-4">A Note on Case Studies</p>
              <p className="text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
                Each case study focuses on the engineering thinking behind the project — the
                problem, the architecture decisions, the challenges and the practical outcomes. No
                invented metrics, no exaggerated claims. Just the real engineering process.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
