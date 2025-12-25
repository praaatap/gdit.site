import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw } from 'lucide-react';

interface CommandOutput {
    type: 'command' | 'output' | 'success' | 'error' | 'info';
    text: string;
}

const commandFlows: Record<string, CommandOutput[]> = {
    'gdit init': [
        { type: 'info', text: '◐ Creating Drive folder...' },
        { type: 'success', text: '✓ Created folder: my-project' },
        { type: 'success', text: '✓ Repository initialized' },
        { type: 'output', text: '' },
        { type: 'output', text: '  Remote: https://drive.google.com/drive/folders/abc123' },
    ],
    'gdit add .': [
        { type: 'info', text: '◐ Scanning files...' },
        { type: 'output', text: '  Found 14 files (2.3 MB)' },
        { type: 'success', text: '✓ Staged 14 files' },
    ],
    'gdit add': [
        { type: 'info', text: '◐ Scanning files...' },
        { type: 'output', text: '  Found 14 files (2.3 MB)' },
        { type: 'success', text: '✓ Staged 14 files' },
    ],
    'gdit status': [
        { type: 'output', text: '' },
        { type: 'output', text: '📁 Repository: my-project' },
        { type: 'output', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
        { type: 'success', text: '✓ 14 files staged' },
        { type: 'output', text: '' },
        { type: 'output', text: '  Modified:  src/index.ts' },
        { type: 'output', text: '  Modified:  package.json' },
        { type: 'output', text: '  New:       README.md' },
    ],
    'gdit commit': [
        { type: 'success', text: '✓ Committed: Update project files' },
        { type: 'output', text: '  14 files | +234 -12 lines' },
    ],
    'gdit push': [
        { type: 'info', text: '◐ Comparing with remote...' },
        { type: 'info', text: '◐ Uploading to Google Drive...' },
        { type: 'output', text: '' },
        { type: 'output', text: '  [████████████████████████████████] 100%' },
        { type: 'output', text: '' },
        { type: 'success', text: '✓ 14 files pushed successfully' },
        { type: 'output', text: '' },
        { type: 'output', text: '📊 Push Summary' },
        { type: 'output', text: '━━━━━━━━━━━━━━━━━━━━' },
        { type: 'output', text: '   New files:     3' },
        { type: 'output', text: '   Updated:       11' },
        { type: 'output', text: '   Total size:    2.3 MB' },
        { type: 'output', text: '   Time:          1.2s' },
    ],
    'gdit pull': [
        { type: 'info', text: '◐ Fetching from Google Drive...' },
        { type: 'output', text: '' },
        { type: 'output', text: '  [████████████████████████████████] 100%' },
        { type: 'output', text: '' },
        { type: 'success', text: '✓ 8 files downloaded' },
        { type: 'output', text: '  No conflicts detected' },
    ],
    'gdit log': [
        { type: 'output', text: '' },
        { type: 'output', text: '📜 Commit History' },
        { type: 'output', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
        { type: 'output', text: '' },
        { type: 'success', text: '● a1b2c3d Update project files' },
        { type: 'output', text: '  Dec 25, 2024 • 14 files • ✓ pushed' },
        { type: 'output', text: '' },
        { type: 'success', text: '● e4f5g6h Initial commit' },
        { type: 'output', text: '  Dec 24, 2024 • 8 files • ✓ pushed' },
    ],
    'gdit whoami': [
        { type: 'output', text: '' },
        { type: 'output', text: '👤 User Information' },
        { type: 'output', text: '━━━━━━━━━━━━━━━━━━━━━━━━━' },
        { type: 'output', text: '  Email:    developer@example.com' },
        { type: 'output', text: '  Storage:  2.3 GB / 15 GB used' },
    ],
    'help': [
        { type: 'output', text: '' },
        { type: 'output', text: '📖 Available Commands:' },
        { type: 'output', text: '━━━━━━━━━━━━━━━━━━━━━━━━━' },
        { type: 'output', text: '  gdit init      Initialize repository' },
        { type: 'output', text: '  gdit add .     Stage all files' },
        { type: 'output', text: '  gdit status    Show status' },
        { type: 'output', text: '  gdit commit    Commit changes' },
        { type: 'output', text: '  gdit push      Push to Drive' },
        { type: 'output', text: '  gdit pull      Pull from Drive' },
        { type: 'output', text: '  gdit log       View history' },
        { type: 'output', text: '  gdit whoami    User info' },
        { type: 'output', text: '  clear          Clear terminal' },
    ],
    'clear': [],
};

const suggestedCommands = ['gdit init', 'gdit add .', 'gdit status', 'gdit commit', 'gdit push'];

export function InteractiveTerminal() {
    const [history, setHistory] = useState<CommandOutput[]>([
        { type: 'output', text: '👋 Welcome to gdit interactive demo!' },
        { type: 'output', text: '   Type a command or click suggestions below.' },
        { type: 'output', text: '   Type "help" for available commands.' },
        { type: 'output', text: '' },
    ]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const processCommand = async (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        setHistory(prev => [...prev, { type: 'command', text: cmd }]);
        setIsProcessing(true);

        if (trimmedCmd === 'clear') {
            await new Promise(r => setTimeout(r, 100));
            setHistory([]);
            setIsProcessing(false);
            return;
        }

        const matchedCmd = Object.keys(commandFlows).find(c =>
            trimmedCmd.startsWith(c) || c.startsWith(trimmedCmd)
        );

        if (matchedCmd && commandFlows[matchedCmd]) {
            const outputs = commandFlows[matchedCmd];
            for (const output of outputs) {
                await new Promise(r => setTimeout(r, output.type === 'info' ? 300 : 80));
                setHistory(prev => [...prev, output]);
            }
        } else {
            await new Promise(r => setTimeout(r, 100));
            setHistory(prev => [...prev, {
                type: 'error',
                text: `Command not found: ${cmd}. Type "help" for available commands.`
            }]);
        }

        setIsProcessing(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isProcessing) {
            processCommand(input);
            setInput('');
        }
    };

    const handleSuggestionClick = (cmd: string) => {
        if (!isProcessing) {
            processCommand(cmd);
        }
    };

    const handleReset = () => {
        setHistory([
            { type: 'output', text: '👋 Welcome to gdit interactive demo!' },
            { type: 'output', text: '   Type a command or click suggestions below.' },
            { type: 'output', text: '' },
        ]);
        setInput('');
    };

    const getLineColor = (type: CommandOutput['type']) => {
        switch (type) {
            case 'command': return 'text-white';
            case 'success': return 'text-green-400';
            case 'error': return 'text-red-400';
            case 'info': return 'text-blue-400';
            default: return 'text-gray-400';
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Window Chrome */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-[#1a1a1a]">
                {/* Title Bar */}
                <div className="bg-[#2a2a2a] px-4 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-3">
                        {/* Traffic Lights */}
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 cursor-pointer" />
                            <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-110 cursor-pointer" />
                            <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-110 cursor-pointer" />
                        </div>

                        {/* Tab */}
                        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#1a1a1a] text-xs text-gray-300 ml-4">
                            <span className="text-green-400">●</span>
                            gdit — Interactive Demo
                        </div>
                    </div>

                    <button
                        onClick={handleReset}
                        className="p-1.5 rounded-md text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
                        title="Reset terminal"
                    >
                        <RotateCcw size={14} />
                    </button>
                </div>

                {/* Terminal Body */}
                <div
                    ref={terminalRef}
                    onClick={() => inputRef.current?.focus()}
                    className="bg-[#1a1a1a] p-5 font-mono text-sm h-[350px] overflow-y-auto cursor-text"
                >
                    <AnimatePresence>
                        {history.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.1 }}
                                className={`${getLineColor(line.type)} ${line.text === '' ? 'h-4' : ''} leading-relaxed`}
                            >
                                {line.type === 'command' && (
                                    <span className="text-cyan-400 mr-2">❯</span>
                                )}
                                {line.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Input Line */}
                    <form onSubmit={handleSubmit} className="flex items-center mt-1">
                        <span className="text-cyan-400 mr-2">❯</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isProcessing}
                            className="flex-1 bg-transparent outline-none text-white caret-white"
                            placeholder={isProcessing ? 'Processing...' : 'Type a command...'}
                            autoComplete="off"
                            spellCheck={false}
                        />
                        {isProcessing && (
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        )}
                    </form>
                </div>

                {/* Suggestions Bar */}
                <div className="bg-[#222] px-4 py-3 border-t border-white/5 flex items-center gap-2 overflow-x-auto">
                    <span className="text-xs text-gray-500 shrink-0">Try:</span>
                    {suggestedCommands.map((cmd, i) => (
                        <button
                            key={i}
                            onClick={() => handleSuggestionClick(cmd)}
                            disabled={isProcessing}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition-all shrink-0 flex items-center gap-1.5 disabled:opacity-50"
                        >
                            <Play size={10} className="text-green-400" />
                            {cmd}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
