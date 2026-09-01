const KEYS: { major: string; minor: string; sharps?: number; flats?: number }[] = [
  { major: "C", minor: "Am" },
  { major: "G", minor: "Em", sharps: 1 },
  { major: "D", minor: "Bm", sharps: 2 },
  { major: "A", minor: "F♯m", sharps: 3 },
  { major: "E", minor: "C♯m", sharps: 4 },
  { major: "B", minor: "G♯m", sharps: 5 },
  { major: "F♯", minor: "D♯m", sharps: 6 },
  { major: "D♭", minor: "B♭m", flats: 5 },
  { major: "A♭", minor: "Fm", flats: 4 },
  { major: "E♭", minor: "Cm", flats: 3 },
  { major: "B♭", minor: "Gm", flats: 2 },
  { major: "F", minor: "Dm", flats: 1 },
];

/** A static circle of fifths — major keys on the outer ring, their relative minors inside. */
export function CircleOfFifths({ highlight }: { highlight?: string }) {
  const cx = 160;
  const cy = 160;
  const rOuter = 128;
  const rInner = 80;

  return (
    <figure className="not-prose my-8">
      <div className="flex justify-center rounded-[14px] border border-hairline bg-well p-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
        <svg
          viewBox="0 0 320 320"
          width="320"
          height="320"
          role="img"
          aria-label="Circle of fifths"
        >
          <circle cx={cx} cy={cy} r={rOuter} fill="none" stroke="var(--hairline)" />
          <circle cx={cx} cy={cy} r={rInner} fill="none" stroke="var(--hairline)" />
          {KEYS.map((k, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const ox = cx + Math.cos(angle) * ((rOuter + rInner) / 2 + 12);
            const oy = cy + Math.sin(angle) * ((rOuter + rInner) / 2 + 12);
            const ix = cx + Math.cos(angle) * (rInner - 22);
            const iy = cy + Math.sin(angle) * (rInner - 22);
            const active = k.major === highlight;
            return (
              <g key={k.major}>
                <text
                  x={ox}
                  y={oy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="var(--font-serif)"
                  fontSize={active ? 20 : 17}
                  fontWeight={active ? 700 : 500}
                  fill={active ? "var(--accent)" : "var(--ink)"}
                >
                  {k.major}
                </text>
                <text
                  x={ix}
                  y={iy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  fill="var(--ink-muted)"
                >
                  {k.minor}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-6 font-sans text-[0.9375rem] leading-relaxed text-ink-muted">
        Outer ring: major keys. Inner ring: each one&rsquo;s relative minor — same key
        signature, different tonic. Clockwise from C adds a sharp each step; anticlockwise adds
        a flat.
      </figcaption>
    </figure>
  );
}
