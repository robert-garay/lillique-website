"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/courses",
    label: "Courses",
    children: [
      { href: "/courses#basic-esthetics", label: "Basic Esthetics" },
      { href: "/courses#master-esthetics", label: "Master Esthetics" },
      { href: "/courses#permanent-cosmetics", label: "Permanent Cosmetics" },
      { href: "/courses#microblading", label: "Microblading" },
      { href: "/courses#smp", label: "Scalp Micropigmentation" },
      { href: "/courses#laser", label: "Laser Training" },
      { href: "/courses#instructor", label: "Instructor Course" },
    ],
  },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <Image
            src="/lillique-logo.svg"
            alt="Lillique"
            width={40}
            height={40}
            className="h-9 w-9 lg:h-10 lg:w-10"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-wide text-charcoal lg:text-2xl">
              Lillique
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-warm-gray">
              Training Institute
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-sm tracking-wide text-warm-gray transition-colors hover:text-charcoal"
                >
                  {link.label}
                </Link>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                    dropdownOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="min-w-[240px] rounded-xl border border-cream-dark bg-cream/98 p-3 shadow-lg backdrop-blur-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-warm-gray transition-colors hover:bg-cream-dark hover:text-charcoal"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-warm-gray transition-colors hover:text-charcoal"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/courses"
            className="rounded-full bg-charcoal px-6 py-2.5 text-sm tracking-wide text-cream transition-all hover:bg-charcoal-light"
          >
            Enroll Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-cream transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-12">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-4xl text-charcoal transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-3 flex flex-col gap-2 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-base text-warm-gray transition-colors hover:text-charcoal"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-12 border-t border-cream-dark pt-8">
            <a
              href="tel:5717324861"
              className="text-sm tracking-wide text-warm-gray"
            >
              (571) 732-4861
            </a>
            <p className="mt-2 text-sm text-warm-gray-light">
              info@lilliquetraining.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
