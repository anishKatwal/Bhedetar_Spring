import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhedetar Spring - Mountain Water and Custom Bottle Wrappers",
  description:
    "Bhedetar Spring offers pure mountain water from Bhedetar, Nepal with custom bottle wrappers for weddings, birthdays, hiking events, hotels, offices, and wholesale orders.",
  keywords: [
    "mineral water",
    "spring water",
    "Nepal",
    "Bhedetar",
    "custom bottle labels",
    "event water",
  ],
  openGraph: {
    title: "Bhedetar Spring - Mountain Water and Custom Bottle Wrappers",
    description: "Pure mountain water with custom wrappers for events and businesses.",
    url: "https://bhedetarspring.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
