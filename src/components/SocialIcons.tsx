type IconProps = { size?: number; className?: string };

export function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <line x1="7.5" y1="7" x2="7.5" y2="7.01" />
      <path d="M11.5 16.5V10" />
      <path d="M11.5 12.8c0-1.55 1.2-2.8 2.75-2.8 1.4 0 2.25 1 2.25 2.8v3.7" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.5 21v-7.5h2.5l.5-3h-3V8.3c0-.9.25-1.5 1.55-1.5H17.6V4.14C17.34 4.1 16.45 4 15.42 4c-2.15 0-3.62 1.31-3.62 3.72V10.5H9.3v3h2.5V21" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.8v4.4l4-2.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}
