import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Document Verification | NOC-DX4V-P0VE-XE4Y6",
  description: "Official document and certificate verification portal for NOC-DX4V-P0VE-XE4Y6.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-neutral-100 text-neutral-900 antialiased selection:bg-neutral-200">
        {children}
      </body>
    </html>
  );
}
