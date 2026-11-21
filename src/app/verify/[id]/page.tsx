import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `NPTEL Certificate ${id}`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function VerifyPage({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <div className="sr">
        <h1>Abhishek Kumar</h1>
        <p>Wild Life Ecology · JUL-OCT 2026 · Indian Institute of Technology Kanpur</p>
        <dl>
          <dt>Certificate</dt><dd>{id}</dd>
          <dt>Course code</dt><dd>noc26-ge83</dd>
          <dt>Cycle</dt><dd>JUL-OCT 2026</dd>
          <dt>Final score</dt><dd>96 / 100</dd>
          <dt>Badge</dt><dd>Elite</dd>
          <dt>Weeks / credits</dt><dd>12 / 4</dd>
          <dt>Issued</dt><dd>2026-11-03</dd>
          <dt>Status</dt><dd>LIVE</dd>
        </dl>
      </div>

      <div className="cert">
        <a
          href="/NOC26GE83S1163200027.pdf"
          download="NOC26GE83S1163200027.pdf"
          className="cursor-pointer select-none"
          style={{ cursor: "pointer", userSelect: "none", WebkitUserSelect: "none" }}
        >
          <img
            src="/preview.png"
            alt={`NPTEL Certificate ${id}`}
            className="cursor-pointer select-none"
            style={{ cursor: "pointer", userSelect: "none", WebkitUserSelect: "none" }}
            draggable={false}
          />
        </a>
      </div>
    </>
  );
}
