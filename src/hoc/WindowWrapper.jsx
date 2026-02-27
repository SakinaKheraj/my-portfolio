import React, { useLayoutEffect, useRef } from 'react'
import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { Draggable } from 'gsap/Draggable';

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex, isMinimized, isMaximized } = windows[windowKey];
        const ref = useRef(null);

        useLayoutEffect(() => {
            if (ref.current && !isOpen) {
                ref.current.style.display = "none";
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (isOpen && !isMinimized) {
                el.style.display = "block";
                gsap.fromTo(
                    el,
                    { scale: 0.8, opacity: 0, y: 40 },
                    { scale: 1, opacity: 1, y: 0, ease: "power3.out", duration: 0.4 },
                );
            } else if (isMinimized) {
                gsap.to(el, {
                    scale: 0.5,
                    opacity: 0,
                    y: 100,
                    duration: 0.3,
                    ease: "power2.inOut",
                    onComplete: () => {
                        el.style.display = "none";
                    }
                });
            } else if (!isOpen) {
                el.style.display = "none";
            }
        }, [isOpen, isMinimized]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (isMaximized) {
                gsap.to(el, {
                    top: "40px",
                    left: 0,
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: "calc(100vh - 40px)",
                    borderRadius: 0,
                    duration: 0.4,
                    ease: "power3.out"
                });
            } else {
                gsap.to(el, {
                    top: "",
                    left: "",
                    width: "",
                    height: "",
                    borderRadius: "12px",
                    duration: 0.4,
                    ease: "power3.out",
                    clearProps: "top,left,width,height,x,y"
                });
            }
        }, [isMaximized]);

        useGSAP(() => {
            const el = ref.current;
            if (!el || isMaximized) return;

            const [instance] = Draggable.create(el, {
                onPress: () => focusWindow(windowKey)
            });

            return () => instance.kill();
        }, [isMaximized]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className="absolute"
                onClick={() => focusWindow(windowKey)}
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
}

export default WindowWrapper;