"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { LinkedinIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";

// TODO(cliente): substituir "#" pelos links reais das redes sociais da R2 Simulation.
const socialLinks = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/servicos", label: t.nav.services },
    { href: "/clientes-parceiros", label: t.nav.clients },
    { href: "/contato", label: t.nav.contact },
  ];

  return (
    <footer className="bg-[color:var(--color-navy-950)] text-white/80">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2">
          <Image
            src="/images/logo/r2-logo-horizontal-branca.png"
            alt="R2 Simulation"
            width={2069}
            height={321}
            className="h-9 w-auto self-start"
          />
          <p className="max-w-sm text-sm leading-relaxed text-white/60">{t.footer.tagline}</p>
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[color:var(--color-cyan-400)] hover:text-[color:var(--color-cyan-400)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            {t.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            {t.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[color:var(--color-cyan-400)]" />
              <span>{t.contact.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={18} className="mt-0.5 shrink-0 text-[color:var(--color-cyan-400)]" />
              <a href="mailto:contato@r2sol.com.br" className="transition-colors hover:text-white">
                contato@r2sol.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} R2 Simulation. {t.footer.rights}</p>
          <p>{t.contact.scope}</p>
        </div>
      </div>
    </footer>
  );
}
