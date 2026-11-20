import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Document Verification - NOC-DX4V-P0VE-XE4Y6",
  description: "Official document verification view for certificate NOC-DX4V-P0VE-XE4Y6.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#ffffff" }}>
        {children}
      </body>
    </html>
  );
}
