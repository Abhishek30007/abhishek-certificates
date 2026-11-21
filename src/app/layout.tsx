import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Document Verification",
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: false,
    follow: false,
  },
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
