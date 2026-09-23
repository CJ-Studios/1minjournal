import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-line bg-ground">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-cream-faint sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif text-base text-cream">1 Min Journal</span>
          <span aria-hidden="true">·</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/" className="transition-colors hover:text-cream">
            Home
          </Link>
          <Link href="/support" className="transition-colors hover:text-cream">
            Support
          </Link>
          <Link href="/privacy-policy" className="transition-colors hover:text-cream">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
