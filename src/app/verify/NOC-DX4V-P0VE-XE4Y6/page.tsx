import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Verification - NOC-DX4V-P0VE-XE4Y6",
  description: "Certificate Verification NOC-DX4V-P0VE-XE4Y6",
};

export default function VerifyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <img
        src="/document.jpg"
        alt="NPTEL Certificate NOC-DX4V-P0VE-XE4Y6"
        style={{
          maxWidth: "100%",
          maxHeight: "96vh",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          display: "block",
          margin: "auto",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          borderRadius: "6px",
        }}
      />
    </main>
  );
}
