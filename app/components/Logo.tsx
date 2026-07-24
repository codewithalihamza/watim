type LogoProps = {
  withWordmark?: boolean;
  className?: string;
};

export default function Logo({ withWordmark = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {withWordmark && (
        <div className="flex flex-col items-end leading-none">
          <span
            className="font-display text-[26px] font-extrabold tracking-[0.15em] text-ink"
            dir="rtl"
            lang="ar"
          >
            واتـم
          </span>
          <span className="mt-1 text-[7px] font-semibold tracking-[0.35em] text-muted">
            MARKETING SOLUTIONS
          </span>
        </div>
      )}
      {/* W mark */}
      <svg
        viewBox="0 0 120 150"
        className="h-9 w-auto text-ink"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="WATM"
        role="img"
      >
        <g fill="currentColor">
          <path d="M8 4 L30 4 L47 96 L36 108 L24 108 Z" />
          <path d="M42 40 L58 40 L64 92 L56 100 L48 92 Z" />
          <path d="M112 4 L90 4 L64 96 L74 106 L86 106 Z" />
          <path d="M52 112 L70 112 L64 148 L58 148 Z" />
          <path d="M40 118 L54 116 L52 130 L38 128 Z" />
          <path d="M80 116 L94 118 L96 128 L82 130 Z" />
        </g>
      </svg>
    </div>
  );
}
