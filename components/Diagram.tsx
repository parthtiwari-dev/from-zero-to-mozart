import type { ReactNode } from "react";

/**
 * A labelled line drawing, in the same recessed well as a notated example.
 * Hand-drawn SVG (`currentColor` strokes), labels are plain `<text>` inside the
 * SVG so nothing has to be measured. Keep labels to one or two words — put the
 * detail in the caption. Scales / scrolls on a phone like the notation does.
 * See docs/DESIGN_LOCK.md.
 */
function Frame({
  children,
  caption,
  viewBox,
  maxW,
}: {
  children: ReactNode;
  caption: string;
  viewBox: string;
  /** cap the drawing's width so a tall diagram doesn't fill the screen */
  maxW?: number;
}) {
  return (
    <figure className="not-prose my-8">
      <div className="rounded-[3px] border border-hairline bg-well px-4 py-6 sm:px-6">
        <div className="diagram">
          <svg
            viewBox={viewBox}
            role="img"
            aria-label={caption}
            className="mx-auto block h-auto w-full"
            style={maxW ? { maxWidth: `${maxW}px` } : undefined}
          >
            {children}
          </svg>
        </div>
      </div>
      <figcaption className="mt-4 font-sans text-[0.9375rem] leading-relaxed text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

function Lead({ d, dash }: { d: string; dash?: boolean }) {
  return (
    <path
      d={d}
      className="lead"
      fill="none"
      strokeDasharray={dash ? "3 3" : undefined}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export function ViolinDiagram({
  caption = "The violin, named. Hold yours next to this and find each part — the chin rest is really for your jaw, and the sound post inside matters more to the tone than anything you can see.",
}: {
  caption?: string;
}) {
  return (
    <Frame viewBox="-58 -34 410 642" caption={caption} maxW={360}>
      {/* body — right half then mirrored left half; upper bout, C-bout with
          pointed corners, wider lower bout */}
      <path
        className="ink"
        fill="none"
        d="M150,208
           C182,208 208,220 216,254
           C221,280 218,306 210,326
           L214,340
           C205,349 188,354 180,374
           C179,380 179,384 180,390
           C186,408 202,413 212,422
           L208,438
           C222,458 238,484 240,524
           C242,568 200,590 150,590
           C100,590 58,568 60,524
           C62,484 78,458 92,438
           L88,422
           C98,413 114,408 120,390
           C121,384 121,380 120,374
           C112,354 95,349 86,340
           L90,326
           C82,306 79,280 84,254
           C92,220 118,208 150,208 Z"
      />
      {/* f-holes */}
      <path className="ink thin" fill="none" d="M122,378 C114,394 114,412 122,428 M119,368 h14 M118,434 h13" />
      <path className="ink thin" fill="none" d="M178,378 C186,394 186,412 178,428 M167,368 h14 M169,434 h13" />
      {/* bridge */}
      <path className="ink" fill="none" d="M126,436 h48 M130,436 l5,-11 h30 l5,11" />
      {/* tailpiece + tailgut */}
      <path
        className="ink"
        fill="none"
        d="M132,442 h36 l-3,48 c-1,11 -10,14 -15,14 c-5,0 -14,-3 -15,-14 Z M150,504 v82"
      />
      <path className="ink thin" fill="none" d="M139,446 v6 M147,446 v6 M155,446 v6 M163,446 v6" />
      {/* chin rest, over the lower-left bout */}
      <path
        className="ink thin"
        fill="none"
        d="M122,466 c-26,-6 -48,4 -50,24 c-2,18 16,28 38,24 c16,-3 24,-14 24,-30 c0,-10 -6,-18 -14,-22 Z"
      />
      {/* neck sides */}
      <path className="ink" fill="none" d="M120,92 L118,212 M180,92 L182,212" />
      {/* fingerboard — plain taper */}
      <path className="ink" fill="none" d="M130,90 L170,90 L178,258 L122,258 Z" />
      {/* strings */}
      <path
        className="thin lead"
        fill="none"
        d="M138,88 L134,436 L142,458 M145,88 L145,436 L148,458
           M155,88 L166,436 L152,458 M162,88 L176,436 L158,458"
      />
      {/* nut */}
      <path className="ink" fill="none" d="M124,90 h52 v-5 h-52 Z" />
      {/* pegbox */}
      <path className="ink" fill="none" d="M126,85 L174,85 L170,34 C168,20 161,14 150,14 C139,14 132,20 130,34 Z" />
      {/* scroll */}
      <path
        className="ink thin"
        fill="none"
        d="M150,14 C150,2 158,-8 149,-17 C137,-27 117,-19 116,-3 C115,11 128,20 142,16
           C152,13 154,3 146,-2 C140,-6 132,0 135,7"
      />
      {/* pegs */}
      <path className="ink" fill="none" d="M130,38 h-22 M132,58 h-24 M170,46 h22 M168,66 h24" />
      <circle className="ink" cx="104" cy="38" r="4.5" fill="none" />
      <circle className="ink" cx="102" cy="58" r="4.5" fill="none" />
      <circle className="ink" cx="196" cy="46" r="4.5" fill="none" />
      <circle className="ink" cx="198" cy="66" r="4.5" fill="none" />

      {/* labels */}
      <Lead d="M132,-8 L150,-2" />
      <text className="lbl" x="120" y="-10" textAnchor="end">scroll</text>
      <Lead d="M100,48 L58,52" />
      <text className="lbl" x="52" y="52" textAnchor="end">pegs</text>
      <Lead d="M150,82 L204,72" />
      <text className="lbl" x="210" y="72" textAnchor="start">nut</text>
      <Lead d="M118,160 L70,160" />
      <text className="lbl" x="64" y="160" textAnchor="end">neck</text>
      <Lead d="M176,210 L232,204" />
      <text className="lbl" x="238" y="204" textAnchor="start">fingerboard</text>
      <Lead d="M188,400 L250,384" />
      <text className="lbl" x="256" y="384" textAnchor="start">f-hole</text>
      <Lead d="M176,430 L250,424" />
      <text className="lbl" x="256" y="424" textAnchor="start">bridge</text>
      <Lead d="M164,440 L250,462" dash />
      <text className="lbl" x="256" y="460" textAnchor="start">sound post</text>
      <text className="lbl dim" x="256" y="473" textAnchor="start">(inside)</text>
      <Lead d="M152,502 L250,514" />
      <text className="lbl" x="256" y="512" textAnchor="start">tailpiece,</text>
      <text className="lbl" x="256" y="525" textAnchor="start">fine tuners</text>
      <Lead d="M74,496 L36,500" />
      <text className="lbl" x="30" y="500" textAnchor="end">chin rest</text>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export function BowDiagram({
  caption = "The bow, end to end. Tighten the hair with the screw before you play — about a pencil's width of gap in the middle — and loosen it every time you finish. Instructions constantly say which part to use: 'at the frog', 'upper half', 'whole bow'.",
}: {
  caption?: string;
}) {
  return (
    <Frame viewBox="-8 -6 648 200" caption={caption} maxW={560}>
      <path className="ink" fill="none" d="M56,66 Q330,92 596,52" />
      <path className="ink thin" fill="none" d="M74,92 L590,58" />
      <path className="ink" fill="none" d="M52,60 L78,68 L76,98 L48,88 Z" />
      <circle className="ink" cx="38" cy="72" r="5" fill="none" />
      <path className="ink" fill="none" d="M43,72 L50,70" />
      <path className="ink" fill="none" d="M590,52 L610,46 L606,68 L590,58 Z" />
      <path className="lead" fill="none" d="M330,74 v14" />

      <Lead d="M38,80 L36,116" />
      <text className="lbl" x="36" y="130" textAnchor="middle">screw</text>
      <Lead d="M60,98 L60,122" />
      <text className="lbl" x="60" y="136" textAnchor="middle">frog</text>
      <Lead d="M210,79 L210,116" />
      <text className="lbl" x="210" y="130" textAnchor="middle">the hair</text>
      <Lead d="M420,70 L420,34" />
      <text className="lbl" x="420" y="28" textAnchor="middle">the stick</text>
      <text className="lbl" x="330" y="106" textAnchor="middle">middle</text>
      <Lead d="M600,54 L600,92" />
      <text className="lbl" x="600" y="106" textAnchor="middle">tip</text>

      <path className="lead" fill="none" d="M74,152 H326 M74,148 v8 M326,148 v8" />
      <text className="lbl dim" x="200" y="168" textAnchor="middle">lower half</text>
      <path className="lead" fill="none" d="M334,152 H588 M334,148 v8 M588,148 v8" />
      <text className="lbl dim" x="461" y="168" textAnchor="middle">upper half</text>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export function BowHoldDiagram({
  caption = "The bow hold at the frog, roughly from the front. The thumb (bent, underneath, tip in the nook where the stick meets the frog) and the middle two fingers form the ring that holds the bow. The index sits a little apart — it leans your arm's weight into the string. The pinky stays curved, balanced on top.",
}: {
  caption?: string;
}) {
  return (
    <Frame viewBox="-6 -14 512 320" caption={caption} maxW={470}>
      {/* stick + frog */}
      <path className="ink" fill="none" d="M44,168 H470" />
      <path className="ink thin" fill="none" d="M44,182 H470" />
      <path className="ink" fill="none" d="M58,152 h74 v34 h-74 Z" />
      <circle className="ink" cx="40" cy="169" r="6" fill="none" />

      {/* pinky — curved, on top, near the frog end */}
      <path className="ink" fill="none" d="M150,168 C150,140 172,132 182,150 C186,158 180,168 172,168" />
      <Lead d="M162,138 L128,84" />
      <text className="lbl" x="124" y="78" textAnchor="end">pinky</text>
      <text className="lbl dim" x="124" y="92" textAnchor="end">curved, on top</text>

      {/* 3rd + 2nd — draped over the stick */}
      <path className="ink" fill="none" d="M200,168 C200,136 224,128 234,148 C238,157 232,168 224,168" />
      <path className="ink" fill="none" d="M252,168 C252,132 278,124 288,146 C292,156 286,168 278,168" />
      <Lead d="M244,126 L264,80" />
      <text className="lbl" x="270" y="74" textAnchor="start">2nd + 3rd fingers</text>
      <text className="lbl dim" x="270" y="88" textAnchor="start">draped over the stick</text>

      {/* 1st — a little apart, toward the tip */}
      <path className="ink" fill="none" d="M330,168 C330,138 356,130 366,150 C370,159 362,168 354,168" />
      <Lead d="M350,132 L372,232" />
      <text className="lbl" x="378" y="234" textAnchor="start">1st finger</text>
      <text className="lbl dim" x="378" y="248" textAnchor="start">a little apart — leans</text>
      <text className="lbl dim" x="378" y="262" textAnchor="start">weight into the string</text>

      {/* thumb — bent, underneath, in the nook */}
      <path className="ink" fill="none" d="M158,186 C156,214 178,226 194,214 C204,206 202,192 192,186" />
      <Lead d="M176,220 L138,266" />
      <text className="lbl" x="134" y="262" textAnchor="end">thumb</text>
      <text className="lbl dim" x="134" y="276" textAnchor="end">bent, underneath,</text>
      <text className="lbl dim" x="134" y="290" textAnchor="end">tip in the nook</text>

      <text className="lbl dim" x="426" y="196" textAnchor="middle">tip →</text>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export function RhythmTree({
  caption = "Every value is the one above it, cut in two. One whole note fills the same span of time as two halves, four quarters, eight eighths or sixteen sixteenths — the pulse underneath never changes, the notes just divide it finer. Rests follow the exact same tree, with no pitch.",
}: {
  caption?: string;
}) {
  const rows = [
    { n: 1, label: "whole note", each: "4 beats" },
    { n: 2, label: "half notes", each: "2 beats each" },
    { n: 4, label: "quarter notes", each: "1 beat each" },
    { n: 8, label: "eighth notes", each: "½ beat each" },
    { n: 16, label: "sixteenth notes", each: "¼ beat each" },
  ];
  const W = 424;
  const x0 = 2;
  const rowH = 28;
  const gap = 13;
  const totalH = rows.length * (rowH + gap) - gap;
  return (
    <Frame
      viewBox={`-6 -8 ${W + 194} ${totalH + 16}`}
      caption={caption}
      maxW={580}
    >
      {rows.map((r, i) => {
        const y = i * (rowH + gap);
        const cw = W / r.n;
        return (
          <g key={r.n}>
            {Array.from({ length: r.n }).map((_, k) => (
              <rect
                key={k}
                className="ink thin"
                fill="none"
                x={x0 + k * cw + 1}
                y={y}
                width={cw - 2}
                height={rowH}
                rx={2}
              />
            ))}
            <text
              className="lbl"
              x={x0 + W + 14}
              y={y + rowH / 2 - 1}
              textAnchor="start"
            >
              {r.n === 1 ? "1 " : `${r.n} `}
              {r.label}
            </text>
            <text
              className="lbl dim"
              x={x0 + W + 14}
              y={y + rowH / 2 + 13}
              textAnchor="start"
            >
              {r.each}
            </text>
          </g>
        );
      })}
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export function BowLanesDiagram({
  caption = "The five sounding points, bridge to fingerboard — each about a bow-hair wide. Nearer the bridge (1) is louder and fuller; nearer the fingerboard (5) is softer and flute-like. Start every open-string sound in lane 3.",
}: {
  caption?: string;
}) {
  const lanes = [
    { x: 96, n: "1", d: "ff" },
    { x: 156, n: "2", d: "f" },
    { x: 216, n: "3", d: "mf" },
    { x: 276, n: "4", d: "mp" },
    { x: 336, n: "5", d: "p" },
  ];
  return (
    <Frame viewBox="-8 -8 448 214" caption={caption} maxW={460}>
      <path className="ink" fill="none" d="M64,96 H368" />
      <path className="ink" fill="none" d="M64,58 V134" />
      <text className="lbl" x="64" y="152" textAnchor="middle">bridge</text>
      <path className="ink" fill="none" d="M368,58 V134" />
      <text className="lbl" x="368" y="152" textAnchor="middle">fingerboard</text>
      {lanes.map((l) => (
        <g key={l.n}>
          <path className="lead" fill="none" strokeDasharray="3 4" d={`M${l.x},64 V128`} />
          <text className="lbl" x={l.x} y="50" textAnchor="middle">{l.n}</text>
          <text className="lbl dim" x={l.x} y="176" textAnchor="middle">{l.d}</text>
        </g>
      ))}
      <path className="ink" fill="none" strokeWidth="3" d="M206,74 L226,118" />
      <text className="lbl dim" x="216" y="196" textAnchor="middle">the bow starts here</text>
    </Frame>
  );
}
