"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/servicos", label: t.nav.services },
    { href: "/clientes-parceiros", label: t.nav.clients },
    { href: "/contato", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_var(--color-mist-dark)] backdrop-blur-md"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="R2 Simulation — Home">
          <Image
            src="/images/logo/r2-logo-horizontal-colorida.png"
            alt="R2 Simulation"
            width={2069}
            height={321}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[color:var(--color-cyan-500)] ${
                  active ? "text-[color:var(--color-navy-900)]" : "text-[color:var(--color-slate)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher locale={locale} setLocale={setLocale} label={t.common.languageLabel} />
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-navy-900)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] hover:bg-[color:var(--color-navy-800)]"
          >
            {t.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[color:var(--color-navy-900)] lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[color:var(--color-mist-dark)] bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Navegação mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  pathname === link.href
                    ? "bg-[color:var(--color-mist)] text-[color:var(--color-navy-900)]"
                    : "text-[color:var(--color-slate)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between px-3">
              <LanguageSwitcher locale={locale} setLocale={setLocale} label={t.common.languageLabel} />
            </div>
            <Link
              href="/contato"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[color:var(--color-navy-900)] px-5 py-3 text-sm font-semibold text-white"
            >
              {t.nav.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher({
  locale,
  setLocale,
  label,
}: {
  locale: "pt" | "en";
  setLocale: (l: "pt" | "en") => void;
  label: string;
}) {
  return (
    <div
      className="flex items-center rounded-full border border-[color:var(--color-mist-dark)] p-0.5 text-xs font-semibold"
      role="group"
      aria-label={label}
    >
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-2.5 py-1.5 uppercase transition-colors ${
            locale === l
              ? "bg-[color:var(--color-navy-900)] text-white"
              : "text-[color:var(--color-slate)] hover:text-[color:var(--color-navy-900)]"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
