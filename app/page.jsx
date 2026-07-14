import Link from 'next/link';
import { ArrowRight, BarChart3, Briefcase, Cpu } from 'lucide-react';

// Two equal operating pillars — the whole repositioning hinges on a visitor
// grasping BOTH within five seconds.
const pillarA = {
    label: 'Pillar 01',
    title: 'Performance & Growth Marketing',
    tagline: 'D2C · E-Commerce · Real Estate',
    description: 'Data-driven acquisition proven with real revenue, CAC, and ROAS — not adjectives.',
    icon: <BarChart3 className="w-6 h-6 text-accent" />,
    points: [
        'Paid acquisition across Meta & Google',
        'Funnel design & conversion-rate optimization',
        'CAC / LTV & unit-economic modeling',
        'Lifecycle, CRM & retention systems',
    ],
};
const pillarB = {
    label: 'Pillar 02',
    title: 'Product & GTM for AI SaaS',
    tagline: 'Spec → Launch → Go-To-Market',
    description: 'Owning an AI-powered SaaS product end-to-end: specify it, direct the build, launch it, run its GTM.',
    icon: <Cpu className="w-6 h-6 text-accent" />,
    points: [
        'Product spec & requirements definition',
        'Directing AI-native / agentic builds',
        'GTM strategy, positioning & launch',
        'Iteration driven by real usage data',
    ],
};

const proofStats = [
    { value: '₹5.36 Cr', label: 'Real-estate sales generated' },
    { value: '3.5×', label: 'D2C blended ROAS' },
    { value: '2', label: 'Live AI products shipped' },
    { value: '12+ yrs', label: 'Marketing leadership' },
];

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-gray-800">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-gray-700 mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="text-xs font-medium text-text-secondary tracking-wider uppercase">Systems Active · Dual Pillar</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-6">
                            <span className="block">Performance Marketing Head</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">
                                &amp; AI Product / GTM Head
                            </span>
                        </h1>

                        <p className="text-lg md:text-2xl text-text-secondary font-light mb-10 max-w-3xl leading-relaxed">
                            Two disciplines, one operator. I run performance &amp; growth marketing for D2C, e-commerce, and real estate — proven with real revenue, CAC, and ROAS — and I take AI-powered SaaS products from spec to launch to go-to-market.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/case-studies" className="inline-flex justify-center items-center px-6 py-3.5 bg-accent hover:bg-accent-hover text-white rounded font-semibold transition-all group">
                                <Briefcase className="mr-2 w-4 h-4" />
                                Review Case Studies
                            </Link>
                            <Link href="/expertise" className="inline-flex justify-center items-center px-6 py-3.5 bg-surface hover:bg-gray-800 border border-gray-700 text-white rounded font-medium transition-colors">
                                Examine Methodology
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proof strip — specific numbers, immediately */}
            <section className="border-b border-gray-800 bg-surface/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
                        {proofStats.map((s, i) => (
                            <div key={i} className="py-8 px-4 first:pl-0">
                                <p className="text-2xl md:text-3xl font-display font-bold text-white leading-none mb-2">{s.value}</p>
                                <p className="text-xs text-text-secondary leading-snug">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Two Pillars Section */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Operating Model</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Two Equal Pillars.</h3>
                        <p className="text-text-secondary mt-4 max-w-2xl leading-relaxed">
                            Neither is subordinate. Building AI products makes the marketing sharper; running acquisition at scale makes the GTM sharper. They compound.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {[pillarA, pillarB].map((pillar, index) => (
                            <div
                                key={index}
                                className="group p-8 md:p-10 bg-surface border border-gray-800 rounded-xl hover:border-accent transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-3 bg-background inline-block border border-gray-800 rounded group-hover:border-accent/50 transition-colors">
                                            {pillar.icon}
                                        </div>
                                        <span className="text-xs font-mono uppercase tracking-widest text-text-secondary">{pillar.label}</span>
                                    </div>
                                    <h4 className="text-2xl font-display font-bold text-white mb-1 tracking-tight">
                                        {pillar.title}
                                    </h4>
                                    <p className="text-xs font-mono uppercase tracking-wider text-accent mb-4">{pillar.tagline}</p>
                                    <p className="text-text-secondary leading-relaxed mb-6">
                                        {pillar.description}
                                    </p>
                                    <ul className="space-y-2.5 border-t border-gray-800 pt-6">
                                        {pillar.points.map((pt) => (
                                            <li key={pt} className="flex items-start">
                                                <div className="w-1.5 h-1.5 rounded-sm bg-accent mt-1.5 mr-3 shrink-0" />
                                                <span className="text-sm text-white">{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data/System Callout */}
            <section className="py-24 border-t border-gray-800 bg-surface/50 relative overflow-hidden">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-5 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-accent fill-current">
                        <rect x="10" y="10" width="20" height="20" />
                        <rect x="40" y="10" width="20" height="20" />
                        <rect x="70" y="10" width="20" height="20" />
                        <rect x="10" y="40" width="20" height="20" />
                        <rect x="40" y="40" width="20" height="20" />
                        <rect x="70" y="40" width="20" height="20" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-display font-bold text-white mb-4">Marketer who ships products. <br /> Product operator who owns the economics.</h2>
                            <p className="text-text-secondary leading-relaxed max-w-lg mb-8">
                                Operating at the intersection of acquisition economics and product execution. I understand what I market at a systems level, and I understand a product’s unit economics from day one of its life.
                            </p>
                            <Link href="/about" className="inline-flex items-center text-accent hover:text-white font-medium transition-colors group">
                                View detailed methodology
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex-1 w-full max-w-md border border-gray-800 bg-background rounded-lg p-6 font-mono text-sm text-text-secondary">
                            <div className="flex items-center space-x-2 mb-4 border-b border-gray-800 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                <span className="ml-2 text-xs">system_status.json</span>
                            </div>
                            <pre className="overflow-x-auto text-xs leading-relaxed">
                                {`{
  "operator": "dual_pillar",
  "pillars": ["performance_marketing", "product_gtm"],
  "verticals": ["d2c", "ecommerce", "real_estate", "ai_saas"],
  "proof": {
    "realestate_sales_inr": "5.36Cr",
    "d2c_roas": "3.5x",
    "live_ai_products": 2
  },
  "hype": false
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
