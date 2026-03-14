import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Lillique Training Institute — Virginia's premier DPOR-licensed esthetic training school in Fairfax.",
};

const values = [
  {
    title: "Hands-On Excellence",
    description: "Every program emphasizes clinical practice. Students perform real procedures on real clients, building confidence from day one.",
  },
  {
    title: "Industry-Leading Curriculum",
    description: "Our courses are continually refined to reflect the latest techniques, technologies, and best practices in esthetics and permanent cosmetics.",
  },
  {
    title: "Career-Focused Training",
    description: "From resume building to business management, we prepare students not just to pass board exams — but to build thriving careers.",
  },
  {
    title: "State Licensed & Accredited",
    description: "As a DPOR-licensed institution, Lillique meets Virginia's highest standards for esthetic education and professional training.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center bg-charcoal">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, rgba(184, 149, 106, 0.4) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-light">About Us</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.1] text-cream md:text-6xl lg:text-7xl">
            Where Passion Meets Profession
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-warm-gray-light">
            Lillique Training Institute was founded on a singular belief: that
            exceptional esthetic education can transform lives and elevate the
            entire beauty industry.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Our Mission</p>
              <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
                Shaping the Next Generation
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-warm-gray">
                Our mission is to cultivate and nurture the lives of others, making
                their future success our goal. We provide comprehensive training that
                bridges the gap between theory and practice, ensuring every graduate is
                prepared to excel in the professional world.
              </p>
              <p className="text-base leading-relaxed text-warm-gray">
                Located in Fairfax, Virginia, our institute offers state-of-the-art
                facilities and expert instruction across a full spectrum of esthetic
                disciplines — from foundational skincare science to advanced laser
                technology and permanent cosmetics.
              </p>
              <p className="text-base leading-relaxed text-warm-gray">
                Whether you&apos;re beginning your journey in esthetics or advancing your
                existing practice, Lillique provides the rigorous education and
                supportive environment you need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-cream-dark bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">What Sets Us Apart</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
            Our Values
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="rounded-2xl border border-cream-dark bg-white p-8 lg:p-10"
              >
                <span className="font-mono text-sm text-warm-gray-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold-light">Visit Us</p>
              <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
                Our Campus
              </h2>
              <p className="mt-6 text-base leading-relaxed text-warm-gray-light">
                Our Fairfax, Virginia location is equipped with professional-grade
                treatment rooms, modern classrooms, and the latest esthetic
                technology — everything you need to train like a professional.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-sm text-warm-gray-light">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>3609 Chain Bridge Rd Suite D<br />Fairfax, VA 22030</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:5717324861" className="transition-colors hover:text-cream">(571) 732-4861</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:info@lilliquetraining.com" className="transition-colors hover:text-cream">info@lilliquetraining.com</a>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-gold-light"
              >
                Schedule a Campus Tour
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/campus.png"
                alt="Lillique Training Institute campus in Fairfax, Virginia"
                width={600}
                height={600}
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
