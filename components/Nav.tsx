"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  locale: Locale;
  nav: Dictionary["nav"];
};

export default function Nav({ locale, nav }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#work", label: nav.work },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container-x nav__inner">
        <Link href={`/${locale}`} className="nav__brand font-display">
          <span className="nav__brand-dot" />
          Aurora
        </Link>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="nav__locales">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                className={`nav__locale ${loc === locale ? "is-active" : ""}`}
              >
                {localeNames[loc]}
              </Link>
            ))}
          </div>
        </nav>

        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
