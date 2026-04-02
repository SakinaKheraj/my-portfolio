import { WindowControlls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useMobile from "#hooks/useMobile";
import { Trash2 } from "lucide-react";
import { locations } from "#constants";
import useWindowStore from "#store/window";

// ── Mobile: archive easter egg ────────────────────────────────────────────
const TrashMobile = () => {
    const { openWindow } = useWindowStore();
    const trashItems = locations.trash.children;

    const openItem = (item) => {
        if (item.fileType === "txt") return openWindow('text', item);
        if (item.fileType === "img") return openWindow('image', item);
    };

    return (
        <div className="px-4 pt-4 pb-8 space-y-4">
            <div className="text-center py-4">
                <div className="text-5xl mb-3">🗑️</div>
                <h2 className="font-black text-gray-900 text-lg">Archive</h2>
                <p className="text-sm text-gray-400 mt-1">Hidden files & deleted features</p>
            </div>

            {trashItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-gray-300">
                    <Trash2 size={48} className="mb-3 opacity-30" />
                    <p className="text-sm">Nothing here</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {trashItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => openItem(item)}
                            className="flex items-center gap-4 px-4 py-4 bg-gray-50 rounded-2xl border border-gray-100 active:bg-gray-100 cursor-pointer touch-manipulation"
                        >
                            <img src={item.icon} alt={item.name} className="size-10 object-contain" />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                                <p className="text-xs text-gray-400 mt-0.5">Tap to open</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <p className="text-center text-xs text-gray-300 italic pt-2">
                You found the secret archive 🕵️‍♀️
            </p>
        </div>
    );
};

// ── Desktop: original unchanged ───────────────────────────────────────────
const TrashDesktop = () => {
    const { openWindow } = useWindowStore();
    const trashItems = locations.trash.children;

    const openItem = (item) => {
        if (item.fileType === "txt") return openWindow('text', item);
        if (item.fileType === "img") return openWindow('image', item);
    };

    return (
        <div className="w-[500px] h-[350px] bg-white flex flex-col rounded-xl overflow-hidden shadow-2xl">
            <div id='window-header' className="flex items-center justify-between px-4 py-2 bg-[#f6f6f6] border-b border-[#dcdcdc]">
                <WindowControlls target="trash" />
                <h2 className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <Trash2 size={12} /> Trash
                </h2>
                <div className="w-12"></div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                {trashItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400">
                        <Trash2 size={48} className="mb-2 opacity-20" />
                        <p className="text-sm">Trash is empty</p>
                    </div>
                ) : (
                    <ul className="grid grid-cols-4 gap-6">
                        {trashItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex flex-col items-center gap-1 group cursor-pointer"
                                onClick={() => openItem(item)}
                            >
                                <div className="p-2 rounded-lg group-hover:bg-gray-100 transition-colors">
                                    <img src={item.icon} alt={item.name} className="size-12 object-contain" />
                                </div>
                                <p className="text-[11px] text-center font-medium text-gray-700 truncate w-full px-1">
                                    {item.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="px-4 py-2 bg-[#f6f6f6] border-t border-[#f0f0f0] text-[10px] text-gray-400 flex justify-between items-center">
                <span>{trashItems.length} items</span>
                <span className="italic">Items here are "deleted" features and hidden notes</span>
            </div>
        </div>
    );
};

const Trash = (props) => {
    const isMobile = useMobile();
    return isMobile ? <TrashMobile {...props} /> : <TrashDesktop {...props} />;
};

const TrashWindow = WindowWrapper(Trash, 'trash');
export default TrashWindow;
