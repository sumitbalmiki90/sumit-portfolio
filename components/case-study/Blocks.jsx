import { CheckCircle2, ArrowRight, AlertTriangle, Info } from 'lucide-react';

// Presentational blocks for the case-study detail template. Purely server-rendered
// (no client hooks) — all charts are inline SVG / CSS so nothing new is added to the
// dependency graph and the static export stays GitHub-Pages friendly.
//
// Chart palette: restrained tones tuned for the dark theme (no bright library defaults).
const COLORS = {
    blue: '#3B82F6',   // brand accent
    violet: '#8B5CF6',
    teal: '#2DD4BF',
    amber: '#F59E0B',
    emerald: '#34D399',
    slate: '#64748B',
};
const colorOf = (name) => COLORS[name] || COLORS.blue;

function SectionHeading({ children, accent = false }) {
    return (
        <h2 className={`text-2xl font-bold text-white mb-5 border-l-4 ${accent ? 'border-accent' : 'border-gray-700'} pl-4 py-1`}>
            {children}
        </h2>
    );
}

// --- Prose -----------------------------------------------------------------
function Prose({ block }) {
    const paras = Array.isArray(block.body) ? block.body : [block.body];
    return (
        <section>
            {block.heading && <SectionHeading accent={block.accent}>{block.heading}</SectionHeading>}
            <div className="space-y-4">
                {paras.map((p, i) => (
                    <p key={i} className="text-text-secondary leading-relaxed">{p}</p>
                ))}
            </div>
            {block.insight && (
                <div className="mt-6 flex items-start gap-3 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                    <div className="mt-1 w-1.5 h-1.5 rounded-sm bg-accent shrink-0" />
                    <p className="text-sm text-white font-medium leading-relaxed">{block.insight}</p>
                </div>
            )}
        </section>
    );
}

