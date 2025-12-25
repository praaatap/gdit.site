import { DocContent } from '../../components/DocContent';
import { CodeBlock } from '../../components/CodeBlock';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const steps = [
    {
        step: 1,
        title: 'Set up Google credentials',
        desc: 'Configure your OAuth credentials (one-time setup)',
        command: 'gdit setup-creds',
        note: 'Follow the prompts to create credentials in Google Cloud Console.'
    },
    {
        step: 2,
        title: 'Authenticate with Google',
        desc: 'Login to connect gdit to your Google account',
        command: 'gdit login',
        note: 'A browser window will open for authorization.'
    },
    {
        step: 3,
        title: 'Initialize a repository',
        desc: 'Create a new gdit repository in your project',
        command: 'gdit init',
        note: 'Creates a .gdit folder and a Drive folder.'
    },
    {
        step: 4,
        title: 'Stage your files',
        desc: 'Add files to the staging area',
        command: 'gdit add .',
        note: 'Use "." to stage all files.'
    },
    {
        step: 5,
        title: 'Commit changes',
        desc: 'Create a commit with a descriptive message',
        command: 'gdit commit -m "Initial commit"',
        note: 'Commits are stored locally until pushed.'
    },
    {
        step: 6,
        title: 'Push to Google Drive',
        desc: 'Upload your files to the cloud',
        command: 'gdit push',
        note: 'Only changed files are uploaded.'
    },
];

export function QuickStart() {
    return (
        <DocContent
            title="Quick Start"
            description="Get your first project synced to Google Drive in 5 minutes."
        >
            <div className="not-prose space-y-8 my-10">
                {steps.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="relative"
                    >
                        <div className="flex gap-4">
                            {/* Step indicator */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm shrink-0">
                                    {item.step}
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="w-px flex-1 bg-linear-to-b from-blue-500/30 to-transparent mt-2" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-8">
                                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{item.desc}</p>

                                <div className="bg-[#0d1117] border border-white/10 rounded-xl overflow-hidden">
                                    <div className="flex items-center justify-between px-4 py-2 bg-white/[0.02] border-b border-white/5">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        </div>
                                        <span className="text-xs text-gray-600">terminal</span>
                                    </div>
                                    <div className="px-4 py-3 font-mono text-sm">
                                        <span className="text-cyan-400">❯</span>{' '}
                                        <span className="text-white">{item.command}</span>
                                    </div>
                                </div>

                                <p className="text-gray-500 text-xs mt-3">{item.note}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Success message */}
            <div className="not-prose p-6 rounded-xl bg-green-500/10 border border-green-500/20 my-10">
                <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-semibold text-green-400 mb-2">You're all set!</h4>
                        <p className="text-green-100/70 text-sm leading-relaxed">
                            Your project is now synced to Google Drive. Use <code className="bg-green-500/20 px-1.5 py-0.5 rounded text-green-300">gdit push</code> anytime
                            to upload changes, or <code className="bg-green-500/20 px-1.5 py-0.5 rounded text-green-300">gdit pull</code> from another machine.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Useful commands</h2>

            <CodeBlock
                code={`# Check repository status
gdit status

# View commit history
gdit log

# Compare local vs remote
gdit diff

# Open Drive folder in browser
gdit remote open`}
                language="bash"
            />

            <h2>Next steps</h2>
            <p>
                Explore the <a href="/docs/commands">Commands Reference</a> for everything gdit can do.
            </p>
        </DocContent>
    );
}
