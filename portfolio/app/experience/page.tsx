import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Experience | Sanchitha Prasad — Software Engineer",
  description:
    "Professional experience of Sanchitha Prasad — building web applications, business systems and enterprise software across 5+ years.",
};

const responsibilities = [
  "Develop and maintain web-based application features",
  "Analyse business requirements and translate into technical specifications",
  "Design technical solutions and data models",
  "Develop and maintain REST APIs",
  "Work with SQL Server databases — design, queries and data modelling",
  "Build frontend functionality using React",
  "Investigate and resolve production issues",
  "Handle complex business logic and workflow scenarios",
  "Collaborate with technical and business teams",
  "Participate in testing, code reviews and technical documentation",
];

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Header */}
        <section className="bg-[#F8F7F4] pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel label="Experience" />
              <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.08] mb-6">
                Experience
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                Building software across business applications, enterprise workflows and modern web
                technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-[#E4E2DC]" />

              {/* Entry */}
              <ScrollReveal>
                <div className="relative pl-16 pb-16">
                  {/* Dot */}
                  <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-[#2563EB] border-4 border-[#F8F7F4] shadow" />

                  <div className="bg-[#F8F7F4] border border-[#E4E2DC] rounded-2xl p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div>
                        <p className="text-xs font-bold text-[#2563EB] tracking-widest uppercase mb-2">
                          Current Role
                        </p>
                        <h2 className="text-2xl font-black text-[#1A1A1A] mb-1">Software Engineer</h2>
                        <p className="text-[#4B5563] font-semibold">[Company Name]</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-green-50 border border-green-200 text-green-700 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          Present
                        </span>
                        <p className="text-sm text-[#9CA3AF] font-mono mt-2">[Start Year] — Present</p>
                      </div>
                    </div>

                    <p className="text-[#4B5563] leading-relaxed mb-6">
                      Develop and maintain web-based business applications and technology solutions,
                      working across the full stack from API design and backend logic to frontend
                      interfaces and database design.
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-4">
                        Key Responsibilities
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {responsibilities.map((r) => (
                          <div key={r} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-2" />
                            <p className="text-sm text-[#4B5563] leading-relaxed">{r}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-6 pt-6 border-t border-[#E4E2DC]">
                      <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-3">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[".NET", "ASP.NET Core", "C#", "React", "TypeScript", "SQL Server", "REST APIs", "Clean Architecture", "CQRS"].map((t) => (
                          <span key={t} className="px-2.5 py-1 text-xs font-medium bg-white border border-[#E4E2DC] text-[#374151] rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Projects worked on */}
              <ScrollReveal delay={100}>
                <div className="relative pl-16">
                  <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-[#F1F0ED] border-4 border-[#E4E2DC]" />
                  <div className="bg-[#0D1B2A] text-white rounded-2xl p-8">
                    <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-4">
                      Key Projects
                    </p>
                    <div className="space-y-4">
                      {[
                        { name: "AromaPOS", desc: "Multi-tenant restaurant POS and BackOffice platform" },
                        { name: "Rental ERP", desc: "Enterprise rental workflow management system" },
                        { name: "Evolve Corporate Platform", desc: "Corporate website and digital presence" },
                      ].map((p) => (
                        <div key={p.name} className="flex items-start gap-3 pb-4 border-b border-[#1E3A52] last:border-0 last:pb-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-2" />
                          <div>
                            <p className="text-sm font-semibold text-white">{p.name}</p>
                            <p className="text-xs text-[#6B7280]">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Education mini */}
        <section className="py-16 bg-[#F8F7F4] border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel label="Education" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white border border-[#E4E2DC] rounded-xl">
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">
                    BSc in Information &amp; Communication Technology
                  </h3>
                  <p className="text-[#4B5563]">SIBA University</p>
                </div>
                <span className="text-sm text-[#9CA3AF] font-mono">[Graduation Year]</span>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
