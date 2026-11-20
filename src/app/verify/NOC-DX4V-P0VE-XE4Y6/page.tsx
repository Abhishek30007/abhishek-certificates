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
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#ffffff",
        padding: "32px 24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "880px",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <img
          src="/document.jpg"
          alt="NPTEL Certificate NOC-DX4V-P0VE-XE4Y6"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            border: "1px solid #d4d4d8",
            boxSizing: "border-box",
            borderRadius: "0px",
          }}
        />
      </div>
    </main>
  );
}
