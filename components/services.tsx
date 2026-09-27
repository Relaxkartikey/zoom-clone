import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const colorClass: Record<string, string> = {
  "accent-yellow": "bg-accent-yellow",
  "accent-pink": "bg-accent-pink",
  "accent-green": "bg-accent-green",
  "accent-blue": "bg-accent-blue",
};

export function Services() {
  return (
    <section id="services" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow="what I do" title="Services" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 100}>
              <div className="group relative h-full rounded-2xl border-2 border-ink bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover">
                <span
                  className={cn(
                    "absolute -top-4 right-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink font-display text-sm",
                    colorClass[service.color]
                  )}
                >
                  {service.number}
                </span>
                <p className="font-display text-2xl uppercase tracking-tight text-ink">
                  {service.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-sans text-sm text-ink/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
