import Link from 'next/link';
import { Clock } from 'lucide-react';

export const metadata = {
    title: 'Insights | Sumit Balmiki',
    description: 'Technical analyses and strategic methodologies regarding growth scaling.',
};

export default function Insights() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh]">
            <div className="max-w-3xl mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Architectural Insights.
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                    Technical bulletins, predictive analyses, and functional playbooks for marketing engineers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-800">

                <article className="group p-8 border border-gray-800 bg-surface rounded-xl hover:border-accent transition-colors">
                    <div className="flex items-center text-xs font-mono text-text-secondary mb-4">
                        <span className="text-accent mr-3">STRATEGY</span>
                        <Clock className="w-3 h-3 mr-1" /> 7 min read
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                        Why Predictive LTV Outperforms ROAS in B2B Acquisition
                    </h2>
                    <p className="text-text-secondary mb-6 line-clamp-3">
                        Analyzing the structural flaws of front-end ROAS optimization for high-ticket sales cycles, and how cohort-based predictive modeling restabilizes ad spend efficiency.
                    </p>
                    <div className="text-sm font-medium text-accent inline-flex items-center">
                        Read Publication <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                </article>

                <article className="group p-8 border border-gray-800 bg-surface rounded-xl hover:border-accent transition-colors">
                    <div className="flex items-center text-xs font-mono text-text-secondary mb-4">
                        <span className="text-accent mr-3">SYSTEMS</span>
                        <Clock className="w-3 h-3 mr-1" /> 12 min read
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                        Constructing a True Unified Funnel Dashboard
                    </h2>
                    <p className="text-text-secondary mb-6 line-clamp-3">
                        A step-by-step technical breakdown of routing CRM webhook data into BigQuery and visualizing it seamlessly against multi-channel ad spend.
                    </p>
                    <div className="text-sm font-medium text-accent inline-flex items-center">
                        Read Publication <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                </article>
            </div>
        </div>
    );
}
