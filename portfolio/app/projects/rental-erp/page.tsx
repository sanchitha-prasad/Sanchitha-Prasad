import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import { ArrowLeftIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Rental ERP — Case Study | Sanchitha Prasad",
  description:
    "Case study: Rental ERP — an enterprise rental management system built with .NET and SQL Server, covering complex business workflows and real-world edge cases.",
};

const requirements = [
  "Rental contract lifecycle management — creation, approval, modification, closure",
  "Asset and fleet tracking — availability, condition, assignment",
  "Transaction management — billing, payments, deposits, adjustments",
  "Business rules and approval workflows",
  "Integration with external financial systems",
  "Complex date and rate calculations — daily, weekly, monthly rates",
  "Reporting — asset utilisation, revenue, outstanding contracts",
  "Role-based access — operations, finance, management",
];

const technicalDecisions = [
  {
    decision: "Domain-driven workflow modelling",
    why: "Rental workflows have complex state machines — contracts move through many states with specific rules at each transition.",
    result: "Each workflow stage is explicitly modelled, reducing ambiguity and preventing invalid state transitions.",
  },
  {
    decision: "Centralised business rule engine for rate calculations",
    why: "Rental rates vary by asset type, duration, customer category and promotional conditions.",
    result: "A consistent calculation layer that applies all applicable rate rules without duplicating logic across features.",
  },
  {
    decision: "API-first architecture for integrations",
    why: "The system needs to share data with external financial and reporting platforms.",
    result: "Clean API boundaries that allow external systems to consume data without tightly coupling to the internal model.",
  },
];

const challenges = [
  {
    challenge: "Complex date-based rate calculations",
    approach: "Build a rate resolution engine that evaluates duration, asset category and applicable rate tables in order.",
    result: "Consistent billing calculations regardless of how contracts are structured.",
  },
  {
    challenge: "Business rule exceptions and edge cases",
    approach: "Document and model edge cases explicitly rather than patching them with special-case code.",
    result: "The system handles real-world variations without fragile conditional chains.",
  },
  {
    challenge: "Integration with financial systems",
    approach: "Use a clearly defined integration layer that translates internal domain data into the format expected by external systems.",
    result: "Decoupled integration that can evolve independently from the core rental logic.",
  },
];

export default function RentalErpCaseStudy() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#2563EB] transition-colors">
            <ArrowLeftIcon size={16} /> Back to Projects
          </Link>
        </div>

        {/* Header */}
        <section className="bg-[#0D1B2A] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#2563EB] tracking-widest uppercase">Enterprise Business System</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-300 font-mono">Baseplan</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] mb-6">Rental ERP — Baseplan</h1>
              <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
                Enterprise rental and heavy equipment management workflows involving Sales, Rentals,
                Service, Parts, Financials, business rules and complex real-world operational edge cases.
              </p>
              <div className="flex flex-wrap gap-2">
                {[".NET", "Baseplan ERP", "Web APIs", "SQL Server", "Fleet & Rentals", "Business Workflows"].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-medium bg-[#162539] border border-[#1E3A52] text-[#9CA3AF] rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-1">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E4E2DC]">
            <Image src="/rental-erp-new.jpg" alt="Baseplan Enterprise ERP platform — Sales, Rentals, Service, Parts & Financials" width={1200} height={675} className="w-full" priority />
          </div>
        </div>

        {/* 01 PROBLEM */}
        <section className="py-20 bg-[#F8F7F4]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="01" label="The Problem" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">Business Context</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { title: "Business Context", desc: "A rental operation manages a fleet of assets across customers and locations, each with different contract terms, rates and operational rules." },
                  { title: "Operational Challenges", desc: "Tracking asset availability, managing complex billing rules, handling contract modifications and integrating with financial systems." },
                  { title: "Technical Needs", desc: "A system that accurately models the rental domain, enforces business rules and maintains data integrity across complex workflows." },
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

        {/* 02 REQUIREMENTS */}
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

        {/* 03 ROLE */}
        <section className="py-16 bg-[#F8F7F4] border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="03" label="My Role" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-8">Contribution</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Requirement Analysis", "API Development", "Database Design", "Business Logic", "Workflow Design", "Troubleshooting", "Integration Support", "Documentation"].map((role) => (
                  <div key={role} className="p-4 bg-white border border-[#E4E2DC] rounded-xl text-center">
                    <p className="text-xs font-semibold text-[#374151]">{role}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 04 ARCHITECTURE */}
        <section className="py-16 bg-[#0D1B2A] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="04" label="Architecture" />
              <h2 className="text-3xl font-black text-white mb-10">System Architecture</h2>
              <div className="flex flex-col items-center gap-0 max-w-sm mx-auto">
                {[
                  { label: "Client Applications", sub: "Web / Integration Consumers" },
                  { label: "REST API", sub: "ASP.NET Core Web API" },
                  { label: "Business Layer", sub: "Workflow & Rule Engine" },
                  { label: "Domain", sub: "Rental Entities & Contracts" },
                  { label: "Integration Layer", sub: "External System Adapters" },
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

        {/* 05 DOMAIN */}
        <section className="py-16 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="05" label="Domain Design" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-10">Core Domain Concepts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-4">Rental Hierarchy</p>
                  <div className="flex flex-col items-start gap-0">
                    {["Customer", "Contract", "Asset / Item", "Rate Schedule", "Transaction", "Invoice"].map((e, i, arr) => (
                      <div key={e} className="flex flex-col">
                        <div className="px-4 py-2 bg-[#F8F7F4] border border-[#E4E2DC] rounded-lg text-sm font-medium text-[#1A1A1A]">{e}</div>
                        {i < arr.length - 1 && <div className="text-xs text-[#9CA3AF] pl-4 py-0.5">↓</div>}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-4">Workflow States</p>
                  <div className="space-y-2">
                    {["Draft", "Pending Approval", "Active", "On Hold", "Closing", "Closed"].map((state) => (
                      <div key={state} className="flex items-center gap-3 px-4 py-2 bg-[#F8F7F4] border border-[#E4E2DC] rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                        <span className="text-sm text-[#374151] font-medium">{state}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 06 DECISIONS */}
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

        {/* 07-08 CHALLENGES */}
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

        {/* 09 OUTCOME */}
        <section className="py-16 bg-[#0D1B2A] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="09" label="Outcome" />
              <h2 className="text-3xl font-black text-white mb-8">Qualitative Outcomes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Clear workflow state management with explicit transition rules",
                  "Consistent rate calculation logic applied across all contract types",
                  "Integration layer decoupled from core business logic",
                  "Maintainable codebase reflecting the rental domain clearly",
                  "Business rules modelled explicitly, reducing edge case surprises",
                  "API-first design enabling future integrations without core changes",
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

        <section className="py-10 bg-[#F8F7F4] border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 flex justify-between">
            <Link href="/projects/aromapos" className="text-sm font-semibold text-[#6B7280] hover:text-[#2563EB] flex items-center gap-2 transition-colors">
              <ArrowLeftIcon size={16} /> AromaPOS
            </Link>
            <Link href="/projects/evolve" className="text-sm font-semibold text-[#2563EB] flex items-center gap-2">
              Next: Evolve →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
