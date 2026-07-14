import { Database, Activity, Cpu, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Systems Showcase | Sumit Balmiki',
    description: 'Marketing data architectures and the AI-native build stack behind shipped products.',
};

const buildStack = [
    { name: 'Claude Code / Antigravity CLI', role: 'AI-native build tooling — spec-to-shipped, directed not hand-coded' },
    { name: 'Agent Orchestration', role: 'Sandboxed, multi-tenant agents with a live execution trace (Dhruva)' },
    { name: 'Human-in-the-Loop Gate', role: 'Brain → Review approval before anything becomes trusted knowledge' },
    { name: 'Dual-Channel Messaging', role: 'Baileys Web/QR vs Meta Official API, with anti-ban pacing (FlowReach)' },
    { name: 'Google Drive-Native I/O', role: 'Real deliverables written to the user’s Drive — no storage lock-in' },
    { name: 'Role-Based Access Control', role: 'Owner / Manager / Developer / Marketer / Viewer permission model' },
];

export default function SystemsShowcase() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Systems Operations.
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                    Two views of the same systems mindset: the marketing data architectures behind the growth work, and the AI-native build stack behind the shipped products.
                </p>
            </div>

            <div className="space-y-16">

                {/* System 1 — marketing data architecture */}
                <div className="border border-gray-800 bg-background rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-gray-800 bg-surface flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Database className="w-5 h-5 text-accent" />
                            <h2 className="text-lg font-bold text-white tracking-widest uppercase">Predictive Lead Scoring Engine</h2>
                        </div>
                        <div className="flex space-x-2">
                            <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                            <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                            <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="w-full bg-surface/50 border border-dashed border-gray-700 rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px] relative">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                            <div className="z-10 bg-background p-4 border border-gray-800 rounded font-mono text-xs text-text-secondary flex flex-col items-center">
                                <div className="px-4 py-2 border border-blue-500/30 bg-blue-500/5 rounded mb-4">Web Traffic (Anonymous)</div>
                                <div className="h-4 border-l border-dashed border-gray-600 mb-4"></div>
                                <div className="px-4 py-2 border border-purple-500/30 bg-purple-500/5 rounded mb-4">Identity Resolution (Clearbit/ZoomInfo)</div>
                                <div className="h-4 border-l border-dashed border-gray-600 mb-4"></div>
                                <div className="px-4 py-2 border border-accent/50 bg-accent/10 text-white font-bold rounded mb-4">Machine Learning Matrix (Python/Vertex AI)</div>
                                <div className="h-4 border-l border-dashed border-gray-600 mb-4"></div>
                                <div className="flex gap-4">
                                    <div className="px-3 py-1 border border-red-500/30 text-red-400 rounded">Discard</div>
                                    <div className="px-3 py-1 border border-green-500/30 text-green-400 rounded">High-Value (Sales Routing)</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-white font-semibold mb-2">Input Vectors</h4>
                                <p className="text-sm text-text-secondary">Behavioral timestamps, firmographic data, and historical velocity.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-2">Processing Node</h4>
                                <p className="text-sm text-text-secondary">Serverless inference endpoint evaluating probability to close &gt; 60%.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-2">Output Vector</h4>
                                <p className="text-sm text-text-secondary">Boolean CRM trigger allocating human sales resources.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* System 2 — closed-loop attribution */}
                <div className="border border-gray-800 bg-background rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-gray-800 bg-surface flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Activity className="w-5 h-5 text-accent" />
                            <h2 className="text-lg font-bold text-white tracking-widest uppercase">Closed-Loop Attribution</h2>
                        </div>
                        <div className="flex space-x-2">
                            <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                            <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="w-full bg-surface/50 border border-dashed border-gray-700 rounded-lg p-6 overflow-x-auto">
                            <div className="flex items-center gap-2 min-w-min font-mono text-xs">
                                {['Ad Click', 'Lead / Order CRM', 'Offline Conversion', 'Server-Side CAPI', 'Ad Network Bidding'].map((node, i, arr) => (
                                    <div key={node} className="flex items-center gap-2">
                                        <div className={`px-4 py-3 rounded border ${i === arr.length - 1 ? 'border-accent/50 bg-accent/10 text-white' : 'border-gray-700 bg-background text-text-secondary'}`}>
                                            {node}
                                        </div>
                                        {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-accent shrink-0" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-6 text-text-secondary text-sm">Offline conversion payloads are pushed back to ad networks to stabilize algorithmic bidding against high-LTV cohorts — closing the loop between real revenue and the auction.</p>
                    </div>
                </div>

                {/* System 3 — AI-native build stack */}
                <div className="border border-gray-800 bg-background rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-gray-800 bg-surface flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Cpu className="w-5 h-5 text-accent" />
                            <h2 className="text-lg font-bold text-white tracking-widest uppercase">AI-Native Product Build Stack</h2>
                        </div>
                        <div className="flex space-x-2">
                            <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                            <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <p className="text-text-secondary text-sm mb-8 max-w-3xl">
                            The stack and patterns behind Dhruva and FlowReach AI — technical fluency in directing agentic builds and designing production-grade systems, not just marketing tools.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {buildStack.map((item) => (
                                <div key={item.name} className="p-5 bg-surface border border-gray-800 rounded-lg hover:border-accent/30 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-1.5 h-1.5 rounded-sm bg-accent" />
                                        <h4 className="text-white font-semibold font-mono text-sm">{item.name}</h4>
                                    </div>
                                    <p className="text-sm text-text-secondary leading-relaxed">{item.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
