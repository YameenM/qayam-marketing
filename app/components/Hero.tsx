
import MarketingButtons from "@/components/MarketingButtons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:py-24">
        
        {/* Headline */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Hotel & Guest House Property Management System{" "}
          <span className="sm:block">
            in <span className="text-emerald-500">Pakistan</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 sm:mt-6 sm:text-lg">
          Manage reservations, front desk, housekeeping, night audit
          and accounts all in one secure cloud platform built for
          Hotels & Guest Houses across Pakistan.
        </p>

        {/* CTA Buttons */} 
        <MarketingButtons />

        {/* Trust Line */}
        <p className="mt-6 text-xs text-slate-500 sm:text-sm">
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
