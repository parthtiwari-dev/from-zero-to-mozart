export default function Home() {
  return (
    <main className="mx-auto flex min-h-full max-w-xl flex-1 flex-col justify-center gap-4 px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
        Phase 0 — scaffolded
      </p>
      <h1 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
        Learning the violin — from Ode to Joy to Mozart&rsquo;s Third.
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Nothing to see here yet. The plan, curriculum map, and open questions
        live in <code className="font-mono text-[0.9em]">/docs</code>. Next: lock
        the design and build one lesson end to end.
      </p>
    </main>
  );
}
