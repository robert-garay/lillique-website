import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Programs: [
    { href: "/courses#basic-esthetics", label: "Basic Esthetics" },
    { href: "/courses#master-esthetics", label: "Master Esthetics" },
    { href: "/courses#permanent-cosmetics", label: "Permanent Cosmetics" },
    { href: "/courses#microblading", label: "Microblading" },
    { href: "/courses#laser", label: "Laser Training" },
  ],
  Institute: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Student Services" },
    { href: "/contact", label: "Contact" },
    { href: "/courses", label: "All Courses" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3">
              <Image
                src="/lillique-logo.svg"
                alt="Lillique"
                width={44}
                height={44}
                className="h-11 w-11 invert"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-wide text-cream">
                  Lillique
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-warm-gray-light">
                  Training Institute
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-warm-gray-light">
              Virginia&apos;s premier esthetic training institute. DPOR licensed and
              committed to cultivating the next generation of skincare
              professionals.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/lilliquetraininginstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-warm-gray/30 text-warm-gray-light transition-all hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-warm-gray-light">
                {title}
              </h3>
              <ul className="mt-6 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-warm-gray-light transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-warm-gray/20 pt-8 text-xs text-warm-gray md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p>&copy; {new Date().getFullYear()} Lillique Training Institute. All rights reserved.</p>
            <p>DPOR Licensed Institution</p>
          </div>
          <div className="flex flex-col items-center gap-1 md:items-end">
            <a href="tel:5717324861" className="transition-colors hover:text-cream">
              (571) 732-4861
            </a>
            <a href="mailto:info@lilliquetraining.com" className="transition-colors hover:text-cream">
              info@lilliquetraining.com
            </a>
            <p>3609 Chain Bridge Rd Suite D, Fairfax, VA 22030</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
