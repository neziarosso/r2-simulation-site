"use client";

import { useEffect, useRef, useState } from "react";

type RevealTag = "div" | "section" | "span" | "article" | "li" | "ul";

interface RevealProps {
  children: React.ReactNode;
  as?: RevealTag;
  mode?: "up" | "fade";
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  as = "div",
  mode = "up",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const commonProps = {
    "data-reveal": mode,
    "data-visible": visible,
    style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    className,
  } as const;

  switch (as) {
    case "section":
      return (
        <section ref={ref as React.RefObject<HTMLElement>} {...commonProps}>
          {children}
        </section>
      );
    case "span":
      return (
        <span ref={ref as React.RefObject<HTMLSpanElement>} {...commonProps}>
          {children}
        </span>
      );
    case "article":
      return (
        <article ref={ref as React.RefObject<HTMLElement>} {...commonProps}>
          {children}
        </article>
      );
    case "li":
      return (
        <li ref={ref as React.RefObject<HTMLLIElement>} {...commonProps}>
          {children}
        </li>
      );
    case "ul":
      return (
        <ul ref={ref as React.RefObject<HTMLUListElement>} {...commonProps}>
          {children}
        </ul>
      );
    default:
      return (
        <div ref={ref as React.RefObject<HTMLDivElement>} {...commonProps}>
          {children}
        </div>
      );
  }
}
