import { Briefcase, LineChart, Target, Workflow, GitCompareArrows } from 'lucide-react';

export const metadata = {
    title: 'About | Sumit Balmiki',
    description: 'Performance Marketing Head and AI Product & GTM operator — the two halves compound.',
};

// NOTE: [[NEEDS INPUT]] — the roles/dates in the trajectory timeline below are the
// pre-existing site values. Replace with confirmed employers, titles, and dates.

export default function About() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Performance Marketer. <br />
                    <span className="text-accent">Product &amp; GTM Operator.</span>
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed mb-8">
                    Over 12 years I built a career in performance and growth marketing — the kind measured in CAC, ROAS, and revenue, not adjectives. More recently I have taken AI-powered SaaS products from spec to launch and owned their go-to-market. I treat both as one job: building scalable systems.
                </p>
            </div>

            {/* The connective thesis — why the two pillars are one operator */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-gray-800 pt-12">
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="p-3 bg-surface border border-gray-800 rounded-lg inline-block">
                        <GitCompareArrows className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-sm font-bold tracking-widest text-accent uppercase">The Compound</h2>
                </div>
                <div className="lg:col-span-5 p-6 bg-surface border border-gray-800 rounded-lg">
                    <h3 className="text-white font-semibold text-lg mb-2">Building products makes the marketing sharper.</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        When you have specified, launched, and iterated on a product, you understand what you are marketing at a systems level — the data model, the activation moment, where value actually lands. That turns generic campaigns into precise ones.
                    </p>
                </div>
                <div className="lg:col-span-5 p-6 bg-surface border border-gray-800 rounded-lg">
                    <h3 className="text-white font-semibold text-lg mb-2">Marketing at scale makes the GTM sharper.</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        When you have run acquisition against real CAC and LTV numbers, you understand a product’s economics from day one of its life — pricing, payback, and the channels that will actually carry it. GTM stops being a slide and becomes a model.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 border-t border-gray-800 pt-16">
                <div className="lg:col-span-1 border-r border-gray-800 pr-8">
                    <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-8">Professional Trajectory</h2>

                    <div className="space-y-12">
                        <div className="relative pl-6 border-l border-gray-800">
                            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[1.5px] top-1"></div>
                            <h3 className="text-white font-semibold text-lg mb-1">Growth Lead &amp; AI Product / GTM Owner</h3>
                            <p className="text-text-secondary text-sm mb-2">Present</p>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Running performance marketing for D2C, e-commerce, and real estate, while owning product spec and go-to-market for two live AI SaaS products (Dhruva, FlowReach AI).
                            </p>
                        </div>

                        <div className="relative pl-6 border-l border-gray-800">
                            <div className="absolute w-3 h-3 bg-surface border border-accent rounded-full -left-[1.5px] top-1"></div>
                            <h3 className="text-white font-semibold text-lg mb-1">Head of Digital Performance</h3>
                            <p className="text-text-secondary text-sm mb-2">Prior</p>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Managed multi-channel acquisition pipelines, data-warehousing integration, and conversion-funnel optimization against hard revenue targets.
                            </p>
                        </div>

                        <div className="relative pl-6 border-l border-gray-800">
                            <div className="absolute w-3 h-3 bg-surface border border-gray-600 rounded-full -left-[1.5px] top-1"></div>
                            <h3 className="text-white font-semibold text-lg mb-1">Marketing Analyst</h3>
                            <p className="text-text-secondary text-sm mb-2">Early career</p>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Built foundational reporting frameworks, dashboarding, and attribution models for key clients.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-8">Operating Principles</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-surface border border-gray-800 rounded-lg">
                            <Target className="w-5 h-5 text-accent mb-4" />
                            <h4 className="text-white font-semibold mb-2">Diagnosis Before Tactics</h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                Execution without diagnosis fails. I map the full customer journey, isolate the specific bottleneck, and deploy tactics only where the data indicates ROI elasticity.
                            </p>
                        </div>

                        <div className="p-6 bg-surface border border-gray-800 rounded-lg">
                            <LineChart className="w-5 h-5 text-accent mb-4" />
                            <h4 className="text-white font-semibold mb-2">Real Numbers, Not Adjectives</h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                Every claim maps to a figure — ₹5.36 Cr in sales, 3.5× ROAS, ₹1,000 CAC. If a result cannot be stated as a number, ratio, or comparison, it does not go on the page.
                            </p>
                        </div>

                        <div className="p-6 bg-surface border border-gray-800 rounded-lg">
                            <Workflow className="w-5 h-5 text-accent mb-4" />
                            <h4 className="text-white font-semibold mb-2">Ship the Messy Middle</h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                Products are owned through the build-and-iterate cycle, not just the demo. Server issues, edge cases, and rework are part of the job — evidence of hands-on ownership, not something to hide.
                            </p>
                        </div>

                        <div className="p-6 bg-surface border border-gray-800 rounded-lg">
                            <Briefcase className="w-5 h-5 text-accent mb-4" />
                            <h4 className="text-white font-semibold mb-2">Revenue Alignment</h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                Marketing and product KPIs must map cleanly to P&amp;L. If a metric cannot be tied to bottom-line revenue or a product’s unit economics, it is deprioritized.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
