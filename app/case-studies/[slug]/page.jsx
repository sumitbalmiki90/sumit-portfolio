import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { caseStudiesData } from '../data';
import { BlockRenderer } from '@/components/case-study/Blocks';

const getCaseStudyBySlug = (slug) => caseStudiesData.find((cs) => cs.slug === slug) || null;

// Required for static site generation of dynamic routes on GitHub Pages.
export function generateStaticParams() {
    return caseStudiesData.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) return { title: 'Case Study Not Found' };
    return {
        title: `${study.title} | Sumit Balmiki`,
        description: study.impact,
    };
}

export default function CaseStudyDetail({ params }) {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) notFound();

    return (
        <div className="pt-24 pb-24 bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/case-studies" className="inline-flex items-center text-text-secondary hover:text-white mb-12 transition-colors text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Case Studies
                </Link>

                <div className="mb-16 animate-fade-in-up">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded border border-accent/30 bg-accent/5 text-accent">
                            {study.category}
                        </span>
                        {study.period && (
                            <span className="text-xs font-mono text-text-secondary">{study.period}</span>
                        )}
                    </div>

                    <p className="text-sm font-bold tracking-widest text-accent uppercase mb-4">
                        {study.client}
                    </p>
                    <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
                        {study.title}
                    </h1>

                    <div className="flex flex-wrap gap-3 pb-8 border-b border-gray-800">
                        {study.stack.map((tech) => (
                            <span key={tech} className="text-xs font-mono px-3 py-1.5 bg-surface text-text-secondary rounded border border-gray-800">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-8">
                        <BlockRenderer blocks={study.blocks} />
                    </div>

                    {/* Sidebar Specifications */}
                    <div className="md:col-span-4 space-y-8 md:sticky md:top-28 md:self-start">
                        <div className="p-6 border border-gray-800 bg-surface rounded-lg">
                            <h4 className="text-xs font-bold tracking-widest text-text-secondary uppercase mb-4">
                                {study.category === 'Product & GTM' ? 'Design Principles' : 'KPI Framework'}
                            </h4>
                            <ul className="space-y-3">
                                {study.kpiFramework.map((kpi) => (
                                    <li key={kpi} className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-sm bg-accent mt-1.5 mr-3 shrink-0" />
                                        <span className="text-sm text-white leading-snug">{kpi}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 border border-accent/30 bg-accent/5 rounded-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <CheckCircle2 className="w-24 h-24 text-accent" />
                            </div>
                            <h4 className="text-xs font-bold tracking-widest text-accent uppercase mb-4 relative z-10">
                                {study.category === 'Product & GTM' ? 'Outcome' : 'Verified Impact'}
                            </h4>
                            <p className="text-lg font-display font-medium text-white relative z-10 leading-snug">{study.results}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
