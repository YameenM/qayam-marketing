"use client";

import Link from "next/link";

export default function MarketingButtons() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center">
      <Link
        href="https://pms.qayam.com.pk"
        onClick={() => {
          if (window.gtag) {
            window.gtag("event", "start_free_trial_click", {
              event_category: "engagement",
              event_label: "Hero Section",
            });
          }
        }}
        className="w-full rounded-md bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-500 sm:w-auto"
      >
        Start Free Trial
      </Link>

      <Link
        href="https://pms.qayam.com.pk/login"
        onClick={() => {
          if (window.gtag) {
            window.gtag("event", "login_click", {
              event_category: "engagement",
              event_label: "Hero Section",
            });
          }
        }}
        className="w-full rounded-md border border-slate-700 px-6 py-3 text-base text-slate-300 transition hover:bg-slate-900 sm:w-auto"
      >
        Login to PMS
      </Link>
    </div>
  );
}