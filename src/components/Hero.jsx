export default function Hero() {
  return (
    <section id="top" className="px-5 py-12 sm:px-10 sm:py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-center">
        <div>
          <p className="mb-4 text-[0.85rem] font-semibold text-accent">
            Amrithavel Healthcare, Kerala
          </p>
          <h1 className="max-w-[13ch] text-[2.1rem] leading-[1.12] font-medium sm:text-5xl lg:text-6xl">
            Care that listens first, treats second.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[1.05rem] text-ink-soft">
            We bring together family medicine, diagnostics, and traditional Ayurvedic therapies under one roof, so your treatment plan fits your life, not the other way around.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-[3px] bg-primary px-6 py-3 text-[0.95rem] font-semibold text-surface no-underline hover:bg-primary-dark">
              Book an appointment
            </a>
            <a href="#services" className="rounded-[3px] border border-line px-6 py-3 text-[0.95rem] font-semibold text-primary-dark no-underline hover:border-primary">
              See how we can help
            </a>
          </div>

          <dl className="mt-11 grid grid-cols-3 gap-6 border-t border-line pt-7">
            <div>
              <dt className="font-display text-2xl text-primary-dark">18+</dt>
              <dd className="mt-1 max-w-[14ch] text-[0.82rem] text-ink-soft">years in the community</dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-primary-dark">12</dt>
              <dd className="mt-1 max-w-[14ch] text-[0.82rem] text-ink-soft">resident physicians and therapists</dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-primary-dark">6 days</dt>
              <dd className="mt-1 max-w-[14ch] text-[0.82rem] text-ink-soft">a week, including evenings</dd>
            </div>
          </dl>
        </div>

        <div className="hidden lg:block" aria-hidden="true">
          <svg viewBox="0 0 420 520" className="h-auto w-full">
            <path d="M210 40c90 40 150 130 150 220a150 150 0 0 1-300 0c0-90 60-180 150-220Z" className="fill-primary" />
            <path d="M210 90v390" stroke="var(--color-bg)" strokeWidth="2.5" />
            <path d="M120 240c40-30 90-20 90 20" stroke="var(--color-gold)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M300 300c-40-20-90-5-90 30" stroke="var(--color-accent)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="210" cy="130" r="7" className="fill-gold" />
          </svg>
        </div>
      </div>
    </section>
  );
}