import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qayam – Property Management System",
  description:
    "Modern hotel property management system for Pakistan. Manage reservations, front desk, night audit and accounts in one cloud platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
