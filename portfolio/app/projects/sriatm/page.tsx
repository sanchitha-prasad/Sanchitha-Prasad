import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import { ArrowLeftIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "SriATM Crypto Exchange — Case Study | Sanchitha Prasad",
  description:
    "Case study: SriATM — Sri Lanka's 1st Crypto Exchange House developed using Laravel, featuring secure transaction processing, wallet integration, and real-time exchange rate engine.",
};

const requirements = [
  "Sri Lanka's 1st Crypto Exchange House platform architecture",
  "Laravel MVC backend with secure API endpoints and authentication",
  "Real-time crypto & fiat currency exchange rate calculations",
  "Wallet balance management and multi-currency tracking",
  "BscScan and NFT ecosystem verification integrations",
  "Role-based authorization for admin oversight and user compliance",
  "Transaction logging, audit trail and fraud prevention controls",
  "Responsive web interface optimized for desktop and mobile users",
];

const challenges = [
  {
    challenge: "High-security financial transaction handling",
    approach: "Implement database transactions with atomic row locking, strict input validation, and audit logging for every exchange operation.",
    result: "Zero transaction race conditions and fully traceable audit history across all trades.",
  },
  {
    challenge: "Real-time exchange rate volatility and pricing engines",
    approach: "Design a cached pricing engine using Laravel queue workers to sync live rate data without blocking user web requests.",
    result: "Instantaneous exchange rate rendering and fast trade execution.",
  },
  {
    challenge: "Compliance and user access management",
    approach: "Build role-based permission policies and automated verification checks prior to order placement.",
    result: "Protected financial operations ensuring only verified users execute transactions.",
  },
];

const decisions = [
  {
    decision: "Laravel Framework for core exchange engine",
    why: "Laravel provides built-in ORM security, authentication, queues, and elegant MVC structure ideal for complex financial platforms.",
    result: "Rapid development with enterprise-grade security and maintainable code architecture.",
  },
  {
    decision: "API-driven architecture for external integrations",
    why: "The exchange required integration with blockchain scanners (BscScan), wallet APIs, and live price feeds.",
    result: "Clean separation between core exchange business logic and external network integrations.",
  },
  {
    decision: "Optimistic UI updates with background job queues",
    why: "Financial processing must remain responsive while background tasks process multi-step verification and notifications.",
    result: "Smooth user experience with asynchronous processing handled via Laravel Horizon and queues.",
  },
];

export default function SriAtmCaseStudy() {
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
                <span className="text-xs font-bold text-[#2563EB] tracking-widest uppercase">Financial Exchange Platform</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-300 font-mono">
                  Sri Lanka&apos;s 1st Crypto Exchange
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] mb-6">SriATM — Crypto Exchange House</h1>
              <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
                Sri Lanka&apos;s pioneering crypto exchange house developed with Laravel, delivering
                secure transaction processing, real-time rate engines, wallet management, and blockchain verification.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "PHP", "Crypto Exchange", "Web APIs", "MySQL", "Financial Systems"].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-medium bg-[#162539] border border-[#1E3A52] text-[#9CA3AF] rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-1">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E4E2DC]">
            <Image src="/sriatm.jpg" alt="SriATM — Sri Lanka's 1st Crypto Exchange House" width={1200} height={675} className="w-full" priority />
          </div>
        </div>

        {/* 01 PROBLEM */}
        <section className="py-20 bg-[#F8F7F4]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div>
                <SectionLabel label="01 · The Context" />
                <h2 className="text-3xl font-black text-[#1A1A1A] leading-tight mb-4">
                  Building a secure financial exchange platform from the ground up.
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-6 text-[#4B5563] text-lg leading-relaxed">
                <p>
                  SriATM was designed as Sri Lanka&apos;s first dedicated crypto exchange house, bridging digital assets
                  and financial exchange services with security, transparency, and high reliability.
                </p>
                <p>
                  Developing a financial exchange system requires addressing complex challenges: handling atomic database
                  transactions, enforcing strict security parameters, integrating with external blockchain explorers (BscScan, NFT verification),
                  and maintaining fast, real-time rates for active traders.
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
              <h2 className="text-3xl font-black text-[#1A1A1A] leading-tight">Key platform features and engineering requirements.</h2>
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
              <SectionLabel label="03 · Engineering Architecture" />
              <h2 className="text-3xl font-black text-[#1A1A1A] leading-tight">Laravel architectural decisions & design choices.</h2>
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
              <h2 className="text-3xl font-black text-[#1A1A1A] leading-tight">Overcoming security & rate performance challenges.</h2>
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
            <h2 className="text-3xl font-black mb-4">Interested in custom web & financial exchange platforms?</h2>
            <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
              I bring experience in building secure, scalable applications using Laravel, .NET, APIs, and robust database architecture.
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
