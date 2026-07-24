type LogoProps = {
  withWordmark?: boolean;
  className?: string;
};

/* WATM "W" mark — traced from the brand logo in legacy/4.pdf:
   a bold W whose outer strokes flare outward at the top, meeting a
   central downward spike (arrow/rocket) with two small flag tabs. */
function WMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="WATM"
      role="img"
    >
      <g fill="currentColor">
        {/* left outer stroke — flares up-left, thick */}
        <path d="M26 26 L64 18 L92 116 L74 140 L56 132 Z" />
        {/* middle peak stroke forming the two V troughs */}
        <path d="M78 54 L104 54 L114 130 L100 150 L86 130 Z" />
        {/* right outer stroke — flares up-right, thick */}
        <path d="M174 26 L136 18 L108 116 L126 140 L144 132 Z" />
        {/* central downward arrow / rocket spike */}
        <path d="M90 140 L110 140 L108 182 L100 196 L92 182 Z" />
        {/* left flag tab */}
        <path d="M74 150 L96 147 L94 166 L72 164 Z" />
        {/* right flag tab */}
        <path d="M104 147 L126 150 L128 164 L106 166 Z" />
      </g>
    </svg>
  );
}

export default function Logo({ withWordmark = false, className = "" }: LogoProps) {
  if (!withWordmark) {
    return <WMark className={`h-9 w-auto text-ink ${className}`} />;
  }

  return (
    <div className={`flex items-end gap-3 ${className}`}>
      {/* Arabic wordmark + subtitle */}
      <div className="flex flex-col items-end leading-none">
        <span
          className="font-display text-3xl font-extrabold tracking-[0.12em] text-white"
          dir="rtl"
          lang="ar"
        >
          واتـم
        </span>
        <span className="mt-1.5 text-[8px] font-semibold tracking-[0.4em] text-white/90">
          MARKETING SOLUTIONS
        </span>
      </div>
      {/* W mark */}
      <WMark className="h-14 w-auto text-white" />
    </div>
  );
}
