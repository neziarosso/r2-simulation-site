import { MapPin } from "lucide-react";

/**
 * Abstract, stylized city-grid illustration marking the R2 Simulation HQ —
 * not a literal map, so no third-party maps API/key is required.
 */
export default function StylizedMap({ caption }: { caption: string }) {
  const blocks = [
    { x: 20, y: 30, w: 60, h: 40 },
    { x: 100, y: 20, w: 40, h: 70 },
    { x: 160, y: 50, w: 70, h: 30 },
    { x: 30, y: 100, w: 50, h: 50 },
    { x: 100, y: 120, w: 90, h: 40 },
    { x: 210, y: 90, w: 45, h: 60 },
    { x: 20, y: 170, w: 100, h: 35 },
    { x: 150, y: 170, w: 60, h: 45 },
  ];

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[color:var(--color-navy-900)]">
      <svg viewBox="0 0 280 220" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <line x1="0" y1="60" x2="280" y2="60" stroke="white" strokeOpacity="0.08" strokeWidth="6" />
        <line x1="0" y1="150" x2="280" y2="150" stroke="white" strokeOpacity="0.08" strokeWidth="4" />
        <line x1="90" y1="0" x2="90" y2="220" stroke="white" strokeOpacity="0.08" strokeWidth="4" />
        <line x1="190" y1="0" x2="190" y2="220" stroke="white" strokeOpacity="0.08" strokeWidth="6" />
        {blocks.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx={6}
            fill="white"
            opacity={0.05 + (i % 3) * 0.02}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-cyan-500)] text-[color:var(--color-navy-950)] shadow-lg">
          <MapPin size={22} strokeWidth={1.75} />
        </span>
        <p className="font-heading text-sm font-semibold text-white sm:text-base">{caption}</p>
      </div>
    </div>
  );
}
