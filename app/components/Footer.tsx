import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Top Section */}
        <div className="grid gap-10 text-sm text-slate-400 sm:grid-cols-2 md:grid-cols-3">

          

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">Qayam PMS</h3>
            <p className="mt-3">
              Modern Property Management System built
              specifically for hotels and guest houses in Pakistan.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2">
              <li>SOHUMBIT (SMC PVT) LTD</li>
              <li>Karachi, Pakistan</li>
              <li>
                <a
                  href="mailto:info@sohumbit.com"
                  className="hover:text-white transition"
                >
                  info@sohumbit.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.sohumbit.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  www.sohumbit.com
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#features" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://pms.qayam.com.pk/login"
                  className="hover:text-white transition"
                >
                  Login to PMS
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Qayam PMS.  
          A product of SOHUMBIT (SMC PVT) LTD.  
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
