import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Book, Code, Terminal, Rocket, FileText, Shield, Download, Search, Menu } from 'lucide-react';
import { cn } from '../utils/cn';

import { Introduction } from './docs/Introduction';
import { Installation } from './docs/Installation';
import { QuickStart } from './docs/QuickStart';
import { Commands } from './docs/Commands';
import { DocContent } from '../components/DocContent';

const sidebarItems = [
    {
        section: 'Getting Started',
        items: [
            { name: 'Introduction', path: '/docs/intro', icon: Book },
            { name: 'Installation', path: '/docs/installation', icon: Download },
            { name: 'Quick Start', path: '/docs/quick-start', icon: Rocket },
        ]
    },
    {
        section: 'Reference',
        items: [
            { name: 'Commands', path: '/docs/commands', icon: Terminal },
            { name: 'Configuration', path: '/docs/configuration', icon: Code },
        ]
    },
    {
        section: 'Guides',
        items: [
            { name: '.gditignore', path: '/docs/gditignore', icon: FileText },
            { name: 'Security', path: '/docs/security', icon: Shield },
        ]
    }
];

function DocsSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const location = useLocation();

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={cn(
                'fixed lg:sticky top-16 left-0 h-[calc(100vh-64px)] w-72 bg-[#0a0a0a] border-r border-white/5 z-50 transition-transform duration-300 overflow-y-auto',
                'lg:translate-x-0',
                isOpen ? 'translate-x-0' : '-translate-x-full'
            )}>
                <div className="p-4 border-b border-white/5">
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-500 text-sm hover:border-white/20 transition-colors">
                        <Search size={16} />
                        <span>Search docs...</span>
                        <kbd className="ml-auto text-xs px-1.5 py-0.5 rounded bg-white/10 font-mono">⌘K</kbd>
                    </button>
                </div>

                <div className="p-4 space-y-6">
                    {sidebarItems.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">
                                {section.section}
                            </h3>
                            <ul className="space-y-1">
                                {section.items.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    const Icon = item.icon;
                                    return (
                                        <li key={item.path}>
                                            <Link
                                                to={item.path}
                                                onClick={onClose}
                                                className={cn(
                                                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200',
                                                    isActive
                                                        ? 'bg-blue-500/15 text-blue-400 font-medium border-l-2 border-blue-400'
                                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                )}
                                            >
                                                <Icon size={16} className={isActive ? 'text-blue-400' : 'text-gray-500'} />
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t border-white/5 mt-auto">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Version</span>
                        <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-400">3.0.1</span>
                    </div>
                </div>
            </aside>
        </>
    );
}

export function DocsLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#030303]">
            <div className="lg:hidden fixed top-16 left-0 right-0 z-30 bg-[#0a0a0a] border-b border-white/5 px-4 py-3">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                    <Menu size={20} />
                    <span className="text-sm">Menu</span>
                </button>
            </div>

            <div className="flex pt-16 lg:pt-16">
                <DocsSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

                <main className="flex-1 min-w-0 pt-12 lg:pt-0">
                    <Routes>
                        <Route path="/" element={
                            <div className="p-8 lg:p-12 max-w-3xl mx-auto">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-6">
                                    <Book size={12} />
                                    Documentation
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">gdit Documentation</h1>
                                <p className="text-xl text-gray-400 mb-10">
                                    Learn how to use gdit to sync your projects to Google Drive with Git-like commands.
                                </p>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    {[
                                        { title: 'Introduction', desc: 'What is gdit and how it works', path: '/docs/intro', color: 'blue' },
                                        { title: 'Quick Start', desc: 'Get your first project synced in 5 minutes', path: '/docs/quick-start', color: 'green' },
                                        { title: 'Commands', desc: 'Complete reference of all commands', path: '/docs/commands', color: 'purple' },
                                        { title: 'Security', desc: 'How gdit keeps your data safe', path: '/docs/security', color: 'orange' },
                                    ].map((item, i) => (
                                        <Link
                                            key={i}
                                            to={item.path}
                                            className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all"
                                        >
                                            <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors mb-2">{item.title}</h3>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        } />

                        <Route path="/intro" element={<Introduction />} />
                        <Route path="/installation" element={<Installation />} />
                        <Route path="/quick-start" element={<QuickStart />} />
                        <Route path="/commands" element={<Commands />} />

                        <Route path="/configuration" element={
                            <DocContent title="Configuration" description="Configure gdit for your project.">
                                <h2>Repository Configuration</h2>
                                <p>
                                    Each gdit repository stores its configuration in a hidden <code>.gdit</code> folder:
                                </p>
                                <ul>
                                    <li><code>config.json</code> — Repository settings</li>
                                    <li><code>stage.json</code> — Currently staged files</li>
                                    <li><code>commits.json</code> — Local commit history</li>
                                    <li><code>remote.json</code> — Google Drive folder mapping</li>
                                </ul>

                                <h2>Global Configuration</h2>
                                <p>
                                    Global settings are stored in <code>~/.gdit/</code>:
                                </p>
                                <ul>
                                    <li><code>credentials.json</code> — Your OAuth Client ID & Secret</li>
                                    <li><code>token.json</code> — OAuth access & refresh tokens</li>
                                </ul>
                            </DocContent>
                        } />

                        <Route path="/gditignore" element={
                            <DocContent title=".gditignore" description="Exclude files from being synced to Drive.">
                                <p>
                                    Create a <code>.gditignore</code> file in your project root to exclude files and folders.
                                </p>

                                <h2>Example</h2>
                                <pre><code>{`# Dependencies
node_modules/

# Build output
dist/
build/

# IDE
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
*.log

# Environment
.env
.env.local`}</code></pre>

                                <h2>Default Ignored</h2>
                                <ul>
                                    <li><code>.gdit/</code> — gdit config folder</li>
                                    <li><code>.git/</code> — Git directory</li>
                                    <li><code>node_modules/</code> — Node dependencies</li>
                                </ul>
                            </DocContent>
                        } />

                        <Route path="/security" element={
                            <DocContent title="Security" description="How gdit keeps your data safe.">
                                <h2>Authentication</h2>
                                <p>
                                    Gdit uses <strong>OAuth 2.0</strong> for authentication:
                                </p>
                                <ul>
                                    <li>Your Google password is never stored</li>
                                    <li>You can revoke access at any time</li>
                                    <li>Tokens are stored locally on your machine</li>
                                </ul>

                                <h2>Credential Storage</h2>
                                <div className="overflow-x-auto">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>File</th>
                                                <th>Location</th>
                                                <th>Contains</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><code>credentials.json</code></td>
                                                <td><code>~/.gdit/</code></td>
                                                <td>OAuth Client ID & Secret</td>
                                            </tr>
                                            <tr>
                                                <td><code>token.json</code></td>
                                                <td><code>~/.gdit/</code></td>
                                                <td>Access & Refresh tokens</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2>Revoking Access</h2>
                                <ol>
                                    <li>Go to <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account Security</a></li>
                                    <li>Find "gdit" in the list</li>
                                    <li>Click "Remove Access"</li>
                                </ol>
                                <p>Then run:</p>
                                <pre><code>gdit logout</code></pre>
                            </DocContent>
                        } />

                        <Route path="*" element={
                            <DocContent title="Page Not Found">
                                <p>The page you're looking for doesn't exist.</p>
                                <Link to="/docs" className="text-blue-400 hover:text-blue-300">← Back to docs</Link>
                            </DocContent>
                        } />
                    </Routes>
                </main>
            </div>
        </div>
    );
}
