import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink/10 px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <p className="font-display text-lg uppercase tracking-tight">{profile.name}</p>
        <p className="font-sans text-sm text-ink/60">
          Social Media Manager • Video Editor • Cinematographer
        </p>
        <p className="font-sans text-sm text-ink/60">{profile.location}</p>
        <p className="font-sans text-xs text-ink/40">© 2026 {profile.name}</p>
        <p className="mt-2 font-hand text-xl text-ink/60">
          thanks for scrolling this far. talk soon ✨
        </p>
      </div>
    </footer>
  );
}
