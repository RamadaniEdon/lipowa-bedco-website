import { useEffect, useState } from "react";

export type Breakpoint = "default" | "sm" | "md" | "lg" | "xl";

function getBreakpoint(width: number): Breakpoint {
    if (width >= 1280) return "xl";
    if (width >= 1024) return "lg";
    if (width >= 768) return "md";
    if (width >= 640) return "sm";
    return "default";
}

export function useBreakpoint(): Breakpoint {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
        typeof window !== "undefined"
            ? getBreakpoint(window.innerWidth)
            : "default",
    );

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getBreakpoint(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoint;
}
