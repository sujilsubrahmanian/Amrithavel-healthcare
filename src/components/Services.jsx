const SERVICES = [
  {
    title: "General and family medicine",
    text: "Everyday care for everyday concerns, checkups, screenings, and treatment for ongoing conditions.",
  },
  {
    title: "Ayurvedic therapies",
    text: "Panchakarma, herbal medicine, and lifestyle consultations guided by licensed practitioners.",
  },
  {
    title: "Diagnostics and lab services",
    text: "On-site blood work, imaging referrals, and same-week results for most common tests.",
  },
  {
    title: "Home and elder care",
    text: "Scheduled home visits, medication management, and recovery support after a hospital stay.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary-dark px-5 py-12 text-bg sm:px-10 sm:py-16 lg:py-22">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 max-w-[16ch] text-[1.6rem] font-medium text-bg sm:text-4xl">
          Care we offer
        </h2>

        <div className="grid gap-px border border-white/18 bg-white/18 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article key={service.title} className="bg-primary-dark p-7">
              <h3 className="mb-3 text-[1.15rem] text-bg">{service.title}</h3>
              <p className="max-w-[32ch] text-[0.95rem] text-bg/70">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}