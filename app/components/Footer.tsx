import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-12 text-slate-400">
      <div className="mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="grid gap-10 text-sm sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">Qayam PMS</h3>

            <p className="mt-3 leading-6">
              Simple cloud hotel management software for independent hotels,
              guest houses and boutique properties.
            </p>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              Built from real hospitality operations experience across Pakistan,
              UAE and the USA.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white">Product</h4>

            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#features" className="transition hover:text-white">
                  Features
                </Link>
              </li>

              <li>
                <Link href="#pricing" className="transition hover:text-white">
                  Pricing
                </Link>
              </li>

              <li>
                <Link href="/" className="transition hover:text-white">
                  Start free trial
                </Link>
              </li>

              <li>
                <Link href="/login" className="transition hover:text-white">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white">Support</h4>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://wa.me/923307015150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Pakistan WhatsApp: +92 330 7015150
                </a>
              </li>

              <li>
                <a
                  href="tel:+13472387393"
                  className="transition hover:text-white"
                >
                  USA / International: +1 347 238 7393
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@sohumbit.com?subject=Inquiry about Qayam PMS"
                  className="transition hover:text-white"
                >
                  info@sohumbit.com
                </a>
              </li>

              <li className="text-slate-500">
                Online demos available by appointment.
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white">Company</h4>

            <ul className="mt-3 space-y-2">
              <li>SOHUMBIT (SMC-PVT) LTD</li>
              <li>Karachi, Pakistan</li>

              <li>
                <a
                  href="https://www.sohumbit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  www.sohumbit.com
                </a>
              </li>

              <li className="text-slate-500">
                Product demos in Karachi. Lahore & Islamabad on request.
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs leading-6 text-slate-500">
          © {new Date().getFullYear()} Qayam PMS. A product of SOHUMBIT
          (SMC-PVT) LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}