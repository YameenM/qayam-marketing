import MarketingButtons from "@/components/MarketingButtons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:py-24">
        
        {/* Small Label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Built for hotels & guest houses in Pakistan
        </p>

        {/* Headline */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Run Your Hotel <span className="text-emerald-500">,</span> Guest House Front Desk, Bookings{" "}
          <span className="sm:block">
            and Accounts from One Simple System
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg">
          Qayam <span className="text-emerald-500">PMS</span> helps hotels and guest houses manage reservations, payments, room status, check-ins,
          check-outs, invoices, night audit and daily
          reports without paper registers or complicated software.
        </p>

        {/* CTA Buttons */} 
        <MarketingButtons />

        {/* Trust Line */}
        <p className="mt-6 text-xs text-slate-500 sm:text-sm">
          14-day free trial · No credit card required · Setup support included
        </p>
      </div>
    </section>
  );
}