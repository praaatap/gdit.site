import { CodeBlock } from '../../components/CodeBlock';
import { GitBranch, RefreshCw, Layers, Terminal, FileText, Shield } from 'lucide-react';

const features = [
    { icon: GitBranch, title: 'Stage & Commit', desc: 'Stage files and commit with messages, just like Git.' },
    { icon: RefreshCw, title: 'Smart Sync', desc: 'Only uploads changed files using MD5 checksums.' },
    { icon: Layers, title: 'Status & Diff', desc: 'See what changed between local and remote.' },
    { icon: Terminal, title: 'Familiar CLI', desc: 'Commands you already know from Git.' },
    { icon: FileText, title: '.gditignore', desc: 'Exclude files like .gitignore.' },
    { icon: Shield, title: 'Secure Auth', desc: 'OAuth 2.0, tokens stored locally.' },
];

export function Introduction() {
    return (
        <div className="docusaurus-content">
            {/* Feature Grid */}
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 my-8">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="p-4 rounded-lg bg-[#242526] border border-[#2e2e31] hover:border-[#25c2a0]/30 transition-colors"
                    >
                        <f.icon className="w-5 h-5 text-[#25c2a0] mb-2" />
                        <h3 className="font-semibold text-white text-sm mb-1">{f.title}</h3>
                        <p className="text-xs text-[#b4b4b4]">{f.desc}</p>
                    </div>
                ))}
            </div>

            <h2>What is gdit?</h2>
            <p>
                <strong>gdit</strong> is a command-line tool that brings familiar Git workflows to Google Drive.
                If you know Git, you already know gdit — the commands are designed to feel natural.
            </p>

            <CodeBlock
                code={`# Just like Git, but for Google Drive!
gdit add .
gdit commit -m "Add new feature"
gdit push`}
                language="bash"
            />

            <h2>Why gdit?</h2>
            <p>
                Google Drive is great for storage, but lacks version control. Git is great for version control,
                but isn't designed for cloud storage. <strong>gdit bridges the gap</strong> — giving you the
                best of both worlds.
            </p>

            <ul>
                <li>📦 <strong>Backup projects</strong> to Google Drive with a single command</li>
                <li>🔄 <strong>Sync across machines</strong> — push from work, pull from home</li>
                <li>📜 <strong>Track changes</strong> with commit messages and history</li>
                <li>🚀 <strong>Smart uploads</strong> — only changed files are synced</li>
            </ul>

            <h2>How it works</h2>
            <p>
                gdit maintains a local <code>.gdit</code> folder (similar to <code>.git</code>) that tracks
                your files, commits, and the connection to your Google Drive folder.
            </p>

            <div className="bg-[#0d0d0d] border border-[#2e2e31] p-6 rounded-lg text-xs md:text-sm text-[#b4b4b4] font-mono whitespace-pre overflow-x-auto my-6">
                {`┌─────────────┐    gdit add     ┌─────────────┐   gdit commit   ┌─────────────┐
│   Working   │ ──────────────► │   Staging   │ ──────────────► │   Commits   │
│  Directory  │                 │    Area     │                 │   (Local)   │
└─────────────┘                 └─────────────┘                 └─────────────┘
                                                                      │
                                                                      │ gdit push
                                                                      ▼
                                                                ┌─────────────┐
                                      gdit pull                 │   Google    │
        ◄─────────────────────────────────────────────────────  │    Drive    │
                                                                └─────────────┘`}
            </div>

            <h2>Next steps</h2>
            <p>
                Ready to get started? Head to the <a href="/docs/installation">Installation</a> guide to
                install gdit, then follow the <a href="/docs/quick-start">Quick Start</a> to sync your first project.
            </p>
        </div>
    );
}
