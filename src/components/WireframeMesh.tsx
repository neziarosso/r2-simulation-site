interface WireframeMeshProps {
  className?: string;
  variant?: "hero" | "divider" | "panel";
  id?: string;
}

/**
 * Decorative triangulated mesh, evoking CFD/FEA discretization grids.
 * Deterministic pseudo-random jitter (no Math.random) keeps server and
 * client markup identical.
 */
export default function WireframeMesh({
  className,
  variant = "divider",
  id = "mesh",
}: WireframeMeshProps) {
  const cols = variant === "hero" ? 14 : 10;
  const rows = variant === "hero" ? 8 : 5;
  const width = 1200;
  const height = variant === "hero" ? 760 : 320;

  const jitter = (seed: number) => Math.sin(seed * 12.9898) * 0.5;

  const nodes: { x: number; y: number }[][] = [];
  for (let r = 0; r <= rows; r++) {
    const row: { x: number; y: number }[] = [];
    for (let c = 0; c <= cols; c++) {
      const baseX = (c / cols) * width;
      const baseY = (r / rows) * height;
      const jx = jitter(r * 7.13 + c * 3.1) * (width / cols) * 0.28;
      const jy = jitter(r * 2.7 + c * 9.4 + 1.5) * (height / rows) * 0.28;
      row.push({ x: baseX + jx, y: baseY + jy });
    }
    nodes.push(row);
  }

  const lines: string[] = [];
  const triangles: { d: string; fillIndex: number }[] = [];

  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      const a = nodes[r][c];
      if (c < cols) {
        const b = nodes[r][c + 1];
        lines.push(`M${a.x.toFixed(1)},${a.y.toFixed(1)} L${b.x.toFixed(1)},${b.y.toFixed(1)}`);
      }
      if (r < rows) {
        const b = nodes[r + 1][c];
        lines.push(`M${a.x.toFixed(1)},${a.y.toFixed(1)} L${b.x.toFixed(1)},${b.y.toFixed(1)}`);
      }
      if (r < rows && c < cols) {
        const b = nodes[r][c + 1];
        const cN = nodes[r + 1][c];
        const d = nodes[r + 1][c + 1];
        lines.push(`M${a.x.toFixed(1)},${a.y.toFixed(1)} L${d.x.toFixed(1)},${d.y.toFixed(1)}`);

        const fillIndex = Math.abs(Math.round(jitter(r * 3.3 + c * 5.7 + 4) * 10)) % 6;
        triangles.push({
          d: `M${a.x.toFixed(1)},${a.y.toFixed(1)} L${b.x.toFixed(1)},${b.y.toFixed(1)} L${d.x.toFixed(1)},${d.y.toFixed(1)} Z`,
          fillIndex,
        });
        triangles.push({
          d: `M${a.x.toFixed(1)},${a.y.toFixed(1)} L${cN.x.toFixed(1)},${cN.y.toFixed(1)} L${d.x.toFixed(1)},${d.y.toFixed(1)} Z`,
          fillIndex: (fillIndex + 3) % 6,
        });
      }
    }
  }

  const palette = [
    "var(--color-spec-blue)",
    "var(--color-spec-teal)",
    "var(--color-spec-green)",
    "var(--color-spec-yellow)",
    "var(--color-spec-orange)",
    "var(--color-spec-red)",
  ];

  const highlightEvery = variant === "hero" ? 5 : 9;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect width={width} height={height} fill={`url(#${id}-fade)`} />
        </mask>
      </defs>
      <g mask={`url(#${id}-mask)`}>
        {triangles.map((tri, i) =>
          i % highlightEvery === 0 ? (
            <path
              key={`fill-${i}`}
              d={tri.d}
              fill={palette[tri.fillIndex]}
              opacity={variant === "hero" ? 0.16 : 0.1}
            />
          ) : null
        )}
        {lines.map((d, i) => (
          <path
            key={`line-${i}`}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth={0.6}
            opacity={variant === "hero" ? 0.35 : 0.5}
          />
        ))}
      </g>
    </svg>
  );
}
