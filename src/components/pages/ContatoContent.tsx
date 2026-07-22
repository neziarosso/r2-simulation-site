"use client";

import { Mail, Phone, Globe2 } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import StylizedMap from "@/components/StylizedMap";
import Reveal from "@/components/Reveal";
import { LinkedinIcon, FacebookIcon, YoutubeIcon } from "@/components/SocialIcons";

const socialLinks = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function ContatoContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-[color:var(--color-mist)] py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-[color:var(--color-mist-dark)] p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <StylizedMap caption={t.contact.mapCaption} />

              <dl className="flex flex-col gap-5 text-sm">
                <div>
                  <dt className="font-semibold text-[color:var(--color-navy-900)]">
                    {t.contact.addressLabel}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-[color:var(--color-slate)]">
                    {t.contact.address}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[color:var(--color-navy-900)]">
                    {t.contact.emailLabel}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:contato@r2sol.com.br"
                      className="inline-flex items-center gap-2 text-[color:var(--color-cyan-500)] hover:underline"
                    >
                      <Mail size={16} />
                      contato@r2sol.com.br
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[color:var(--color-navy-900)]">
                    {t.contact.phoneLabel}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="tel:+5541987482188"
                      className="inline-flex items-center gap-2 text-[color:var(--color-slate)] hover:text-[color:var(--color-cyan-500)]"
                    >
                      <Phone size={16} />
                      +55 (41) 98748-2188
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[color:var(--color-navy-900)]">
                    {t.contact.scopeLabel}
                  </dt>
                  <dd className="mt-1 flex items-center gap-2 text-[color:var(--color-slate)]">
                    <Globe2 size={16} />
                    {t.contact.scope}
                  </dd>
                </div>
              </dl>

              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-mist-dark)] text-[color:var(--color-slate)] transition-colors hover:border-[color:var(--color-cyan-500)] hover:text-[color:var(--color-cyan-500)]"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
