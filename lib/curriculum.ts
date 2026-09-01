/**
 * The course manifest. Stages → lessons, in order.
 * The full 10-stage map lives in docs/CURRICULUM.md; this file is the part
 * that has been built. A lesson without `published: true` is planned but has
 * no page yet (it won't be routed or linked).
 */

export type Track = "reading" | "left-hand" | "bow" | "ear" | "repertoire";
export type Tag = "NOW" | "NEXT" | "LATER" | "REFERENCE";

export const TRACK_LABEL: Record<Track, string> = {
  reading: "Reading",
  "left-hand": "Left hand",
  bow: "The bow",
  ear: "Ear & musicianship",
  repertoire: "Repertoire",
};

export interface Stage {
  n: number;
  name: string;
  /** a hard gate is reached at the end of this stage */
  gate?: "Foundation" | "Intermediate";
}

export interface Lesson {
  slug: string;
  title: string;
  stage: number;
  track: Track;
  tag: Tag;
  published?: boolean;
}

export const STAGES: Stage[] = [
  { n: 0, name: "Setup" },
  { n: 1, name: "First position & the staff" },
  { n: 2, name: "Rhythm" },
  { n: 3, name: "Score symbols" },
  { n: 4, name: "Scales & musicianship" },
  { n: 5, name: "The bow", gate: "Foundation" },
  { n: 6, name: "Beyond first position" },
  { n: 7, name: "Vibrato & expression" },
  { n: 8, name: "Sight-reading & ear training", gate: "Intermediate" },
  { n: 9, name: "The repertoire journey" },
];

/** In teaching order. */
export const LESSONS: Lesson[] = [
  {
    slug: "open-strings-on-the-staff",
    title: "The four open strings, on the staff",
    stage: 1,
    track: "reading",
    tag: "NOW",
    published: true,
  },
  {
    slug: "which-b-is-this",
    title: "Which B is this?",
    stage: 1,
    track: "reading",
    tag: "NOW",
    published: true,
  },
];

export const publishedLessons = (): Lesson[] =>
  LESSONS.filter((l) => l.published);

export const lessonBySlug = (slug: string): Lesson | undefined =>
  publishedLessons().find((l) => l.slug === slug);

export const stageByNumber = (n: number): Stage | undefined =>
  STAGES.find((s) => s.n === n);

export function lessonNeighbours(slug: string): {
  prev?: Lesson;
  next?: Lesson;
} {
  const list = publishedLessons();
  const i = list.findIndex((l) => l.slug === slug);
  if (i === -1) return {};
  return { prev: list[i - 1], next: list[i + 1] };
}
