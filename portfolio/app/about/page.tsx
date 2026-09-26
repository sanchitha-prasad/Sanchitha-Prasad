import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import TechTag from "@/components/TechTag";
import { UserIcon, BookOpenIcon, LayersIcon } from "@/components/Icons";
import { getAssetUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About | Sanchitha Prasad — Software Engineer",
  description:
    "Learn about Sanchitha Prasad, a Software Engineer with 5+ years of experience in .NET, React, APIs, databases and enterprise business systems.",
};

const skillGroups = [
  {
    title: "Backend & Core Engineering",
    icon: "⚙️",
    skills: ["C#", "VB.NET", "ASP.NET Core", "All .NET Stack", "Laravel", "PHP", "Node.js", "Java"],
  },
  {
    title: "Frontend & Web",
    icon: "🖥️",
    skills: ["React", "Next.js", "Angular", "JavaScript", "TypeScript", "HTML5 & CSS3"],
  },
  {
    title: "Databases & Data Systems",
    icon: "🗄️",
    skills: ["SQL Server", "MySQL", "MongoDB", "SQL Query Optimization", "Data Modelling"],
  },
  {
    title: "Application Domains",
    icon: "📱",
    skills: ["Desktop Applications", "Mobile Applications", "Web Applications", "REST APIs", "Enterprise ERP & POS"],
  },
  {
    title: "Architecture & Practices",
    icon: "🏗️",
    skills: ["Clean Architecture", "CQRS", "Multi-Tenancy", "Role-Based Access Control", "Agile & Git"],
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero */}
        <section className="bg-[#F8F7F4] pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel label="About Me" />
              <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.08] mb-6">
                I enjoy turning complex requirements into simple, maintainable software.
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                Software Engineer with 5+ years of experience in desktop, mobile, and
                enterprise application development.
              </p>
            </div>
          </div>
        </section>

        {/* Bio + Portrait */}
        <section className="py-20 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              {/* Portrait */}
              <ScrollReveal>
                <div className="lg:sticky lg:top-28">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E4E2DC] max-w-xs mx-auto lg:mx-0 group">
                    <img
                      src={getAssetUrl("/sanchitha-prasad.jpg")}
                      alt="Sanchitha Prasad — Software Engineer"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ borderRadius: "16px", display: "block" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/50 to-transparent text-white">
                      <p className="font-bold text-base leading-tight text-white">Sanchitha Prasad</p>
                      <p className="text-xs text-blue-300 font-medium">Software Engineer · 5+ Yrs Exp</p>
                    </div>
                  </div>
                  {/* Quick facts */}
                  <div className="mt-6 p-5 bg-[#F1F0ED] rounded-xl border border-[#E4E2DC] max-w-xs mx-auto lg:mx-0">
                    <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-4">Quick Facts</p>
                    <div className="space-y-3">
                      {[
                        { label: "Experience", value: "5+ Years" },
                        { label: "Backend Stack", value: ".NET, Laravel, Node, Java" },
                        { label: "Frontend", value: "React, Next.js, Angular" },
                        { label: "Databases", value: "SQL Server, MySQL, MongoDB" },
                        { label: "Applications", value: "Desktop, Mobile & Web" },
                      ].map((f) => (
                        <div key={f.label} className="flex justify-between items-center">
                          <span className="text-xs text-[#9CA3AF]">{f.label}</span>
                          <span className="text-xs font-semibold text-[#1A1A1A]">{f.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Bio text */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-lg text-[#374151] leading-relaxed mb-6">
                      I&apos;m Sanchitha Prasad, a Software Engineer with over 5 years of
                      professional experience building desktop applications, mobile solutions, web platforms, and enterprise software.
                    </p>
                    <p className="text-[#4B5563] leading-relaxed mb-6">
                      My work spans the full application development lifecycle — from understanding
                      business requirements to designing data models, building REST APIs, developing
                      responsive frontend interfaces and supporting production systems. I&apos;ve engineered solutions
                      ranging from POS terminals and ERP systems to crypto exchange houses and corporate web platforms.
                    </p>
                    <p className="text-[#4B5563] leading-relaxed mb-6">
                      On the backend, I specialize across the entire <strong>.NET Stack (C#, VB.NET, ASP.NET Core)</strong>, 
                      <strong>Laravel / PHP</strong>, <strong>Node.js</strong>, and <strong>Java</strong>. I apply architectural patterns 
                      like Clean Architecture and CQRS to build robust, maintainable backend infrastructure.
                    </p>
                    <p className="text-[#4B5563] leading-relaxed mb-6">
                      On the frontend and database layers, I work with <strong>React</strong>, <strong>Next.js</strong>, 
                      and <strong>Angular</strong>, paired with relational and NoSQL databases including 
                      <strong>SQL Server</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>.
                    </p>
                    <p className="text-[#4B5563] leading-relaxed mb-8">
                      I&apos;m especially interested in the challenge of turning complex business
                      processes into clear technical designs — thinking about data models,
                      permission systems, integrations and edge cases before writing a line of
                      implementation code.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: <LayersIcon size={20} />, title: "Architecture", desc: "Design-first approach to building systems" },
                      { icon: <BookOpenIcon size={20} />, title: "Continuous Learning", desc: "Always exploring new patterns and technologies" },
                      { icon: <UserIcon size={20} />, title: "Business Focus", desc: "Understanding the problem before the solution" },
                    ].map((item) => (
                      <div key={item.title} className="p-4 bg-[#F8F7F4] border border-[#E4E2DC] rounded-xl">
                        <div className="text-[#2563EB] mb-2">{item.icon}</div>
                        <p className="text-sm font-bold text-[#1A1A1A] mb-1">{item.title}</p>
                        <p className="text-xs text-[#6B7280]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 bg-[#F8F7F4]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel label="Technical Skills" />
              <h2 className="text-4xl font-black text-[#1A1A1A] mb-12">What I work with.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group, i) => (
                <ScrollReveal key={group.title} delay={i * 80}>
                  <div className="bg-white border border-[#E4E2DC] rounded-2xl p-6 hover:border-[#2563EB]/30 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl">{group.icon}</span>
                      <h3 className="text-sm font-bold text-[#1A1A1A] tracking-wide">
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <TechTag key={skill} label={skill} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={300}>
              <div className="mt-6 bg-[#0D1B2A] text-white rounded-2xl p-6">
                <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-3">Continuous Learning</p>
                <div className="flex flex-wrap gap-2">
                  {["Software Architecture", "System Design", "Cloud Technologies", "AI-Assisted Development", "Modern Web Development", "Enterprise Application Development"].map((s) => (
                    <span key={s} className="px-3 py-1.5 text-xs font-medium bg-[#162539] border border-[#1E3A52] text-[#9CA3AF] rounded-lg">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Education */}
        <section className="py-20 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel label="Education" />
              <h2 className="text-4xl font-black text-[#1A1A1A] mb-10">Academic Background.</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="max-w-2xl">
                <div className="p-8 bg-[#F8F7F4] border border-[#E4E2DC] rounded-2xl">
                  <p className="text-xs font-bold text-[#2563EB] tracking-widest uppercase mb-3">Degree</p>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
                    Bachelor of Science in Information &amp; Communication Technology
                  </h3>
                  <p className="text-[#4B5563] font-medium mb-1">SIBA University</p>
                  <p className="text-sm text-[#9CA3AF] font-mono mb-6">[Graduation Year]</p>
                  <p className="text-sm text-[#6B7280]">
                    Relevant coursework includes software engineering, databases, systems design,
                    programming and information technology management.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
