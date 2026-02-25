import WindowControlls from "#components/WindowControlls"
import WindowWrapper from "#hoc/WindowWrapper"
import { journalEntries } from "#constants";
import { ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, ShieldHalf, Share } from "lucide-react";

const Safari = () => {
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
    )
}

const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow;