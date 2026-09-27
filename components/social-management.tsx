import { ArrowRight, ArrowDown } from "lucide-react";
import { socialManagement } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

export function SocialManagement() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow="not just an editor" title="More Than Just Editing." />
        </Reveal>

        <Reveal delay={100} className="mt-6 max-w-2xl">
          <p className="font-sans text-base leading-relaxed text-ink/70">
            Alongside editing, Arish plans and runs social accounts end to end — from the first
            idea to what happens after it goes live, across {socialManagement.platforms.join(" and ")}.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-8 flex flex-wrap gap-2">
          {socialManagement.capabilities.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </Reveal>

        <Reveal delay={200} className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border-2 border-ink bg-white p-6 shadow-card sm:gap-4">
            {socialManagement.workflow.map((step, i) => (
              <div key={step} className="flex items-center gap-3 sm:gap-4">
                <span
                  className="rounded-full border-2 border-ink bg-accent-yellow px-4 py-2 font-display text-xs uppercase tracking-wide sm:text-sm"
                  style={{ transform: `rotate(${i % 2 === 0 ? "-2deg" : "2deg"})` }}
                >
                  {step}
                </span>
                {i < socialManagement.workflow.length - 1 && (
                  <>
                    <ArrowRight className="hidden h-5 w-5 text-ink/50 sm:block" />
                    <ArrowDown className="h-5 w-5 text-ink/50 sm:hidden" />
                  </>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
