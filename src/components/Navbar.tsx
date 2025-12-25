import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Book, Rocket, Terminal, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showDocsDropdown, setShowDocsDropdown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setShowDocsDropdown(false);
    }, [location]);

    const isActive = (path: string) => location.pathname.startsWith(path);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-black/90 backdrop-blur-xl shadow-lg shadow-black/20'
                    : 'bg-transparent'
                }`}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="h-16 flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                {/* Glow */}
                                <div className="absolute -inset-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500" />
                                {/* Logo box */}
                                <div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 p-[1px]">
                                    <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                                        <span className="text-lg font-black bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">G</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white tracking-tight">gdit</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            {/* Docs Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setShowDocsDropdown(true)}
                                onMouseLeave={() => setShowDocsDropdown(false)}
                            >
                                <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all ${isActive('/docs') || showDocsDropdown
                                        ? 'text-white bg-white/5'
                                        : 'text-gray-400 hover:text-white'
                                    }`}>
                                    Docs
                                    <ChevronDown size={14} className={`transition-transform duration-200 ${showDocsDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {showDocsDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 w-72 p-2 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl shadow-black/50"
                                        >
                                            <Link
                                                to="/docs/intro"
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                                    <Book size={18} className="text-blue-400" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white group-hover:text-blue-400 transition-colors">Introduction</div>
                                                    <div className="text-xs text-gray-500 mt-0.5">Learn what gdit is</div>
                                                </div>
                                            </Link>

                                            <Link
                                                to="/docs/quick-start"
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                                    <Rocket size={18} className="text-green-400" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white group-hover:text-green-400 transition-colors">Quick Start</div>
                                                    <div className="text-xs text-gray-500 mt-0.5">Get started in 5 minutes</div>
                                                </div>
                                            </Link>

                                            <Link
                                                to="/docs/commands"
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                                                    <Terminal size={18} className="text-purple-400" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white group-hover:text-purple-400 transition-colors">Commands</div>
                                                    <div className="text-xs text-gray-500 mt-0.5">Full CLI reference</div>
                                                </div>
                                            </Link>

                                            <div className="h-px bg-white/5 my-2" />

                                            <Link
                                                to="/docs"
                                                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors text-sm text-gray-400 hover:text-white"
                                            >
                                                <span>View all docs</span>
                                                <ArrowRight size={14} />
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                to="/#features"
                                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                Features
                            </Link>

                            <a
                                href="https://www.npmjs.com/package/gdit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                npm
                            </a>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                to="/docs/quick-start"
                                className="group relative px-5 py-2.5 rounded-xl text-sm font-semibold overflow-hidden"
                            >
                                {/* Animated gradient background */}
                                <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-100" />
                                <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                {/* Shine effect */}
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                                <span className="relative text-white flex items-center gap-2">
                                    Get Started
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-gray-400 hover:text-white rounded-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-80 bg-[#0a0a0a] z-50 md:hidden overflow-y-auto"
                        >
                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                            <span className="text-sm font-bold text-white">G</span>
                                        </div>
                                        <span className="font-bold text-white">gdit</span>
                                    </div>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 text-gray-400 hover:text-white rounded-lg"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Links */}
                                <div className="space-y-1">
                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                                        Documentation
                                    </div>
                                    <Link
                                        to="/docs/intro"
                                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                        <Book size={18} className="text-blue-400" />
                                        Introduction
                                    </Link>
                                    <Link
                                        to="/docs/quick-start"
                                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                        <Rocket size={18} className="text-green-400" />
                                        Quick Start
                                    </Link>
                                    <Link
                                        to="/docs/commands"
                                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                        <Terminal size={18} className="text-purple-400" />
                                        Commands
                                    </Link>

                                    <div className="h-px bg-white/5 my-4" />

                                    <Link
                                        to="/docs"
                                        className="block px-3 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                        All Docs
                                    </Link>
                                    <a
                                        href="https://www.npmjs.com/package/gdit"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-3 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                        npm Package
                                    </a>
                                </div>

                                {/* CTA */}
                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <Link
                                        to="/docs/quick-start"
                                        className="block w-full text-center py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
