import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import TechTag from "@/components/TechTag";
import SectionLabel from "@/components/SectionLabel";
import { ArrowLeftIcon } from "@/components/Icons";
import { getAssetUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AromaPOS — Case Study | Sanchitha Prasad",
  description:
    "Case study: AromaPOS — a multi-tenant restaurant POS and BackOffice platform built with .NET, React, CQRS and Clean Architecture.",
};

const requirements = [
  "Multi-tenant architecture — each restaurant group isolated",
  "Multi-branch operation — different branches, different menus and rules",
  "Role-based access — granular permissions per user and branch",
  "POS transaction management — orders, payments, voids, refunds",
  "Recipe and Bill of Materials (BOM) management",
  "Inventory tracking — ingredients and stock levels",
  "Offline POS operation — continue working without a network",
  "Reporting — sales, inventory, transactions by branch and tenant",
];

const technicalDecisions = [
  {
    decision: "Clean Architecture with CQRS",
    why: "Separates business logic from infrastructure and keeps commands and queries distinct as the application grows.",
    result: "Clear boundaries between layers, easier to test and extend independently.",
  },
  {
    decision: "Multi-tenant data isolation at the application layer",
    why: "Each tenant's data must be logically separated without requiring a separate database per tenant.",
    result: "A consistent tenant-scoping pattern applied at the query and command level.",
  },
  {
    decision: "Role-based feature access resolved at runtime",
    why: "Different users and branches require different levels of access, and permissions may change over time.",
    result: "A structured permission-resolution approach that can support future expansion.",
  },
  {
    decision: "Local-first offline mode for POS terminals",
    why: "Restaurant environments are not always reliably connected. The POS must continue operating.",
    result: "Offline transaction storage with synchronisation when connectivity is restored.",
  },
];

const challenges = [
  {
    challenge: "BOM and recipe management complexity",
    approach: "Model ingredients, recipes and sub-recipes as a composable structure that can support nested BOMs.",
    result: "A flexible product-recipe-ingredient hierarchy that accurately reflects real kitchen operations.",
  },
  {
    challenge: "Multi-tenant permission resolution",
    approach: "Design a permission system that resolves access based on tenant, branch and role hierarchy.",
    result: "Users see only what their role and branch permit, consistently enforced across the application.",
  },
  {
    challenge: "Offline POS operation and data synchronisation",
    approach: "Store transactions locally when offline and synchronise with the server when connectivity is restored, with conflict detection.",
    result: "POS terminals operate reliably in environments with intermittent connectivity.",
  },
];

