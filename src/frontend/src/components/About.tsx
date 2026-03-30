import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const traits = [
  "Hardworking & Goal-Oriented",
  "Confident Communicator",
  "Client-First Mindset",
  "Friendly & Energetic",
];

export default function About() {
  useScrollReveal();

  return (
    <section
      id="about"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(0.15 0.012 220)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal text-center mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: "var(--teal)" }}
          >
            Who I Am
          </p>
          <h2
            className="font-poppins font-bold text-3xl md:text-4xl"
            style={{ color: "oklch(0.96 0.006 220)" }}
          >
            About Me
          </h2>
          <div
            className="w-12 h-1 rounded-full mx-auto mt-4"
            style={{ backgroundColor: "var(--teal)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Portrait card */}
          <div className="reveal-left flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.67 0.13 186 / 0.2) 0%, transparent 70%)",
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  width: "clamp(220px, 30vw, 320px)",
                  height: "clamp(280px, 38vw, 400px)",
                  border: "1px solid oklch(0.67 0.13 186 / 0.3)",
                }}
              >
                <img
                  src="/assets/generated/profile.dim_400x400.jpg"
                  alt="Ravi Kumar Jaiswar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Info card overlay */}
              <div
                className="absolute -bottom-5 -right-5 p-4 rounded-xl shadow-xl"
                style={{
                  backgroundColor: "oklch(0.19 0.015 220)",
                  border: "1px solid oklch(0.25 0.015 220)",
                }}
              >
                <p
                  className="font-poppins font-bold text-base"
                  style={{ color: "var(--teal)" }}
                >
                  Ravi Kumar
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.72 0.012 220)" }}
                >
                  Senior Sales Executive
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "oklch(0.72 0.012 220)" }}
                >
                  Mumbai, India
                </p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="reveal-right">
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "oklch(0.72 0.012 220)" }}
            >
              With over 10 years of experience in sales and business
              development, I have built a strong reputation for driving revenue
              growth and building lasting client relationships. Based in Mumbai,
              I have worked with a diverse range of clients across industries,
              consistently exceeding targets and delivering exceptional results.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.72 0.012 220)" }}
            >
              My approach is simple: understand the client&apos;s needs deeply,
              communicate clearly, and deliver value at every step. I am
              passionate about building trust, solving problems, and creating
              win-win outcomes. Outside of numbers and targets, I believe in
              continuous learning and maintaining a positive, energetic mindset
              that inspires those around me.
            </p>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-3">
              {traits.map((trait) => (
                <div key={trait} className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    style={{ color: "var(--teal)", flexShrink: 0 }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.96 0.006 220)" }}
                  >
                    {trait}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
