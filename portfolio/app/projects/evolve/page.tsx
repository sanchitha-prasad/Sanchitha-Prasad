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
  title: "Evolve Corporate Platform — Case Study | Sanchitha Prasad",
  description:
    "Case study: Evolve Corporate & Business Solutions — a modern corporate website and content platform built with React, CMS and SEO-first architecture.",
};

const requirements = [
  "Modern, professional corporate website representing finance and business transformation",
  "SEO-optimised structure — metadata, sitemap, structured content",
  "Scalable content architecture for services, insights and company pages",
  "CMS integration for non-technical content management",
  "Fast performance — Core Web Vitals optimisation",
  "Responsive design across all device sizes",
  "Clear information hierarchy supporting business objectives",
  "Contact and lead capture integration",
];

const challenges = [
  {
    challenge: "SEO architecture for a corporate services site",
    approach: "Plan URL structure, heading hierarchy, semantic HTML and metadata strategy before implementation.",
    result: "A consistently structured site that search engines can index accurately and completely.",
  },
  {
    challenge: "Content management for non-technical users",
    approach: "Choose a CMS with a straightforward editing experience and structured content types that map to the site's design.",
    result: "Content can be updated and expanded without requiring developer involvement.",
  },
  {
    challenge: "Performance on content-heavy pages",
    approach: "Optimise image delivery, implement lazy loading and minimise unnecessary JavaScript execution.",
    result: "Good Core Web Vitals scores and fast perceived page loads.",
  },
];

const decisions = [
  {
    decision: "React-based frontend with CMS backend",
    why: "A JavaScript framework enables component reuse and dynamic content, while a headless CMS separates content from presentation.",
    result: "A maintainable frontend that can consume content from a CMS without rebuilding pages manually.",
  },
  {
    decision: "SEO-first content structure",
    why: "For a corporate services business, organic search is a primary traffic source. SEO cannot be retrofitted.",
    result: "Every page has a clear purpose, well-structured headings and accurate metadata from the start.",
  },
  {
    decision: "Component-based design system",
    why: "Consistency across sections and pages requires reusable building blocks rather than one-off page designs.",
    result: "New pages and sections can be assembled from existing components without diverging from the established design.",
  },
];

export default function EvolveCaseStudy() {
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
                <span className="text-xs font-bold text-[#2563EB] tracking-widest uppercase">Corporate Digital Platform</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Ongoing Project
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] mb-6">Evolve Corporate &amp; Business Solutions</h1>
              <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
                A modern corporate digital platform and business solution suite designed around finance,
                transformation services, SEO, structured content and scalable publishing.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "CMS", "SEO", "Ongoing Project", "Content Architecture"].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-medium bg-[#162539] border border-[#1E3A52] text-[#9CA3AF] rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-1">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image src={getAssetUrl("/evolve-new.jpg")} alt="Evolve Corporate & Business Solutions — Finance, Transformation & Insight" width={1200} height={675} className="w-full" priority />
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
                  { title: "Business Context", desc: "A corporate services firm needed a professional digital presence that could communicate their finance and transformation services clearly." },
                  { title: "Content Challenges", desc: "The team needed to publish and update content regularly without relying on developers for every change." },
                  { title: "Technical Goals", desc: "A fast, SEO-optimised website with a maintainable content architecture and professional design standards." },
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
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-8">Project Requirements</h2>
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
                {["Frontend Development", "Component Architecture", "SEO Implementation", "CMS Integration", "Responsive Design", "Performance", "Content Structure", "Deployment"].map((role) => (
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
              <h2 className="text-3xl font-black text-white mb-10">Content Architecture</h2>
              <div className="flex flex-col items-center gap-0 max-w-sm mx-auto">
                {[
                  { label: "React Application", sub: "Component-based frontend" },
                  { label: "CMS Layer", sub: "Structured content types" },
                  { label: "SEO Layer", sub: "Metadata, sitemap, structured data" },
                  { label: "Image Optimisation", sub: "Responsive images, lazy loading" },
                  { label: "Hosting / CDN", sub: "Fast delivery & deployment" },
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

        {/* 06 DECISIONS */}
        <section className="py-16 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="06" label="Technical Decisions" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-8">Key Engineering Decisions</h2>
              <div className="space-y-5">
                {decisions.map((td, i) => (
                  <ScrollReveal key={td.decision} delay={i * 80}>
                    <div className="p-6 bg-[#F8F7F4] border border-[#E4E2DC] rounded-xl">
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
        <section className="py-16 bg-[#F8F7F4] border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel number="07—08" label="Challenges & Solutions" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-8">Engineering Challenges</h2>
              <div className="space-y-5">
                {challenges.map((c, i) => (
                  <ScrollReveal key={c.challenge} delay={i * 80}>
                    <div className="p-6 bg-white border border-[#E4E2DC] rounded-xl">
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
                  "Professional corporate presence reflecting the brand clearly",
                  "SEO-structured content enabling organic search discoverability",
                  "Content managed independently by non-technical team members",
                  "Component-based design enabling consistent page assembly",
                  "Optimised performance across devices and connection speeds",
                  "Scalable content architecture that grows with the business",
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
            <Link href="/projects/rental-erp" className="text-sm font-semibold text-[#6B7280] hover:text-[#2563EB] flex items-center gap-2 transition-colors">
              <ArrowLeftIcon size={16} /> Rental ERP
            </Link>
            <Link href="/projects" className="text-sm font-semibold text-[#2563EB] flex items-center gap-2">
              All Projects →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
