import { Mail, MapPin, Terminal } from 'lucide-react';

export const metadata = {
    title: 'Contact | Sumit Balmiki',
    description: 'Initiate a strategic diagnostic or consultation.',
};

export default function Contact() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh]">
            <div className="max-w-3xl mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Initiate Contact.
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                    Open to executive leadership roles, strategic consultations, and complex systems architecture projects.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-gray-800 pt-16">

                <div>
                    <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-8">Direct Channels</h2>

                    <div className="space-y-8">
                        <a href="mailto:sumit.balmiki90@gmail.com" className="flex items-center p-6 border border-gray-800 bg-surface rounded-lg hover:border-accent transition-colors group">
                            <div className="w-12 h-12 bg-background border border-gray-700 rounded-full flex items-center justify-center mr-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                                <Mail className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">Email Protocol</h3>
                                <p className="text-text-secondary font-mono text-sm group-hover:text-white transition-colors">sumit.balmiki90@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center p-6 border border-gray-800 bg-surface rounded-lg">
                            <div className="w-12 h-12 bg-background border border-gray-700 rounded-full flex items-center justify-center mr-6">
                                <Terminal className="w-5 h-5 text-text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">Professional Network</h3>
                                <a href="https://www.linkedin.com/in/sumit-balmiki-39408b76/" target="_blank" rel="noopener noreferrer" className="text-accent font-mono text-sm hover:underline">
                                    linkedin.com/in/sumit-balmiki
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center p-6 border border-gray-800 bg-surface rounded-lg">
                            <div className="w-12 h-12 bg-background border border-gray-700 rounded-full flex items-center justify-center mr-6">
                                <MapPin className="w-5 h-5 text-text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">Base of Operations</h3>
                                <p className="text-text-secondary font-mono text-sm">Global / Remote</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-surface border border-gray-800 rounded-xl p-8">
                    <h2 className="text-sm font-bold tracking-widest text-white uppercase mb-8">Secure Transmission Array</h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Identifier (Name)</label>
                                <input type="text" id="name" className="w-full bg-background border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Routing Vector (Email)</label>
                                <input type="email" id="email" className="w-full bg-background border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="email@domain.com" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Inquiry Classification</label>
                            <select id="subject" className="w-full bg-background border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors">
                                <option>Executive Leadership Role</option>
                                <option>Architecture Consultation</option>
                                <option>Systems Audit</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Data Payload</label>
                            <textarea id="message" rows="5" className="w-full bg-background border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="Describe the business problem or system requirement..."></textarea>
                        </div>

                        <button type="button" className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 rounded transition-colors uppercase tracking-widest text-sm flex justify-center items-center">
                            Execute Transmission
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
