import Image from "next/image";

export default function ScreenshotSection() {
  return (
    <section className="border-t border-slate-800 bg-slate-950 px-4 py-16 text-slate-100 sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        {/* Headline */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Built for daily hotel operations
        </p>

        <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
          Replace{" "}
          <span className="text-emerald-500">
            paper registers, spreadsheets and disconnected tools
          </span>
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-400 sm:text-lg">
          Qayam PMS brings reservations, front desk, housekeeping, folios,
          payments, night audit and owner reporting into one secure cloud
          dashboard.
        </p>

        {/* Screenshot Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <Image
            src="/hms-dashboard.png"
            alt="Qayam PMS dashboard for hotel front desk and owner reporting"
            width={1200}
            height={700}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* Trust Micro Copy */}
        <p className="mt-6 text-xs leading-5 text-slate-500 sm:text-sm">
          Designed for independent hotels, guest houses and boutique properties
          that need simple, reliable daily operations.
        </p>

        {/* Founder Credibility Section */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-left">
          <h3 className="text-lg font-semibold text-emerald-400">
            Built by hospitality professionals
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Qayam PMS was built from 20+ years of real hotel operations
            experience across Pakistan, UAE and the USA, including front desk,
            night audit, housekeeping coordination, guest folios, payments and
            daily owner reporting.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            This is not software built by developers alone. It is designed by
            people who understand how hotels actually operate under pressure.
          </p>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-sm font-medium text-emerald-400">
              Product demos available online. On-site demos available in Karachi;
              Lahore and Islamabad on request.
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>
                  📞 Pakistan WhatsApp:{" "}
                  <a
                    href="https://wa.me/923307015150"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-400 hover:underline"
                  >
                    +92 330 7015150
                  </a>
                </p>

                <p>
                  🇺🇸 USA / International:{" "}
                  <a
                    href="tel:+13472387393"
                    className="font-medium text-emerald-400 hover:underline"
                  >
                    +1 347 238 7393
                  </a>
                </p>

              <p>
                📧 Email:{" "}
                <a
                  href="mailto:info@sohumbit.com?subject=Inquiry about Qayam PMS"
                  className="font-medium text-emerald-400 hover:underline"
                >
                  info@sohumbit.com
                </a>
              </p>

              <p>💻 Live Zoom demo available by appointment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}