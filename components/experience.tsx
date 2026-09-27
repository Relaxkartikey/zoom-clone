import { industries } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const rotations = ["-3deg", "2deg", "-1deg", "3deg"];

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow="who I've worked with" title="Industries" />
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-4">
          {industries.map((industry, i) => (
            <Reveal key={industry} delay={i * 80}>
              <div
                className="rounded-2xl border-2 border-ink bg-white px-6 py-5 font-display text-lg uppercase tracking-tight shadow-card transition-transform hover:-translate-y-1 sm:text-xl"
                style={{ transform: `rotate(${rotations[i % rotations.length]})` }}
              >
                {industry}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
