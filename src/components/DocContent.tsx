import { type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DocContentProps {
    title: string;
    description?: string;
    children: ReactNode;
}

const docPages = [
    { title: 'Introduction', path: '/docs/intro' },
    { title: 'Installation', path: '/docs/installation' },
    { title: 'Quick Start', path: '/docs/quick-start' },
    { title: 'Commands', path: '/docs/commands' },
    { title: 'Configuration', path: '/docs/configuration' },
    { title: '.gditignore', path: '/docs/gditignore' },
    { title: 'Security', path: '/docs/security' },
];

export function DocContent({ title, description, children }: DocContentProps) {
    const location = useLocation();
    const currentIndex = docPages.findIndex(p => p.path === location.pathname);
    const prevPage = currentIndex > 0 ? docPages[currentIndex - 1] : null;
    const nextPage = currentIndex < docPages.length - 1 ? docPages[currentIndex + 1] : null;

    return (
        <div className="max-w-3xl mx-auto py-12 px-8">
            {/* Header */}
            <header className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">{title}</h1>
                {description && (
                    <p className="text-xl text-gray-400 leading-relaxed">{description}</p>
                )}
            </header>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-blue-500/20 via-purple-500/20 to-transparent mb-10" />

            {/* Content */}
            <article className="prose prose-invert prose-blue max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-white
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-white
        prose-p:text-gray-300 prose-p:leading-relaxed
        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
        prose-strong:text-white prose-strong:font-semibold
        prose-code:text-blue-300 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
        prose-ul:text-gray-300 prose-ol:text-gray-300
        prose-li:marker:text-gray-500
        prose-table:text-gray-300
        prose-th:text-gray-400 prose-th:font-medium prose-th:border-b prose-th:border-white/10
        prose-td:border-b prose-td:border-white/5
      ">
                {children}
            </article>

            {/* Navigation */}
            {(prevPage || nextPage) && (
                <nav className="mt-16 pt-8 border-t border-white/5 flex justify-between gap-4">
                    {prevPage ? (
                        <Link
                            to={prevPage.path}
                            className="group flex-1 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.02] transition-all"
                        >
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                                <ChevronLeft size={16} />
                                Previous
                            </div>
                            <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                {prevPage.title}
                            </div>
                        </Link>
                    ) : <div className="flex-1" />}

                    {nextPage ? (
                        <Link
                            to={nextPage.path}
                            className="group flex-1 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.02] transition-all text-right"
                        >
                            <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-1">
                                Next
                                <ChevronRight size={16} />
                            </div>
                            <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                {nextPage.title}
                            </div>
                        </Link>
                    ) : <div className="flex-1" />}
                </nav>
            )}
        </div>
    );
}
