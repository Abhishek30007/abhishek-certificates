import type { Metadata } from "next";
import ImageViewer from "./ImageViewer";

export const metadata: Metadata = {
  title: "Document Verification - NOC-DX4V-P0VE-XE4Y6",
  description: "Official document verification view for certificate NOC-DX4V-P0VE-XE4Y6.",
};

export default function VerifyDocumentPage() {
  return (
    <main className="h-screen w-screen overflow-hidden flex flex-col bg-neutral-100">
      <ImageViewer
        imageSrc="/document.jpg"
        documentId="NOC-DX4V-P0VE-XE4Y6"
        fileName="NOC-DX4V-P0VE-XE4Y6.jpg"
      />
    </main>
  );
}
