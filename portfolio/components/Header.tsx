"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@/components/Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/engineering", label: "Engineering" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
        style={{
          backgroundColor: "rgba(13,27,42,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: isScrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between w-full"
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
        >
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span
              className="font-bold tracking-tight leading-none text-white"
              style={{ fontSize: isScrolled ? "1rem" : "1.1rem", transition: "font-size 0.3s" }}
            >
              Sanchitha Prasad
            </span>
            <span className="text-xs font-medium tracking-widest uppercase mt-0.5" style={{ color: "#9CA3AF" }}>
              Software Engineer
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: "12px" }}>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-blue-400 bg-blue-950/60 border border-blue-800/40"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center" style={{ gap: "16px" }}>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] rounded-lg hover:bg-[#1D4ED8] transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                padding: "10px 18px",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Let&apos;s Connect
              <span style={{ color: "#93C5FD" }}>→</span>
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-[#4B5563] hover:bg-[#F1F0ED] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(13,27,42,0.6)", backdropFilter: "blur(4px)" }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#F8F7F4] z-50 lg:hidden transition-transform duration-300 shadow-2xl ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#E4E2DC]">
          <span className="font-bold text-[#1A1A1A]">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-md text-[#4B5563] hover:bg-[#F1F0ED]"
          >
            <XIcon size={20} />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-[#2563EB] bg-blue-50"
                    : "text-[#374151] hover:bg-[#F1F0ED]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 pt-4 border-t border-[#E4E2DC]">
            <Link
              href="/contact"
              className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-[#2563EB] rounded-lg hover:bg-[#1D4ED8] transition-colors"
            >
              Let&apos;s Connect →
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
