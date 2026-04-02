import { useRef } from 'react';
import useWindowStore from '#store/window';
import gsap from 'gsap';

/**
 * HomeIndicator — the iOS-style pill at the bottom of the screen.
 * Tap: minimize all open apps (return to home grid, preserving open state).
 * Only rendered on mobile (sm:hidden via Tailwind).
 */
const HomeIndicator = () => {
    const minimizeAllWindows = useWindowStore((s) => s.minimizeAllWindows);
    const pillRef = useRef(null);

    const handlePointerDown = () => {
        gsap.to(pillRef.current, {
            scaleX: 0.7,
            opacity: 0.5,
            duration: 0.12,
            ease: 'power2.out',
        });
    };

    const handlePointerUp = () => {
        // Animate the "swipe-up" spring release
        gsap.to(pillRef.current, {
            scaleX: 1,
            opacity: 1,
            duration: 0.35,
            ease: 'back.out(2)',
        });

        minimizeAllWindows();
    };

    const handlePointerLeave = () => {
        gsap.to(pillRef.current, {
            scaleX: 1,
            opacity: 1,
            duration: 0.2,
            ease: 'power2.out',
        });
    };

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-[10001] flex justify-center pb-2 pt-3 sm:hidden pointer-events-none"
        >
            <div
                ref={pillRef}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerLeave}
                className="w-32 h-[5px] rounded-full cursor-pointer will-change-transform touch-manipulation pointer-events-auto bg-white"
                style={{ mixBlendMode: 'difference' }}
            />
        </div>
    );
};

export default HomeIndicator;
