"use client";

import { useState } from "react";
import { Menu, X, Camera } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border-2 border-ink bg-white/90 px-4 py-2 shadow-paper backdrop-blur">
        <a
          href="#home"
          className="flex items-center gap-1.5 font-display text-sm uppercase tracking-tight"
        >
          <Camera className="h-4 w-4 shrink-0" strokeWidth={2.5} />
          Arish
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border-2 border-ink bg-accent-yellow px-4 py-1.5 font-sans text-sm font-bold uppercase tracking-tight shadow-[3px_3px_0_rgba(23,21,18,0.9)] transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Contact
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-white md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="absolute left-4 right-4 top-16 rounded-2xl border-2 border-ink bg-white p-4 shadow-card md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-display text-lg uppercase tracking-tight text-ink hover:bg-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
