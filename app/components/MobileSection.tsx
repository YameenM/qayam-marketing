import Image from "next/image";

export default function MobileSection() {
  return (
    <section className="border-t border-slate-800 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">

        <h2 className="text-2xl font-bold sm:text-4xl">
          Manage Your Hotel
          <span className="text-emerald-500"> From Your Phone</span>
        </h2>

        <p className="mt-4 text-sm text-slate-400 sm:text-lg">
          Check balances, occupancy and reports anytime 
          whether you are at the hotel or traveling.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <Image
            src="/owner-mobile-top.png"
            alt="Owner Mobile View"
            width={300}
            height={600}
            className="rounded-xl border border-slate-800 shadow-xl"
          />

          <Image
            src="/owner-mobile-balances.png"
            alt="Owner Mobile Balances"
            width={300}
            height={600}
            className="rounded-xl border border-slate-800 shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
