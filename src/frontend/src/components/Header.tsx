import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToContact() {
    setMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: scrolled
          ? "oklch(0.13 0.01 220 / 0.97)"
          : "oklch(0.13 0.01 220 / 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid oklch(0.25 0.015 220)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          data-ocid="header.link"
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center font-poppins font-bold text-sm"
            style={{ backgroundColor: "var(--teal)", color: "var(--page-bg)" }}
          >
            RK
          </div>
          <div className="hidden sm:block">
            <p
              className="text-xs font-semibold tracking-widest leading-none"
              style={{ color: "oklch(0.96 0.006 220)" }}
            >
              RAVI KUMAR
            </p>
            <p
              className="text-xs tracking-widest leading-none mt-0.5"
              style={{ color: "oklch(0.72 0.012 220)" }}
            >
              JAISWAR
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-teal"
              style={{ color: "oklch(0.72 0.012 220)" }}
              data-ocid="header.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Resume CTA — desktop */}
        <nav className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={{ border: "1px solid var(--teal)", color: "var(--teal)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "var(--teal)";
              (e.currentTarget as HTMLAnchorElement).style.color =
                "oklch(0.13 0.01 220)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--teal)";
            }}
            data-ocid="header.primary_button"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--teal)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="header.toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ borderTop: "1px solid oklch(0.25 0.015 220)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2 transition-colors hover:text-teal"
              style={{ color: "oklch(0.72 0.012 220)" }}
              onClick={() => setMenuOpen(false)}
              data-ocid="header.link"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-2"
            style={{
              border: "1px solid var(--teal)",
              color: "var(--teal)",
              background: "transparent",
            }}
            onClick={scrollToContact}
            data-ocid="header.primary_button"
          >
            Resume
          </button>
        </nav>
      )}
    </header>
  );
}
