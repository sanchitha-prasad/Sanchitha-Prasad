import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import NoteCard from "@/components/NoteCard";
import SectionLabel from "@/components/SectionLabel";
import TechTag from "@/components/TechTag";
import { ArrowRightIcon, ChevronRightIcon } from "@/components/Icons";

const metrics = [
  { value: "5+", label: "Years Experience" },
  { value: "Web", label: "Web Applications" },
  { value: "Desktop", label: "Enterprise Software" },
  { value: "Mobile", label: "Application Development" },
  { value: "Databases", label: "SQL & Data Architecture" },
];

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

const notes = [
  {
    title: "Understanding BOM in Restaurant POS Systems",
    summary: "How recipes, ingredients and inventory relationships can be modelled in a real POS system.",
    tag: "Architecture",
    href: "/notes/bom-restaurant-pos",
    date: "2024",
  },
  {
    title: "Designing Multi-Tenant Authorization",
    summary: "Thinking about tenants, branches, roles, permissions and access resolution in enterprise systems.",
    tag: "Engineering",
    href: "/notes/multi-tenant-auth",
    date: "2024",
  },
  {
    title: "From Business Requirement to Technical Solution",
    summary: "A practical approach to translating requirements into maintainable software.",
    tag: "Process",
    href: "/notes/requirements-to-solution",
    date: "2024",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>

        {/* ═══════════════════════════════════════════
            HERO — Dark navy with dot grid pattern
        ═══════════════════════════════════════════ */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{ backgroundColor: "#0D1B2A" }}
        >
          {/* Dot-grid background pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #2563EB 1px, transparent 0)",
              backgroundSize: "36px 36px",
            }}
          />
          {/* Glow blobs */}
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
            }}
          />

          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px 24px", width: "100%" }}
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-2 items-center"
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center", width: "100%" }}
            >

              {/* ── Left Column ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 animate-fade-up"
                  style={{
                    borderColor: "rgba(37,99,235,0.4)",
                    backgroundColor: "rgba(37,99,235,0.1)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 16px",
                    borderRadius: "9999px",
                    marginBottom: "24px",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400" style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#60A5FA", display: "inline-block" }} />
                  <span className="text-xs font-bold tracking-widest uppercase text-blue-400" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#60A5FA" }}>
                    Software Engineer
                  </span>
                </div>

                {/* H1 */}
                <h1
                  className="font-black leading-none tracking-tight mb-6 animate-fade-up text-white"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, marginBottom: "24px", color: "#FFFFFF", fontWeight: 900 }}
                >
                  I build software<br />
                  that solves{" "}
                  <span style={{ color: "#3B82F6" }}>real</span>
                  <br />
                  <span style={{ color: "#3B82F6" }}>business</span>{" "}
                  problems.
                </h1>

                {/* Sub */}
                <p
                  className="mb-10 animate-fade-up text-gray-300"
                  style={{
                    color: "#9CA3AF",
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    maxWidth: "520px",
                    marginBottom: "32px",
                  }}
                >
                  Software Engineer with 5+ years of experience developing desktop, mobile, and
                  enterprise business solutions — from understanding complex requirements to designing
                  architecture and delivering maintainable software.
                </p>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row animate-fade-up"
                  style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}
                >
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                    style={{
                      backgroundColor: "#2563EB",
                      color: "#FFFFFF",
                      padding: "14px 28px",
                      borderRadius: "12px",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      boxShadow: "0 0 32px rgba(37,99,235,0.4)",
                    }}
                  >
                    View My Work <ArrowRightIcon size={16} />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold rounded-xl transition-all duration-200"
                    style={{
                      color: "#E5E7EB",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      padding: "14px 28px",
                      borderRadius: "12px",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    About Me <ChevronRightIcon size={16} className="text-gray-400" />
                  </Link>
                </div>

                {/* Stack tags */}
                <div
                  className="flex items-center animate-fade-up"
                  style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}
                >
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6B7280", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                    Primary Stack:
                  </span>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {[".NET Stack", "Laravel / PHP", "React / Next.js", "Node.js", "Angular", "Java", "SQL / MySQL", "MongoDB"].map((t) => (
                      <TechTag key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Right Column — Architecture image ── */}
              <div className="hidden lg:block animate-fade-up" style={{ animationDelay: "0.35s" }}>
                <div className="relative">
                  {/* Glow behind image */}
                  <div
                    className="absolute -inset-4 rounded-3xl"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(37,99,235,0.2) 0%, transparent 70%)",
                    }}
                  />
                  <Image
                    src="/hero-diagram.jpg"
                    alt="Software architecture diagram — Business Problem to Product"
                    width={520}
                    height={390}
                    className="relative rounded-2xl"
                    style={{ boxShadow: "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,235,0.2)" }}
                    priority
                  />

                  {/* Floating card — Engineering flow */}
                  <div
                    className="absolute -bottom-6 -left-6 rounded-xl px-5 py-4"
                    style={{
                      backgroundColor: "#0D1B2A",
                      border: "1px solid rgba(37,99,235,0.3)",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
                    }}
                  >
                    <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#4B5563" }}>
                      Engineering Flow
                    </p>
                    <div className="flex items-center gap-2">
                      {["Problem", "Design", "Build", "Product"].map((s, i, a) => (
                        <div key={s} className="flex items-center gap-2">
                          <span className="text-xs font-semibold" style={{ color: "#E5E7EB" }}>{s}</span>
                          {i < a.length - 1 && (
                            <span style={{ color: "#2563EB", fontSize: "10px" }}>→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom fade to next section */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #0D1B2A)" }}
          />
        </section>

        {/* ═══════════════════════════════════════════
            CAREER SNAPSHOT
        ═══════════════════════════════════════════ */}
        <section style={{ backgroundColor: "#0D1B2A", borderTop: "1px solid #1E3A52" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
              style={{ borderRadius: "16px", overflow: "hidden" }}
            >
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="text-center py-6 px-4"
                  style={{
                    borderLeft: i > 0 ? "1px solid #1E3A52" : "none",
                  }}
                >
                  <p className="font-black text-white mb-1" style={{ fontSize: "2rem" }}>{m.value}</p>
                  <p className="text-xs font-medium tracking-wide" style={{ color: "#6B7280" }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            INTRODUCTION — Light section
        ═══════════════════════════════════════════ */}
        <section style={{ backgroundColor: "#F8F7F4", padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal>
                <SectionLabel label="About" />
                <h2 className="font-black text-4xl lg:text-5xl mb-6 leading-tight" style={{ color: "#1A1A1A" }}>
                  More than<br />writing code.
                </h2>
                <p className="mb-5 text-lg leading-relaxed" style={{ color: "#4B5563" }}>
                  I&apos;m a Software Engineer focused on building software that works well — not
                  only technically, but also within the real business process behind it.
                </p>
                <p className="mb-5 leading-relaxed" style={{ color: "#6B7280" }}>
                  My experience involves web applications, business systems, APIs, databases and
                  enterprise workflows.
                </p>
                <p className="mb-8 leading-relaxed" style={{ color: "#6B7280" }}>
                  I enjoy understanding how a business process works, identifying the underlying
                  problem, designing a practical solution and turning that solution into maintainable
                  software.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-200"
                  style={{ color: "#2563EB" }}
                >
                  More About Me <ArrowRightIcon size={16} />
                </Link>
              </ScrollReveal>

              {/* Right side — Portrait & Mindset */}
              <ScrollReveal delay={100}>
                <div className="flex flex-col gap-6">
                  {/* Photo Portrait Card */}
                  <div
                    className="rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center gap-6"
                    style={{ backgroundColor: "#0D1B2A", border: "1px solid #1E3A52", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  >
                    <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden flex-shrink-0 border border-blue-500/30">
                      <img
                        src="/sanchitha-prasad.jpg"
                        alt="Sanchitha Prasad — Software Engineer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/50 text-blue-300 text-xs font-mono mb-3 w-fit">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Software Engineer
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">Sanchitha Prasad</h3>
                      <p className="text-xs text-[#9CA3AF] mb-4">5+ Years Experience in Web & Enterprise Solutions</p>
                      <div className="flex flex-wrap gap-1.5">
                        {[".NET Stack", "Laravel/PHP", "React", "Node.js", "Java", "SQL/MySQL", "MongoDB"].map((t) => (
                          <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-900/40 border border-blue-800/40 text-blue-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Engineering Mindset Card */}
                  <div
                    className="rounded-2xl p-6 text-white"
                    style={{ backgroundColor: "#0D1B2A", border: "1px solid #1E3A52" }}
                  >
                    <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#9CA3AF" }}>
                      Engineering Mindset
                    </p>
                  {[
                    { step: "01", label: "Understand the Business Problem" },
                    { step: "02", label: "Design Before Implementation" },
                    { step: "03", label: "Keep Complexity Under Control" },
                    { step: "04", label: "Think Beyond the Happy Path" },
                    { step: "05", label: "Build for Change" },
                  ].map((item, i) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.4)" }}
                        >
                          <span className="text-xs font-bold" style={{ color: "#2563EB" }}>{item.step}</span>
                        </div>
                        {i < 4 && <div className="w-px h-6 my-1" style={{ backgroundColor: "#1E3A52" }} />}
                      </div>
                      <div className="pt-1.5">
                        <p className="text-sm font-medium" style={{ color: "#E5E7EB" }}>{item.label}</p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 pt-6" style={{ borderTop: "1px solid #1E3A52" }}>
                    <Link href="/engineering" className="text-xs font-bold transition-colors" style={{ color: "#2563EB" }}>
                      How I Think About Software →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FEATURED PROJECTS
        ═══════════════════════════════════════════ */}
        <section style={{ backgroundColor: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                <div>
                  <SectionLabel label="Selected Work" />
                  <h2 className="font-black text-4xl lg:text-5xl leading-tight" style={{ color: "#1A1A1A" }}>
                    Projects I&apos;ve built.
                  </h2>
                </div>
                <p className="text-sm leading-relaxed sm:text-right max-w-xs" style={{ color: "#9CA3AF" }}>
                  Real systems, technical challenges and practical solutions.
                </p>
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-8">
              {projects.map((project, i) => (
                <ScrollReveal key={project.title} delay={i * 100}>
                  <ProjectCard {...project} />
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={200}>
              <div className="mt-12 text-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border transition-all duration-200"
                  style={{ color: "#2563EB", borderColor: "rgba(37,99,235,0.3)" }}
                >
                  View All Projects <ArrowRightIcon size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SKILLS
        ═══════════════════════════════════════════ */}
        <section style={{ backgroundColor: "#F8F7F4", borderTop: "1px solid #E4E2DC", padding: "80px 0" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel label="Technical Skills" />
              <h2 className="font-black text-3xl mb-10" style={{ color: "#1A1A1A" }}>What I work with.</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  ".NET Stack (C#, VB.NET)", "ASP.NET Core", "Laravel & PHP", "Node.js", "Java",
                  "React", "Next.js", "Angular", "TypeScript & JS",
                  "SQL Server", "MySQL", "MongoDB",
                  "Desktop Applications", "Mobile Applications", "Web Applications",
                  "REST APIs & Web Services", "Clean Architecture", "Enterprise ERP / POS", "MERN Stack", "Database Design",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-center cursor-default transition-all duration-200 bg-white border border-[#E4E2DC] text-[#374151] hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="mt-8 text-center">
                <Link href="/about#skills" className="text-sm font-semibold hover:underline" style={{ color: "#2563EB" }}>
                  Full skill breakdown →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            NOTES
        ═══════════════════════════════════════════ */}
        <section style={{ backgroundColor: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                <div>
                  <SectionLabel label="Engineering Notes" />
                  <h2 className="font-black text-4xl leading-tight" style={{ color: "#1A1A1A" }}>
                    Things I&apos;ve learned.
                  </h2>
                </div>
                <Link href="/notes" className="text-sm font-semibold hover:underline whitespace-nowrap" style={{ color: "#2563EB" }}>
                  All Notes →
                </Link>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {notes.map((note, i) => (
                <ScrollReveal key={note.title} delay={i * 80}>
                  <NoteCard {...note} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA STRIP
        ═══════════════════════════════════════════ */}
        <section style={{ backgroundColor: "#0D1B2A", padding: "96px 0" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#2563EB" }}>
                Get In Touch
              </p>
              <h2 className="font-black text-white mb-5" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.1 }}>
                Let&apos;s build something useful.
              </h2>
              <p className="mb-10 text-lg max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
                Whether you&apos;re looking for a software engineer, have a project in mind, or
                simply want to connect — I&apos;d be happy to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-xl transition-all duration-200"
                  style={{
                    backgroundColor: "#2563EB",
                    boxShadow: "0 0 32px rgba(37,99,235,0.35)",
                  }}
                >
                  Get In Touch <ArrowRightIcon size={16} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold rounded-xl transition-all duration-200"
                  style={{ color: "#E5E7EB", border: "1px solid #1E3A52" }}
                >
                  View My Work
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
