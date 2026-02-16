import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:py-24">
        
        {/* Headline */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          The Modern Property Management System
          <br className="hidden sm:block" />
          for Hotels in{" "}
          <span className="text-emerald-500">Pakistan</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 sm:mt-6 sm:text-lg">
          Manage reservations, front desk, housekeeping, night audit
          and accounts all in one secure cloud platform built for
          Pakistani hotels.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center">
          <Link
            href="https://pms.qayam.com.pk"
            className="w-full rounded-md bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-500 sm:w-auto"
          >
            Start Free Trial
          </Link>

          <Link
            href="https://pms.qayam.com.pk/login"
            className="w-full rounded-md border border-slate-700 px-6 py-3 text-base text-slate-300 transition hover:bg-slate-900 sm:w-auto"
          >
            Login to PMS
          </Link>
        </div>

        {/* Trust Line */}
        <p className="mt-6 text-xs text-slate-500 sm:text-sm">
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
