"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { workFilters, workItems, type WorkCategory, type WorkItem } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WorkCard } from "@/components/work-card";
import { VideoModal } from "@/components/video-modal";

export function Work() {
  const [filter, setFilter] = useState<"ALL" | WorkCategory>("ALL");
  const [activeItem, setActiveItem] = useState<WorkItem | null>(null);

  const filtered = useMemo(
    () => (filter === "ALL" ? workItems : workItems.filter((w) => w.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="selected work" title="Watch What I've Made" />
        </Reveal>

        <Reveal delay={100} className="mt-8 flex flex-wrap gap-2">
          {workFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border-2 border-ink px-4 py-1.5 font-sans text-sm font-bold uppercase tracking-wide transition-all",
                filter === f
                  ? "bg-ink text-paper shadow-[3px_3px_0_rgba(244,197,49,1)]"
                  : "bg-white text-ink hover:-translate-y-0.5 hover:shadow-[3px_3px_0_rgba(23,21,18,0.9)]"
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 80}>
              <WorkCard item={item} index={i} onPlay={setActiveItem} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center font-hand text-2xl text-ink/60">
            More {filter.toLowerCase()} work coming soon.
          </p>
        )}
      </div>

      {activeItem && (
        <VideoModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </section>
  );
}
