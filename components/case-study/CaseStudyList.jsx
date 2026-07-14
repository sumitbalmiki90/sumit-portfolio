'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '@/app/case-studies/data';

const FILTERS = ['All', ...CATEGORIES];

export default function CaseStudyList({ studies }) {
    const [filter, setFilter] = useState('All');
    const visible = filter === 'All' ? studies : studies.filter((s) => s.category === filter);

    return (
        <div>
            {/* Filter — lets a visitor read the site through the lens they care about */}
            <div className="flex flex-wrap gap-3 mb-12">
                {FILTERS.map((f) => {
                    const active = filter === f;
                    const count = f === 'All' ? studies.length : studies.filter((s) => s.category === f).length;
                    return (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded text-sm font-medium transition-colors border ${
                                active
                                    ? 'bg-accent border-accent text-white'
                                    : 'bg-surface border-gray-800 text-text-secondary hover:border-accent/50 hover:text-white'
                            }`}
                        >
                            {f}
                            <span className={`ml-2 font-mono text-xs ${active ? 'text-white/70' : 'text-text-secondary/70'}`}>{count}</span>
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 gap-8">
                {visible.map((study) => (
                    <Link
                        key={study.slug}
                        href={`/case-studies/${study.slug}`}
                        className="group block p-8 md:p-10 bg-surface border border-gray-800 rounded-xl hover:border-accent transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
                            <div className="flex-1">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 bg-accent/10 border border-accent/30 text-accent rounded">
                                        {study.category}
                                    </span>
                                    {study.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-background border border-gray-700 text-text-secondary rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                                    {study.client}
                                </p>
                                <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent/80 transition-all">
                                    {study.title}
                                </h2>

                                <p className="text-text-secondary font-mono text-sm border-l-2 border-accent/50 pl-4 py-1">
                                    {study.category === 'Product & GTM' ? 'Outcome: ' : 'Verified Impact: '}
                                    <span className="text-white font-medium">{study.impact}</span>
                                </p>
                            </div>

                            <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full border border-gray-700 items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all bg-background">
                                <ArrowUpRight className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
