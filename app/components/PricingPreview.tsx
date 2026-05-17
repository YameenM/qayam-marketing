"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingPreview() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const monthlyPrice = 29;
  const yearlyMonthlyEquivalent = 24;

  return (
    <section
      id="pricing"
      className="border-t border-slate-800 bg-slate-950 px-4 py-16 text-center text-slate-100"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Simple pricing
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Start with one clear plan
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          No hidden charges, no setup fees and no hardware required. Start your
          trial, set up your property and upgrade when you are ready.
        </p>

        {/* Billing Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="flex rounded-full border border-slate-800 bg-slate-900 p-1 text-sm">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-2 transition ${
                billing === "monthly"
                  ? "bg-emerald-600 text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-4 py-2 transition ${
                billing === "yearly"
                  ? "bg-emerald-600 text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white">
                Standard Plan
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                For independent hotels, guest houses and boutique properties.
              </p>
            </div>

            <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              14-day free trial
            </div>
          </div>

          {/* Price */}
          <div className="mt-7 text-center">
            {billing === "monthly" ? (
              <>
                <p className="text-4xl font-bold text-white">
                  $
                  <span className="text-emerald-400">
                    {monthlyPrice}
                  </span>
                  <span className="ml-2 text-base font-normal text-slate-400">
                    /month
                  </span>
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Around{" "}
                  <span className="font-semibold text-emerald-400">
                    $1 per day
                  </span>{" "}
                  for your hotel operations
                </p>
              </>
            ) : (
              <>
                <p className="text-4xl font-bold text-white">
                  $
                  <span className="text-emerald-400">
                    {yearlyMonthlyEquivalent}
                  </span>
                  <span className="ml-2 text-base font-normal text-slate-400">
                    /month
                  </span>
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Billed yearly · Save with annual billing
                </p>

                <div className="mt-3 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  Best value for established properties
                </div>
              </>
            )}
          </div>

          {/* Features */}
          <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left text-sm text-slate-300 sm:grid-cols-2">
            <li>✔ Room setup</li>
            <li>✔ Front desk operations</li>
            <li>✔ Reservations</li>
            <li>✔ Housekeeping board</li>
            <li>✔ Night audit system</li>
            <li>✔ Folios & payments</li>
            <li>✔ Owner dashboard</li>
            <li>✔ Setup guidance</li>
            <li>✔ Staff training support</li>
            <li>✔ Onboarding support</li>
          </ul>

          <div className="mt-7 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-left text-sm leading-6 text-slate-400">
            <span className="font-semibold text-slate-200">
              Built from real hotel operations experience.
            </span>{" "}
            Qayam PMS is designed for front desk pressure, night audit
            discipline, guest folios, staff training and daily owner reporting.
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Local pricing may be available in selected countries. Currency and
            timezone settings are configured per property.
          </p>

          {/* CTA */}
          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500"
          >
            Start 14-Day Free Trial
          </Link>

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