import {
  BarChart2,
  MessageSquare,
  Monitor,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const skills = [
  { label: "Sales & Marketing", percent: 95, icon: TrendingUp },
  { label: "Business Development", percent: 90, icon: BarChart2 },
  { label: "Client Relationship Management", percent: 92, icon: Users },
  { label: "Communication", percent: 88, icon: MessageSquare },
  { label: "Computer Skills", percent: 80, icon: Monitor },
];

function SkillBar({
  label,
  percent,
  icon: Icon,
  delay,
}: {
  label: string;
  percent: number;
  icon: React.FC<{ size?: number; style?: React.CSSProperties }>;
  delay: number;
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon size={16} style={{ color: "var(--teal)" }} />
          <span
            className="text-sm font-medium"
            style={{ color: "oklch(0.96 0.006 220)" }}
          >
            {label}
          </span>
        </div>
        <span className="text-sm font-bold" style={{ color: "var(--teal)" }}>
          {percent}%
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: "oklch(0.25 0.015 220)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${percent}%` : "0%",
            backgroundColor: "var(--teal)",
            transitionDelay: `${delay}ms`,
            boxShadow: animated
              ? "0 0 8px 1px oklch(0.67 0.13 186 / 0.5)"
              : "none",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  useScrollReveal();

  return (
    <section
      id="skills"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--page-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal text-center mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: "var(--teal)" }}
          >
            What I Do Best
          </p>
          <h2
            className="font-poppins font-bold text-3xl md:text-4xl"
            style={{ color: "oklch(0.96 0.006 220)" }}
          >
            My Skills
          </h2>
          <div
            className="w-12 h-1 rounded-full mx-auto mt-4"
            style={{ backgroundColor: "var(--teal)" }}
          />
        </div>

        <div
          className="rounded-2xl p-8 md:p-12"
          style={{
            backgroundColor: "oklch(0.19 0.015 220)",
            border: "1px solid oklch(0.25 0.015 220)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, i) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                percent={skill.percent}
                icon={skill.icon}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
