import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Book, Rocket, Terminal, ArrowRight, Sun, Moon, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// Google Drive Logo SVG Component
function GditLogo({ size = 32 }: { size?: number }) {
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

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showDocsDropdown, setShowDocsDropdown] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

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
                ? theme === 'dark'
                    ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5'
                    : 'bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm'
                : 'bg-transparent'
                }`}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="h-16 flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                {/* Glow effect */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC04] rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500" />
                                {/* Logo */}
                                <div className="relative">
                                    <GditLogo size={36} />
                                </div>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>gdit</span>
                                <span className="text-xs text-gray-500 font-medium hidden sm:inline">for Google Drive</span>
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
                                    ? theme === 'dark' ? 'text-white bg-white/5' : 'text-gray-900 bg-black/5'
                                    : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
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
                                            className={`absolute top-full left-0 mt-2 w-72 p-2 rounded-xl shadow-2xl ${theme === 'dark'
                                                    ? 'bg-[#1a1a1a] border border-white/10'
                                                    : 'bg-white border border-gray-200'
                                                }`}
                                        >
                                            <Link
                                                to="/docs/intro"
                                                className={`flex items-start gap-3 p-3 rounded-lg transition-colors group ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-[#4285F4]/10 flex items-center justify-center shrink-0">
                                                    <Book size={18} className="text-[#4285F4]" />
                                                </div>
                                                <div>
                                                    <div className={`font-medium group-hover:text-[#4285F4] transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                        }`}>Introduction</div>
                                                    <div className="text-xs text-gray-500 mt-0.5">Learn what gdit is</div>
                                                </div>
                                            </Link>

                                            <Link
                                                to="/docs/quick-start"
                                                className={`flex items-start gap-3 p-3 rounded-lg transition-colors group ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-[#34A853]/10 flex items-center justify-center shrink-0">
                                                    <Rocket size={18} className="text-[#34A853]" />
                                                </div>
                                                <div>
                                                    <div className={`font-medium group-hover:text-[#34A853] transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                        }`}>Quick Start</div>
                                                    <div className="text-xs text-gray-500 mt-0.5">Get started in 5 minutes</div>
                                                </div>
                                            </Link>

                                            <Link
                                                to="/docs/commands"
                                                className={`flex items-start gap-3 p-3 rounded-lg transition-colors group ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-[#FBBC04]/10 flex items-center justify-center shrink-0">
                                                    <Terminal size={18} className="text-[#FBBC04]" />
                                                </div>
                                                <div>
                                                    <div className={`font-medium group-hover:text-[#FBBC04] transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                        }`}>Commands</div>
                                                    <div className="text-xs text-gray-500 mt-0.5">Full CLI reference</div>
                                                </div>
                                            </Link>

                                            <div className={`h-px my-2 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'}`} />

                                            <Link
                                                to="/docs"
                                                className={`flex items-center justify-between p-3 rounded-lg transition-colors text-sm ${theme === 'dark'
                                                        ? 'text-gray-400 hover:text-white hover:bg-white/5'
                                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                                    }`}
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
                                className={`px-4 py-2 text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Features
                            </Link>

                            <a
                                href="https://www.npmjs.com/package/gdit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                <Package size={16} />
                                npm
                            </a>
                        </div>

                        {/* Desktop CTA & Theme Toggle */}
                        <div className="hidden md:flex items-center gap-3">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`p-2.5 rounded-lg transition-colors ${theme === 'dark'
                                        ? 'text-gray-400 hover:text-white hover:bg-white/5'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>

                            <Link
                                to="/docs/quick-start"
                                className="group relative px-5 py-2.5 rounded-lg text-sm font-semibold overflow-hidden bg-[#4285F4] hover:bg-[#3b78e7] transition-colors"
                            >
                                <span className="relative text-white flex items-center gap-2">
                                    Get Started
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-lg ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                className={`p-2 rounded-lg ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
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
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className={`fixed top-0 right-0 bottom-0 w-[280px] z-50 md:hidden ${theme === 'dark'
                                    ? 'bg-[#0a0a0a] border-l border-white/10'
                                    : 'bg-white border-l border-gray-200'
                                }`}
                        >
                            <div className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'
                                }`}>
                                <div className="flex items-center gap-2">
                                    <GditLogo size={28} />
                                    <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>gdit</span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={theme === 'dark' ? 'p-2 text-gray-400 hover:text-white' : 'p-2 text-gray-600 hover:text-gray-900'}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-4 space-y-1">
                                <Link
                                    to="/docs"
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${theme === 'dark'
                                            ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <Book size={18} className="text-[#4285F4]" />
                                    Documentation
                                </Link>
                                <Link
                                    to="/docs/quick-start"
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${theme === 'dark'
                                            ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <Rocket size={18} className="text-[#34A853]" />
                                    Quick Start
                                </Link>
                                <Link
                                    to="/docs/commands"
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${theme === 'dark'
                                            ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <Terminal size={18} className="text-[#FBBC04]" />
                                    Commands
                                </Link>
                                <a
                                    href="https://www.npmjs.com/package/gdit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${theme === 'dark'
                                            ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <Package size={18} className="text-[#EA4335]" />
                                    npm
                                </a>
                            </div>

                            <div className={`absolute bottom-0 left-0 right-0 p-4 border-t ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'
                                }`}>
                                <Link
                                    to="/docs/quick-start"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#4285F4] text-white font-semibold"
                                >
                                    Get Started
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
