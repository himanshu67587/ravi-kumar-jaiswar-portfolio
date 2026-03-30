import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import profileImg from "../../ravi kumar.png";
export default function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll(".hero-reveal");
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      setTimeout(() => el.classList.add("visible"), 200 + i * 150);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.13 0.01 220) 0%, oklch(0.16 0.015 210) 100%)",
      }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.67 0.13 186) 1px, transparent 1px), linear-gradient(90deg, oklch(0.67 0.13 186) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="order-2 md:order-1">
            <div
              className="hero-reveal reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{
                backgroundColor: "var(--teal-dim)",
                color: "var(--teal)",
                border: "1px solid oklch(0.67 0.13 186 / 0.3)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Available for opportunities
            </div>

            <h1
              className="hero-reveal reveal font-poppins font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              <span style={{ color: "oklch(0.96 0.006 220)" }}>
                Hi, I&apos;m{" "}
              </span>
              <span style={{ color: "var(--teal)" }}>Ravi Kumar</span>
              <br />
              <span style={{ color: "oklch(0.96 0.006 220)" }}>Jaiswar</span>
            </h1>

            <div className="hero-reveal reveal flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-lg font-semibold"
                style={{ color: "oklch(0.96 0.006 220)" }}
              >
                Senior Sales Executive
              </span>
              <span style={{ color: "oklch(0.25 0.015 220)" }}>|</span>
              <span style={{ color: "var(--teal)" }}>
                &#128205; Mumbai, India
              </span>
            </div>

            <p
              className="hero-reveal reveal text-base leading-relaxed mb-8 max-w-md"
              style={{ color: "oklch(0.72 0.012 220)" }}
            >
              Driving revenue growth with 10+ years of proven expertise in
              sales, business development, and client relationship management.
              Passionate about turning opportunities into lasting partnerships.
            </p>

            <div className="hero-reveal reveal flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{
                  backgroundColor: "var(--teal)",
                  color: "oklch(0.13 0.01 220)",
                }}
                data-ocid="hero.primary_button"
              >
                Contact Me
                <ArrowRight size={16} />
              </a>
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  border: "1px solid oklch(0.67 0.13 186 / 0.5)",
                  color: "var(--teal)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.67 0.13 186 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "transparent";
                }}
                data-ocid="hero.secondary_button"
              >
                View Skills
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="hero-reveal reveal relative">
              <div
                className="absolute inset-0 rounded-2xl blur-2xl scale-90"
                style={{ backgroundColor: "oklch(0.67 0.13 186 / 0.2)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden glow-teal"
                style={{
                  width: "clamp(240px, 35vw, 360px)",
                  height: "clamp(240px, 35vw, 360px)",
                  border: "2px solid oklch(0.67 0.13 186 / 0.4)",
                }}
              >
               <img
                  src={profileImg}
                  alt="Ravi Kumar Jaiswar - Senior Sales Executive"
                  className="w-full h-full object-cover object-top"
               />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl text-xs font-bold shadow-lg"
                style={{
                  backgroundColor: "var(--teal)",
                  color: "oklch(0.13 0.01 220)",
                }}
              >
                10+ Years Exp.
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-xs" style={{ color: "oklch(0.72 0.012 220)" }}>
            Scroll
          </span>
          <ChevronDown size={16} style={{ color: "var(--teal)" }} />
        </div>
      </div>
    </section>
  );
}
