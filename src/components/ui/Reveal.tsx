import { useEffect, useRef, useState } from "react";
import { observeElement, unobserveElement } from "@/lib/observer";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

type RevealProps = {
    children: React.ReactNode;
    className?: ClassValue; // always applied
    hiddenClass?: ClassValue; // before visible
    visibleClass?: ClassValue; // after first appear
};

export default function Reveal({
    children,
    className,
    hiddenClass,
    visibleClass,
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        observeElement(el, () => {
            setVisible(true);
        });

        return () => {
            unobserveElement(el);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={cn(className, visible ? visibleClass : hiddenClass)}
        >
            {children}
        </div>
    );
}

export function RevealFromBottom({
    children,
    className,
    hiddenClass,
    visibleClass,
}: RevealProps) {
    return (
        <Reveal
            className={cn(
                "transition-all delay-200 duration-700 ease-[cubic-bezier(0.3,0,0.2,1)]",
                className,
            )}
            hiddenClass={cn("opacity-0 translate-y-[44px]", hiddenClass)}
            visibleClass={cn("opacity-100 translate-y-0", visibleClass)}
        >
            {children}
        </Reveal>
    );
}

export function RevealFromTop({
    children,
    className,
    hiddenClass,
    visibleClass,
}: RevealProps) {
    return (
        <Reveal
            className={cn(
                "transition-all delay-200 duration-700 ease-[cubic-bezier(0.3,0,0.2,1)]",
                className,
            )}
            hiddenClass={cn("opacity-0 translate-y-[-44px]", hiddenClass)}
            visibleClass={cn("opacity-100 translate-y-0", visibleClass)}
        >
            {children}
        </Reveal>
    );
}

export function RevealFromRight({
    children,
    className,
    hiddenClass,
    visibleClass,
}: RevealProps) {
    return (
        <Reveal
            className={cn(
                "transition-all delay-200 duration-700 ease-[cubic-bezier(0.3,0,0.2,1)]",
                className,
            )}
            hiddenClass={cn("opacity-0 translate-x-[44px]", hiddenClass)}
            visibleClass={cn("opacity-100 translate-x-0", visibleClass)}
        >
            {children}
        </Reveal>
    );
}

export function RevealFromLeft({
    children,
    className,
    hiddenClass,
    visibleClass,
}: RevealProps) {
    return (
        <Reveal
            className={cn(
                "transition-all delay-200 duration-700 ease-[cubic-bezier(0.3,0,0.2,1)]",
                className,
            )}
            hiddenClass={cn("opacity-0 translate-x-[-44px]", hiddenClass)}
            visibleClass={cn("opacity-100 translate-x-0", visibleClass)}
        >
            {children}
        </Reveal>
    );
}
