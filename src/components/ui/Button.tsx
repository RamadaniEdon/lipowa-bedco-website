import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import type { MouseEventHandler, ReactNode } from "react";

export default function Button({
    className,
    children,
    onClick,
}: {
    className?: ClassValue;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            className={cn(
                "px-[22px] py-[9px] border-[#E6E7E8]/[20%] border-[1px] rounded-full font-silka-mono uppercase",
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
