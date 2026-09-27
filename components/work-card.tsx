import { Play, ArrowUpRight, Instagram, Youtube } from "lucide-react";
import type { WorkItem } from "@/data/portfolio";

const platformIcon = {
  YouTube: Youtube,
  Instagram: Instagram,
} as const;

export function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const Icon = platformIcon[item.platform];
  const rotate = index % 2 === 0 ? "-1.5deg" : "1.5deg";

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border-2 border-ink bg-ink shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
      style={{ transform: `rotate(${rotate})` }}
    >
      <div className="relative flex aspect-[9/12] items-center justify-center bg-gradient-to-br from-ink via-ink/90 to-ink/70 sm:aspect-[9/13]">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-paper/80 bg-paper/10 backdrop-blur transition-transform group-hover:scale-110">
          <Play className="h-6 w-6 fill-paper text-paper" />
        </div>

        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-paper/40 bg-black/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-paper">
          <Icon className="h-3 w-3" />
          {item.platform}
        </span>

        <span className="absolute right-3 top-3 rounded-full border border-paper/40 bg-black/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-paper">
          {item.category}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 bg-paper px-4 py-3">
        <div>
          <p className="font-display text-sm uppercase tracking-tight text-ink">{item.title}</p>
          <p className="font-sans text-xs text-ink/60">{item.type}</p>
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}
