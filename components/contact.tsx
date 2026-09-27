import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-3 font-hand text-2xl text-ink/70">let&apos;s talk</p>
          <h2 className="font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Let&apos;s Make Something People Remember.
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-6">
          <p className="font-sans text-base text-ink/70">
            Got a project, an idea, or just want to say hi? I read every message.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3 font-sans text-sm font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_rgba(244,197,49,1)] transition-transform hover:-translate-y-0.5"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 font-sans text-sm font-bold uppercase tracking-wide text-ink shadow-[4px_4px_0_rgba(23,21,18,0.9)] transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
        </Reveal>

        <Reveal delay={250} className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 font-sans text-sm font-medium text-ink/70 hover:text-ink"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 font-sans text-sm font-medium text-ink/70 hover:text-ink"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
          <span className="flex items-center gap-2 font-sans text-sm font-medium text-ink/70">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