export default function AromaPosCaseStudy() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Back */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#2563EB] transition-colors"
          >
            <ArrowLeftIcon size={16} /> Back to Projects
          </Link>
        </div>

        {/* PROJECT HEADER */}
        <section className="bg-[#0D1B2A] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-xs font-bold text-[#2563EB] tracking-widest uppercase mb-4">
                Multi-Tenant POS &amp; Backoffice
              </p>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] mb-6">AromaPOS</h1>
              <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
                A restaurant POS and BackOffice platform designed around multi-tenancy, branches,
                POS operations, inventory, recipes and Bill of Materials, permissions and offline
                scenarios.
              </p>
              <div className="flex flex-wrap gap-2">
                {[".NET", "ASP.NET Core", "React", "SQL Server", "CQRS", "Clean Architecture"].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-medium bg-[#162539] border border-[#1E3A52] text-[#9CA3AF] rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-1">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={getAssetUrl("/aromapos-new.jpg")}
              alt="AromaPOS dashboard interface"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
          </div>
        </div>

        {/* SECTION 01 — THE PROBLEM */}
        <section className="py-20 bg-[#F8F7F4]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="01" label="The Problem" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">Business Context</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    title: "Business Context",
                    desc: "A restaurant group operates across multiple branches under one ownership structure, each branch potentially having different menus, pricing and staff roles.",
                  },
                  {
                    title: "Operational Challenges",
                    desc: "Managing inventory, recipes, orders and billing across multiple locations with different users and different permission requirements.",
                  },
                  {
                    title: "Technical Requirements",
                    desc: "A system that can support multi-tenant isolation, offline POS operation and complex recipe-to-inventory relationships.",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-6 bg-white border border-[#E4E2DC] rounded-xl">
                    <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 02 — REQUIREMENTS */}
        <section className="py-16 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="02" label="Requirements" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-8">System Requirements</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {requirements.map((r) => (
                  <div key={r} className="flex items-start gap-3 p-4 bg-[#F8F7F4] border border-[#E4E2DC] rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-2" />
                    <p className="text-sm text-[#374151]">{r}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 03 — MY ROLE */}
        <section className="py-16 bg-[#F8F7F4] border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="03" label="My Role" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-8">Contribution</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  "Requirement Analysis",
                  "System Design",
                  "Database Design",
                  "API Development",
                  "Frontend Development",
                  "Architecture",
                  "Troubleshooting",
                  "Technical Documentation",
                ].map((role) => (
                  <div key={role} className="p-4 bg-white border border-[#E4E2DC] rounded-xl text-center">
                    <p className="text-xs font-semibold text-[#374151]">{role}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 04 — ARCHITECTURE */}
        <section className="py-16 bg-[#0D1B2A] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="04" label="Architecture" />
              <h2 className="text-3xl font-black text-white mb-10">System Architecture</h2>
              <div className="flex flex-col items-center gap-0 max-w-sm mx-auto">
                {[
                  { label: "React Application", sub: "Frontend / POS Terminal" },
                  { label: "REST API", sub: "ASP.NET Core" },
                  { label: "Application Layer", sub: "Commands & Queries (CQRS)" },
                  { label: "Domain", sub: "Business Logic & Entities" },
                  { label: "Infrastructure", sub: "Repositories & Integrations" },
                  { label: "SQL Server", sub: "Data Persistence" },
                ].map((layer, i, arr) => (
                  <div key={layer.label} className="flex flex-col items-center w-full">
                    <div className="w-full text-center p-4 bg-[#162539] border border-[#2563EB]/20 rounded-xl hover:border-[#2563EB]/50 transition-colors">
                      <p className="text-sm font-bold text-white">{layer.label}</p>
                      <p className="text-xs text-[#6B7280] mt-0.5">{layer.sub}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex flex-col items-center py-1">
                        <div className="w-px h-4 bg-[#2563EB]/40" />
                        <div className="text-[#2563EB]/60 text-xs">↓</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 05 — DATA DOMAIN */}
        <section className="py-16 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="05" label="Data & Domain" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-10">Domain Concepts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-4">Tenancy Model</p>
                  <div className="flex flex-col items-start gap-0">
                    {["Tenant", "Branch", "Users", "Roles", "Permissions"].map((e, i, arr) => (
                      <div key={e} className="flex flex-col">
                        <div className="px-4 py-2 bg-[#F8F7F4] border border-[#E4E2DC] rounded-lg text-sm font-medium text-[#1A1A1A]">
                          {e}
                        </div>
                        {i < arr.length - 1 && <div className="text-xs text-[#9CA3AF] pl-4 py-0.5">↓</div>}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-4">POS Domain</p>
                  <div className="flex flex-col items-start gap-0">
                    {["Product", "Recipe", "BOM / Ingredients", "Inventory", "Order", "Payment"].map((e, i, arr) => (
                      <div key={e} className="flex flex-col">
                        <div className="px-4 py-2 bg-[#F8F7F4] border border-[#E4E2DC] rounded-lg text-sm font-medium text-[#1A1A1A]">
                          {e}
                        </div>
                        {i < arr.length - 1 && <div className="text-xs text-[#9CA3AF] pl-4 py-0.5">↓</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 06 — TECHNICAL DECISIONS */}
        <section className="py-16 bg-[#F8F7F4] border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="06" label="Technical Decisions" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-8">Key Engineering Decisions</h2>
              <div className="space-y-5">
                {technicalDecisions.map((td, i) => (
                  <ScrollReveal key={td.decision} delay={i * 80}>
                    <div className="p-6 bg-white border border-[#E4E2DC] rounded-xl">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs font-bold text-[#2563EB] tracking-widest uppercase mb-2">Decision</p>
                          <p className="text-sm font-semibold text-[#1A1A1A]">{td.decision}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-2">Why</p>
                          <p className="text-sm text-[#4B5563]">{td.why}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-green-600 tracking-widest uppercase mb-2">Result</p>
                          <p className="text-sm text-[#4B5563]">{td.result}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 07+08 — CHALLENGES & SOLUTIONS */}
        <section className="py-16 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="07—08" label="Challenges & Solutions" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-8">Engineering Challenges</h2>
              <div className="space-y-5">
                {challenges.map((c, i) => (
                  <ScrollReveal key={c.challenge} delay={i * 80}>
                    <div className="p-6 bg-[#F8F7F4] border border-[#E4E2DC] rounded-xl">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs font-bold text-rose-600 tracking-widest uppercase mb-2">Challenge</p>
                          <p className="text-sm font-semibold text-[#1A1A1A]">{c.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-2">Approach</p>
                          <p className="text-sm text-[#4B5563]">{c.approach}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-green-600 tracking-widest uppercase mb-2">Result</p>
                          <p className="text-sm text-[#4B5563]">{c.result}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 09 — OUTCOME */}
        <section className="py-16 bg-[#0D1B2A] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="09" label="Outcome" />
              <h2 className="text-3xl font-black text-white mb-8">Qualitative Outcomes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Clear architectural boundaries between application layers",
                  "Multi-tenant isolation consistently enforced across the system",
                  "Flexible permission model supporting complex branch-user scenarios",
                  "POS terminals operate reliably in offline environments",
                  "Maintainable codebase with clear separation of commands and queries",
                  "Inventory and BOM linked accurately to sales transactions",
                ].map((o) => (
                  <div key={o} className="flex items-start gap-3 p-4 bg-[#162539] border border-[#1E3A52] rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-2" />
                    <p className="text-sm text-[#9CA3AF]">{o}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-10 bg-[#F8F7F4] border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 flex justify-between">
            <Link href="/projects" className="text-sm font-semibold text-[#6B7280] hover:text-[#2563EB] flex items-center gap-2 transition-colors">
              <ArrowLeftIcon size={16} /> All Projects
            </Link>
            <Link href="/projects/rental-erp" className="text-sm font-semibold text-[#2563EB] flex items-center gap-2">
              Next: Rental ERP →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
