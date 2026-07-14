import { ArrowRight, BarChart3, Binary, Cpu, Network, Workflow, Rocket, Boxes } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Expertise | Sumit Balmiki',
    description: 'Two disciplines: Performance & Growth Marketing, and Product & GTM for AI SaaS.',
};

// Group A — Performance & Growth Marketing
const growthPillars = [
    {
        id: 'performance-growth',
        title: 'Performance & Growth Systems',
        description: 'Constructing robust, data-driven acquisition architectures for deterministic user acquisition and LTV expansion.',
        icon: <BarChart3 className="w-8 h-8 text-accent" />,
        specs: [
            'Multi-touch Attribution Modeling',
            'CAC to LTV Cohort Analysis',
            'Full-Funnel Conversion Rate Optimization',
            'Media Mix Modeling (MMM)',
        ],
    },
    {
        id: 'ai-marketing',
        title: 'AI-Powered Marketing & Automation',
        description: 'Deploying machine learning to eliminate operational drag and hyper-personalize the end-user experience.',
        icon: <Cpu className="w-8 h-8 text-accent" />,
        specs: [
            'Predictive Churn Analysis',
            'LLM-Programmatic Content Pipelines',
            'Algorithmic Bidding Architecture',
            'Sentiment & Intent Analysis',
        ],
    },
    {
        id: 'crm-lifecycle',
        title: 'CRM & Lifecycle Engineering',
        description: 'Architecting behavioral databases that trigger automated, precise interventions at scale.',
        icon: <Workflow className="w-8 h-8 text-accent" />,
        specs: [
            'Event-Driven Automations',
            'Lead Scoring & Routing Algorithms',
            'Cross-Channel Communication Orchestration',
            'Data Warehouse Integration (CDP)',
        ],
    },
    {
        id: 'brand-expansion',
        title: 'Brand Positioning & Market Expansion',
        description: 'Identifying viable adjacent markets and executing logical market-entry positioning strategies.',
        icon: <Network className="w-8 h-8 text-accent" />,
        specs: [
            'Total Addressable Market (TAM) Mapping',
            'Positioning Matrices',
            'Competitor Vector Analysis',
            'Go-To-Market (GTM) Playbooks',
        ],
    },
    {
        id: 'revenue-operations',
        title: 'Business Scaling & Revenue Operations',
        description: 'Synchronizing marketing, sales, and client-success inputs through a unified telemetry layer.',
        icon: <Binary className="w-8 h-8 text-accent" />,
        specs: [
            'Cross-Functional SLA Alignment',
            'Pipeline Velocity Tracking',
            'Tool Stack Consolidation',
            'Executive Dashboarding',
        ],
    },
];

// Group B — Product & GTM (AI SaaS)
const productPillars = [
    {
        id: 'product-gtm',
        title: 'Product Strategy & GTM (AI SaaS)',
        description: 'Owning an AI-powered SaaS product end-to-end — from the first requirement to the launched go-to-market motion.',
        icon: <Rocket className="w-8 h-8 text-accent" />,
        specs: [
            'Product Spec & Requirements Definition',
            'GTM Strategy & Positioning',
            'Launch Execution',
            'Iteration Based on Usage Data',
        ],
    },
    {
        id: 'ai-native-build',
        title: 'AI-Native Product Development',
        description: 'Directing agentic build tooling to turn a product spec into a shipped system, and designing the architecture it runs on.',
        icon: <Boxes className="w-8 h-8 text-accent" />,
        specs: [
            'Directing AI-Native Builds (Claude Code / Antigravity)',
            'Multi-Tenant & Isolation Architecture',
            'Human-in-the-Loop / Approval-Gate Design',
            'Agent Orchestration & Dual-Channel Systems',
        ],
    },
];

function PillarGroup({ eyebrow, heading, blurb, pillars }) {
    return (
        <div>
            <div className="mb-12">
                <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">{eyebrow}</h2>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">{heading}</h3>
                <p className="text-text-secondary max-w-2xl leading-relaxed">{blurb}</p>
            </div>

            <div className="space-y-16">
                {pillars.map((item) => (
                    <div key={item.id} id={item.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-gray-800 pt-12">
                        <div className="lg:col-span-4">
                            <div className="p-4 bg-surface inline-block border border-gray-800 rounded-lg mb-6">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                            <p className="text-text-secondary leading-relaxed">{item.description}</p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {item.specs.map((spec, i) => (
                                <div key={i} className="flex items-center p-4 bg-surface/50 border border-gray-800/50 rounded hover:border-accent/30 transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 shrink-0" />
                                    <span className="text-sm text-text-primary font-medium">{spec}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Expertise() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-20 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Two Disciplines. One Systems Mindset.
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                    My expertise splits into two equal pillars — performance &amp; growth marketing, and product &amp; GTM for AI SaaS. Each stands on its own; together they let me build a product and own the economics of acquiring users for it.
                </p>
            </div>

            <div className="space-y-24">
                <PillarGroup
                    eyebrow="Pillar 01"
                    heading="Performance & Growth Marketing"
                    blurb="Data-driven acquisition for D2C, e-commerce, and real estate — measured in revenue, CAC, ROAS, and LTV."
                    pillars={growthPillars}
                />
                <PillarGroup
                    eyebrow="Pillar 02"
                    heading="Product & GTM (AI SaaS)"
                    blurb="Taking AI-powered SaaS products from spec to launch to go-to-market — owning the product and its economics, and directing an AI-native build."
                    pillars={productPillars}
                />
            </div>

            <div className="mt-24 p-8 border border-gray-800 bg-surface rounded-xl flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">See these systems in action</h3>
                    <p className="text-text-secondary text-sm">Review the case studies — real marketing numbers and shipped AI products.</p>
                </div>
                <Link href="/case-studies" className="inline-flex items-center px-6 py-3 bg-white text-black hover:bg-gray-200 rounded font-semibold transition-colors shrink-0">
                    Review Case Studies
                    <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
