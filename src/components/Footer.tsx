import { Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

// Google Drive Logo SVG
function DriveLogo({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
            <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47" />
            <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
            <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
            <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
            <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
        </svg>
    );
}

export function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <DriveLogo size={28} />
                            <span className="text-lg font-bold text-white">gdit</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Git-like version control for Google Drive. Stage, commit, and push your files to the cloud.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/AnshumanMahi/gdit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Getting Started */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Getting Started</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/docs/intro" className="hover:text-[#4285F4] transition-colors">Introduction</Link></li>
                            <li><Link to="/docs/installation" className="hover:text-[#4285F4] transition-colors">Installation</Link></li>
                            <li><Link to="/docs/quick-start" className="hover:text-[#34A853] transition-colors">Quick Start</Link></li>
                        </ul>
                    </div>

                    {/* Reference */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Reference</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/docs/commands" className="hover:text-[#FBBC04] transition-colors">Commands</Link></li>
                            <li><a href="https://github.com/AnshumanMahi/gdit" className="hover:text-white transition-colors">GitHub</a></li>
                            <li><a href="https://npmjs.com/package/gdit" className="hover:text-[#EA4335] transition-colors">NPM</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">MIT License</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} gdit. Built with ❤️ for developers.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>Powered by</span>
                        <a href="https://drive.google.com" className="text-[#4285F4] hover:text-[#3b78e7] font-medium">Google Drive</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
