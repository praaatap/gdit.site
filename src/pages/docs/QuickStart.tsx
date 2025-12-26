import { CodeBlock } from '../../components/CodeBlock';
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
        <div className="docusaurus-content">
            <div className="space-y-6 my-8">
                {steps.map((item, i) => (
                    <div key={i} className="relative">
                        <div className="flex gap-4">
                            {/* Step indicator */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-lg bg-[#25c2a0]/20 border border-[#25c2a0]/30 flex items-center justify-center text-[#25c2a0] font-bold text-sm shrink-0">
                                    {item.step}
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="w-px flex-1 bg-gradient-to-b from-[#25c2a0]/30 to-transparent mt-2" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-6">
                                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                <p className="text-[#b4b4b4] text-sm mb-4">{item.desc}</p>

                                <div className="bg-[#0d0d0d] border border-[#2e2e31] rounded-lg overflow-hidden">
                                    <div className="flex items-center justify-between px-4 py-2 bg-[#242526] border-b border-[#2e2e31]">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#28c940]" />
                                        </div>
                                        <span className="text-xs text-[#5c5c5c]">terminal</span>
                                    </div>
                                    <div className="px-4 py-3 font-mono text-sm">
                                        <span className="text-[#25c2a0]">$</span>{' '}
                                        <span className="text-white">{item.command}</span>
                                    </div>
                                </div>

                                <p className="text-[#5c5c5c] text-xs mt-3">{item.note}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Success message - Docusaurus admonition style */}
            <div className="p-4 rounded-lg bg-[#25c2a0]/10 border-l-4 border-[#25c2a0] my-8">
                <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#25c2a0] shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-[#25c2a0] mb-1">You're all set!</p>
                        <p className="text-[#b4b4b4] text-sm">
                            Your project is now synced to Google Drive. Use <code>gdit push</code> anytime
                            to upload changes, or <code>gdit pull</code> from another machine.
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
        </div>
    );
}
