import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses",
  description: "Explore Lillique's professional esthetic training programs — from basic esthetics to permanent cosmetics, laser training, and instructor certification.",
};

const programs = [
  {
    id: "basic-esthetics",
    number: "01",
    title: "Basic Esthetics",
    subtitle: "Foundation Program",
    hours: "600+ Hours",
    registration: "$100",
    tuition: "Call for rates",
    description: "The study of esthetics involves the science of skincare, body care, hair removal, and makeup. Our comprehensive program prepares you for state board examination and a thriving career.",
    topics: [
      "Skin Typing & Analysis",
      "Facial Techniques & Procedures",
      "Facial Massage Techniques",
      "Facial Machines & Equipment",
      "Waxing Procedures & Products",
      "Makeup Application",
      "Eyelash Extension Certification",
      "Business & Spa Management",
      "State Board Exam Practice",
      "Professional Ethics & Image",
    ],
  },
  {
    id: "master-esthetics",
    number: "02",
    title: "Master Esthetics",
    subtitle: "Advanced Clinical Program",
    hours: "600+ Hours",
    registration: "$100",
    tuition: "Call for rates",
    description: "Elevate your practice with aggressive, treatment-oriented hands-on procedures. Master microdermabrasion, dermaplaning, chemical exfoliation, ultrasonic, microcurrent, IPL, and lymphatic drainage.",
    topics: [
      "Microdermabrasion",
      "Dermaplaning",
      "Advanced Chemical Peels",
      "Microcurrent Treatments",
      "Ultrasonic Facial Technology",
      "LED & Light Physics",
      "Lymphatic Drainage Massage",
      "Laser Technologies Introduction",
      "Advanced Skincare Products",
      "Creating a Business Plan",
    ],
  },
  {
    id: "permanent-cosmetics",
    number: "03",
    title: "Permanent Cosmetic Tattooing",
    subtitle: "200-Hour Certification",
    hours: "200 Hours",
    registration: "$100",
    tuition: "Call for rates",
    description: "Permanent cosmetics is the leading trend in the beauty industry. Master eyebrows, eyeliner, lip blush, microblading, ombré brows, and scalp micropigmentation with 50 practical performances.",
    topics: [
      "Brow Mapping & Shaping",
      "Powdered Brow Technique",
      "Ombré Brow Technique",
      "Microblading",
      "Eyeliner & Lash Enhancement",
      "Lip Blushing & Lip Liner",
      "Scalp Micropigmentation",
      "Color Theory & Correction",
      "Tattoo Removal",
      "Safety & Sterilization",
    ],
  },
  {
    id: "microblading",
    number: "04",
    title: "Advanced Microblading",
    subtitle: "3-Day Intensive",
    hours: "3 Days",
    registration: "$1,000",
    tuition: "$2,500 total",
    description: "Take your permanent makeup skills to the next level with our expertly designed intensive course. Covers foundations through advanced techniques with hands-on practice on live models.",
    topics: [
      "Introduction to Microblading",
      "Tools & Materials",
      "Health & Safety Protocols",
      "Skin Anatomy & Physiology",
      "Color Theory & Pigment Selection",
      "Brow Mapping Techniques",
      "Advanced Microblading Techniques",
      "Client Consultation & Consent",
      "Live Model Practice",
      "Business & Marketing Basics",
    ],
  },
  {
    id: "smp",
    number: "05",
    title: "Scalp Micropigmentation",
    subtitle: "Comprehensive SMP Training",
    hours: "Multi-Day",
    registration: "$1,000",
    tuition: "$5,500 total",
    description: "Master the transformative art of scalp micropigmentation. Learn to create natural-looking hairlines, add density to thinning hair, and perform scar camouflage with expert guidance.",
    topics: [
      "Scalp Anatomy & Physiology",
      "Natural Hairline Creation",
      "Density & Blending Techniques",
      "Scar Camouflage with SMP",
      "Color Theory & Pigment Selection",
      "Equipment Selection & Maintenance",
      "Client Consultation & Aftercare",
      "Live Model Demonstrations",
      "Hands-On Practice",
      "Business & Marketing Strategies",
    ],
  },
  {
    id: "laser",
    number: "06",
    title: "Advanced Modalities & Laser Training",
    subtitle: "5-Day Certification",
    hours: "5 Days",
    registration: "$1,000",
    tuition: "$5,000 total",
    description: "Comprehensive education with the latest laser technology. Train with YAG, fractional, nanofractional, picosecond, IPL, HIFU, and more under expert instruction.",
    topics: [
      "Laser Physics & Safety",
      "Skin Anatomy & Physiology",
      "YAG Laser Applications",
      "Fractional & Nanofractional",
      "IPL Technology",
      "HIFU Treatments",
      "Picosecond Laser",
      "Hands-On Laser Practice",
      "Patient Consultation & Care",
      "Business & Marketing Strategies",
    ],
  },
  {
    id: "instructor",
    number: "07",
    title: "Esthetic Instructor",
    subtitle: "Instructor Certification — 400 Hours",
    hours: "400 Hours",
    registration: "$100",
    tuition: "Call for rates",
    description: "Prepare for your esthetics instructor licensure in the state of Virginia. Master teaching techniques, curriculum development, classroom management, and administrative leadership.",
    topics: [
      "Curriculum Development",
      "Lesson Planning",
      "Classroom Management",
      "Teaching Techniques",
      "Methods of Instruction",
      "Learning Styles & Disabilities",
      "Examination Development",
      "School Administration",
      "Laws & Regulation",
      "Supervision of Clinic Floor",
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center bg-charcoal">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, rgba(184, 149, 106, 0.4) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-light">Programs</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.1] text-cream md:text-6xl lg:text-7xl">
            Training Programs
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-warm-gray-light">
            Seven professional programs designed to launch or advance your career in
            esthetics and permanent cosmetics.
          </p>
        </div>
      </section>

      {/* Program cards */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-20">
            {programs.map((program) => (
              <article
                key={program.id}
                id={program.id}
                className="scroll-mt-24 rounded-3xl border border-cream-dark bg-white p-8 lg:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-5">
                  {/* Left */}
                  <div className="lg:col-span-2">
                    <span className="font-mono text-sm text-warm-gray-light">
                      {program.number}
                    </span>
                    <h2 className="mt-3 font-serif text-3xl text-charcoal lg:text-4xl">
                      {program.title}
                    </h2>
                    <p className="mt-2 text-sm tracking-wide text-gold">
                      {program.subtitle}
                    </p>
                    <p className="mt-6 text-base leading-relaxed text-warm-gray">
                      {program.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <div className="rounded-xl border border-cream-dark px-5 py-3">
                        <p className="text-xs uppercase tracking-wider text-warm-gray-light">Duration</p>
                        <p className="mt-1 text-sm font-medium text-charcoal">{program.hours}</p>
                      </div>
                      <div className="rounded-xl border border-cream-dark px-5 py-3">
                        <p className="text-xs uppercase tracking-wider text-warm-gray-light">Registration</p>
                        <p className="mt-1 text-sm font-medium text-charcoal">{program.registration}</p>
                      </div>
                      <div className="rounded-xl border border-cream-dark px-5 py-3">
                        <p className="text-xs uppercase tracking-wider text-warm-gray-light">Tuition</p>
                        <p className="mt-1 text-sm font-medium text-charcoal">{program.tuition}</p>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm tracking-wide text-cream transition-all hover:bg-charcoal-light"
                    >
                      Inquire About This Program
                    </Link>
                  </div>

                  {/* Right — Topics */}
                  <div className="lg:col-span-3">
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-warm-gray-light">
                      What You&apos;ll Learn
                    </h3>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {program.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-start gap-3 rounded-lg bg-cream/60 px-4 py-3"
                        >
                          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-charcoal">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-light">Ready to Begin?</p>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
            Start Your Enrollment
          </h2>
          <p className="mt-6 text-base leading-relaxed text-warm-gray-light">
            Contact us to learn about upcoming class dates, payment plans, and
            the enrollment process. We&apos;re here to guide you every step of the way.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-gold-light"
            >
              Contact Admissions
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
