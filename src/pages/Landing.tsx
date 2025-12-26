import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, GitBranch, RefreshCw, Cloud, Github, Star, Download, Check, Copy } from 'lucide-react';

import { Link } from 'react-router-dom';
import { Terminal } from '../components/Terminal';
import { InteractiveTerminal } from '../components/InteractiveTerminal';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

// Google Drive colors
const colors = {
    blue: '#4285F4',
    green: '#34A853',
    yellow: '#FBBC04',
    red: '#EA4335',
};

// Google Drive Logo SVG
function DriveLogo({ size = 48 }: { size?: number }) {
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

const commands = [
    { cmd: 'init', desc: 'Start a repo', color: colors.blue },
    { cmd: 'add', desc: 'Stage files', color: colors.green },
    { cmd: 'commit', desc: 'Save changes', color: colors.yellow },
    { cmd: 'push', desc: 'Upload to Drive', color: colors.blue },
    { cmd: 'pull', desc: 'Download files', color: colors.green },
    { cmd: 'status', desc: 'Check state', color: colors.yellow },
];

function CopyCommand() {
    const [copied, setCopied] = useState(false);
    const { theme } = useTheme();
    const command = 'npm install -g gdit';

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            onClick={handleCopy}
            className={`group cursor-pointer flex items-center gap-3 rounded-xl px-5 py-3 transition-all ${theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                    : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
                }`}
        >
            <span className="text-gray-500">$</span>
            <code className={`font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{command}</code>
            <div className="ml-auto">
                {copied ? (
                    <Check size={16} className="text-[#34A853]" />
                ) : (
                    <Copy size={16} className={`transition-colors ${theme === 'dark' ? 'text-gray-500 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-900'
                        }`} />
                )}
            </div>
        </div>
    );
}

export function LandingPage() {
    const { theme } = useTheme();

    return (
        <div className={`overflow-hidden ${theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'}`}>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-16">
                {/* Background Effects - Google Drive colors */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Gradient orbs with Google colors */}
                    <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse ${theme === 'dark' ? 'bg-[#4285F4]/15' : 'bg-[#4285F4]/10'
                        }`} />
                    <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] animate-pulse delay-1000 ${theme === 'dark' ? 'bg-[#34A853]/15' : 'bg-[#34A853]/10'
                        }`} />
                    <div className={`absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full blur-[150px] animate-pulse delay-500 ${theme === 'dark' ? 'bg-[#FBBC04]/10' : 'bg-[#FBBC04]/08'
                        }`} />

                    {/* Grid */}
                    <div className={`absolute inset-0 bg-[size:64px_64px] ${theme === 'dark'
                            ? 'bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]'
                            : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'
                        }`} />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
                    {/* Drive Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex justify-center mb-8"
                    >
                        <DriveLogo size={72} />
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 ${theme === 'dark'
                                ? 'bg-[#4285F4]/10 border border-[#4285F4]/20'
                                : 'bg-[#4285F4]/10 border border-[#4285F4]/20'
                            }`}
                    >
                        <Star size={14} className="text-[#FBBC04]" />
                        <span className="text-gray-500">Open Source</span>
                        <span className="text-gray-400">•</span>
                        <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>v3.0.1</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                    >
                        <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Git for</span>
                        <br />
                        <span className="bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC04] bg-clip-text text-transparent">
                            Google Drive
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}
                    >
                        Stage, commit, and push your projects to Google Drive.
                        Version control meets cloud storage.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <Link
                            to="/docs/quick-start"
                            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#4285F4] text-white font-semibold hover:bg-[#3b78e7] transition-colors"
                        >
                            Get Started
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="https://github.com/AnshumanMahi/gdit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-8 py-4 rounded-xl transition-colors ${theme === 'dark'
                                    ? 'border border-white/10 hover:bg-white/5'
                                    : 'border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            <Github size={18} />
                            View on GitHub
                        </a>
                    </motion.div>

                    {/* Install Command */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-md mx-auto"
                    >
                        <CopyCommand />
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-8 md:gap-16 mt-16"
                    >
                        {[
                            { icon: Download, value: '10k+', label: 'Downloads', color: colors.blue },
                            { icon: Star, value: 'MIT', label: 'License', color: colors.yellow },
                            { icon: Github, value: '100+', label: 'Stars', color: colors.green },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <stat.icon size={16} style={{ color: stat.color }} />
                                    <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{stat.value}</span>
                                </div>
                                <span className="text-sm text-gray-500">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Terminal Preview */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <Terminal />
                </div>
            </section>

            {/* Commands Quick View */}
            <section className={`py-24 px-6 ${theme === 'dark' ? 'bg-[#0d0d0d]' : 'bg-gray-50'}`}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#4285F4] font-semibold text-sm uppercase tracking-wider"
                        >
                            Simple Commands
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mt-4"
                        >
                            Everything in 6 commands
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {commands.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`group p-4 rounded-xl transition-all text-center ${theme === 'dark'
                                        ? 'bg-white/5 border border-white/5 hover:border-white/10'
                                        : 'bg-white border border-gray-100 hover:border-gray-200 shadow-sm'
                                    }`}
                            >
                                <code className="text-lg font-mono block mb-2" style={{ color: item.color }}>
                                    {item.cmd}
                                </code>
                                <span className="text-xs text-gray-500">{item.desc}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Demo */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#34A853] font-semibold text-sm uppercase tracking-wider"
                        >
                            Try It Out
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mt-4 mb-4"
                        >
                            Interactive Demo
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className={theme === 'dark' ? 'text-gray-400 max-w-xl mx-auto' : 'text-gray-600 max-w-xl mx-auto'}
                        >
                            Click the command buttons or type your own to see gdit in action
                        </motion.p>
                    </div>

                    <InteractiveTerminal />
                </div>
            </section>

            {/* Features Section */}
            <section className={`py-32 px-6 relative overflow-hidden ${theme === 'dark' ? 'bg-[#0d0d0d]' : 'bg-gray-50'}`}>
                {/* Background decoration */}
                <div className="absolute inset-0">
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px] ${theme === 'dark' ? 'bg-[#4285F4]/5' : 'bg-[#4285F4]/5'
                        }`} />
                </div>

                <div className="max-w-6xl mx-auto relative">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34A853]/10 border border-[#34A853]/20 text-[#34A853] text-sm font-medium mb-6"
                        >
                            <Zap size={14} />
                            Powerful Features
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold"
                        >
                            Everything you need
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={`text-xl mt-4 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}
                        >
                            Built from the ground up for developers who want power without complexity
                        </motion.p>
                    </div>

                    {/* Feature Cards - Bento Grid Style */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Large Feature Card - Lightning Fast */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={`md:col-span-2 lg:col-span-2 group relative p-8 rounded-2xl transition-all duration-500 overflow-hidden ${theme === 'dark'
                                    ? 'bg-gradient-to-br from-[#FBBC04]/10 via-[#FBBC04]/5 to-transparent border border-white/5 hover:border-[#FBBC04]/30'
                                    : 'bg-gradient-to-br from-[#FBBC04]/10 via-[#FBBC04]/5 to-white border border-gray-100 hover:border-[#FBBC04]/30 shadow-sm'
                                }`}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBBC04]/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-[#FBBC04]/20 flex items-center justify-center mb-6">
                                    <Zap className="w-7 h-7 text-[#FBBC04]" />
                                </div>
                                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Lightning Fast Sync</h3>
                                <p className={`text-lg leading-relaxed max-w-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Smart file comparison using MD5 checksums. Only uploads files that actually changed —
                                    not your entire project every time. Save bandwidth, save time.
                                </p>

                                <div className="mt-8 flex items-center gap-4">
                                    <div className={`h-2 flex-1 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'}`}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '85%' }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="h-full bg-gradient-to-r from-[#FBBC04] to-[#EA4335] rounded-full"
                                        />
                                    </div>
                                    <span className="text-[#FBBC04] font-mono text-sm">85% faster</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Security Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className={`group relative p-6 rounded-2xl transition-all duration-500 ${theme === 'dark'
                                    ? 'bg-gradient-to-br from-[#34A853]/10 via-[#34A853]/5 to-transparent border border-white/5 hover:border-[#34A853]/30'
                                    : 'bg-gradient-to-br from-[#34A853]/10 via-[#34A853]/5 to-white border border-gray-100 hover:border-[#34A853]/30 shadow-sm'
                                }`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#34A853]/20 flex items-center justify-center mb-5">
                                <Shield className="w-6 h-6 text-[#34A853]" />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Secure by Default</h3>
                            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                                OAuth 2.0 authentication. Tokens stay local. Your credentials never touch our servers.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-[#34A853] text-xs font-medium">
                                <Check size={14} />
                                <span>Enterprise-grade security</span>
                            </div>
                        </motion.div>

                        {/* Git Workflow Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className={`group relative p-6 rounded-2xl transition-all duration-500 ${theme === 'dark'
                                    ? 'bg-gradient-to-br from-[#4285F4]/10 via-[#4285F4]/5 to-transparent border border-white/5 hover:border-[#4285F4]/30'
                                    : 'bg-gradient-to-br from-[#4285F4]/10 via-[#4285F4]/5 to-white border border-gray-100 hover:border-[#4285F4]/30 shadow-sm'
                                }`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#4285F4]/20 flex items-center justify-center mb-5">
                                <GitBranch className="w-6 h-6 text-[#4285F4]" />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Git-like Workflow</h3>
                            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                                Stage, commit, push. If you know Git, you already know gdit. Zero learning curve.
                            </p>
                            <div className="mt-4 font-mono text-xs text-[#4285F4] bg-[#4285F4]/10 px-3 py-2 rounded-lg">
                                add → commit → push
                            </div>
                        </motion.div>

                        {/* Two-Way Sync Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className={`group relative p-6 rounded-2xl transition-all duration-500 ${theme === 'dark'
                                    ? 'bg-gradient-to-br from-[#EA4335]/10 via-[#EA4335]/5 to-transparent border border-white/5 hover:border-[#EA4335]/30'
                                    : 'bg-gradient-to-br from-[#EA4335]/10 via-[#EA4335]/5 to-white border border-gray-100 hover:border-[#EA4335]/30 shadow-sm'
                                }`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#EA4335]/20 flex items-center justify-center mb-5">
                                <RefreshCw className="w-6 h-6 text-[#EA4335]" />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Two-Way Sync</h3>
                            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                                Push from your laptop, pull from anywhere. All your machines stay in sync.
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#EA4335]/20 flex items-center justify-center text-[#EA4335]">💻</div>
                                <div className="flex-1 h-px bg-[#EA4335]/30" />
                                <div className="w-8 h-8 rounded-lg bg-[#4285F4]/20 flex items-center justify-center text-[#4285F4]">☁️</div>
                                <div className="flex-1 h-px bg-[#34A853]/30" />
                                <div className="w-8 h-8 rounded-lg bg-[#34A853]/20 flex items-center justify-center text-[#34A853]">💻</div>
                            </div>
                        </motion.div>

                        {/* Large Card - Free Storage */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className={`md:col-span-2 lg:col-span-2 group relative p-8 rounded-2xl transition-all duration-500 overflow-hidden ${theme === 'dark'
                                    ? 'bg-gradient-to-br from-[#4285F4]/10 via-[#34A853]/5 to-transparent border border-white/5 hover:border-[#4285F4]/30'
                                    : 'bg-gradient-to-br from-[#4285F4]/10 via-[#34A853]/5 to-white border border-gray-100 hover:border-[#4285F4]/30 shadow-sm'
                                }`}
                        >
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4285F4]/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                                <div className="flex-1">
                                    <div className="w-14 h-14 rounded-2xl bg-[#4285F4]/20 flex items-center justify-center mb-6">
                                        <Cloud className="w-7 h-7 text-[#4285F4]" />
                                    </div>
                                    <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>15GB Free Storage</h3>
                                    <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Uses your existing Google Drive storage — no extra costs, no subscriptions.
                                        Just connect and start pushing your projects.
                                    </p>
                                </div>

                                {/* Storage visual */}
                                <div className="w-full md:w-48 shrink-0">
                                    <div className="text-center mb-3">
                                        <span className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>15</span>
                                        <span className="text-xl text-gray-500 ml-1">GB</span>
                                    </div>
                                    <div className={`h-3 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'}`}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '20%' }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="h-full bg-gradient-to-r from-[#4285F4] to-[#34A853] rounded-full"
                                        />
                                    </div>
                                    <p className="text-center text-xs text-gray-500 mt-2">Free with Google Account</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom tagline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}>
                            ...and much more. <Link to="/docs" className="text-[#4285F4] hover:text-[#3b78e7]">Explore the docs →</Link>
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* How It Works */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#FBBC04] font-semibold text-sm uppercase tracking-wider"
                        >
                            How It Works
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mt-4"
                        >
                            Three simple steps
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Initialize',
                                desc: 'Run gdit init in your project folder to create a new repository.',
                                cmd: 'gdit init',
                                color: colors.blue
                            },
                            {
                                step: '02',
                                title: 'Commit',
                                desc: 'Stage your files and create commits with meaningful messages.',
                                cmd: 'gdit add . && gdit commit -m "Update"',
                                color: colors.green
                            },
                            {
                                step: '03',
                                title: 'Push',
                                desc: 'Upload everything to Google Drive with a single command.',
                                cmd: 'gdit push',
                                color: colors.yellow
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative"
                            >
                                <div className="text-7xl font-black mb-4" style={{ color: `${item.color}20` }}>{item.step}</div>
                                <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>{item.desc}</p>
                                <code
                                    className="text-sm font-mono px-3 py-1.5 rounded-lg"
                                    style={{
                                        color: item.color,
                                        backgroundColor: `${item.color}15`
                                    }}
                                >
                                    {item.cmd}
                                </code>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        {/* Background gradient - Google Drive colors */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#FBBC04]" />
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

                        <div className="relative z-10 p-12 md:p-16 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Ready to sync your projects?
                            </h2>
                            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                                Get started in under a minute. Free, open source, and privacy-focused.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/docs/quick-start"
                                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#4285F4] font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Get Started
                                    <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/docs"
                                    className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-colors"
                                >
                                    Read the Docs
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
