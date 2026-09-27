import { profile, coreSkills } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

export function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-2 font-hand text-2xl text-ink/70">about me!</p>
          <h2 className="font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Who&apos;s Behind the Camera?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr] md:items-start">
          <Reveal delay={100} className="mx-auto md:mx-0">
            <div className="relative w-fit rotate-[-3deg] border-2 border-ink bg-white p-3 shadow-card">
              <div className="h-48 w-48 overflow-hidden bg-paper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-2 text-center font-hand text-lg text-ink/70">that&apos;s me</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-hand text-2xl leading-relaxed text-ink sm:text-3xl">
              {profile.summary}
            </p>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-ink/70">
              {profile.approach}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
