import { DocContent } from '../../components/DocContent';
import { CodeBlock, TerminalCommand } from '../../components/CodeBlock';
import { Check } from 'lucide-react';

export function Installation() {
    return (
        <DocContent
            title="Installation"
            description="Get gdit installed on your machine in under a minute."
        >
            <h2>Requirements</h2>
            <ul>
                <li><strong>Node.js 18+</strong> — gdit is built on Node.js</li>
                <li><strong>npm or yarn</strong> — for package installation</li>
                <li><strong>Google Account</strong> — to authenticate with Google Drive</li>
            </ul>

            <h2>Install via npm</h2>
            <p>
                The recommended way to install gdit is globally via npm:
            </p>

            <TerminalCommand>npm install -g gdit</TerminalCommand>

            <p>Or if you prefer yarn:</p>

            <TerminalCommand>yarn global add gdit</TerminalCommand>

            <h2>Verify installation</h2>
            <p>
                Once installed, verify gdit is available by checking the version:
            </p>

            <TerminalCommand>gdit --version</TerminalCommand>

            <p>You should see output like:</p>

            <CodeBlock code="gdit version 3.0.1" language="text" />

            <h2>What gets installed</h2>
            <div className="not-prose my-6 space-y-3">
                {[
                    'CLI binary accessible globally as "gdit"',
                    'No system dependencies required',
                    'Works on Windows, macOS, and Linux',
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-sm">{item}</span>
                    </div>
                ))}
            </div>

            <h2>Troubleshooting</h2>

            <h3>Permission errors on macOS/Linux</h3>
            <p>
                If you get permission errors, you may need to fix npm's global directory:
            </p>

            <CodeBlock
                code={`mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc`}
                language="bash"
            />

            <h3>Command not found</h3>
            <p>
                Ensure npm's global bin directory is in your PATH:
            </p>

            <TerminalCommand>npm bin -g</TerminalCommand>

            <h2>Next steps</h2>
            <p>
                Now that gdit is installed, head to <a href="/docs/quick-start">Quick Start</a> to set up your first repository.
            </p>
        </DocContent>
    );
}
