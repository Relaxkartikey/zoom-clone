"use client";

import { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/data/portfolio";
import { getEmbedUrl } from "@/lib/video";

export function VideoModal({
  item,
  onClose,
}: {
  item: WorkItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const embedUrl = getEmbedUrl(item);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-2xl border-2 border-ink bg-ink shadow-cardHover sm:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper/60 bg-black/50 text-paper transition-transform hover:scale-110"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="aspect-[9/16] w-full bg-black">
          {embedUrl ? (
            <iframe
              key={item.id}
              src={embedUrl}
              title={item.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center font-hand text-xl text-paper/70">
              This video can&apos;t be embedded here.
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 bg-paper px-4 py-3">
          <div>
            <p className="font-display text-sm uppercase tracking-tight text-ink">{item.title}</p>
            <p className="font-sans text-xs text-ink/60">{item.type}</p>
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1 font-sans text-xs font-bold uppercase tracking-wide text-ink/70 hover:text-ink"
          >
            {item.platform}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
