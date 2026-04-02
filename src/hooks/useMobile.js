import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 640;

/**
 * Returns true when the viewport width is <= 640px.
 * Listens to resize events and updates reactively.
 */
const useMobile = () => {
    const [isMobile, setIsMobile] = useState(
        () => window.innerWidth <= MOBILE_BREAKPOINT
    );

    useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

        const onChange = (e) => setIsMobile(e.matches);

        // Use the modern API if available, fall back to addListener
        if (mq.addEventListener) {
            mq.addEventListener('change', onChange);
        } else {
            mq.addListener(onChange);
        }

        // Sync on mount in case the state is stale
        setIsMobile(mq.matches);

        return () => {
            if (mq.removeEventListener) {
                mq.removeEventListener('change', onChange);
            } else {
                mq.removeListener(onChange);
            }
        };
    }, []);

    return isMobile;
};

export default useMobile;
