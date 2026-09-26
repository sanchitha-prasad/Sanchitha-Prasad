import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Engineering | Sanchitha Prasad — How I Think About Software",
  description:
    "The engineering philosophy of Sanchitha Prasad — how he approaches software design, problem understanding, architecture and maintainability.",
};

const pillars = [
  {
    number: "01",
    title: "Understand the Problem",
    content:
      "Good software starts with understanding what users and the business actually need. Before designing a solution, I spend time understanding the workflow, the constraints, the data and the people involved. A solution designed around the real problem is always more effective than one built around assumptions.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Design Before Implementation",
    content:
      "I think about workflows, data structures, API contracts, integrations and future changes before jumping into implementation. This doesn't mean over-engineering — it means making deliberate decisions about what the system needs to do and how it will evolve. Good design reduces surprises late in development.",
    icon: "📐",
  },
  {
    number: "03",
    title: "Keep Complexity Under Control",
    content:
      "I prefer solutions that are understandable, maintainable and appropriate for the problem. Not every problem needs a complex architectural pattern. The goal is to choose the right level of structure — enough to handle the problem well, not so much that it becomes harder to change than to rebuild.",
    icon: "⚖️",
  },
  {
    number: "04",
    title: "Think Beyond the Happy Path",
    content:
      "Real systems have edge cases, failures, permission boundaries, unexpected data and integration issues. I try to think about what happens when things go wrong, when users do unexpected things, or when business rules have exceptions. These scenarios are often where the real complexity lives.",
    icon: "🗺️",
  },
  {
    number: "05",
    title: "Build for Change",
    content:
      "Business requirements change. New features are added. Systems evolve. A good solution should solve today's problem without unnecessarily creating tomorrow's technical debt. I think about how the code will be extended and changed, not just how it behaves on the first release.",
    icon: "🔄",
  },
];

const journey = [
  { label: "Problem", desc: "Understand the business context" },
  { label: "Understanding", desc: "Map workflows and constraints" },
  { label: "Design", desc: "Plan architecture and data" },
  { label: "Build", desc: "Implement with clarity" },
  { label: "Test", desc: "Verify edge cases" },
  { label: "Improve", desc: "Iterate and refine" },
];

export default function EngineeringPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Header */}
        <section className="bg-[#F8F7F4] pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel label="Engineering Approach" />
              <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.08] mb-6">
                How I Think About Software
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                Engineering is more than writing code. It&apos;s about understanding problems,
                making deliberate decisions and building systems that work well over time.
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Journey Strip */}
        <section className="bg-[#0D1B2A] py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase text-center mb-10">
              The Engineering Journey
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
              {journey.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="text-center px-4 py-2">
                    <div className="w-12 h-12 rounded-xl bg-[#162539] border border-[#2563EB]/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold text-[#2563EB]">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-sm font-bold text-white">{step.label}</p>
                    <p className="text-xs text-[#4B5563] mt-0.5 max-w-24">{step.desc}</p>
                  </div>
                  {i < journey.length - 1 && (
                    <div className="hidden sm:block text-[#2563EB]/40 text-xl mx-1">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Five Pillars */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel label="Five Principles" />
              <h2 className="text-4xl font-black text-[#1A1A1A] mb-14">
                How I approach every project.
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <ScrollReveal key={pillar.number} delay={i * 80}>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 p-8 bg-[#F8F7F4] border border-[#E4E2DC] rounded-2xl hover:border-[#2563EB]/30 hover:shadow-md transition-all duration-300">
                    <div className="sm:col-span-1">
                      <span className="font-mono text-2xl font-black text-[#2563EB]/30">
                        {pillar.number}
                      </span>
                    </div>
                    <div className="sm:col-span-11">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl">{pillar.icon}</span>
                        <h3 className="text-xl font-bold text-[#1A1A1A]">{pillar.title}</h3>
                      </div>
                      <p className="text-[#4B5563] leading-relaxed">{pillar.content}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Technical decisions example */}
        <section className="py-20 bg-[#F8F7F4] border-t border-[#E4E2DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <SectionLabel label="Decision Making" />
              <h2 className="text-3xl font-black text-[#1A1A1A] mb-10">
                How I approach technical decisions.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  step: "Decision",
                  desc: "Choose the right pattern or approach for the problem",
                  color: "bg-blue-50 border-blue-200 text-blue-700",
                },
                {
                  step: "Why",
                  desc: "Understand the trade-offs and the reason for the choice",
                  color: "bg-indigo-50 border-indigo-200 text-indigo-700",
                },
                {
                  step: "Result",
                  desc: "A solution that is clear, maintainable and fits the context",
                  color: "bg-purple-50 border-purple-200 text-purple-700",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 100}>
                  <div className={`p-6 rounded-xl border ${item.color} bg-opacity-50`}>
                    <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${item.color.split(" ").find(c => c.startsWith("text-"))}`}>
                      {item.step}
                    </p>
                    <p className="text-sm text-[#374151] leading-relaxed">{item.desc}</p>
                  </div>
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
