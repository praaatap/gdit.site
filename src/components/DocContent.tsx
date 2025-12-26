import { type ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Edit, Clock } from 'lucide-react';
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
        <div className="max-w-none">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-white tracking-tight">
                    {title}
                </h1>
                {description && (
                    <p className="text-lg text-gray-400 leading-relaxed">
                        {description}
                    </p>
                )}
            </header>

            {/* Meta info bar */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-white/[0.06]">
                <a
                    href="https://github.com/AnshumanMahi/gdit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-gray-300 transition-colors"
                >
                    <Edit size={14} />
                    <span>Edit this page</span>
                </a>
                <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>Last updated recently</span>
                </span>
            </div>

            {/* Content */}
            <article className="prose prose-invert prose-blue max-w-none
                prose-headings:font-semibold prose-headings:tracking-tight prose-headings:scroll-mt-24
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-white prose-h2:pb-2 prose-h2:border-b prose-h2:border-white/[0.06]
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-white
                prose-p:text-gray-300 prose-p:leading-7
                prose-a:text-blue-400 prose-a:no-underline prose-a:font-normal hover:prose-a:text-blue-300 hover:prose-a:underline
                prose-strong:text-white prose-strong:font-semibold
                prose-code:text-blue-300 prose-code:bg-blue-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-[#0d0d0d] prose-pre:border prose-pre:border-white/[0.08] prose-pre:rounded-lg prose-pre:text-sm
                prose-ul:text-gray-300 prose-ol:text-gray-300
                prose-li:marker:text-gray-500 prose-li:my-1
                prose-table:text-gray-300 prose-table:text-sm
                prose-th:text-left prose-th:text-gray-400 prose-th:font-medium prose-th:py-3 prose-th:px-4 prose-th:border-b prose-th:border-white/[0.08] prose-th:bg-white/[0.02]
                prose-td:py-3 prose-td:px-4 prose-td:border-b prose-td:border-white/[0.04]
            ">
                {children}
            </article>

            {/* Navigation */}
            {(prevPage || nextPage) && (
                <nav className="mt-12 pt-6 border-t border-white/[0.06] grid grid-cols-2 gap-4">
                    {prevPage ? (
                        <Link
                            to={prevPage.path}
                            className="group p-4 rounded-lg border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.02] transition-all"
                        >
                            <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1">
                                <ChevronLeft size={14} />
                                <span>Previous</span>
                            </div>
                            <div className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                                {prevPage.title}
                            </div>
                        </Link>
                    ) : <div />}

                    {nextPage ? (
                        <Link
                            to={nextPage.path}
                            className="group p-4 rounded-lg border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.02] transition-all text-right"
                        >
                            <div className="flex items-center justify-end gap-1.5 text-sm text-gray-500 mb-1">
                                <span>Next</span>
                                <ChevronRight size={14} />
                            </div>
                            <div className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                                {nextPage.title}
                            </div>
                        </Link>
                    ) : <div />}
                </nav>
            )}
        </div>
    );
}
