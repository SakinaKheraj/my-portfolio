import { WindowControlls } from "#components"
import useLocationStore from "#store/location"
import WindowWrapper from "#hoc/WindowWrapper.jsx"
import { Search } from "lucide-react"
import { locations } from "#constants"
import clsx from "clsx"
import useWindowStore from "#store/window"

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow('resume');
        if (item.fileType === "txt") return openWindow('text', item);
        if (item.fileType === "img") return openWindow('image', item);
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
                            item.id === activeLocation.id ? "active"
                                : "not-active",
                        )}
                    >
                        <img src={item.icon}
                            className="w-4"
                            alt={item.name}
                        />
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
    )
}
const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;