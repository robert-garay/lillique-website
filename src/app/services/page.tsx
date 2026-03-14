import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional esthetic treatments at accessible prices. Facials, chemical peels, microdermabrasion, permanent makeup, and more at Lillique's student clinic.",
};

const serviceCategories = [
  {
    title: "Facials",
    services: [
      { name: "Lymphatic Drainage Facial", price: "$50", description: "A gentle, detoxifying technique promoting lymphatic fluid movement. Reduces puffiness, relieves congestion, and enhances relaxation." },
      { name: "LED Facial", price: "$50", description: "Light therapy pushes wavelengths deep into skin layers to address acne, aging, and hyperpigmentation with zero downtime." },
      { name: "Ultrasonic Facial", price: "$50", description: "High-frequency sound waves deeply cleanse and exfoliate, promoting circulation and boosting collagen production." },
      { name: "Electrotherapy Facial", price: "$45", description: "Removes impurities, improves texture, enhances blood circulation, and boosts collagen production for firmer, glowing skin." },
      { name: "Customized Facial", price: "$40", description: "Tailored to your individual needs based on consultation and skin analysis. Addresses acne, hydration, sensitivity, and more." },
    ],
  },
  {
    title: "Advanced Treatments",
    services: [
      { name: "Pro Clinical Chemical Peel", price: "$80", description: "By The Perfect Derma Peel — a powerful blend of acids and antioxidants that improves fine lines, tone, texture, and pigmentation." },
      { name: "Oxygenating Trio Treatment", price: "$60", description: "Pro-B vitamin-rich treatment with oxygen-boosting application. Fights aging signs, plumps skin, and reduces fine lines." },
      { name: "Detoxifying Pore Treatment", price: "$55", description: "Clears pores, reduces sebum production with extractions for instant results and long-term skin-clarifying benefits." },
      { name: "Microcurrent Face Lift", price: "$55", description: "Low-level electrical currents stimulate facial muscles, reducing wrinkles, improving contours, and increasing collagen production." },
      { name: "Microdermabrasion", price: "$50+", description: "Diamond-tipped superficial exfoliation that refreshes skin, improves texture, and stimulates collagen." },
      { name: "PCA Chemical Exfoliation", price: "$50", description: "Professional fruit acids and TCA to address acne, pigmentation, sun damage, aging, and dehydration." },
      { name: "Dermaplaning", price: "$50+", description: "Gentle exfoliation removing dead skin cells and fine vellus hair using a medical-grade blade for smoother, brighter skin." },
    ],
  },
  {
    title: "Body Treatments",
    services: [
      { name: "PCA Body Peel + Microdermabrasion", price: "$120", description: "Two powerful exfoliating techniques combined to reveal smoother, brighter skin on the body." },
      { name: "PCA Body Peel", price: "$80", description: "Professional exfoliation targeting sun damage, hyperpigmentation, rough texture, and body acne." },
      { name: "Back Scrub & Wrap", price: "$45", description: "Exfoliation combined with a nourishing wrap to hydrate and detoxify the skin." },
      { name: "Acne Back Treatment", price: "$45", description: "Deep cleansing, exfoliation, and extractions with acne-fighting products to balance and clear skin." },
      { name: "Back Scrub", price: "$35", description: "Refreshing exfoliation to cleanse and rejuvenate back skin, addressing dryness and uneven texture." },
    ],
  },
  {
    title: "Brow, Lash & Lip Bar",
    services: [
      { name: "Eyebrow Lamination", price: "$45", description: "" },
      { name: "Eyelash Lift", price: "$45", description: "" },
      { name: "Permanent Makeup — Powdered Brow", price: "$65", description: "" },
      { name: "Permanent Makeup — Lash Enhancement", price: "$65", description: "" },
      { name: "Permanent Makeup — Eyeliner", price: "$65", description: "" },
      { name: "Permanent Makeup — Lip Blush", price: "$65", description: "" },
      { name: "Eyelash Tint", price: "$15", description: "" },
      { name: "Eyebrow Tint", price: "$15", description: "" },
      { name: "Eyebrow Wax", price: "$10", description: "" },
    ],
  },
];

const addons = [
  { name: "Ultrasonic", description: "Sound waves to exfoliate or boost product penetration" },
  { name: "LED Light Therapy", description: "Targeted colors to address specific conditions" },
  { name: "Retinoid Booster", description: "Retinoid blend to boost exfoliation with any treatment" },
  { name: "Lymphatic Drainage Massage", description: "Detoxifying and immune-boosting treatment" },
  { name: "Shiatsu", description: "Acupressure points on head and face for relaxation" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center bg-charcoal">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 80% 60%, rgba(196, 164, 160, 0.4) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-light">Student Clinic</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.1] text-cream md:text-6xl lg:text-7xl">
            Treatments & Services
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-warm-gray-light">
            Professional esthetic treatments performed by our students under expert
            supervision. Exceptional care at accessible prices.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-24">
            {serviceCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-4">
                  <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
                    {category.title}
                  </h2>
                  <div className="h-px flex-1 bg-cream-dark" />
                </div>
                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="group rounded-2xl border border-cream-dark bg-white p-6 transition-all hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base font-medium text-charcoal">{service.name}</h3>
                        <span className="flex-shrink-0 font-serif text-lg text-gold">{service.price}</span>
                      </div>
                      {service.description && (
                        <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                          {service.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Add-ons */}
            <div>
              <div className="flex items-center gap-4">
                <h2 className="font-serif text-3xl text-charcoal md:text-4xl">Add-Ons</h2>
                <div className="h-px flex-1 bg-cream-dark" />
                <span className="font-serif text-xl text-gold">$12 each</span>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {addons.map((addon) => (
                  <div
                    key={addon.name}
                    className="flex items-start gap-3 rounded-xl border border-cream-dark bg-white px-5 py-4"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <div>
                      <p className="text-sm font-medium text-charcoal">{addon.name}</p>
                      <p className="mt-1 text-xs text-warm-gray">{addon.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-light">Book Now</p>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
            Schedule Your Treatment
          </h2>
          <p className="mt-6 text-base leading-relaxed text-warm-gray-light">
            Call us to book your appointment at our student clinic. Walk-ins welcome
            based on availability.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:5717324861"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-gold-light"
            >
              Call (571) 732-4861
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-cream/20 px-8 py-4 text-sm tracking-wide text-cream transition-all hover:border-cream/40"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
