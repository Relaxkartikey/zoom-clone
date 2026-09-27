import { ArrowUpRight, Film } from "lucide-react";
import { profile, heroStickers } from "@/data/portfolio";
import { Sticker } from "@/components/ui/sticker";

const stickerStyles: { color: "yellow" | "pink" | "green" | "blue"; rotate: string; className: string }[] = [
  { color: "green", rotate: "-4deg", className: "left-0 top-8 sm:top-16" },
  { color: "yellow", rotate: "3deg", className: "right-0 top-4 sm:top-10" },
  { color: "pink", rotate: "-2deg", className: "left-2 bottom-10 sm:left-6" },
  { color: "blue", rotate: "4deg", className: "right-2 bottom-16 sm:right-8" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        {heroStickers.map((label, i) => {
          const style = stickerStyles[i];
          return (
            <div
              key={label}
              className={`pointer-events-auto absolute animate-float ${style.className}`}
              style={{ ["--rot" as string]: style.rotate }}
            >
              <Sticker color={style.color} rotate={style.rotate}>
                {label}
              </Sticker>
            </div>
          );
        })}
      </div>

      <p className="mb-3 font-hand text-2xl text-ink/70">my name is</p>

      <h1 className="text-center font-display uppercase leading-[0.9] tracking-tight text-ink">
        <span className="block text-[16vw] sm:text-8xl md:text-9xl">{profile.firstName}</span>
        <span className="block text-[16vw] sm:text-8xl md:text-9xl">{profile.lastName}</span>
      </h1>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {profile.roles.map((role, i) => (
          <span key={role} className="flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wide text-ink/70 sm:text-base">
            {i > 0 && <span className="text-accent-pink">●</span>}
            {role}
          </span>
        ))}
      </div>

      <p className="mt-8 max-w-xl text-balance text-center font-display text-2xl uppercase leading-tight text-ink sm:text-3xl">
        {profile.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#work"
          className="group flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3 font-sans text-sm font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_rgba(244,197,49,1)] transition-transform hover:-translate-y-0.5"
        >
          <Film className="h-4 w-4" />
          View My Work
        </a>
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 font-sans text-sm font-bold uppercase tracking-wide text-ink shadow-[4px_4px_0_rgba(23,21,18,0.9)] transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s Work Together
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-2 md:hidden">
        {heroStickers.map((label) => (
          <Sticker key={label} color="paper" rotate="-1deg" className="text-base">
            {label}
          </Sticker>
        ))}
      </div>
    </section>
  );
}
