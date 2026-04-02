import { WindowControlls } from "#components"
import useLocationStore from "#store/location"
import WindowWrapper from "#hoc/WindowWrapper.jsx"
import { Search, FolderOpen, ExternalLink, FileText, Image } from "lucide-react"
import { locations } from "#constants"
import clsx from "clsx"
import useWindowStore from "#store/window"
import useMobile from "#hooks/useMobile"

// ── Mobile view: clean project cards ─────────────────────────────────────
const FinderMobile = () => {
    const { openWindow } = useWindowStore();
    const projects = locations.work?.children ?? [];
    const aboutItems = locations.about?.children ?? [];

    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow('resume');
        if (item.fileType === "txt") return openWindow('text', item);
        if (item.fileType === "img") return openWindow('image', item);
        if (item.fileType === "fig" && item.href) return window.open(item.href, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="px-4 pt-4 pb-8 space-y-6">
            {/* Projects */}
            <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-1">Projects</h2>
                <div className="space-y-3">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="size-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <FolderOpen size={20} className="text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                            </div>
                            {project.children?.length > 0 && (
                                <ul className="space-y-2">
                                    {project.children.map((item) => (
                                        <li
                                            key={item.id}
                                            onClick={() => openItem(item)}
                                            className="flex items-center gap-3 px-3 py-2 bg-white rounded-xl border border-gray-100 active:bg-gray-50 cursor-pointer touch-manipulation"
                                        >
                                            {item.fileType === "txt" && <FileText size={16} className="text-blue-500 shrink-0" />}
                                            {item.fileType === "img" && <Image size={16} className="text-purple-500 shrink-0" />}
                                            {item.fileType === "fig" && <ExternalLink size={16} className="text-green-500 shrink-0" />}
                                            {item.fileType === "pdf" && <FileText size={16} className="text-red-500 shrink-0" />}
                                            <span className="text-sm text-gray-700 font-medium truncate">{item.name}</span>
                                            {(item.fileType === "fig" || item.href) && (
                                                <ExternalLink size={12} className="text-gray-300 ml-auto shrink-0" />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* About */}
            <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-1">About Me</h2>
                <div className="space-y-2">
                    {aboutItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => openItem(item)}
                            className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl border border-gray-100 active:bg-gray-100 cursor-pointer touch-manipulation"
                        >
                            <FileText size={16} className="text-blue-500 shrink-0" />
                            <span className="text-sm text-gray-800 font-medium">{item.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

// ── Desktop view: original unchanged ─────────────────────────────────────
const FinderDesktop = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow('resume');
        if (item.fileType === "txt") return openWindow('text', item);
        if (item.fileType === "img") return openWindow('image', item);
        if (item.fileType === "fig" && item.href) return window.open(item.href, "_blank");
        if (item.kind === "folder") return setActiveLocation(item);
    }

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li key={item.id} onClick={(e) => {
                        e.stopPropagation();
                        setActiveLocation(item);
                    }}
                        className={clsx(
                            item.id === activeLocation.id ? "active" : "not-active",
                        )}
                    >
                        <img src={item.icon} className="w-4" alt={item.name} />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id='window-header'>
                <WindowControlls target="finder" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList("Favourites", Object.values(locations))}
                    {renderList("Work", locations.work.children)}
                </div>

                <ul className="content">
                    {activeLocation?.children.map((item) => (
                        <li key={item.id} className={item.position}
                            onClick={(e) => {
                                e.stopPropagation();
                                openItem(item);
                            }}>
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

// ── Root: pick based on platform ─────────────────────────────────────────
const Finder = (props) => {
    const isMobile = useMobile();
    return isMobile ? <FinderMobile {...props} /> : <FinderDesktop {...props} />;
};

const FinderWindow = WindowWrapper(Finder, 'finder');
export default FinderWindow;