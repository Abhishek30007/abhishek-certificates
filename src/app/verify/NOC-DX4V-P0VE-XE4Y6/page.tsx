import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Verification - NOC-DX4V-P0VE-XE4Y6",
  description: "Certificate Verification NOC-DX4V-P0VE-XE4Y6",
};

export default function VerifyPage() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        display: "block",
        backgroundColor: "#ffffff",
      }}
    >
      <img
        src="/document.jpg"
        alt="NPTEL Certificate NOC-DX4V-P0VE-XE4Y6"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          margin: 0,
          padding: 0,
          border: "none",
          outline: "none",
          boxShadow: "none",
          borderRadius: 0,
        }}
      />
    </div>
  );
}
