/**
 * Layered pine-forest silhouette, drawn as SVG so it scales to any viewport.
 * All numbers are deterministic so server and client markup match.
 */

const W = 1600;
const H = 900;

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function pine(x: number, base: number, w: number, h: number): string {
  const half = w / 2;
  const tiers = 7;
  const left: [number, number][] = [];
  const right: [number, number][] = [];
  // Trunk stub, then tiers of drooping branches that taper toward the apex.
  left.push([x - half * 0.12, base]);
  right.push([x + half * 0.12, base]);
  for (let i = 0; i < tiers; i++) {
    const t = i / tiers;
    const tierY = base - h * (0.16 + t * 0.7);
    const tierW = half * (1 - t * 0.82);
    const droop = h * 0.035;
    left.push([x - tierW, tierY + droop]);
    left.push([x - tierW * 0.45, tierY - h * 0.02]);
    right.push([x + tierW, tierY + droop]);
    right.push([x + tierW * 0.45, tierY - h * 0.02]);
  }
  const pts = [...left, [x, base - h] as [number, number], ...right.reverse()];
  return pts.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" ");
}

function treeline(seed: number, base: number, minH: number, maxH: number, spacing: number) {
  const rnd = seeded(seed);
  const trees: string[] = [];
  let x = -60;
  while (x < W + 60) {
    const h = minH + rnd() * (maxH - minH);
    const w = h * (0.34 + rnd() * 0.14);
    trees.push(pine(x, base + rnd() * 14, w, h));
    x += spacing * (0.7 + rnd() * 0.6);
  }
  return trees;
}

function hills(seed: number, base: number, amp: number, segments: number) {
  const rnd = seeded(seed);
  let d = `M0 ${H} L0 ${base}`;
  const step = W / segments;
  for (let i = 1; i <= segments; i++) {
    const x = i * step;
    const y = base - rnd() * amp;
    const cx = x - step / 2;
    d += ` Q ${cx.toFixed(1)} ${(base - rnd() * amp * 1.3).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  d += ` L${W} ${H} Z`;
  return d;
}

const FAR_HILLS = hills(3, 470, 140, 6);
const MID_HILLS = hills(11, 560, 90, 8);
const FAR_TREES = treeline(21, 590, 60, 120, 28);
const MID_TREES = treeline(42, 700, 120, 210, 44);
const NEAR_TREES = treeline(77, 900, 240, 400, 84);

const FIREFLIES = [
  { left: "12%", bottom: "18%", delay: "0s", dur: "6.5s" },
  { left: "20%", bottom: "26%", delay: "1.2s", dur: "7.5s" },
  { left: "31%", bottom: "12%", delay: "2.4s", dur: "5.8s" },
  { left: "58%", bottom: "20%", delay: "0.8s", dur: "6.9s" },
  { left: "70%", bottom: "30%", delay: "3.1s", dur: "7.2s" },
  { left: "82%", bottom: "14%", delay: "1.9s", dur: "6.1s" },
  { left: "90%", bottom: "24%", delay: "0.4s", dur: "8s" },
  { left: "45%", bottom: "9%", delay: "2.9s", dur: "6.4s" },
];

export default function ForestScene({ compact = false }: { compact?: boolean }) {
  return (
    <div className="sky pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="mist absolute inset-x-0 top-[38%] h-[30%]" />

      <svg
        className="absolute inset-x-0 bottom-0 h-full w-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMax slice"
      >
        <path d={FAR_HILLS} fill="#4d6f5c" opacity="0.55" />
        <g fill="#41634f" opacity="0.7">
          {FAR_TREES.map((p, i) => (
            <polygon key={i} points={p} />
          ))}
        </g>
        <path d={MID_HILLS} fill="#2f4f3d" opacity="0.85" />
        <g fill="#25412f" opacity="0.95">
          {MID_TREES.map((p, i) => (
            <polygon key={i} points={p} />
          ))}
        </g>
        <g fill="#172d20">
          {NEAR_TREES.map((p, i) => (
            <polygon key={i} points={p} />
          ))}
        </g>
        <rect x="0" y={H - 40} width={W} height="40" fill="#132419" />
      </svg>

      {!compact &&
        FIREFLIES.map((f, i) => (
          <span
            key={i}
            className="firefly"
            style={{
              left: f.left,
              bottom: f.bottom,
              animationDelay: f.delay,
              animationDuration: f.dur,
            }}
          />
        ))}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ground to-transparent" />
    </div>
  );
}
