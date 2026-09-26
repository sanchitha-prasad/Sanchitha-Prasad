import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import { ArrowLeftIcon } from "@/components/Icons";
import { getAssetUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tequila POS — Case Study | Sanchitha Prasad",
  description:
    "Case study: Tequila POS — a specialized hospitality desktop point-of-sale terminal built with C#, .NET, and SQL Server for fast-paced bar, taqueria, and restaurant environments.",
};

const requirements = [
  "Specialized hospitality POS terminal UI tailored for fast-paced bar and Mexican restaurant concepts",
  "Ultra-fast order placement interface with touch-screen optimization and quick modifier buttons",
  "Open bar tab management — customer tab tracking, authorization holds, splitting and merging",
  "Agave & spirits bottle inventory tracking with pour volume measurements and recipe cost calculations",
  "Hardware peripherals integration — receipt printers, cash drawers, barcode scanners, and payment terminals",
  "Offline transaction resiliency ensuring uninterrupted operation during network drops",
  "Role-based manager approvals for voids, discounts, refunds and cash drawer reconciliations",
  "End-of-day sales reporting and register shift balancing",
];

const challenges = [
  {
    challenge: "High-speed order entry under peak bar environment load",
    approach: "Design a touch-first interface with custom desktop rendering controls and keyboard shortcuts requiring minimal taps per order.",
    result: "Reduced average transaction time to under 4 seconds during peak operating hours.",
  },
  {
    challenge: "Hardware peripheral driver stability on POS terminals",
    approach: "Implement an asynchronous hardware communications layer with automatic reconnect logic for printers, serial scales, and card readers.",
    result: "Eliminated POS terminal crashes caused by peripheral disconnects or queue delays.",
  },
  {
    challenge: "Offline operation with background data syncing",
    approach: "Store all transaction data in a local SQLite/SQL Server LocalDB instance and sync asynchronously with back-office servers upon reconnect.",
    result: "100% operational uptime for order taking even during complete local network outages.",
  },
];

const decisions = [
  {
    decision: "C# & .NET for Desktop POS Client Engine",
    why: "Provides native Windows performance, direct hardware API communication, and low-latency UI responsiveness required for touch POS terminals.",
    result: "Smooth, reliable desktop application performance engineered for heavy daily cashier usage.",
  },
  {
    decision: "Event-driven architecture for POS transactions",
    why: "Order item additions, price modifications, kitchen print queues, and display updates must trigger simultaneously without blocking the UI thread.",
    result: "Zero lag during order entry with immediate receipt printing and kitchen display updating.",
  },
  {
    decision: "Local-first database storage pattern",
    why: "Hospitality venues cannot afford transaction delays or downtime if internet connectivity fluctuates.",
    result: "Immediate local write operations with background server synchronization.",
  },
];

export default function TequilaPosCaseStudy() {
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
                <span className="text-xs font-bold text-[#2563EB] tracking-widest uppercase">Specialized Hospitality POS</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 font-mono">
                  Industry-Specific Solution
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] mb-6">Tequila POS</h1>
              <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
                A specialized point-of-sale desktop terminal and management solution designed for bars,
                taquerias, and Mexican concepts — featuring rapid order entry, tab tracking, bottle inventory, and hardware integrations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["C#", ".NET", "Desktop POS", "SQL Server", "Hardware Integration", "Hospitality"].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-medium bg-[#162539] border border-[#1E3A52] text-[#9CA3AF] rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-1">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E4E2DC]">
            <Image src={getAssetUrl("/tequila-pos.jpg")} alt="Tequila POS — Specialized Hospitality Point of Sale Terminal" width={1200} height={675} className="w-full" priority />
          </div>
        </div>

        {/* 01 PROBLEM */}
        <section className="py-20 bg-[#F8F7F4]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div>
                <SectionLabel label="01 · The Context" />
                <h2 className="text-3xl font-black text-[#1A1A1A] leading-tight mb-4">
                  Industry-specific features for high-volume bars and restaurants.
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-6 text-[#4B5563] text-lg leading-relaxed">
                <p>
                  Standard generic POS systems often lack the specialized workflows required for high-volume tequila bars,
                  taquerias, and Mexican concepts — such as pour-level liquor tracking, complex drink modifier trees, fast tab pre-authorizations,
                  and custom terminal layouts.
                </p>
                <p>
                  Tequila POS was engineered as a high-performance desktop POS solution using C# and .NET to deliver sub-second touch responsiveness,
                  flawless receipt and kitchen printer communication, and 100% offline resilience during busy service hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 REQUIREMENTS */}
        <section className="py-20 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <SectionLabel label="02 · Core Capabilities" />
              <h2 className="text-3xl font-black text-[#1A1A1A] leading-tight">Key POS terminal features & operational workflows.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((req, i) => (
                <div key={i} className="p-5 bg-[#F8F7F4] rounded-xl border border-[#E4E2DC] flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm font-medium text-[#374151]">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 ARCHITECTURE & DECISIONS */}
        <section className="py-20 bg-[#F8F7F4] border-t border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <SectionLabel label="03 · Technical Architecture" />
              <h2 className="text-3xl font-black text-[#1A1A1A] leading-tight">Engineering choices for speed, hardware, and uptime.</h2>
            </div>
            <div className="space-y-6">
              {decisions.map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl border border-[#E4E2DC] shadow-sm">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{item.decision}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-bold text-[#6B7280] uppercase text-xs mb-1">Why</p>
                      <p className="text-[#374151] leading-relaxed">{item.why}</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#2563EB] uppercase text-xs mb-1">Outcome</p>
                      <p className="text-[#374151] leading-relaxed">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 CHALLENGES */}
        <section className="py-20 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <SectionLabel label="04 · Technical Challenges" />
              <h2 className="text-3xl font-black text-[#1A1A1A] leading-tight">Solving hardware, latency, and offline resilience.</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {challenges.map((item, i) => (
                <div key={i} className="p-8 bg-[#F8F7F4] rounded-2xl border border-[#E4E2DC] flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-3">Challenge {i + 1}</span>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{item.challenge}</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed mb-6">{item.approach}</p>
                  </div>
                  <div className="pt-4 border-t border-[#E4E2DC]">
                    <p className="text-xs font-bold text-[#10B981] uppercase mb-1">Result</p>
                    <p className="text-xs text-[#374151] font-medium">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0D1B2A] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black mb-4">Looking for specialized POS or desktop software engineering?</h2>
            <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
              I specialize in C#, .NET, desktop applications, POS terminals, and enterprise database integrations.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-[#1D4ED8] transition-colors">
              Let&apos;s Discuss Your Project →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
