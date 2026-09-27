import { tools } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

export function Tools() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow="kit" title="Tools" />
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <Reveal delay={100}>
            <p className="mb-3 font-hand text-2xl text-ink/70">creative & editing</p>
            <div className="flex flex-wrap gap-2">
              {tools.creative.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mb-3 font-hand text-2xl text-ink/70">productivity & analytics</p>
            <div className="flex flex-wrap gap-2">
              {tools.productivity.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
