import Image from "next/image";

export default function OwnerSection() {
  return (
    <section className="border-t border-slate-800 px-4 py-16 sm:py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold sm:text-4xl">
              Owner Dashboard with
              <span className="text-emerald-500"> Real Time Insights</span>
            </h2>

            <p className="mt-4 text-sm text-slate-400 sm:text-lg">
              Track occupancy, revenue, outstanding balances and daily
              performance from anywhere in the world.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              No more calling front desk for updates.
            </p>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
            <Image
              src="/owner-dashboard.png"
              alt="Owner Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
