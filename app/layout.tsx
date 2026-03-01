import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://qayam.com.pk"),
  title: {
    default:
      "Property Management System for Hotels & Guest Houses in Pakistan | Qayam PMS",
    template: "%s | Qayam PMS",
  },
  description:
    "Cloud-based Property Management System for Hotels & Guest Houses in Pakistan. Manage reservations, front desk, housekeeping, night audit and accounts in one secure PMS built for PKR billing and local operations.",
  verification: {
    google: "bR22E7uJzOwbIJOYIbFNsdSiJR0RBvPjklfF77rTtj8",
  },
  keywords: [
    "Hotel Management System Pakistan",
    "Property Management System Pakistan",
    "PMS for hotels in Pakistan",
    "Hotel software Pakistan",
    "Guest House Management System Pakistan",
    "Guest House Software Pakistan",
    "Cloud hotel software PKR",
    "Hotel front desk system Pakistan",
  ],
  authors: [{ name: "SohumBit (SMC-PVT) Ltd" }],
  creator: "SohumBit (SMC-PVT) Ltd",
  publisher: "SohumBit (SMC-PVT) Ltd",
  openGraph: {
    title: "Qayam PMS – Modern Hotel Software Built for Pakistan",
    description:
      "Manage your hotel operations with Qayam PMS. Built for Pakistani hotels with PKR billing, night audit, and local support.",
    url: "https://qayam.com.pk",
    siteName: "Qayam PMS",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qayam PMS – Hotel Software for Pakistan",
    description:
      "Cloud-based Property Management System designed for Pakistani hotels.",
  },
  robots: {
    index: true,
    follow: true,
  },
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

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}