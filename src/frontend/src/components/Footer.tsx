import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="py-10"
      style={{
        backgroundColor: "oklch(0.11 0.008 220)",
        borderTop: "1px solid oklch(0.25 0.015 220)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span
            className="font-poppins font-bold text-lg"
            style={{ color: "var(--teal)" }}
          >
            Ravi Kumar Jaiswar
          </span>
        </div>
        <p className="text-sm mb-4" style={{ color: "oklch(0.72 0.012 220)" }}>
          Senior Sales Executive · Mumbai, India
        </p>
        <div
          className="w-24 h-px mx-auto mb-4"
          style={{ backgroundColor: "oklch(0.25 0.015 220)" }}
        />
        <p className="text-xs" style={{ color: "oklch(0.55 0.01 220)" }}>
          © {year} Ravi Kumar Jaiswar. All rights reserved.
        </p>
        <p className="text-xs mt-2" style={{ color: "oklch(0.55 0.01 220)" }}>
          Built with{" "}
          <Heart
            size={11}
            className="inline"
            style={{ color: "var(--teal)" }}
          />{" "}
          using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "var(--teal)" }}
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
