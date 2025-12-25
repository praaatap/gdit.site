import { Highlight, themes } from 'prism-react-renderer';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
}

export function CodeBlock({ code, language = 'bash', filename }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] my-6 group">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
                    </div>
                    <span className="text-xs text-gray-500 font-mono">
                        {filename || language}
                    </span>
                </div>

                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md text-gray-500 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
                    title="Copy code"
                >
                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
            </div>

            {/* Code */}
            <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        className={`${className} p-4 overflow-x-auto text-sm leading-relaxed`}
                        style={{ ...style, background: 'transparent', margin: 0 }}
                    >
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    );
}

// Simple inline terminal command display
export function TerminalCommand({ children }: { children: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="not-prose my-4 group">
            <div className="relative flex items-center bg-[#0d1117] rounded-xl border border-white/10 px-4 py-3 font-mono text-sm overflow-hidden">
                <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative flex items-center justify-between w-full">
                    <div>
                        <span className="text-gray-500 select-none mr-2">$</span>
                        <span className="text-white">{children}</span>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="p-1.5 rounded-md text-gray-500 hover:text-white hover:bg-white/10 transition-all ml-4"
                        title="Copy command"
                    >
                        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    </button>
                </div>
            </div>
        </div>
    );
}
