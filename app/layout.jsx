import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata = {
    title: 'Sumit Balmiki | Performance Marketing Head & AI Product / GTM Head',
    description: 'Data-driven performance marketing for D2C, e-commerce & real estate — and AI-powered SaaS products taken from spec to launch to go-to-market.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body className="antialiased min-h-screen flex flex-col bg-background text-text-primary selection:bg-accent selection:text-white">
                <SchemaMarkup />
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
