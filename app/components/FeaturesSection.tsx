const features = [
  {
    title: "Front Desk",
    desc: "Handle check-ins, check-outs, walk-ins, room moves and guest stays from one simple room board.",
  },
  {
    title: "Reservations",
    desc: "Manage direct bookings, company guests, OTA reservations, rates and stay details in one place.",
  },
  {
    title: "Housekeeping",
    desc: "Keep front desk and housekeeping aligned with live room status, cleaning updates and occupancy visibility.",
  },
  {
    title: "Night Audit",
    desc: "Close the correct hotel business date, post nightly charges and generate daily audit reports with confidence.",
  },
  {
    title: "Folios & Payments",
    desc: "Create guest folios, record advances, post charges, apply taxes and track balances without paper registers.",
  },
  {
    title: "Owner Dashboard",
    desc: "See occupancy, revenue, ADR, RevPAR, outstanding balances and daily performance from anywhere.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="border-t border-slate-800 bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
            Everything your property needs to operate daily
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Built for real hotel operations
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-400 md:text-base">
            Qayam PMS brings front desk, reservations, housekeeping, night audit,
            folios and owner reporting together in one cloud platform.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition hover:border-emerald-800/70 hover:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-100">
                {f.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}