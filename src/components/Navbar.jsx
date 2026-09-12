import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Care we offer" },
  { href: "#contact", label: "Visit us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-10">
        <a href="#top" className="flex items-center gap-2 text-primary-dark no-underline" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
            <path d="M16 3c6 4 10 10 10 16a10 10 0 0 1-20 0C6 13 10 7 16 3Z" className="fill-primary" />
            <path d="M16 8v18" stroke="var(--color-bg)" strokeWidth="1.4" fill="none" />
          </svg>
          <span className="font-display text-[1.15rem] tracking-tight">
            Amrithavel <em className="text-accent not-italic">Healthcare</em>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-[0.95rem] text-ink-soft no-underline transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="rounded-[3px] bg-primary px-4 py-2 font-semibold text-surface no-underline hover:bg-primary-dark">
            Book a visit
          </a>
        </nav>

        <button className="flex h-9 w-9 flex-col justify-center gap-[5px] md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span className={"h-[2px] rounded bg-primary-dark transition-transform " + (open ? "translate-y-[7px] rotate-45" : "")} />
          <span className={"h-[2px] rounded bg-primary-dark transition-opacity " + (open ? "opacity-0" : "")} />
          <span className={"h-[2px] rounded bg-primary-dark transition-transform " + (open ? "-translate-y-[7px] -rotate-45" : "")} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line px-5 pb-6 sm:px-10" aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-line py-3.5 text-ink-soft no-underline">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 rounded-[3px] bg-primary py-2.5 text-center font-semibold text-surface no-underline">
            Book a visit
          </a>
        </nav>
      )}
    </header>
  );
}