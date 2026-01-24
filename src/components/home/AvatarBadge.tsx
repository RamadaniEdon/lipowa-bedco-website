import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import DotIcon from "@assets/icons/dot.svg?react";

export default function AvatarBadge({
    className,
    children,
}: {
    className?: ClassValue;
    children: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "w-fit  flex gap-2 items-center rounded-full text-[18px] text-[#3B3B3B] border-[2px] border-[#3B3B3B]",
                "px-5 py-2 font-bold",
                className,
            )}
        >
            <DotIcon className="text-[#3B3B3B] w-2 h-2" />
            {children}
        </div>
    );
}
