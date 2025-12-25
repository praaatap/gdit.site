import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalLine {
    type: 'command' | 'output' | 'success' | 'info' | 'comment';
    text: string;
    delay?: number;
}

const terminalSequence: TerminalLine[] = [
    { type: 'comment', text: '# Initialize a new gdit repository' },
    { type: 'command', text: 'gdit init', delay: 500 },
    { type: 'info', text: '◐ Creating Drive folder...', delay: 300 },
    { type: 'success', text: '✓ Created folder: my-project', delay: 400 },
    { type: 'success', text: '✓ Repository initialized', delay: 200 },
    { type: 'output', text: '', delay: 300 },
    { type: 'command', text: 'gdit add .', delay: 600 },
    { type: 'info', text: '◐ Scanning files...', delay: 200 },
    { type: 'success', text: '✓ Staged 14 files (2.3 MB)', delay: 300 },
    { type: 'output', text: '', delay: 300 },
    { type: 'command', text: 'gdit commit -m "Initial commit"', delay: 500 },
    { type: 'success', text: '✓ Committed: Initial commit', delay: 300 },
    { type: 'output', text: '', delay: 300 },
    { type: 'command', text: 'gdit push', delay: 500 },
    { type: 'info', text: '◐ Uploading to Google Drive...', delay: 300 },
    { type: 'output', text: '  [████████████████████████████████] 100%', delay: 800 },
    { type: 'success', text: '✓ 14 files pushed successfully', delay: 200 },
    { type: 'output', text: '', delay: 200 },
    { type: 'output', text: '📊 Push Summary', delay: 100 },
    { type: 'output', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', delay: 50 },
    { type: 'output', text: '   New files:     14', delay: 50 },
    { type: 'output', text: '   Total size:    2.3 MB', delay: 50 },
    { type: 'output', text: '   Time:          1.2s', delay: 50 },
];

export function Terminal() {
    const [visibleLines, setVisibleLines] = useState<number>(0);
    const [isTyping, setIsTyping] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        let charIndex = 0;


        const typeLine = () => {
            if (visibleLines >= terminalSequence.length) return;

            const currentLine = terminalSequence[visibleLines];

            if (currentLine.type === 'command' && charIndex < currentLine.text.length) {
                setIsTyping(true);
                setCurrentText(currentLine.text.slice(0, charIndex + 1));
                charIndex++;
                timeout = setTimeout(typeLine, 30 + Math.random() * 40);
            } else {
                setIsTyping(false);
                setCurrentText('');
                charIndex = 0;
                setVisibleLines(prev => prev + 1);
                timeout = setTimeout(typeLine, currentLine.delay || 100);
            }
        };

        timeout = setTimeout(typeLine, 800);
        return () => clearTimeout(timeout);
    }, [visibleLines]);

    // Cursor blink
    useEffect(() => {
        const interval = setInterval(() => setShowCursor(prev => !prev), 530);
        return () => clearInterval(interval);
    }, []);

    const getLineColor = (type: TerminalLine['type']) => {
        switch (type) {
            case 'command': return 'text-white';
            case 'success': return 'text-green-400';
            case 'info': return 'text-blue-400';
            case 'comment': return 'text-gray-500';
            default: return 'text-gray-400';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-3xl mx-auto"
        >
            {/* Window Chrome */}
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                {/* Title Bar - macOS style */}
                <div className="bg-[#1c1c1e] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                    {/* Traffic lights */}
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                        <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                    </div>

                    {/* Tab */}
                    <div className="flex-1 flex justify-center">
                        <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-[#2c2c2e] text-xs text-gray-400">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 4.5A2.5 2.5 0 014.5 2h11A2.5 2.5 0 0118 4.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 15.5v-11z" />
                            </svg>
                            <span>my-project — zsh — 80×24</span>
                        </div>
                    </div>

                    <div className="w-16" />
                </div>

                {/* Terminal Body */}
                <div className="bg-[#1c1c1e] p-5 font-mono text-sm min-h-[380px]">
                    <AnimatePresence>
                        {terminalSequence.slice(0, visibleLines).map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.1 }}
                                className={`${getLineColor(line.type)} ${line.text === '' ? 'h-4' : ''}`}
                            >
                                {line.type === 'command' && (
                                    <span className="text-cyan-400 mr-2">❯</span>
                                )}
                                {line.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Currently typing line */}
                    {isTyping && visibleLines < terminalSequence.length && (
                        <div className="text-white">
                            <span className="text-cyan-400 mr-2">❯</span>
                            {currentText}
                            <span className={`inline-block w-2 h-4 bg-white ml-0.5 -mb-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                    )}

                    {/* Finished - show cursor */}
                    {visibleLines >= terminalSequence.length && (
                        <div className="text-white mt-2">
                            <span className="text-cyan-400 mr-2">❯</span>
                            <span className={`inline-block w-2 h-4 bg-white -mb-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
