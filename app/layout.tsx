import "./globals.css";

export const metadata = {
  title: "Qayam – Hotel Booking & PMS in Pakistan",
  description:
    "Modern hotel booking and property management platform for Pakistan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
