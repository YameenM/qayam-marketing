import Image from "next/image";

export default function ScreenshotSection() {
  return (
    <section className="border-t border-slate-800 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">

        {/* Headline */}
        <h2 className="text-2xl font-bold leading-tight sm:text-4xl">
          Replace Your{" "}
          <span className="text-emerald-500">
            Excel Sheets & Paper Registers
          </span>
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-lg">
          Stop managing bookings manually. Qayam automates reservations,
          front desk, housekeeping, night audit and accounts 
          all in one secure cloud dashboard.
        </p>

        {/* Screenshot Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <Image
            src="/hms-dashboard.png"
            alt="Qayam PMS Dashboard"
            width={1200}
            height={700}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Trust Micro Copy */}
        <p className="mt-6 text-xs text-slate-500 sm:text-sm">
          Designed specifically for hotels and guest houses in Pakistan.
        </p>

      </div>
    </section>
  );
}
