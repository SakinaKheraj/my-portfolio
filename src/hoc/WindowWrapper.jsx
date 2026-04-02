import React, { useLayoutEffect, useRef } from 'react';
import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { Draggable } from 'gsap/Draggable';
import useMobile from '#hooks/useMobile';
import { X } from 'lucide-react';

// z-index layers (must beat the status bar at 9998)
const MOBILE_WINDOW_Z = 10000;
const STATUS_BAR_H   = 44; // px — height of MobileStatusBar

const WINDOW_TITLES = {
    finder:   'Files',
    terminal: 'Dev',
    contact:  'Contacts',
    safari:   'Browser',
    resume:   'Notes',
    trash:    'Archive',
    text:     'Document',
    image:    'Photo',
};

const WINDOW_ICONS = {
    finder:   '/images/files_mobile.png',
    terminal: '/images/terminal_mobile.png',
    contact:  '/images/contact_mobile.png',
    safari:   '/images/safari_mobile.png',
    resume:   '/images/notes_mobile.png',
    trash:    '/images/trash.png',
    text:     '/images/txt.png',
    image:    '/images/image.png',
};

// ── Mobile shell: top-bar + scrollable body ─────────────────────────────────
const MobileWindowShell = ({ windowKey, children }) => {
    const { minimizeWindow } = useWindowStore();
    const title = WINDOW_TITLES[windowKey] ?? windowKey;
    const icon  = WINDOW_ICONS[windowKey];

    return (
        <div
            className="flex flex-col w-full bg-white"
            style={{ height: '100%' }}
        >
            {/* Spacer so the app's own top-bar sits below the status bar */}
            <div style={{ height: STATUS_BAR_H, flexShrink: 0 }} />

            {/* App top-bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                    {icon && (
                        <img
                            src={icon}
                            alt={title}
                            className="size-7 rounded-lg object-contain"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    )}
                    <span className="font-semibold text-[15px] text-gray-900 truncate">
                        {title}
                    </span>
                </div>

                {/* ← Close button uses pointer events for reliable touch */}
                <button
                    type="button"
                    onPointerUp={(e) => {
                        e.stopPropagation();
                        minimizeWindow(windowKey);
                    }}
                    className="size-9 flex items-center justify-center rounded-full bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                    aria-label="Minimize"
                >
                    <X size={17} className="text-gray-600" />
                </button>
            </div>

            {/* Scrollable window content */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
                {children}
            </div>

            {/* Bottom safe area */}
            <div style={{ height: 28, flexShrink: 0 }} />
        </div>
    );
};

// ── HOC ─────────────────────────────────────────────────────────────────────
const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex, isMinimized, isMaximized } = windows[windowKey];
        const ref  = useRef(null);
        const isMobile = useMobile();

        // Hide initially when not open
        useLayoutEffect(() => {
            if (ref.current && !isOpen) ref.current.style.display = 'none';
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        // Open / minimize animations
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            gsap.killTweensOf(el);

            if (isOpen && !isMinimized) {
                el.style.display = 'block';
                if (isMobile) {
                    gsap.fromTo(el,
                        { scale: 0.85, opacity: 0 },
                        { scale: 1, opacity: 1, ease: 'power3.out', duration: 0.3 }
                    );
                } else {
                    gsap.fromTo(el,
                        { scale: 0.8, opacity: 0, y: 40 },
                        { scale: 1, opacity: 1, y: 0, ease: 'power3.out', duration: 0.4 }
                    );
                }
            } else if (isMinimized || (!isOpen && isMobile)) {
                if (isMobile) {
                    gsap.to(el, {
                        scale: 0.85, opacity: 0,
                        duration: 0.25,
                        ease: 'power2.inOut',
                        onComplete: () => { el.style.display = 'none'; }
                    });
                } else {
                    gsap.to(el, {
                        scale: 0.5, opacity: 0, y: 100,
                        duration: 0.3, ease: 'power2.inOut',
                        onComplete: () => { el.style.display = 'none'; }
                    });
                }
            } else if (!isOpen) {
                gsap.to(el, {
                    scale: 0.85, opacity: 0,
                    duration: 0.2, ease: 'power2.in',
                    onComplete: () => {
                        el.style.display = 'none';
                        gsap.set(el, { clearProps: 'scale,opacity' });
                    }
                });
            }
        }, [isOpen, isMinimized, isMobile]);

        // Maximize — desktop only
        useGSAP(() => {
            const el = ref.current;
            if (!el || isMobile) return;
            if (isMaximized) {
                gsap.to(el, {
                    top: '40px', left: 0, x: 0, y: 0,
                    width: '100%', height: 'calc(100vh - 40px)',
                    borderRadius: 0, duration: 0.4, ease: 'power3.out'
                });
            } else {
                gsap.to(el, {
                    top: '', left: '', width: '', height: '',
                    borderRadius: '12px', duration: 0.4, ease: 'power3.out',
                    clearProps: 'top,left,width,height,x,y'
                });
            }
        }, [isMaximized, isMobile]);

        // Draggable — desktop only
        useGSAP(() => {
            const el = ref.current;
            if (!el || isMaximized || isMobile) return;
            const [instance] = Draggable.create(el, {
                trigger: el.querySelector('#window-header') || el,
                onPress: () => focusWindow(windowKey)
            });
            return () => instance.kill();
        }, [isMaximized, isMobile]);

        // Clear stale GSAP styles when switching to mobile
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isMobile) return;
            gsap.set(el, { clearProps: 'x,y,scale,opacity' });
        }, [isMobile]);

        // ── Computed style / class ─────────────────────────────────────────
        // On mobile: always fixed full-screen with a z-index that beats the
        // status bar (9998) so windows properly cover everything.
        const style = isMobile
            ? {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100dvh',
                zIndex: MOBILE_WINDOW_Z,   // 10000 — above status bar
                borderRadius: 0,
                overflow: 'hidden',
              }
            : { zIndex };

        return (
            <section
                id={isMobile ? `mobile-${windowKey}` : windowKey}
                ref={ref}
                style={style}
                className={isMobile ? '' : 'absolute'}
                onClick={() => focusWindow(windowKey)}
            >
                {isMobile
                    ? <MobileWindowShell windowKey={windowKey}><Component {...props} /></MobileWindowShell>
                    : <Component {...props} />
                }
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
    return Wrapped;
};

export default WindowWrapper;