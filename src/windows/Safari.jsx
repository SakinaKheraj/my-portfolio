import WindowControlls from "#components/WindowControlls"
import WindowWrapper from "#hoc/WindowWrapper"
import { journalEntries } from "#constants";
import useMobile from "#hooks/useMobile";
import { ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, ShieldHalf, Share, BookOpen, ExternalLink } from "lucide-react";

// ── Mobile: clean articles list ──────────────────────────────────────────
const SafariMobile = () => {
    return (
        <div className="px-4 pt-4 pb-8 space-y-4">
            {/* Header */}
            <div className="text-center pb-2">
                <div className="text-4xl mb-2">📓</div>
                <h2 className="text-xl font-black text-gray-900">Sakina's Journal</h2>
                <p className="text-sm text-gray-500 mt-1">Thoughts, snippets & daily reflections</p>
            </div>

            {/* Article cards */}
            <div className="space-y-3">
                {journalEntries.map((entry) => (
                    <a
                        key={entry.id}
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-50 rounded-2xl p-4 border border-gray-100 active:bg-gray-100 touch-manipulation"
                    >
                        <div className="flex items-start gap-3">
                            <div className="size-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                <BookOpen size={18} className="text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                                    {entry.tag}
                                </p>
                                <h3 className="font-bold text-gray-900 leading-snug truncate">
                                    {entry.title}
                                </h3>
                                <p className="text-xs text-gray-400 mt-1">{entry.date}</p>
                            </div>
                            <ExternalLink size={14} className="text-gray-300 shrink-0 mt-1" />
                        </div>
                    </a>
                ))}
            </div>

            {/* Notion link */}
            <a
                href="https://www.notion.so/sakina-journal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-900 text-white rounded-2xl text-sm font-bold active:opacity-80 touch-manipulation"
            >
                Open full journal
                <ExternalLink size={14} />
            </a>
        </div>
    );
};

// ── Desktop: original unchanged ───────────────────────────────────────────
const SafariDesktop = () => {
    return (
        <>
            <div id="window-header">
                <WindowControlls target="safari" />

                <PanelLeft className="ml-10 icon" />
                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className="icon" />
                    <div className="search">
                        <Search className="icon" />
                        <input type="text"
                            placeholder="notion.so/sakina-journal"
                            className="flex-1 text-xs outline-none" />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <Share className="icon" />
                    <Plus className="icon" />
                    <Copy className="icon" />
                </div>
            </div>

            <div className="notion-container">
                <div className="notion-header">
                    <div className="notion-icon">📓</div>
                    <h1>Sakina's Journal</h1>
                    <p className="notion-subtitle">Thoughts, snippets, and daily reflections.</p>
                </div>

                <div className="notion-content">
                    {journalEntries.map((entry) => (
                        <div key={entry.id} className="notion-entry group">
                            <div className="entry-header">
                                <span className="entry-tag">{entry.tag}</span>
                                <span className="entry-date">{entry.date}</span>
                            </div>
                            <h2 className="entry-title">{entry.title}</h2>
                            <div className="entry-footer">
                                <a href={entry.link} className="entry-link">
                                    Open page
                                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const Safari = (props) => {
    const isMobile = useMobile();
    return isMobile ? <SafariMobile {...props} /> : <SafariDesktop {...props} />;
};

const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow;