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
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <div className="relative h-9 w-9 lg:h-10 lg:w-10">
            <Image
              src="/lillique-logo-white.svg"
              alt="Lillique"
              width={40}
              height={40}
              className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/lillique-logo.svg"
              alt="Lillique"
              width={40}
              height={40}
              className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl tracking-wide transition-colors duration-500 lg:text-2xl ${
              scrolled ? "text-charcoal" : "text-cream"
            }`}>
              Lillique
            </span>
            <span className={`text-[9px] uppercase tracking-[0.25em] transition-colors duration-500 ${
              scrolled ? "text-warm-gray" : "text-warm-gray-light"
            }`}>
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
                  className={`text-sm tracking-wide transition-colors duration-500 ${
                    scrolled ? "text-warm-gray hover:text-charcoal" : "text-cream/70 hover:text-cream"
                  }`}
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
                className={`text-sm tracking-wide transition-colors duration-500 ${
                  scrolled ? "text-warm-gray hover:text-charcoal" : "text-cream/70 hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/courses"
            className={`rounded-full px-6 py-2.5 text-sm tracking-wide transition-all duration-500 ${
              scrolled
                ? "bg-charcoal text-cream hover:bg-charcoal-light"
                : "bg-gold text-charcoal hover:bg-gold-light"
            }`}
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
            className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled || mobileOpen ? "bg-charcoal" : "bg-cream"
            } ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled || mobileOpen ? "bg-charcoal" : "bg-cream"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled || mobileOpen ? "bg-charcoal" : "bg-cream"
            } ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

    </header>

    {/* Mobile menu — rendered outside header for proper z-index stacking */}
    <div
      className={`fixed inset-0 z-[60] bg-cream transition-all duration-500 lg:hidden ${
        mobileOpen
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none translate-x-full opacity-0"
      }`}
    >
      {/* Close button */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <Image src="/lillique-logo.svg" alt="Lillique" width={36} height={36} className="h-9 w-9" />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-wide text-charcoal">Lillique</span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-warm-gray">Training Institute</span>
          </div>
        </Link>
        <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-6 translate-y-2 rotate-45 bg-charcoal" />
          <span className="block h-0.5 w-6 opacity-0 bg-charcoal" />
          <span className="block h-0.5 w-6 -translate-y-2 -rotate-45 bg-charcoal" />
        </button>
      </div>

      <div className="flex h-[calc(100%-72px)] flex-col overflow-y-auto px-8 pb-8 pt-4">
        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-charcoal transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mt-2 flex flex-col gap-1.5 pl-4 border-l border-cream-dark">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-sm text-warm-gray transition-colors hover:text-charcoal"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-auto border-t border-cream-dark pt-6">
          <Link
            href="/courses"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-charcoal py-3.5 text-sm font-medium tracking-wide text-cream"
          >
            Enroll Now
          </Link>
          <div className="mt-6 flex flex-col gap-1.5">
            <a href="tel:5717324861" className="text-sm tracking-wide text-warm-gray">
              (571) 732-4861
            </a>
            <a href="mailto:info@lilliquetraining.com" className="text-sm text-warm-gray">
              info@lilliquetraining.com
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
