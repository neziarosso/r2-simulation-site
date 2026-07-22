import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className ?? ""}`}>
      {eyebrow && (
        <Reveal mode="fade">
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
              tone === "dark" ? "text-cyan-500" : "text-cyan-300"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full spectrum-gradient" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal>
        <h2
          className={`text-balance font-heading text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${
            tone === "dark" ? "text-[color:var(--color-navy-900)]" : "text-white"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={80}>
          <p
            className={`max-w-2xl text-balance text-base leading-relaxed sm:text-lg ${
              tone === "dark" ? "text-[color:var(--color-slate)]" : "text-white/80"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
