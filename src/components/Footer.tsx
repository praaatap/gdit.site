import { Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-[#030303] border-t border-white/5 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                G
                            </div>
                            <span className="text-lg font-bold text-white">gdit</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Git-like version control for Google Drive. Stage, commit, and push your files to the cloud.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com"
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
                            <li><Link to="/docs/intro" className="hover:text-white transition-colors">Introduction</Link></li>
                            <li><Link to="/docs/installation" className="hover:text-white transition-colors">Installation</Link></li>
                            <li><Link to="/docs/quick-start" className="hover:text-white transition-colors">Quick Start</Link></li>
                        </ul>
                    </div>

                    {/* Reference */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm">Reference</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/docs/commands" className="hover:text-white transition-colors">Commands</Link></li>
                            <li><a href="https://github.com" className="hover:text-white transition-colors">GitHub</a></li>
                            <li><a href="https://npmjs.com/package/gdit" className="hover:text-white transition-colors">NPM</a></li>
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
                        <span>Made with</span>
                        <a href="https://reactjs.org" className="text-blue-400 hover:text-blue-300">React</a>
                        <span>&</span>
                        <a href="https://tailwindcss.com" className="text-cyan-400 hover:text-cyan-300">Tailwind</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
