import { DocContent } from '../../components/DocContent';
import { CodeBlock } from '../../components/CodeBlock';

const commandGroups = [
    {
        title: 'Setup',
        emoji: '🔧',
        commands: [
            { cmd: 'gdit setup-creds', desc: 'Configure Google API credentials (one-time)' },
            { cmd: 'gdit login', desc: 'Authenticate with Google' },
            { cmd: 'gdit logout', desc: 'Remove stored tokens' },
            { cmd: 'gdit whoami', desc: 'Show current user info and storage usage' },
        ]
    },
    {
        title: 'Repository',
        emoji: '📁',
        commands: [
            { cmd: 'gdit init', desc: 'Initialize a new repository (creates Drive folder)' },
            { cmd: 'gdit clone <folder-id>', desc: 'Clone an existing Drive folder' },
            { cmd: 'gdit remote', desc: 'Show remote folder info' },
            { cmd: 'gdit remote open', desc: 'Open Drive folder in browser' },
        ]
    },
    {
        title: 'Staging',
        emoji: '📦',
        commands: [
            { cmd: 'gdit add <files...>', desc: 'Stage specific files' },
            { cmd: 'gdit add .', desc: 'Stage all files in directory' },
            { cmd: 'gdit rm <files...>', desc: 'Unstage files' },
            { cmd: 'gdit reset', desc: 'Clear the staging area' },
        ]
    },
    {
        title: 'Commits',
        emoji: '📝',
        commands: [
            { cmd: 'gdit commit -m "message"', desc: 'Commit staged files with a message' },
            { cmd: 'gdit amend -m "message"', desc: 'Change last commit message' },
        ]
    },
    {
        title: 'Syncing',
        emoji: '🔄',
        commands: [
            { cmd: 'gdit push', desc: 'Push commits to Google Drive' },
            { cmd: 'gdit push -f', desc: 'Force push all files (ignores checksums)' },
            { cmd: 'gdit pull', desc: 'Download files from Drive' },
            { cmd: 'gdit pull --theirs', desc: 'Use remote version on conflicts' },
            { cmd: 'gdit pull --ours', desc: 'Keep local version on conflicts' },
        ]
    },
    {
        title: 'Information',
        emoji: '📊',
        commands: [
            { cmd: 'gdit status', desc: 'Show repository status' },
            { cmd: 'gdit log', desc: 'View commit history' },
            { cmd: 'gdit log --files', desc: 'Show files in each commit' },
            { cmd: 'gdit log -n 5', desc: 'Show last 5 commits' },
            { cmd: 'gdit diff', desc: 'Compare local vs remote files' },
        ]
    },
];

export function Commands() {
    return (
        <DocContent
            title="Commands"
            description="Complete reference of all available gdit commands."
        >
            <div className="not-prose space-y-10 my-8">
                {commandGroups.map((group, i) => (
                    <div key={i}>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span>{group.emoji}</span>
                            {group.title}
                        </h3>
                        <div className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.01]">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="bg-white/[0.03] border-b border-white/10">
                                        <th className="py-3 px-4 font-medium text-gray-400 w-1/3">Command</th>
                                        <th className="py-3 px-4 font-medium text-gray-400">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {group.commands.map((cmd, j) => (
                                        <tr key={j} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 font-mono text-blue-400 text-xs whitespace-nowrap">{cmd.cmd}</td>
                                            <td className="py-3 px-4 text-gray-300">{cmd.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>

            <h2>Command structure</h2>
            <p>All gdit commands follow this pattern:</p>

            <CodeBlock code="gdit <command> [options] [arguments]" language="bash" />

            <h2>Getting help</h2>
            <p>Use <code>--help</code> for any command:</p>

            <CodeBlock
                code={`gdit --help          # General help
gdit push --help     # Help for push`}
                language="bash"
            />

            <h2>Examples</h2>

            <h3>Typical workflow</h3>
            <CodeBlock
                code={`# Make changes
echo "hello" > hello.txt

# Stage and commit
gdit add hello.txt
gdit commit -m "Add hello.txt"

# Push to Drive
gdit push`}
                language="bash"
            />

            <h3>Clone existing project</h3>
            <CodeBlock
                code={`# Get folder ID from Drive URL
# https://drive.google.com/drive/folders/ABC123...

gdit clone ABC123...
gdit pull`}
                language="bash"
            />
        </DocContent>
    );
}
