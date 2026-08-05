import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./provider";

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
    description:
      "Pure mountain water with custom wrappers for events and businesses.",
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
        <Providers />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
          }}
        />
      </body>
    </html>
  );
}