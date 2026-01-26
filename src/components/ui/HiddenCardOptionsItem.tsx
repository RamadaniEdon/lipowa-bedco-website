import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import type { ReactNode } from "react";
import TopRightArrowIcon from "@assets/icons/up-right-arrow.svg?react";

export default function HiddenCardOptionsItem({
    title,
    description,
    className,
    img,
    hoverImg,
}: {
    title: string;
    description: ReactNode;
    className?: ClassValue;
    img: string;
    hoverImg: string;
}) {
    return (
        <div
            className={cn(
                "group relative bg-[#ECECEC] flex flex-col justify-end gap-2 p-[26px] overflow-hidden",
                className,
            )}
        >
            {/* Images layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* default image */}
                <img
                    src={img}
                    alt=""
                    className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                />

                {/* hover image */}
                <img
                    src={hoverImg}
                    alt=""
                    className="absolute h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
            </div>

            {/* Content */}
            <h2 className="relative z-10 flex items-center gap-2 text-[26px] text-[#3B3B3B] group-hover:text-white">
                {title}

                <span className="transition-all duration-300 group-hover:rotate-[45deg]">
                    <TopRightArrowIcon className="w-4 h-4 mt-1" />
                </span>
            </h2>

            <p className="relative z-10 uppercase text-[#AEAEAE] group-hover:text-white font-silka-mono">
                {description}
            </p>
        </div>
    );
}
