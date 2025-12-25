import { DocContent } from '../../components/DocContent';
import { CodeBlock } from '../../components/CodeBlock';
import { motion } from 'framer-motion';
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
        <DocContent
            title="Introduction"
            description="gdit brings familiar Git-like workflows to Google Drive. Stage, commit, and push your files to the cloud."
        >
            {/* Feature Grid */}
            <div className="not-prose grid gap-3 md:grid-cols-2 lg:grid-cols-3 my-8">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <f.icon className="w-5 h-5 text-blue-400 mb-2" />
                        <h3 className="font-semibold text-white text-sm mb-1">{f.title}</h3>
                        <p className="text-xs text-gray-500">{f.desc}</p>
                    </motion.div>
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

            <div className="not-prose bg-[#0d1117] border border-white/10 p-6 rounded-xl text-xs md:text-sm text-gray-400 font-mono whitespace-pre overflow-x-auto my-8">
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
        </DocContent>
    );
}
