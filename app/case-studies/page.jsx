import { caseStudiesData } from './data';
import CaseStudyList from '@/components/case-study/CaseStudyList';

export const metadata = {
    title: 'Case Studies | Sumit Balmiki',
    description: 'Real performance-marketing revenue systems and AI SaaS products — with the actual numbers.',
};

export default function CaseStudies() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Proof, in Two Disciplines.
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                    Two performance-marketing engagements with real revenue, CAC, and ROAS figures — and two AI SaaS products taken from spec to launch. Filter by the lens you care about: acquisition economics, or product &amp; GTM.
                </p>
            </div>

            <CaseStudyList studies={caseStudiesData} />
        </div>
    );
}
