import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';
import { useRef } from 'react';
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';
import useMobile from '#hooks/useMobile';
import { locations } from '#constants';
import clsx from 'clsx';

const projects = locations.work?.children ?? [];

// Mobile app definitions — maps to the window IDs already in the system
const MOBILE_APPS = [
    {
        id: 'finder',
        label: 'Files',
        icon: '/images/files_mobile.png',
    },
    {
        id: 'terminal',
        label: 'Terminal',
        icon: '/images/terminal_mobile.png',
    },
    {
        id: 'contact',
        label: 'Contacts',
        icon: '/images/contact_mobile.png',
    },
    {
        id: 'safari',
        label: 'Browser',
        icon: '/images/safari_mobile.png',
    },

    {
        id: 'resume',
        label: 'Notes',
        icon: '/images/notes_mobile.png',
    },
    {
        id: '__linkedin__',
        label: 'LinkedIn',
        icon: '/images/linkedin_mobile.png',
        href: 'https://www.linkedin.com/in/sakinakheraj',
    },
];

// ─────────────────────────────────────────────────────────────
// MobileHomeScreen
// ─────────────────────────────────────────────────────────────
const MobileHomeScreen = () => {
    const { openWindow } = useWindowStore();

    const handleTap = (app) => {
        if (app.href) {
            window.open(app.href, '_blank', 'noopener,noreferrer');
            return;
        }
        const target = app.targetWindow ?? app.id;
        openWindow(target);
    };

    return (
        <section
            className="fixed inset-0 z-0 flex flex-col overflow-y-auto"
            style={{ paddingTop: '56px', paddingBottom: '28px' }}
        >
            {/* Premium Mobile Welcome */}
            <div className="px-6 pt-6 pb-2 w-full text-center flex flex-col items-center select-none shrink-0" style={{ mixBlendMode: 'overlay' }}>
                <p className="text-lg font-georama font-light tracking-wide text-white/90 mb-0.5">
                    Hey, I'm Sakina! Welcome to my
                </p>
                <h1 className="text-[14vw] leading-none italic font-georama font-bold text-white tracking-tighter drop-shadow-2xl">
                    portfolio
                </h1>
            </div>

            {/* App Grid */}
            <ul className="grid grid-cols-4 justify-items-center gap-x-4 gap-y-8 px-5 pt-8">
                {MOBILE_APPS.map((app) => (
                    <MobileAppIcon key={app.id} app={app} onTap={handleTap} />
                ))}
            </ul>
        </section>
    );
};

// ─────────────────────────────────────────────────────────────
// MobileAppIcon — single tappable icon with press animation
// ─────────────────────────────────────────────────────────────
const MobileAppIcon = ({ app, onTap }) => {
    return (
        <li className="flex flex-col items-center gap-2 select-none">
            <button
                onClick={() => onTap(app)}
                className="cursor-pointer size-16 flex items-center justify-center rounded-[1.15rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-200 ease-out hover:scale-[1.05] active:scale-90 outline-none"
                style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
            >
                <img
                    src={app.icon}
                    alt={app.label}
                    className="w-10 h-10 object-contain drop-shadow-md"
                    draggable={false}
                />
            </button>
            <span className="text-[11px] font-medium text-white/90 text-center leading-tight max-w-[72px] truncate drop-shadow">
                {app.label}
            </span>
        </li>
    );
};

// ─────────────────────────────────────────────────────────────
// DesktopHomeScreen — original folder layout, untouched
// ─────────────────────────────────────────────────────────────
const DesktopHomeScreen = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow('finder');
    };

    useGSAP(() => {
        Draggable.create('.folder');
    }, []);

    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className={clsx('group folder', project.windowPosition)}
                        onClick={() => handleOpenProjectFinder(project)}
                    >
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

// ─────────────────────────────────────────────────────────────
// Home — root component, switches based on screen size
// ─────────────────────────────────────────────────────────────
const Home = () => {
    const isMobile = useMobile();
    return isMobile ? <MobileHomeScreen /> : <DesktopHomeScreen />;
};

export default Home;