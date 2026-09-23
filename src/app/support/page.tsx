import type { Metadata } from "next";
import Link from "next/link";
import ForestScene from "@/components/ForestScene";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Support · 1 Min Journal",
  description: "Get help with the 1 Min Journal Android app.",
};

const SUPPORT_EMAIL = "purpleturtledev@gmail.com";

const FAQ = [
  {
    q: "Where are my journal entries stored?",
    a: "On your phone only. Entries are never uploaded to our servers, so nobody but you can read them.",
  },
  {
    q: "What happens if I uninstall the app?",
    a: "Because entries live on your device, uninstalling removes them. Back up your phone before you uninstall if you want to keep your journal.",
  },
  {
    q: "How do I turn reminders on or off?",
    a: "Open the You tab in the app and toggle daily reminders. You can also manage notifications from your Android system settings.",
  },
  {
    q: "Is the app available on iPhone?",
    a: "Not yet. 1 Min Journal is launching on Android first. An iOS version is planned.",
  },
];

export default function Support() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative flex-1 overflow-hidden">
        <ForestScene compact />

        <header className="relative z-10 mx-auto flex w-full max-w-3xl items-center justify-between px-6 pt-6">
          <Link href="/" className="font-serif text-lg tracking-wide text-cream">
            1 Min Journal
          </Link>
          <Link href="/" className="text-sm text-cream-dim transition-colors hover:text-cream">
            &larr; Back home
          </Link>
        </header>

        <section className="prose-forest relative z-10 mx-auto w-full max-w-3xl px-6 pb-24 pt-12 sm:pt-16">
          <h1 className="text-4xl text-cream sm:text-5xl">Support</h1>
          <p className="mt-4 max-w-xl text-lg">
            Stuck, found a bug, or have an idea? We read every message and
            usually reply within a couple of days.
          </p>

          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=1%20Min%20Journal%20support`}
            className="store-btn mt-8 inline-flex items-center gap-3 rounded-2xl px-5 py-3 !no-underline"
          >
            <span aria-hidden="true" className="text-2xl">✉️</span>
            <span className="leading-tight">
              <span className="block text-[11px] uppercase tracking-[0.14em] !text-cream-faint">
                Email us
              </span>
              <span className="block text-base font-semibold !text-cream">{SUPPORT_EMAIL}</span>
            </span>
          </a>

          <div className="journal-card mt-14 rounded-[28px] px-7 py-8 sm:px-10">
            <h2 className="text-xl font-semibold">Common questions</h2>
            <dl className="mt-6 divide-y divide-line">
              {FAQ.map((item) => (
                <div key={item.q} className="py-5 first:pt-0 last:pb-0">
                  <dt className="font-medium text-cream">{item.q}</dt>
                  <dd className="mt-2 text-cream-dim">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-10 text-sm">
            Looking for how we handle your data? Read the{" "}
            <Link href="/privacy-policy">privacy policy</Link>.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
