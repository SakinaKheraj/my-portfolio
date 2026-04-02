import { useState, useEffect } from 'react';

/**
 * MobileStatusBar — replaces the macOS navbar on mobile.
 * Shows: Logo/name (left) | Time (center) | Signal + Battery (right)
 */
const MobileStatusBar = () => {
    const [time, setTime] = useState(() => formatTime());

    useEffect(() => {
        // Sync to the next full second, then tick every second
        const msUntilNextSecond = 1000 - (Date.now() % 1000);
        let interval;
        const timeout = setTimeout(() => {
            setTime(formatTime());
            interval = setInterval(() => setTime(formatTime()), 1000);
        }, msUntilNextSecond);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-4 h-11 sm:hidden select-none bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg"
        >
            {/* Left: Logo + name */}
            <div className="flex items-center gap-1.5 min-w-0">
                <img src="/images/logo.svg" alt="logo" className="size-5 shrink-0" />
                <span className="text-white text-[13px] font-semibold truncate">Sakina</span>
            </div>

            {/* Center: Time */}
            <time className="absolute left-1/2 -translate-x-1/2 text-white text-[15px] font-semibold tracking-tight">
                {time}
            </time>

            {/* Right: Signal + Battery */}
            <div className="flex items-center gap-1.5 shrink-0">
                {/* Signal bars */}
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <rect x="0" y="7" width="3" height="5" rx="0.5" fill="white" />
                    <rect x="4" y="5" width="3" height="7" rx="0.5" fill="white" />
                    <rect x="8" y="2.5" width="3" height="9.5" rx="0.5" fill="white" />
                    <rect x="12" y="0" width="3" height="12" rx="0.5" fill="white" opacity="0.4" />
                </svg>

                {/* Battery */}
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="white" strokeOpacity="0.6" />
                    <rect x="21.5" y="3.5" width="2" height="5" rx="1" fill="white" fillOpacity="0.6" />
                    <rect x="2" y="2" width="15" height="8" rx="1.5" fill="white" />
                </svg>
            </div>
        </header>
    );
};

function formatTime() {
    const d = new Date();
    const h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${m}`;
}

export default MobileStatusBar;
