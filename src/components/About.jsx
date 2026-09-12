export default function About() {
  return (
    <section id="about" className="border-t border-line px-5 py-12 sm:px-10 sm:py-16 lg:py-22">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[220px_1fr]">
        <div className="flex h-fit items-center gap-3 text-[0.85rem] font-semibold text-accent">
          <span className="h-px w-7 bg-accent" aria-hidden="true" />
          <span>Our approach</span>
        </div>

        <div>
          <h2 className="mb-6 max-w-[20ch] text-[1.6rem] font-medium sm:text-4xl">
            Modern medicine and traditional wisdom, practiced together.
          </h2>
          <p className="max-w-[62ch] text-ink-soft">
            Amrithavel was founded on a simple idea: a diagnosis is only
            useful if the treatment around it fits the person receiving it.
            Our physicians work alongside Ayurvedic practitioners to build
            care plans that draw on both — lab-backed diagnostics when you
            need answers fast, and therapies rooted in centuries of practice
            when what you need is sustained, gentle recovery.
          </p>
          <p className="mt-4 max-w-[62ch] text-ink-soft">
            Every patient starts with an unhurried consultation, not a form.
            From there, we coordinate your specialists, your therapies, and
            your follow-ups so you're not the one holding it all together.
          </p>
        </div>
      </div>
    </section>
  );
}