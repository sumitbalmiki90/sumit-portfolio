import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-display font-bold text-xl tracking-tight text-white hover:text-accent transition-colors">
                            SUMIT BALMIKI<span className="text-accent">.</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link href="/about" className="text-text-secondary hover:text-white transition-colors text-sm font-medium tracking-wide">
                            ABOUT
                        </Link>
                        <Link href="/expertise" className="text-text-secondary hover:text-white transition-colors text-sm font-medium tracking-wide">
                            EXPERTISE
                        </Link>
                        <Link href="/case-studies" className="text-text-secondary hover:text-white transition-colors text-sm font-medium tracking-wide">
                            CASE STUDIES
                        </Link>
                        <Link href="/insights" className="text-text-secondary hover:text-white transition-colors text-sm font-medium tracking-wide">
                            INSIGHTS
                        </Link>
                        <Link href="/systems" className="text-text-secondary hover:text-white transition-colors text-sm font-medium tracking-wide">
                            SYSTEMS
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <Link href="/contact" className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white rounded text-sm font-semibold transition-colors">
                            LET'S TALK
                        </Link>
                    </div>

                    {/* Mobile menu button (visual only for now) */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-300 hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
