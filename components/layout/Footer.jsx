import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-display font-bold text-2xl tracking-tight text-white mb-4 block">
                            SUMIT BALMIKI<span className="text-accent">.</span>
                        </Link>
                        <p className="text-text-secondary max-w-sm">
                            Performance Marketing Head &amp; AI Product / GTM Head.
                            Data-driven growth for D2C, e-commerce &amp; real estate — and AI SaaS products from spec to launch.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 tracking-wider text-sm">NAVIGATION</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-text-secondary hover:text-accent transition-colors text-sm">About</Link></li>
                            <li><Link href="/expertise" className="text-text-secondary hover:text-accent transition-colors text-sm">Expertise</Link></li>
                            <li><Link href="/case-studies" className="text-text-secondary hover:text-accent transition-colors text-sm">Case Studies</Link></li>
                            <li><Link href="/systems" className="text-text-secondary hover:text-accent transition-colors text-sm">Systems Showcase</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 tracking-wider text-sm">CONNECT</h4>
                        <ul className="space-y-2">
                            <li><a href="https://www.linkedin.com/in/sumit-balmiki-39408b76/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors text-sm">LinkedIn</a></li>
                            <li><a href="mailto:sumit.balmiki90@gmail.com" className="text-text-secondary hover:text-accent transition-colors text-sm">Email</a></li>
                            <li><Link href="/contact" className="text-text-secondary hover:text-accent transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-text-secondary text-sm">
                        &copy; {currentYear} Sumit Balmiki. All rights reserved.
                    </p>
                    <p className="text-text-secondary text-sm mt-4 md:mt-0">
                        Engineered for Scalability.
                    </p>
                </div>
            </div>
        </footer>
    );
}
