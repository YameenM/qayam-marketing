import Image from "next/image";

export default function OwnerSection() {
  return (
    <section className="border-t border-slate-800 bg-slate-950 px-4 py-16 text-slate-100 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* TEXT */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
              Owner dashboard
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
              Real-time insights for{" "}
              <span className="text-emerald-500">hotel owners</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-lg">
              Track occupancy, revenue, ADR, RevPAR, outstanding balances and
              daily performance from anywhere.
            </p>

            <div className="mt-6 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="text-sm font-semibold text-slate-200">
                  Live property view
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  See today&apos;s occupancy, arrivals, departures and room
                  status without calling the front desk.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="text-sm font-semibold text-slate-200">
                  Financial visibility
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Review revenue, payments, balances and daily audit
                  performance in one place.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
            <Image
              src="/owner-dashboard.png"
              alt="Qayam PMS owner dashboard with occupancy and revenue insights"
              width={1200}
              height={800}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}