import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

import { Introduction } from './docs/Introduction';
import { Installation } from './docs/Installation';
import { QuickStart } from './docs/QuickStart';
import { Commands } from './docs/Commands';

// Docusaurus-style sidebar structure
const sidebarItems = [
    {
        type: 'category',
        label: 'Getting Started',
        items: [
            { type: 'doc', label: 'Introduction', path: '/docs/intro' },
            { type: 'doc', label: 'Installation', path: '/docs/installation' },
            { type: 'doc', label: 'Quick Start', path: '/docs/quick-start' },
        ]
    },
    {
        type: 'category',
        label: 'Guides',
        items: [
            { type: 'doc', label: 'Commands', path: '/docs/commands' },
            { type: 'doc', label: 'Configuration', path: '/docs/configuration' },
            { type: 'doc', label: '.gditignore', path: '/docs/gditignore' },
        ]
    },
    {
        type: 'category',
        label: 'Advanced',
        items: [
            { type: 'doc', label: 'Security', path: '/docs/security' },
        ]
    }
];

// Flat list for navigation
const allDocs = sidebarItems.flatMap(cat => cat.items);

function DocsSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const location = useLocation();

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={cn(
                'fixed lg:sticky top-16 left-0 h-[calc(100vh-64px)] w-[300px] z-50 transition-transform duration-200',
                'bg-[#1b1b1d] lg:bg-transparent border-r border-[#2e2e31]',
                'lg:translate-x-0 overflow-y-auto',
                isOpen ? 'translate-x-0' : '-translate-x-full'
            )}>
                {/* Mobile header */}
                <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-[#2e2e31]">
                    <span className="font-semibold text-white">Menu</span>
                    <button onClick={onClose} className="p-1 text-gray-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                <nav className="py-4 px-3">
                    {sidebarItems.map((category, idx) => (
                        <div key={idx} className="mb-4">
                            {/* Category label */}
                            <div className="px-3 py-2 text-[13px] font-bold text-[#b4b4b4] uppercase tracking-wide">
                                {category.label}
                            </div>

                            {/* Category items */}
                            <ul className="space-y-0.5">
                                {category.items.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <li key={item.path}>
                                            <Link
                                                to={item.path}
                                                onClick={onClose}
                                                className={cn(
                                                    'block px-3 py-2 text-[14px] rounded-md transition-colors',
                                                    isActive
                                                        ? 'bg-[#25c2a0]/10 text-[#25c2a0] font-medium'
                                                        : 'text-[#b4b4b4] hover:bg-[#2e2e31] hover:text-white'
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
}

// Docusaurus-style doc wrapper
function DocWrapper({
    title,
    description,
    children
}: {
    title: string;
    description?: string;
    children: React.ReactNode
}) {
    const location = useLocation();
    const currentIndex = allDocs.findIndex(d => d.path === location.pathname);
    const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
    const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

    return (
        <article className="max-w-[800px]">
            {/* Title */}
            <header className="mb-8">
                <h1 className="text-[2.5rem] font-bold text-white leading-tight mb-2">
                    {title}
                </h1>
                {description && (
                    <p className="text-lg text-[#b4b4b4]">
                        {description}
                    </p>
                )}
            </header>

            {/* Content with Docusaurus-style markdown */}
            <div className="docusaurus-content text-[#e3e3e3] leading-relaxed">
                {children}
            </div>

            {/* Pagination */}
            <nav className="mt-12 pt-6 border-t border-[#2e2e31] flex justify-between gap-4">
                {prevDoc ? (
                    <Link
                        to={prevDoc.path}
                        className="group flex flex-col p-4 rounded-lg border border-[#2e2e31] hover:border-[#25c2a0] transition-colors flex-1"
                    >
                        <span className="text-xs text-[#b4b4b4] mb-1">Previous</span>
                        <span className="text-[#25c2a0] font-medium group-hover:underline">
                            « {prevDoc.label}
                        </span>
                    </Link>
                ) : <div className="flex-1" />}

                {nextDoc ? (
                    <Link
                        to={nextDoc.path}
                        className="group flex flex-col items-end p-4 rounded-lg border border-[#2e2e31] hover:border-[#25c2a0] transition-colors flex-1 text-right"
                    >
                        <span className="text-xs text-[#b4b4b4] mb-1">Next</span>
                        <span className="text-[#25c2a0] font-medium group-hover:underline">
                            {nextDoc.label} »
                        </span>
                    </Link>
                ) : <div className="flex-1" />}
            </nav>
        </article>
    );
}

// Docs index page (Docusaurus style)
function DocsIndex() {
    return (
        <div className="max-w-[800px]">
            <header className="mb-8">
                <h1 className="text-[2.5rem] font-bold text-white leading-tight mb-2">
                    gdit Documentation
                </h1>
                <p className="text-lg text-[#b4b4b4]">
                    Learn how to use gdit to sync your projects to Google Drive with Git-like commands.
                </p>
            </header>

            {/* Feature cards - Docusaurus style */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                    {
                        title: '🚀 Quick Start',
                        desc: 'Get up and running in 5 minutes',
                        path: '/docs/quick-start'
                    },
                    {
                        title: '📖 Introduction',
                        desc: 'Learn what gdit is and how it works',
                        path: '/docs/intro'
                    },
                    {
                        title: '⌨️ Commands',
                        desc: 'Complete CLI reference',
                        path: '/docs/commands'
                    },
                    {
                        title: '🔒 Security',
                        desc: 'How gdit keeps your data safe',
                        path: '/docs/security'
                    },
                ].map((card, i) => (
                    <Link
                        key={i}
                        to={card.path}
                        className="group block p-5 rounded-lg border border-[#2e2e31] hover:border-[#25c2a0] bg-[#1b1b1d] transition-colors"
                    >
                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#25c2a0] transition-colors">
                            {card.title}
                        </h3>
                        <p className="text-sm text-[#b4b4b4]">
                            {card.desc}
                        </p>
                    </Link>
                ))}
            </div>

            {/* External links */}
            <div className="flex flex-wrap gap-3">
                <a
                    href="https://github.com/AnshumanMahi/gdit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#25c2a0] text-white text-sm font-medium hover:bg-[#21a98d] transition-colors"
                >
                    GitHub
                    <ExternalLink size={14} />
                </a>
                <a
                    href="https://www.npmjs.com/package/gdit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#2e2e31] text-[#b4b4b4] text-sm font-medium hover:border-[#25c2a0] hover:text-white transition-colors"
                >
                    npm
                    <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
}

export function DocsLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setSidebarOpen(false);
    }, [location]);

    return (
        <div className="min-h-screen bg-[#1b1b1d]">
            {/* Mobile menu button */}
            <div className="lg:hidden fixed top-16 left-0 right-0 z-30 bg-[#1b1b1d] border-b border-[#2e2e31] px-4 py-3">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="flex items-center gap-2 text-[#b4b4b4] hover:text-white"
                >
                    <Menu size={18} />
                    <span className="text-sm">Menu</span>
                </button>
            </div>

            <div className="flex pt-16">
                <DocsSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

                {/* Main content */}
                <main className="flex-1 min-w-0 pt-14 lg:pt-0">
                    <div className="px-6 lg:px-12 py-8 lg:py-10">
                        <Routes>
                            <Route path="/" element={<DocsIndex />} />

                            <Route path="/intro" element={
                                <DocWrapper title="Introduction" description="What is gdit and why use it.">
                                    <Introduction />
                                </DocWrapper>
                            } />

                            <Route path="/installation" element={
                                <DocWrapper title="Installation" description="How to install gdit on your system.">
                                    <Installation />
                                </DocWrapper>
                            } />

                            <Route path="/quick-start" element={
                                <DocWrapper title="Quick Start" description="Get your first project synced in 5 minutes.">
                                    <QuickStart />
                                </DocWrapper>
                            } />

                            <Route path="/commands" element={
                                <DocWrapper title="Commands" description="Complete reference of all CLI commands.">
                                    <Commands />
                                </DocWrapper>
                            } />

                            <Route path="/configuration" element={
                                <DocWrapper title="Configuration" description="Configure gdit for your project.">
                                    <div className="docusaurus-content">
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
                                    </div>
                                </DocWrapper>
                            } />

                            <Route path="/gditignore" element={
                                <DocWrapper title=".gditignore" description="Exclude files from being synced to Drive.">
                                    <div className="docusaurus-content">
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
                                    </div>
                                </DocWrapper>
                            } />

                            <Route path="/security" element={
                                <DocWrapper title="Security" description="How gdit keeps your data safe.">
                                    <div className="docusaurus-content">
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

                                        <h2>Revoking Access</h2>
                                        <ol>
                                            <li>Go to <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account Security</a></li>
                                            <li>Find "gdit" in the list</li>
                                            <li>Click "Remove Access"</li>
                                        </ol>
                                        <p>Then run:</p>
                                        <pre><code>gdit logout</code></pre>
                                    </div>
                                </DocWrapper>
                            } />

                            <Route path="*" element={
                                <DocWrapper title="Page Not Found">
                                    <p>The page you're looking for doesn't exist.</p>
                                    <p>
                                        <Link to="/docs" className="text-[#25c2a0] hover:underline">
                                            ← Back to documentation
                                        </Link>
                                    </p>
                                </DocWrapper>
                            } />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    );
}
