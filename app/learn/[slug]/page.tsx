import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { lessonModules } from "@/content/lessons/registry";
import {
  lessonBySlug,
  lessonNeighbours,
  publishedLessons,
  stageByNumber,
  TRACK_LABEL,
  type Lesson,
} from "@/lib/curriculum";

export function generateStaticParams() {
  return publishedLessons().map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/learn/[slug]">) {
  const { slug } = await params;
  return { title: lessonBySlug(slug)?.title };
}

export default async function LessonPage({ params }: PageProps<"/learn/[slug]">) {
  const { slug } = await params;
  const lesson = lessonBySlug(slug);
  const load = lessonModules[slug];
  if (!lesson || !load) notFound();

  const { default: Content } = await load();
  const stage = stageByNumber(lesson.stage);
  const { prev, next } = lessonNeighbours(slug);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[38rem] px-6 pt-10 pb-16">
        <div className="flex items-baseline justify-between gap-4">
          <p className="label">
            Stage {lesson.stage} · {stage?.name} · {TRACK_LABEL[lesson.track]}
          </p>
          <span className="label text-accent">{lesson.tag}</span>
        </div>

        <h1 className="mt-4 font-serif text-[1.75rem] font-medium leading-tight tracking-[-0.011em]">
          {lesson.title}
        </h1>

        <div className="prose mt-5">
          <Content />
        </div>

        <nav className="mt-16 flex justify-between gap-6 border-t border-hairline pt-6">
          <NavLink lesson={prev} dir="prev" />
          <NavLink lesson={next} dir="next" />
        </nav>
      </main>
    </>
  );
}

function NavLink({ lesson, dir }: { lesson?: Lesson; dir: "prev" | "next" }) {
  if (!lesson) return <span />;
  return (
    <Link
      href={`/learn/${lesson.slug}`}
      className={`group flex max-w-[15rem] flex-col gap-1 ${
        dir === "next" ? "items-end text-right" : "items-start"
      }`}
    >
      <span className="label">{dir === "prev" ? "← Back" : "Next"}</span>
      <span className="font-serif text-[0.95rem] text-ink-muted group-hover:text-ink">
        {lesson.title}
      </span>
    </Link>
  );
}
