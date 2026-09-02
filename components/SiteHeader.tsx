import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[51rem] items-baseline justify-between px-6 pt-8">
      <Link href="/" className="font-serif text-[1.0625rem] tracking-tight">
        From Zero to Mozart
      </Link>
      <nav className="flex items-baseline gap-5">
        <Link href="/mozart" className="label hover:text-ink">
          Mozart
        </Link>
        <Link href="/practice" className="label hover:text-ink">
          Practice
        </Link>
        <Link href="/learn" className="label hover:text-ink">
          Contents
        </Link>
      </nav>
    </header>
  );
}
