import Image from "next/image";

export default function MobileSection() {
  return (
    <section className="border-t border-slate-800 bg-slate-950 px-4 py-16 text-slate-100 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
            Owner-friendly reporting
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
            Manage your property{" "}
            <span className="text-emerald-500">from your phone</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-lg">
            Check occupancy, revenue, outstanding balances and daily reports
            anytime whether you are at the front desk, at home or traveling.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-left">
            <h3 className="text-lg font-semibold text-slate-100">
              Stay connected to daily operations
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-400">
              <div>
                <span className="font-medium text-slate-200">
                  Live occupancy:
                </span>{" "}
                See occupied and vacant rooms without calling the front desk.
              </div>

              <div>
                <span className="font-medium text-slate-200">
                  Revenue overview:
                </span>{" "}
                Track room revenue, taxes, ADR, RevPAR and daily performance.
              </div>

              <div>
                <span className="font-medium text-slate-200">
                  Outstanding balances:
                </span>{" "}
                Quickly review in-house folio balances and company dues.
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Image
              src="/owner-mobile-top.png"
              alt="Qayam PMS owner dashboard mobile view"
              width={300}
              height={600}
              className="rounded-2xl border border-slate-800 shadow-2xl"
            />

            <Image
              src="/owner-mobile-balances.png"
              alt="Qayam PMS mobile outstanding balances view"
              width={300}
              height={600}
              className="rounded-2xl border border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}