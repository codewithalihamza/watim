export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_10%,#164a5c_0%,#0e3040_38%,#0a2536_75%)]" />

      {/* teal glow behind subject */}
      <div className="animate-pulse-glow absolute left-[8%] top-1/3 h-[420px] w-[420px] rounded-full bg-teal/25 blur-[110px]" />
      <div className="animate-pulse-glow absolute right-[12%] top-1/2 h-[360px] w-[360px] rounded-full bg-cyan/15 blur-[120px]" />

      {/* sweeping concentric arcs */}
      <svg
        className="absolute right-[-10%] top-[-12%] h-[130%] w-[80%] opacity-[0.35]"
        viewBox="0 0 800 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M ${820} ${-40 + i * 30} C ${400 - i * 40} ${200 + i * 60}, ${300 - i * 30} ${600}, ${640 - i * 20} ${960}`}
            stroke="url(#arcGrad)"
            strokeWidth="1.5"
          />
        ))}
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6fe3e3" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2fb6b6" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* faint tech grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#7fe 1px, transparent 1px), linear-gradient(90deg, #7fe 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(80% 60% at 30% 40%, #000 0%, transparent 80%)",
        }}
      />
    </div>
  );
}
