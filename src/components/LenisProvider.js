import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis();

        // Animation frame loop
        function raf(time) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Keyboard controls
        const handleKeyPress = (e) => {
            if (!lenisRef.current) return;

            const scrollAmount = 100;

            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    lenisRef.current.scrollTo(lenisRef.current.scroll + scrollAmount, {
                        lock: false,
                    });
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    lenisRef.current.scrollTo(lenisRef.current.scroll - scrollAmount, {
                        lock: false,
                    });
                    break;
                case "PageDown":
                    e.preventDefault();
                    lenisRef.current.scrollTo(lenisRef.current.scroll + window.innerHeight, {
                        lock: false,
                    });
                    break;
                case "PageUp":
                    e.preventDefault();
                    lenisRef.current.scrollTo(lenisRef.current.scroll - window.innerHeight, {
                        lock: false,
                    });
                    break;
                case "Home":
                    e.preventDefault();
                    lenisRef.current.scrollTo(0, { lock: false });
                    break;
                case "End":
                    e.preventDefault();
                    lenisRef.current.scrollTo(document.body.scrollHeight, { lock: false });
                    break;
                case " ": // Space bar
                    e.preventDefault();
                    if (e.shiftKey) {
                        // Shift+Space: scroll up
                        lenisRef.current.scrollTo(
                            lenisRef.current.scroll - window.innerHeight,
                            { lock: false }
                        );
                    } else {
                        // Space: scroll down
                        lenisRef.current.scrollTo(
                            lenisRef.current.scroll + window.innerHeight,
                            { lock: false }
                        );
                    }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyPress, { passive: false });

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
        };
    }, []);

    return children;
}