"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";


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
              alt="Qayam Logo"
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
            <Link href="#features" className="hover:text-slate-200 transition">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-slate-200 transition">
              Pricing
            </Link>
            <Link href="https://pms.qayam.com.pk/login" className="hover:text-slate-200 transition">
              Login
            </Link>

            <Link
              href="https://pms.qayam.com.pk"
              className="rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 transition"
            >
              Start Free Trial
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-300 hover:text-white transition"
            >
            {open ? <X size={22} /> : <Menu size={22} />}
            </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden pb-4 space-y-3 text-sm text-slate-300">
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
            <Link
              href="https://pms.qayam.com.pk/login"
              className="block hover:text-white"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href="https://pms.qayam.com.pk"
              className="block rounded-md bg-indigo-600 px-4 py-2 text-center font-medium text-white hover:bg-indigo-500"
              onClick={() => setOpen(false)}
            >
              Start Free Trial
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
