import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function CaseStudies() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-ink/40 bg-white/60 px-6 py-10 text-center">
            <Sparkles className="h-6 w-6 text-ink/40" />
            <p className="font-display text-xl uppercase tracking-tight text-ink/60 sm:text-2xl">
              Case Studies Coming Soon
            </p>
            <p className="max-w-md font-sans text-sm text-ink/50">
              Verified results and client case studies will be added here as projects wrap up.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
