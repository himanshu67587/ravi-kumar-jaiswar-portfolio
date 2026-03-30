import { Award, Handshake, Star, Users } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  {
    metric: "10+",
    label: "Years Experience",
    sub: "In Sales & Marketing",
    icon: Award,
  },
  {
    metric: "500+",
    label: "Clients Served",
    sub: "Across Industries",
    icon: Users,
  },
  {
    metric: "1000+",
    label: "Deals Closed",
    sub: "Successfully",
    icon: Handshake,
  },
  {
    metric: "98%",
    label: "Client Retention",
    sub: "Satisfaction Rate",
    icon: Star,
  },
];

export default function Achievements() {
  useScrollReveal();

  return (
    <section
      id="achievements"
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
            By The Numbers
          </p>
          <h2
            className="font-poppins font-bold text-3xl md:text-4xl"
            style={{ color: "oklch(0.96 0.006 220)" }}
          >
            Key Achievements
          </h2>
          <div
            className="w-12 h-1 rounded-full mx-auto mt-4"
            style={{ backgroundColor: "var(--teal)" }}
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal delay-${(i + 1) * 100} rounded-2xl p-6 md:p-8 text-center transition-transform duration-200 hover:scale-105`}
              style={{
                backgroundColor: "oklch(0.19 0.015 220)",
                border: "1px solid oklch(0.25 0.015 220)",
                transitionDelay: `${i * 100}ms`,
              }}
              data-ocid={`achievements.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "oklch(0.67 0.13 186 / 0.12)" }}
              >
                <stat.icon size={22} style={{ color: "var(--teal)" }} />
              </div>
              <p
                className="font-poppins font-bold text-3xl md:text-4xl mb-1"
                style={{ color: "var(--teal)" }}
              >
                {stat.metric}
              </p>
              <p
                className="font-semibold text-sm"
                style={{ color: "oklch(0.96 0.006 220)" }}
              >
                {stat.label}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "oklch(0.72 0.012 220)" }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
