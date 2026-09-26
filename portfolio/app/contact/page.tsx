"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import { MailIcon, LinkedinIcon, GithubIcon, SendIcon, CheckCircleIcon } from "@/components/Icons";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b2a135b8-910c-4596-9992-ee8206f85efc",
          name,
          email,
          message,
          subject: `Portfolio Inquiry from ${name}`,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        // Fallback to mailto link if API key is unverified
        const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const mailtoBody = encodeURIComponent(
          `Hi Sanchitha,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        window.location.href = `mailto:Spresad33@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      }
    } catch (err) {
      console.error("Form submit error:", err);
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  const contacts = [
    {
      icon: <MailIcon size={20} />,
      label: "Email",
      value: "Spresad33@gmail.com",
      href: "mailto:Spresad33@gmail.com",
      desc: "For project enquiries and direct communication",
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/sanchitha-prasad-32b95718b",
      href: "https://www.linkedin.com/in/sanchitha-prasad-32b95718b",
      desc: "Professional profile and connections",
    },
    {
      icon: <GithubIcon size={20} />,
      label: "GitHub",
      value: "github.com/sanchitha-prasad",
      href: "https://github.com/sanchitha-prasad",
      desc: "Open source work, repositories and projects",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Header */}
        <section className="bg-[#F8F7F4] pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel label="Contact" />
              <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.08] mb-6">
                Let&apos;s build something useful.
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                Whether you&apos;re looking for a software engineer, have a technical project in
                mind, or simply want to connect — I&apos;d be happy to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-t border-[#E4E2DC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact cards */}
              <div>
                <ScrollReveal>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Get in touch</h2>
                  <div className="space-y-4">
                    {contacts.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-5 bg-[#F8F7F4] border border-[#E4E2DC] rounded-xl hover:border-[#2563EB]/40 hover:shadow-sm transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white border border-[#E4E2DC] flex items-center justify-center text-[#2563EB] flex-shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                          {c.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-0.5">
                            {c.label}
                          </p>
                          <p className="text-sm font-semibold text-[#1A1A1A] mb-0.5">{c.value}</p>
                          <p className="text-xs text-[#9CA3AF]">{c.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact form */}
              <ScrollReveal delay={100}>
                <div className="bg-[#F8F7F4] border border-[#E4E2DC] rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Send a message</h2>

                  {sent ? (
                    <div className="flex flex-col items-center text-center py-12">
                      <CheckCircleIcon size={48} className="text-green-500 mb-4" />
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Message sent!</h3>
                      <p className="text-[#6B7280] text-sm">
                        Thank you for reaching out. I&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-2">Name</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-white border border-[#E4E2DC] rounded-xl text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-2">Email</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-white border border-[#E4E2DC] rounded-xl text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-2">Message</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          required
                          placeholder="Tell me about your project or what you'd like to discuss..."
                          className="w-full px-4 py-3 bg-white border border-[#E4E2DC] rounded-xl text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#2563EB] rounded-xl hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <SendIcon size={15} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
