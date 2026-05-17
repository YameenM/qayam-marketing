"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const PMS_LOGIN_URL = "https://pms.qayam.com.pk/login";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logoicon.png"
              alt="Qayam PMS logo"
              width={28}
              height={28}
              priority
            />

            <span className="text-lg font-semibold tracking-tight text-slate-100">
              Qayam <span className="text-emerald-500">PMS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            <Link href="#features" className="transition hover:text-slate-200">
              Features
            </Link>

            <Link href="#pricing" className="transition hover:text-slate-200">
              Pricing
            </Link>

            <a
              href={PMS_LOGIN_URL}
              className="transition hover:text-slate-200"
            >
              Sign in
            </a>

            <Link
              href="https://pms.qayam.com.pk"
              className="rounded-md bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-500"
            >
              Start free trial
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="text-slate-300 transition hover:text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="space-y-3 pb-4 text-sm text-slate-300 md:hidden">
            <Link
              href="#features"
              className="block hover:text-white"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>

            <Link
              href="#pricing"
              className="block hover:text-white"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>

            <a
              href={PMS_LOGIN_URL}
              className="block hover:text-white"
              onClick={() => setOpen(false)}
            >
              Sign in
            </a>

            <Link
              href="/#signup"
              className="block rounded-md bg-emerald-600 px-4 py-2 text-center font-medium text-white hover:bg-emerald-500"
              onClick={() => setOpen(false)}
            >
              Start free trial
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}