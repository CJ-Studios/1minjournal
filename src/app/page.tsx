import Image from "next/image";
import heroPhone from "../../public/hero-phone.png";
import ForestScene from "@/components/ForestScene";
import SiteFooter from "@/components/SiteFooter";

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path fill="#34a853" d="M3.6 2.3 13.9 12 3.6 21.7c-.4-.2-.6-.7-.6-1.2V3.5c0-.5.2-1 .6-1.2Z" />
      <path fill="#fbbc04" d="m17.4 8.7 3.4 1.9c1.1.6 1.1 2.2 0 2.8l-3.4 1.9L13.9 12l3.5-3.3Z" />
      <path fill="#4285f4" d="M3.6 2.3c.4-.3 1-.3 1.5 0L17.4 8.7 13.9 12 3.6 2.3Z" />
      <path fill="#ea4335" d="M13.9 12l3.5 3.3L5.1 21.7c-.5.3-1.1.3-1.5 0L13.9 12Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-cream" aria-hidden="true">
      <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.1.8 1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.7-1-2.7-4.2ZM14.1 5.7c.6-.8 1.1-1.9.9-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4Z" />
    </svg>
  );
}

function StoreButton({
  icon,
  store,
}: {
  icon: React.ReactNode;
  store: string;
}) {
  return (
    <div
      role="button"
      aria-disabled="true"
      className="store-btn flex w-full items-center gap-3 rounded-2xl px-5 py-3 text-left sm:w-auto sm:min-w-[220px]"
    >
      {icon}
      <div className="flex-1 leading-tight">
        <div className="text-[11px] uppercase tracking-[0.14em] text-cream-faint">Coming soon on</div>
        <div className="text-lg font-semibold text-cream">{store}</div>
      </div>
    </div>
  );
}

function PhoneHero() {
  return (
    <div className="rise relative mt-14 w-full max-w-[360px] sm:max-w-[400px]" style={{ animationDelay: "0.36s" }}>
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-10 bottom-10 rounded-full bg-[#9fd6ac] opacity-30 blur-3xl"
      />
      <Image
        src={heroPhone}
        alt="1 Min Journal on a phone: a saved reflection card reading “Today was an amazing day that I spent with my father.”"
        priority
        className="relative z-10 h-auto w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.55)]"
      />
    </div>
  );
}


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative flex flex-1 flex-col overflow-hidden">
        <ForestScene />

        <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-6 pt-6">
          <span className="font-serif text-lg tracking-wide text-cream">1 Min Journal</span>
          <span className="text-xs uppercase tracking-[0.18em] text-cream-faint">Android</span>
        </header>

        <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 pb-24 pt-10 text-center sm:pt-16">
          <h1 className="rise max-w-3xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-cream sm:text-6xl">
            One minute a day.
            <br />
            <span className="text-cream/80">A clearer head all week.</span>
          </h1>

          <p
            className="rise mt-5 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg"
            style={{ animationDelay: "0.12s" }}
          >
            Write a sentence about your day, tag how it felt, and watch your
            patterns emerge. Private by design. Everything stays on your phone.
          </p>

          {/* Store buttons */}
          <div
            className="rise mt-9 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <StoreButton icon={<GooglePlayIcon />} store="Google Play" />
            <StoreButton icon={<AppleIcon />} store="App Store" />
          </div>

          <PhoneHero />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