// --- Numbered list (product thesis / differentiators) ----------------------
function List({ block }) {
    return (
        <section>
            <SectionHeading>{block.heading}</SectionHeading>
            {block.intro && <p className="text-text-secondary leading-relaxed mb-6">{block.intro}</p>}
            <div className="space-y-4">
                {block.items.map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-surface border border-gray-800 rounded-lg">
                        <div className="shrink-0 w-8 h-8 rounded border border-accent/40 bg-accent/10 flex items-center justify-center font-mono text-sm text-accent">
                            {String(i + 1).padStart(2, '0')}
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                            <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// --- Stat tiles ------------------------------------------------------------
function Stats({ block }) {
    return (
        <section>
            <SectionHeading accent>{block.heading}</SectionHeading>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {block.items.map((s, i) => (
                    <div key={i} className="p-5 bg-surface border border-gray-800 rounded-lg">
                        <p className="text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">{s.label}</p>
                        <p className="text-2xl md:text-3xl font-display font-bold text-white leading-none">{s.value}</p>
                        {s.sub && <p className="text-xs text-text-secondary mt-2 leading-snug">{s.sub}</p>}
                    </div>
                ))}
            </div>
            {block.note && <p className="text-xs text-text-secondary mt-4 font-mono">{block.note}</p>}
        </section>
    );
}

// --- Simple horizontal bars (e.g. CAC vs AOV) ------------------------------
function Bars({ block }) {
    const max = Math.max(...block.groups.map((g) => g.value));
    return (
        <section>
            <SectionHeading accent>{block.heading}</SectionHeading>
            <div className="p-6 bg-surface border border-gray-800 rounded-lg space-y-5">
                {block.groups.map((g, i) => {
                    const pct = Math.max((g.value / max) * 100, 3);
                    const c = colorOf(g.color);
                    return (
                        <div key={i}>
                            <div className="flex justify-between items-baseline mb-1.5">
                                <span className="text-sm text-white font-medium">{g.label}</span>
                                <span className="text-sm font-mono text-white">{g.display}</span>
                            </div>
                            <div className="h-3 w-full bg-background rounded-full overflow-hidden border border-gray-800">
                                <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: c }} />
                            </div>
                        </div>
                    );
                })}
            </div>
            {block.note && <p className="text-xs text-text-secondary mt-4 leading-relaxed">{block.note}</p>}
        </section>
    );
}

// --- Grouped bar comparison (Meta vs Google across metrics) ----------------
function BarCompare({ block }) {
    return (
        <section>
            <SectionHeading accent>{block.heading}</SectionHeading>
            <div className="p-6 bg-surface border border-gray-800 rounded-lg">
                <div className="flex flex-wrap gap-5 mb-6 pb-4 border-b border-gray-800">
                    {[block.seriesA, block.seriesB].map((s, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: colorOf(s.color) }} />
                            <span className="text-xs text-text-secondary font-medium">{s.label}</span>
                        </div>
                    ))}
                </div>
                <div className="space-y-6">
                    {block.metrics.map((m, i) => {
                        const max = Math.max(m.a, m.b);
                        const rows = [
                            { series: block.seriesA, value: m.a, display: m.aDisplay },
                            { series: block.seriesB, value: m.b, display: m.bDisplay },
                        ];
                        return (
                            <div key={i}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-white">{m.name}</span>
                                    {m.lowerIsBetter && (
                                        <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">lower is better</span>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    {rows.map((r, j) => {
                                        const pct = Math.max((r.value / max) * 100, 2);
                                        return (
                                            <div key={j} className="flex items-center gap-3">
                                                <div className="flex-1 h-6 bg-background rounded border border-gray-800 overflow-hidden">
                                                    <div className="h-full rounded-l flex items-center" style={{ width: `${pct}%`, backgroundColor: colorOf(r.series.color) }} />
                                                </div>
                                                <span className="w-16 text-right text-xs font-mono text-white shrink-0">{r.display}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {block.note && <p className="text-xs text-text-secondary mt-4 leading-relaxed">{block.note}</p>}
        </section>
    );
}

// --- Funnel ----------------------------------------------------------------
function Funnel({ block }) {
    const max = block.stages[0].value;
    return (
        <section>
            <SectionHeading accent>{block.heading}</SectionHeading>
            <div className="p-6 bg-surface border border-gray-800 rounded-lg">
                {block.stages.map((s, i) => {
                    const pct = Math.max((s.value / max) * 100, 12);
                    return (
                        <div key={i}>
                            <div className="relative mx-auto rounded-lg border border-accent/30 bg-gradient-to-r from-accent/20 to-accent/5 py-4 px-5 flex items-center justify-between" style={{ width: `${pct}%`, minWidth: '160px' }}>
                                <span className="text-sm text-white font-medium whitespace-nowrap">{s.label}</span>
                                <span className="text-lg font-display font-bold text-white ml-4">{s.display}</span>
                            </div>
                            {i < block.stages.length - 1 && (
                                <div className="flex flex-col items-center py-2">
                                    <div className="h-4 border-l border-dashed border-gray-600" />
                                    <span className="text-[11px] font-mono text-accent px-2 py-0.5 rounded bg-accent/5 border border-accent/20">
                                        {block.stages[i + 1].rate}
                                    </span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {block.note && <p className="text-xs text-text-secondary mt-4 leading-relaxed">{block.note}</p>}
        </section>
    );
}

// --- Donut -----------------------------------------------------------------
function Donut({ block }) {
    const total = block.segments.reduce((sum, s) => sum + s.value, 0);
    const R = 54;
    const C = 2 * Math.PI * R;
    let offset = 0;
    const arcs = block.segments.map((seg, i) => {
        const len = (seg.value / total) * C;
        const arc = (
            <circle
                key={i}
                cx="70" cy="70" r={R}
                fill="none"
                stroke={colorOf(seg.color)}
                strokeWidth="16"
                strokeDasharray={`${len} ${C - len}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 70 70)"
            />
        );
        offset += len;
        return arc;
    });
    return (
        <section>
            <SectionHeading accent>{block.heading}</SectionHeading>
            <div className="p-6 bg-surface border border-gray-800 rounded-lg flex flex-col sm:flex-row items-center gap-8">
                <div className="relative shrink-0">
                    <svg width="140" height="140" viewBox="0 0 140 140">
                        <circle cx="70" cy="70" r={R} fill="none" stroke="#1F2937" strokeWidth="16" />
                        {arcs}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-lg font-display font-bold text-white leading-none">{block.centerValue}</span>
                        {block.centerLabel && <span className="text-[11px] text-text-secondary mt-1">{block.centerLabel}</span>}
                    </div>
                </div>
                <div className="flex-1 w-full space-y-4">
                    {block.segments.map((seg, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="mt-1 w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: colorOf(seg.color) }} />
                            <div className="flex-1">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-sm text-white font-medium">{seg.label}</span>
                                    <span className="text-sm font-mono text-white">{seg.display}</span>
                                </div>
                                {seg.sub && <p className="text-xs text-text-secondary mt-0.5">{seg.sub}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {block.note && <p className="text-xs text-text-secondary mt-4 font-mono">{block.note}</p>}
        </section>
    );
}

// --- Horizontal flow diagram (monospace / systems aesthetic) ---------------
function Flow({ block }) {
    return (
        <section>
            <SectionHeading accent>{block.heading}</SectionHeading>
            <div className="p-6 bg-background border border-gray-800 rounded-lg overflow-x-auto">
                <div className="flex items-stretch gap-2 min-w-min">
                    {block.steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="flex flex-col justify-center px-4 py-3 border border-accent/30 bg-accent/5 rounded min-w-[128px] max-w-[160px]">
                                <span className="text-sm text-white font-medium font-mono leading-tight">{step.label}</span>
                                {step.sub && <span className="text-[11px] text-text-secondary mt-1 leading-tight">{step.sub}</span>}
                            </div>
                            {i < block.steps.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {block.note && <p className="text-xs text-text-secondary mt-4 leading-relaxed">{block.note}</p>}
        </section>
    );
}

// --- Two-lane comparison (dual channel) ------------------------------------
function TwoLane({ block }) {
    const lanes = [block.laneA, block.laneB];
    return (
        <section>
            <SectionHeading accent>{block.heading}</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lanes.map((lane, i) => (
                    <div key={i} className="bg-surface border border-gray-800 rounded-lg overflow-hidden">
                        <div className="p-4 border-b border-gray-800 flex items-center justify-between" style={{ borderTop: `2px solid ${colorOf(lane.color)}` }}>
                            <h4 className="text-white font-semibold">{lane.title}</h4>
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded border" style={{ color: colorOf(lane.color), borderColor: `${colorOf(lane.color)}55` }}>
                                {lane.tag}
                            </span>
                        </div>
                        <div className="divide-y divide-gray-800/70">
                            {lane.rows.map((row, j) => (
                                <div key={j} className="flex justify-between items-center px-4 py-3">
                                    <span className="text-xs font-mono uppercase tracking-wide text-text-secondary">{row.k}</span>
                                    <span className="text-sm text-white text-right">{row.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {block.note && <p className="text-xs text-text-secondary mt-4 leading-relaxed">{block.note}</p>}
        </section>
    );
}

// --- Terminal / integrity check (system_status.json motif) -----------------
function Terminal({ block }) {
    return (
        <section>
            {block.heading && <SectionHeading accent>{block.heading}</SectionHeading>}
            {block.intro && <p className="text-text-secondary leading-relaxed mb-5">{block.intro}</p>}
            <div className="border border-gray-800 bg-background rounded-lg font-mono text-sm overflow-hidden">
                <div className="flex items-center space-x-2 px-4 py-3 border-b border-gray-800 bg-surface">
                    <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    <span className="ml-2 text-xs text-text-secondary">{block.filename}</span>
                </div>
                <div className="p-4 space-y-2.5 overflow-x-auto">
                    {block.lines.map((line, i) => (
                        <div key={i} className="flex items-start gap-3 whitespace-nowrap">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-text-secondary">
                                <span className="text-white">{line.text}</span>
                                {line.detail && <span className="text-emerald-400/80">{'  →  '}{line.detail}</span>}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Callout (honesty / status notes) --------------------------------------
function Callout({ block }) {
    const warn = block.tone === 'warn';
    const Icon = warn ? AlertTriangle : Info;
    return (
        <section>
            <div className={`flex items-start gap-4 p-5 rounded-lg border ${warn ? 'border-amber-500/30 bg-amber-500/5' : 'border-accent/30 bg-accent/5'}`}>
                <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${warn ? 'text-amber-400' : 'text-accent'}`} />
                <div>
                    <h4 className="text-white font-semibold mb-1.5">{block.heading}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{block.body}</p>
                </div>
            </div>
        </section>
    );
}

const REGISTRY = {
    prose: Prose,
    list: List,
    stats: Stats,
    bars: Bars,
    barcompare: BarCompare,
    funnel: Funnel,
    donut: Donut,
    flow: Flow,
    twolane: TwoLane,
    terminal: Terminal,
    callout: Callout,
};

export function BlockRenderer({ blocks }) {
    return (
        <div className="space-y-12">
            {blocks.map((block, i) => {
                const Component = REGISTRY[block.kind];
                if (!Component) return null;
                return <Component key={i} block={block} />;
            })}
        </div>
    );
}
