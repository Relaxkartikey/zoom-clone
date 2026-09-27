import { GraduationCap } from "lucide-react";
import { education, workStyle } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";

export function EducationWorkStyle() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <Reveal>
          <p className="mb-2 font-hand text-2xl text-ink/70">background</p>
          <h3 className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
            Education
          </h3>
          <div className="mt-5 flex items-start gap-3 rounded-2xl border-2 border-ink bg-white p-5 shadow-card">
            <GraduationCap className="mt-0.5 h-6 w-6 shrink-0 text-ink/70" />
            <div>
              <p className="font-sans text-sm font-bold text-ink">{education.degree}</p>
              <p className="mt-1 font-sans text-sm text-ink/70">{education.institute}</p>
              <p className="font-sans text-sm text-ink/70">{education.university}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mb-2 font-hand text-2xl text-ink/70">how I work</p>
          <h3 className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
            Work Style
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {workStyle.map((trait, i) => (
              <span
                key={trait}
                className="rounded-full border-2 border-ink bg-white px-4 py-2 font-sans text-sm font-semibold uppercase tracking-wide shadow-[3px_3px_0_rgba(23,21,18,0.9)] transition-transform hover:-translate-y-0.5"
                style={{ transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1.5deg"})` }}
              >
                {trait}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
