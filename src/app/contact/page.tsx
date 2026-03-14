import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Lillique Training Institute. Schedule a campus tour, inquire about programs, or book a treatment.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-charcoal">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 80%, rgba(184, 149, 106, 0.4) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-light">Get in Touch</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.1] text-cream md:text-6xl lg:text-7xl">
            Contact Us
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-warm-gray-light">
            We&apos;d love to hear from you. Reach out to learn about our programs,
            schedule a campus tour, or book a treatment.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
                Visit Our Campus
              </h2>
              <p className="mt-6 text-base leading-relaxed text-warm-gray">
                Whether you&apos;re interested in enrolling in a program, booking a
                treatment, or simply want to see our facilities, we welcome you to
                visit our Fairfax campus.
              </p>

              <div className="mt-10 flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-charcoal">
                    <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-charcoal">Address</h3>
                    <p className="mt-1 text-sm leading-relaxed text-warm-gray">
                      3609 Chain Bridge Rd Suite D<br />
                      Fairfax, VA 22030
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-charcoal">
                    <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-charcoal">Phone</h3>
                    <a href="tel:5717324861" className="mt-1 block text-sm text-warm-gray transition-colors hover:text-charcoal">
                      (571) 732-4861
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-charcoal">
                    <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-charcoal">Email</h3>
                    <a href="mailto:info@lilliquetraining.com" className="mt-1 block text-sm text-warm-gray transition-colors hover:text-charcoal">
                      info@lilliquetraining.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-charcoal">
                    <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-charcoal">Social</h3>
                    <a
                      href="https://www.instagram.com/lilliquetraininginstitute"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-warm-gray transition-colors hover:text-charcoal"
                    >
                      @lilliquetraininginstitute
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-cream-dark bg-white p-8 lg:p-10">
              <h2 className="font-serif text-2xl text-charcoal">Send Us a Message</h2>
              <p className="mt-2 text-sm text-warm-gray">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="mt-8 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-warm-gray">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2 block w-full rounded-lg border border-cream-dark bg-cream px-4 py-3 text-sm text-charcoal placeholder-warm-gray-light outline-none transition-colors focus:border-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-warm-gray">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-cream-dark bg-cream px-4 py-3 text-sm text-charcoal placeholder-warm-gray-light outline-none transition-colors focus:border-gold"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-xs uppercase tracking-wider text-warm-gray">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-2 block w-full rounded-lg border border-cream-dark bg-cream px-4 py-3 text-sm text-charcoal placeholder-warm-gray-light outline-none transition-colors focus:border-gold"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-xs uppercase tracking-wider text-warm-gray">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="mt-2 block w-full rounded-lg border border-cream-dark bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold"
                    >
                      <option value="">Select a topic</option>
                      <option value="enrollment">Program Enrollment</option>
                      <option value="tour">Campus Tour</option>
                      <option value="treatment">Book a Treatment</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-wider text-warm-gray">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2 block w-full resize-none rounded-lg border border-cream-dark bg-cream px-4 py-3 text-sm text-charcoal placeholder-warm-gray-light outline-none transition-colors focus:border-gold"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-charcoal py-4 text-sm font-medium tracking-wide text-cream transition-all hover:bg-charcoal-light"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-[400px] bg-gradient-to-br from-cream-dark to-cream" />
    </>
  );
}
