import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    title: "Basic Esthetics",
    description: "The foundation of skincare science — facial techniques, hair removal, makeup, and state board preparation.",
    href: "/courses#basic-esthetics",
    hours: "600+ Hours",
  },
  {
    title: "Master Esthetics",
    description: "Advanced clinical treatments including microdermabrasion, chemical peels, microcurrent, and laser introduction.",
    href: "/courses#master-esthetics",
    hours: "600+ Hours",
  },
  {
    title: "Permanent Cosmetics",
    description: "Comprehensive 200-hour program covering brows, eyeliner, lip blush, microblading, and scalp micropigmentation.",
    href: "/courses#permanent-cosmetics",
    hours: "200 Hours",
  },
  {
    title: "Laser Training",
    description: "Five-day intensive covering IPL, YAG, fractional, HIFU, and advanced modalities with hands-on practice.",
    href: "/courses#laser",
    hours: "5 Days",
  },
];

const stats = [
  { value: "7", label: "Professional Programs" },
  { value: "600+", label: "Training Hours" },
  { value: "DPOR", label: "Licensed Institution" },
  { value: "50+", label: "Hands-On Procedures" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(184, 149, 106, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(196, 164, 160, 0.3) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-12">
          <div className="max-w-3xl">
            <p className="animate-fade-in text-xs uppercase tracking-[0.4em] text-gold-light">
              Fairfax, Virginia
            </p>
            <h1 className="animate-fade-in-up mt-6 font-serif text-5xl leading-[1.1] text-cream md:text-7xl lg:text-8xl">
              The Art of
              <br />
              <span className="text-gold-light">Esthetics</span>
            </h1>
            <p className="animate-fade-in-up animation-delay-200 mt-8 max-w-lg text-lg leading-relaxed text-warm-gray-light">
              Where science meets artistry. Lillique Training Institute cultivates
              exceptional skincare professionals through rigorous, hands-on education.
            </p>
            <div className="animate-fade-in-up animation-delay-400 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-gold-light"
              >
                Explore Programs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-cream/20 px-8 py-4 text-sm tracking-wide text-cream transition-all hover:border-cream/40 hover:bg-cream/5"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-warm-gray">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-warm-gray to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-cream-dark bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-12 text-center">
              <span className="font-serif text-3xl text-charcoal md:text-4xl">{stat.value}</span>
              <span className="mt-2 text-xs uppercase tracking-[0.2em] text-warm-gray">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold">
                Our Philosophy
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
                Cultivating Excellence in Skincare
              </h2>
              <p className="mt-6 text-base leading-relaxed text-warm-gray">
                Our mission is to cultivate and nurture the lives of others, making their
                future success our goal. At Lillique, we believe esthetics is where science
                meets artistry — and we train you to master both.
              </p>
              <p className="mt-4 text-base leading-relaxed text-warm-gray">
                From foundational skincare to advanced laser technology, every program
                is designed with hands-on clinical experience, ensuring you graduate
                with confidence and competence.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-charcoal transition-colors hover:text-gold"
              >
                Learn More About Us
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/home.png"
                alt="Esthetic training in progress — instructor guiding a student during a facial treatment"
                width={600}
                height={750}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl border border-gold/20 bg-charcoal p-6 shadow-lg">
                <p className="font-serif text-3xl text-gold-light">15+</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-warm-gray-light">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold-light">Programs</p>
              <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
                Our Training Programs
              </h2>
            </div>
            <Link
              href="/courses"
              className="text-sm tracking-wide text-warm-gray-light transition-colors hover:text-cream"
            >
              View All Programs &rarr;
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {courses.map((course, i) => (
              <Link
                key={course.title}
                href={course.href}
                className="group relative overflow-hidden rounded-2xl border border-warm-gray/10 bg-charcoal-light p-8 transition-all hover:border-gold/30 lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-warm-gray">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-warm-gray/20 px-3 py-1 text-xs text-warm-gray-light">
                    {course.hours}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-cream transition-colors group-hover:text-gold-light lg:text-3xl">
                  {course.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-warm-gray-light">
                  {course.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm text-gold-light opacity-0 transition-all group-hover:opacity-100">
                  Learn More
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Student Clinic</p>
            <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
              Treatments & Services
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-warm-gray">
              Our student clinic offers professional esthetic treatments at accessible
              prices. Every service is performed by our students under expert supervision,
              giving them real-world experience while you receive exceptional care.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Facials",
                items: ["Lymphatic Drainage", "LED Therapy", "Ultrasonic", "Customized Facials"],
                price: "From $40",
              },
              {
                title: "Advanced Treatments",
                items: ["Chemical Peels", "Microdermabrasion", "Microcurrent", "Dermaplaning"],
                price: "From $50",
              },
              {
                title: "Brow, Lash & Lip",
                items: ["Brow Lamination", "Lash Lift", "Permanent Brows", "Lip Blush"],
                price: "From $10",
              },
            ].map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-cream-dark bg-white p-8 transition-all hover:shadow-lg"
              >
                <h3 className="font-serif text-xl text-charcoal">{category.title}</h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-warm-gray"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-cream-dark pt-4 text-sm text-gold-dark">
                  {category.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-charcoal transition-colors hover:text-gold"
            >
              View Full Service Menu
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(184, 149, 106, 0.3) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-light">
            Begin Your Journey
          </p>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl lg:text-6xl">
            Your Future in Esthetics Starts Here
          </h2>
          <p className="mt-6 text-base leading-relaxed text-warm-gray-light">
            Take the first step toward a rewarding career. Schedule a campus tour,
            speak with our admissions team, or explore our programs.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-gold-light"
            >
              Schedule a Tour
            </Link>
            <a
              href="tel:5717324861"
              className="inline-flex items-center justify-center rounded-full border border-cream/20 px-8 py-4 text-sm tracking-wide text-cream transition-all hover:border-cream/40"
            >
              Call (571) 732-4861
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
