import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/engineering", label: "Engineering" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1B2A] text-white">
      {/* Top section */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px" }}
      >
        {/* Brand */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold text-white mb-1">Sanchitha Prasad</h3>
          <p className="text-sm text-[#9CA3AF] mb-4 font-medium tracking-wide">Software Engineer</p>
          <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs">
            Building software that solves real business problems.
          </p>
          {/* Social */}
          <div className="flex items-center gap-3 mt-6" style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "24px" }}>
            <a
              href="https://github.com/sanchitha-prasad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg border border-[#1E3A52] text-[#9CA3AF] hover:text-white hover:border-[#2563EB] transition-colors duration-200"
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #1E3A52", color: "#9CA3AF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanchitha-prasad-32b95718b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg border border-[#1E3A52] text-[#9CA3AF] hover:text-white hover:border-[#2563EB] transition-colors duration-200"
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #1E3A52", color: "#9CA3AF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:Spresad33@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-lg border border-[#1E3A52] text-[#9CA3AF] hover:text-white hover:border-[#2563EB] transition-colors duration-200"
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #1E3A52", color: "#9CA3AF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <MailIcon size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-semibold text-[#6B7280] tracking-widest uppercase mb-5" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>Navigation</p>
          <nav className="flex flex-col gap-2" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200 w-fit"
                style={{ fontSize: "0.875rem", color: "#9CA3AF", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA */}
        <div>
          <p className="text-xs font-semibold text-[#6B7280] tracking-widest uppercase mb-5" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>Get In Touch</p>
          <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6" style={{ fontSize: "0.875rem", color: "#9CA3AF", lineHeight: 1.6 }}>
            Open to new opportunities, interesting projects and technical conversations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] rounded-lg hover:bg-[#1D4ED8] transition-colors duration-200"
            style={{
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Let&apos;s Connect →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E3A52]" style={{ borderTop: "1px solid #1E3A52" }}>
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}
        >
          <p className="text-xs text-[#6B7280]" style={{ fontSize: "0.75rem", color: "#6B7280" }}>
            © {year} Sanchitha Prasad. All rights reserved.
          </p>
          <p className="text-xs text-[#6B7280] font-mono" style={{ fontSize: "0.75rem", color: "#6B7280", fontFamily: "monospace" }}>
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
