export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/*
        Base gradient. In the PSD the frame reads deep teal-black in the
        bottom-right and lifts toward a lit teal along the left edge, which
        brightens as it descends (#0a2331 -> #206171 -> #3b9aa4).
      */}
      <div className="absolute inset-0 bg-[#0a2331]" />
      <div className="absolute inset-0 bg-[radial-gradient(140%_120%_at_78%_92%,#071b26_0%,#0a2331_28%,#113b49_60%,#175160_100%)]" />

      {/* left-edge glow, strongest near the bottom-left corner */}
      <div className="absolute inset-y-0 left-0 w-[55%] bg-[linear-gradient(105deg,rgba(59,154,164,0.55)_0%,rgba(32,97,113,0.32)_38%,transparent_78%)]" />
      <div className="absolute -bottom-32 -left-24 h-[520px] w-[520px] rounded-full bg-bg-glow/35 blur-[130px]" />

      {/* soft top-left lift */}
      <div className="absolute -top-24 left-[6%] h-[420px] w-[520px] rounded-full bg-teal-bright/20 blur-[120px]" />

      {/*
        The tall, near-vertical light streaks sweeping down the right half.
        In the PSD these are long bowed glass edges catching a highlight.
      */}
      <svg
        className="absolute inset-y-0 right-0 h-full w-[70%] opacity-70"
        viewBox="0 0 800 1000"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="streak" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8fdbe6" stopOpacity="0" />
            <stop offset="22%" stopColor="#8fdbe6" stopOpacity="0.45" />
            <stop offset="62%" stopColor="#4fa9bb" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#4fa9bb" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[120, 300, 470, 640, 770].map((x, i) => (
          <path
            key={x}
            d={`M ${x} -20 C ${x + 40} 260, ${x + 90} 560, ${x + 30 + i * 12} 1020`}
            stroke="url(#streak)"
            strokeWidth={i % 2 === 0 ? 1.5 : 1}
          />
        ))}
      </svg>

      {/* wide bowed arc sweeping behind the subject, as in the PSD */}
      <svg
        className="absolute -left-[10%] top-0 h-full w-[75%] opacity-[0.5]"
        viewBox="0 0 700 1000"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="bowGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7fd4de" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2b909b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -60 40 C 380 120, 560 420, 300 1000"
          stroke="url(#bowGrad)"
          strokeWidth="2"
        />
        <path
          d="M -120 160 C 300 240, 480 520, 200 1010"
          stroke="url(#bowGrad)"
          strokeWidth="1.5"
        />
      </svg>

      {/* faint data-grid texture, masked to the upper-left as in the PSD */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#88d7e1 1px, transparent 1px), linear-gradient(90deg, #88d7e1 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage:
            "radial-gradient(70% 55% at 22% 32%, #000 0%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(70% 55% at 22% 32%, #000 0%, transparent 78%)",
        }}
      />

      {/* vignette to seat the bottom-right into near-black */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_45%,rgba(4,15,22,0.55)_100%)]" />
    </div>
  );
}
