import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // This is a skeleton form — wire this up to your backend,
    // a service like Formspree, or an email API when you're ready.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-5 py-12 sm:px-10 sm:py-16 lg:py-22">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-[1.6rem] font-medium sm:text-4xl">Visit us</h2>
          <p className="mt-4 max-w-[40ch] text-ink-soft">
            Walk in, call ahead, or send a message and our front desk will
            get back to you within a day.
          </p>

          <dl className="mt-9 grid gap-5">
            <div>
              <dt className="text-[0.78rem] font-bold text-accent">Address</dt>
              <dd className="mt-1 text-ink">
                Amrithavel Healthcare, Kanayannur, Ernakulam, Kerala
              </dd>
            </div>
            <div>
              <dt className="text-[0.78rem] font-bold text-accent">Phone</dt>
              <dd className="mt-1 text-ink">+91 00000 00000</dd>
            </div>
            <div>
              <dt className="text-[0.78rem] font-bold text-accent">Hours</dt>
              <dd className="mt-1 text-ink">Mon–Sat, 9:00 AM – 7:00 PM</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-[4px] border border-line bg-surface p-7"
        >
          {submitted ? (
            <p className="text-[1.05rem] text-primary-dark">
              Thanks — we've received your message and will reach out soon.
            </p>
          ) : (
            <>
              <label className="flex flex-col gap-1.5 text-[0.88rem] text-ink-soft">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-[3px] border border-line bg-bg px-3 py-2.5 text-base text-ink focus:outline-2 focus:outline-accent"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-[0.88rem] text-ink-soft">
                Phone or email
                <input
                  type="text"
                  name="contact"
                  required
                  className="rounded-[3px] border border-line bg-bg px-3 py-2.5 text-base text-ink focus:outline-2 focus:outline-accent"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-[0.88rem] text-ink-soft">
                What can we help with?
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="resize-y rounded-[3px] border border-line bg-bg px-3 py-2.5 text-base text-ink focus:outline-2 focus:outline-accent"
                />
              </label>
              <button
                type="submit"
                className="mt-1 self-start rounded-[3px] bg-primary px-6 py-3 font-semibold text-surface hover:bg-primary-dark"
              >
                Send message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}