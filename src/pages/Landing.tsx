import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, GitBranch, RefreshCw, Cloud, Github, Star, Download, Check, Copy } from 'lucide-react';

import { Link } from 'react-router-dom';
import { Terminal } from '../components/Terminal';
import { InteractiveTerminal } from '../components/InteractiveTerminal';
import { useState } from 'react';


const commands = [

    { cmd: 'init', desc: 'Start a repo' },
    { cmd: 'add', desc: 'Stage files' },
    { cmd: 'commit', desc: 'Save changes' },
    { cmd: 'push', desc: 'Upload to Drive' },
    { cmd: 'pull', desc: 'Download files' },
    { cmd: 'status', desc: 'Check state' },
];

function CopyCommand() {
    const [copied, setCopied] = useState(false);
    const command = 'npm install -g gdit';

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            onClick={handleCopy}
            className="group cursor-pointer flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-3 transition-all"
        >
            <span className="text-gray-500">$</span>
            <code className="text-white font-mono">{command}</code>
            <div className="ml-auto">
                {copied ? (
                    <Check size={16} className="text-green-400" />
                ) : (
                    <Copy size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                )}
            </div>
        </div>
    );
}

export function LandingPage() {
    return (
        <div className="bg-[#030303] text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-16">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Gradient orbs */}
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse delay-1000" />

                    {/* Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8"
                    >
                        <Star size={14} className="text-yellow-400" />
                        <span className="text-gray-400">Open Source</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-white">v3.0.1</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-white">Git for</span>
                        <br />
                        <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Google Drive
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
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
                            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Get Started
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="https://github.com/AnshumanMahi/gdit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors"
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
                            { icon: Download, value: '10k+', label: 'Downloads' },
                            { icon: Star, value: 'MIT', label: 'License' },
                            { icon: Github, value: '100+', label: 'Stars' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <stat.icon size={16} className="text-gray-500" />
                                    <span className="text-2xl font-bold text-white">{stat.value}</span>
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
            <section className="py-24 px-6 bg-[#050505]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-blue-400 font-semibold text-sm uppercase tracking-wider"
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
                                className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.08] transition-all text-center"
                            >
                                <code className="text-blue-400 text-lg font-mono block mb-2 group-hover:text-blue-300">
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
                            className="text-purple-400 font-semibold text-sm uppercase tracking-wider"
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
                            className="text-gray-400 max-w-xl mx-auto"
                        >
                            Click the command buttons or type your own to see gdit in action
                        </motion.p>
                    </div>

                    <InteractiveTerminal />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-6xl mx-auto relative">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6"
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
                            className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto"
                        >
                            Built from the ground up for developers who want power without complexity
                        </motion.p>
                    </div>

                    {/* Feature Cards - Bento Grid Style */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Large Feature Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-2 lg:col-span-2 group relative p-8 rounded-3xl bg-linear-to-br from-yellow-500/10 via-orange-500/5 to-transparent border border-white/5 hover:border-yellow-500/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Glow effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6">
                                    <Zap className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Lightning Fast Sync</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                    Smart file comparison using MD5 checksums. Only uploads files that actually changed —
                                    not your entire project every time. Save bandwidth, save time.
                                </p>

                                {/* Visual element */}
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="h-2 flex-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '85%' }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="h-full bg-linear-to-r from-yellow-400 to-orange-400 rounded-full"
                                        />
                                    </div>
                                    <span className="text-yellow-400 font-mono text-sm">85% faster</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Security Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative p-6 rounded-3xl bg-linear-to-br from-green-500/10 via-emerald-500/5 to-transparent border border-white/5 hover:border-green-500/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-5">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Secure by Default</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                OAuth 2.0 authentication. Tokens stay local. Your credentials never touch our servers.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-green-400 text-xs font-medium">
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
                            className="group relative p-6 rounded-3xl bg-linear-to-br from-purple-500/10 via-pink-500/5 to-transparent border border-white/5 hover:border-purple-500/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-5">
                                <GitBranch className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Git-like Workflow</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Stage, commit, push. If you know Git, you already know gdit. Zero learning curve.
                            </p>
                            <div className="mt-4 font-mono text-xs text-purple-400 bg-purple-500/10 px-3 py-2 rounded-lg">
                                add → commit → push
                            </div>
                        </motion.div>

                        {/* Two-Way Sync Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group relative p-6 rounded-3xl bg-linear-to-br from-blue-500/10 via-cyan-500/5 to-transparent border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-5">
                                <RefreshCw className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Two-Way Sync</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Push from your laptop, pull from anywhere. All your machines stay in sync.
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">💻</div>
                                <div className="flex-1 h-px bg-blue-500/30" />
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">☁️</div>
                                <div className="flex-1 h-px bg-blue-500/30" />
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">💻</div>
                            </div>
                        </motion.div>

                        {/* Large Card - Free Storage */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="md:col-span-2 lg:col-span-2 group relative p-8 rounded-3xl bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                                <div className="flex-1">
                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6">
                                        <Cloud className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">15GB Free Storage</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Uses your existing Google Drive storage — no extra costs, no subscriptions.
                                        Just connect and start pushing your projects.
                                    </p>
                                </div>

                                {/* Storage visual */}
                                <div className="w-full md:w-48 shrink-0">
                                    <div className="text-center mb-3">
                                        <span className="text-4xl font-bold text-white">15</span>
                                        <span className="text-xl text-gray-500 ml-1">GB</span>
                                    </div>
                                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '20%' }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="h-full bg-linear-to-r from-cyan-400 to-blue-400 rounded-full"
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
                        <p className="text-gray-600 text-sm">
                            ...and much more. <Link to="/docs" className="text-blue-400 hover:text-blue-300">Explore the docs →</Link>
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
                            className="text-cyan-400 font-semibold text-sm uppercase tracking-wider"
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
                                cmd: 'gdit init'
                            },
                            {
                                step: '02',
                                title: 'Commit',
                                desc: 'Stage your files and create commits with meaningful messages.',
                                cmd: 'gdit add . && gdit commit -m "Update"'
                            },
                            {
                                step: '03',
                                title: 'Push',
                                desc: 'Upload everything to Google Drive with a single command.',
                                cmd: 'gdit push'
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
                                <div className="text-7xl font-black text-white/5 mb-4">{item.step}</div>
                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-500 mb-4">{item.desc}</p>
                                <code className="text-sm text-blue-400 font-mono bg-blue-500/10 px-3 py-1.5 rounded-lg">
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
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600" />
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
                                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
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
