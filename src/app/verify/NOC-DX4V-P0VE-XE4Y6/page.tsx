import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NPTEL Certificate NOC-DX4V-P0VE-XE4Y6",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerifyPage() {
  return (
    <>
      <div className="sr">
        <h1>Abhishek Kumar</h1>
        <p>Wild Life Ecology · JUL-OCT 2026 · Indian Institute of Technology Kanpur</p>
        <dl>
          <dt>Certificate</dt>
          <dd>NOC-DX4V-P0VE-XE4Y6</dd>
          <dt>Course code</dt>
          <dd>noc26-ge83</dd>
          <dt>Cycle</dt>
          <dd>JUL-OCT 2026</dd>
          <dt>Final score</dt>
          <dd>96 / 100</dd>
          <dt>Badge</dt>
          <dd>Elite</dd>
          <dt>Weeks / credits</dt>
          <dd>12 / 4</dd>
          <dt>Issued</dt>
          <dd>2026-11-03</dd>
          <dt>Status</dt>
          <dd>LIVE</dd>
        </dl>
      </div>

      <div className="cert">
        <a href="/verify/NOC-DX4V-P0VE-XE4Y6/certificate.pdf" rel="nofollow">
          <img
            src="/verify/NOC-DX4V-P0VE-XE4Y6/preview.png"
            alt="NPTEL Certificate NOC-DX4V-P0VE-XE4Y6"
          />
        </a>
      </div>
    </>
  );
}
