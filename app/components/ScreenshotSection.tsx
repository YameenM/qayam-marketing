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

        {/* Founder Credibility Section */}
        <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-left">
          <h3 className="text-lg font-semibold text-emerald-400">
            Built by Hospitality Professionals
          </h3>

          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Qayam PMS was built after 20+ years of real hotel operations experience
            across Pakistan, UAE, and the USA. We have worked at the front desk,
            handled night audits, managed housekeeping teams, and dealt with daily
            cash and guest challenges.
          </p>

          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            This is not software built by developers alone it is a system designed
            by people who understand how hotels actually operate.
          </p>

          {/* On-site Demo Line */}
          <p className="mt-6 text-sm font-medium text-emerald-400">
            On-site demos in Karachi. Lahore & Islamabad on request. Nationwide online demos available.
            </p>

            <div className="mt-4 text-sm text-slate-300 space-y-1">
          <p>
            📞 Call or WhatsApp:{" "}
            <a
              href="https://wa.me/923307015150"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-medium hover:underline"
            >
              +92 330 7015150
            </a>
          </p>

          <p>
            📧{" "}
            <a
              href="mailto:info@sohumbit.com?subject=Inquiry about Qayam PMS"
              className="text-emerald-400 font-medium hover:underline"
            >
              info@sohumbit.com
            </a>
          </p>

          <p>
            💻 Live Zoom demo available anytime by appointment.
          </p>
        </div>


        </div>

      </div>
    </section>
  );
}
