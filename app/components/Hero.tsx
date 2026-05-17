import MarketingButtons from "@/components/MarketingButtons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:py-24">
        {/* Small Label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Cloud PMS for independent hotels, guest houses & boutique properties
        </p>

        {/* Headline */}
        <h1 className="mx-auto max-w-5xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Simple Hotel Management Software{" "}
          <span className="text-emerald-500">for Modern Properties</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg">
          Qayam <span className="text-emerald-500">PMS</span> helps hotels,
          guest houses and boutique stays manage reservations, front desk,
          housekeeping, folios, payments, night audit and owner reports from one
          easy cloud platform.
        </p>

        {/* CTA Buttons */}
        <MarketingButtons />

        {/* Trust Line */}
        <p className="mt-6 text-xs text-slate-500 sm:text-sm">
          14-day free trial · No credit card required · Set up your first
          property in minutes
        </p>

        {/* Positioning Line */}
        <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm">
          Built for independent properties starting in Pakistan, ready for
          global hotel operations.
        </p>
      </div>
    </section>
  );
}