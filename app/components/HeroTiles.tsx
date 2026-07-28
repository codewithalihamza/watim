/*
 * The orbiting ring of rounded icon tiles that wraps around the subject in
 * legacy/a1.psd. Front tiles sit in front of the man, the dimmer back row
 * behind him — Hero renders this component twice (layer="back" | "front")
 * so the subject can be sandwiched between the two rows.
 */

function Followup() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="6.5" cy="5.5" r="2.6" />
      <path d="M2.6 15.4c0-2.4 1.8-3.9 3.9-3.9s3.9 1.5 3.9 3.9v.9H2.6z" />
      <circle cx="17.5" cy="10.5" r="2.6" />
      <path d="M13.6 20.4c0-2.4 1.8-3.9 3.9-3.9s3.9 1.5 3.9 3.9v.9h-7.8z" />
      <path
        d="M11.4 5.6h4.2m0 0-1.4-1.4m1.4 1.4-1.4 1.4M12.6 18.4H8.4m0 0 1.4-1.4M8.4 18.4l1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Megaphone() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {/* horn body + cone */}
      <path d="M2.5 9.4a1.4 1.4 0 0 1 1.4-1.4h2.4l8.1-4.3a.9.9 0 0 1 1.3.8v14.2a.9.9 0 0 1-1.3.8L6.3 15.3H3.9a1.4 1.4 0 0 1-1.4-1.4z" />
      {/* handle */}
      <path d="M6.6 15.3h2.6l.9 4.6a1 1 0 0 1-1 1.2H8a1 1 0 0 1-1-.8z" />
      {/* sound waves */}
      <path
        d="M18.3 8.4c1 .9 1.6 2.2 1.6 3.6s-.6 2.7-1.6 3.6M20.6 6.1c1.6 1.4 2.6 3.5 2.6 5.9s-1 4.5-2.6 5.9"
        stroke="currentColor"
        strokeWidth="1.7"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Schedule() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 5h16a1 1 0 0 1 1 1v3H3V6a1 1 0 0 1 1-1z" />
      <path d="M7 3v3M17 3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 10.5h9.6A5.9 5.9 0 0 0 13 21H4a1 1 0 0 1-1-1z" />
      <circle cx="17.6" cy="15.6" r="5.1" />
      <path
        d="M17.6 13.1v2.6l1.7 1.1"
        stroke="#0e3144"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Discussion() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="12" cy="7" r="2.8" />
      <path d="M7.6 16.4c0-2.6 2-4.2 4.4-4.2s4.4 1.6 4.4 4.2v1H7.6z" />
      <circle cx="4.6" cy="10.4" r="2.2" />
      <path d="M1 17.4c0-2 1.6-3.3 3.6-3.3.5 0 1 .1 1.4.3-.8.8-1.3 1.9-1.4 3.2v.8H1z" />
      <circle cx="19.4" cy="10.4" r="2.2" />
      <path d="M23 17.4c0-2-1.6-3.3-3.6-3.3-.5 0-1 .1-1.4.3.8.8 1.3 1.9 1.4 3.2v.8H23z" />
    </svg>
  );
}

function Report() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2.5h7.2L19 7.3V19a1.6 1.6 0 0 1-1.6 1.6H7A1.6 1.6 0 0 1 5.4 19V4.1A1.6 1.6 0 0 1 7 2.5z" />
      <path
        d="M8.6 8.4h5.2M8.6 11.4h6.8M8.6 14.4h6.8M8.6 17.2h4"
        stroke="#12414f"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M3.6 5.4v13.2A2.6 2.6 0 0 0 6.2 21H16v.4H6.2A3 3 0 0 1 3.2 18.4V5.4z" opacity=".85" />
    </svg>
  );
}

type Tile = {
  icon: React.ReactNode;
  label: string;
  /* position within the 560x620 ring box, in percent */
  className: string;
  delay: string;
};

const frontTiles: Tile[] = [
  {
    icon: <Followup />,
    label: "Audience follow-up",
    className:
      "left-[2%] top-[50%] h-[96px] w-[108px] -rotate-[10deg] sm:h-[120px] sm:w-[134px]",
    delay: "0.9s",
  },
  {
    icon: <Megaphone />,
    label: "Campaign amplification",
    className:
      "left-[24%] top-[36%] h-[124px] w-[140px] -rotate-[3deg] sm:h-[154px] sm:w-[174px]",
    delay: "0s",
  },
  {
    icon: <Schedule />,
    label: "Scheduling",
    className:
      "left-[55%] top-[29%] h-[118px] w-[134px] rotate-[4deg] sm:left-[59%] sm:h-[146px] sm:w-[166px]",
    delay: "1.6s",
  },
];

const backTiles: Tile[] = [
  {
    icon: <Discussion />,
    label: "Community",
    className:
      "left-[9%] top-[74%] h-[88px] w-[102px] -rotate-[7deg] sm:h-[108px] sm:w-[124px]",
    delay: "2.2s",
  },
  {
    icon: <Report />,
    label: "Reporting",
    className:
      "left-[50%] top-[70%] h-[94px] w-[108px] rotate-[3deg] sm:h-[116px] sm:w-[132px]",
    delay: "1.2s",
  },
];

export default function HeroTiles({ layer }: { layer: "front" | "back" }) {
  const tiles = layer === "front" ? frontTiles : backTiles;
  const back = layer === "back";

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {/* the wide elliptical band the tiles are threaded onto */}
      {back && (
        <div className="absolute left-[2%] top-[38%] h-[42%] w-[92%] -rotate-[7deg] rounded-[999px] bg-[linear-gradient(120deg,rgba(23,86,100,0.75),rgba(28,135,149,0.35)_55%,transparent)] blur-[2px]" />
      )}

      {tiles.map((t) => (
        <div
          key={t.label}
          className={`absolute ${t.className} ${
            back ? "hero-tile-back opacity-70" : "hero-tile hero-tile-rim"
          } animate-tile-float flex items-center justify-center`}
          style={{ animationDelay: t.delay }}
        >
          <span
            className={`${
              back ? "w-1/3 text-white/45" : "w-2/5 text-white/95"
            } block`}
          >
            {t.icon}
          </span>
        </div>
      ))}
    </div>
  );
}
