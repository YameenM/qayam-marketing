"use client";

import { useState } from "react";

export default function PricingPreview() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const monthlyPrice = 7000;
  const yearlyPrice = 7000 * 12 * 0.85; // 15% discount
  const yearlyMonthlyEquivalent = Math.round(yearlyPrice / 12);

  return (
    <section
      id="pricing"
      className="border-t border-slate-800 px-4 py-16 text-center"
    >
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <h2 className="text-3xl font-bold sm:text-4xl">
          Simple & Transparent Pricing
        </h2>

        <p className="mt-4 text-slate-400">
          No hidden charges. No setup fees. No hardware required.
        </p>

        {/* Billing Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="flex rounded-full bg-slate-900 p-1 border border-slate-800 text-sm">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-full transition ${
                billing === "monthly"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-2 rounded-full transition ${
                billing === "yearly"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

      
        {/* Pricing Card */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

        {/* Plan Name */}
        <h3 className="text-lg sm:text-xl font-semibold text-white">
            Standard Plan
        </h3>

        {/* Price */}
        <div className="mt-6 text-center">

            {billing === "monthly" ? (
            <>
                <p className="text-4xl font-bold text-white">
                PKR{" "}
                <span className="text-emerald-400">
                    {monthlyPrice.toLocaleString()}
                </span>
                <span className="ml-2 text-base font-normal text-slate-400">
                    /month
                </span>
                </p>

                <p className="mt-2 text-sm text-slate-400">
                Only{" "}
                <span className="text-emerald-400 font-semibold">
                    PKR {(monthlyPrice / 30).toFixed(0)}
                </span>{" "}
                per day
                </p>

                <p className="mt-1 text-xs text-slate-500">
                Recover this with just 1 extra booking.
                </p>
            </>
            ) : (
            <>
                <p className="text-4xl font-bold text-white">
                PKR{" "}
                <span className="text-emerald-400">
                    {yearlyMonthlyEquivalent.toLocaleString()}
                </span>
                <span className="ml-2 text-base font-normal text-slate-400">
                    /month
                </span>
                </p>

                <p className="mt-2 text-sm text-slate-400">
                Only{" "}
                <span className="text-emerald-400 font-semibold">
                    PKR {(yearlyMonthlyEquivalent / 30).toFixed(0)}
                </span>{" "}
                per day
                </p>

                <div className="mt-3 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                Billed yearly · Save 15%
                </div>
            </>
            )}

        </div>



          {/* Features */}
          <ul className="mt-8 space-y-3 text-sm text-slate-300 text-left max-w-sm mx-auto">
        <li>✔ Unlimited rooms</li>
        <li>✔ Front Desk & Reservations</li>
        <li>✔ Housekeeping Board</li>
        <li>✔ Night Audit System</li>
        <li>✔ Accounts & Folio</li>
        <li>✔ PKR Billing</li>
        <li>✔ Free system setup & onboarding</li>
        <li>✔ Free staff training (Front Desk & Housekeeping)</li>
        <li>✔ WhatsApp support during initial training</li>
        <li>✔ Local support in Pakistan</li>
        </ul>


        <div className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-emerald-400">
        Built with 20+ years of real hotel operations experience across Pakistan, UAE, and the USA.
        We understand front desk pressure, night audit discipline, staff training challenges, and daily cash handling realities.
        We don’t just install software we train your team and stay with you until everything runs smoothly.
        </div>



        <p className="mt-4 text-xs text-slate-500">
        Now onboarding select early partner hotels in Pakistan.
        </p>


          {/* CTA */}
          <a
            href="https://pms.qayam.com.pk"
            className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 transition"
          >
            Start 14-Day Free Trial
          </a>

          {/* Cancel policy */}
          <p className="mt-6 text-xs text-slate-500">
            Cancel anytime. Your subscription remains active until the end of
            your current billing period.
          </p>
        </div>
      </div>
    </section>
  );
}
