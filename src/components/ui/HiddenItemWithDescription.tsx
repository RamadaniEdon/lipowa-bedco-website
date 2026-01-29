import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import type { ReactNode } from "react";
import UpArrowIcon from "@assets/icons/up-arrow.svg?react";

export default function HiddenItemWithDescription({
    title,
    description,
    className,
    img,
}: {
    title: string;
    description: ReactNode;
    className?: ClassValue;
    img: string;
}) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden px-[26px] py-[33px] h-full flex flex-col justify-end bg-[#ECECEC] transition-colors duration-500",
                className,
            )}
        >
            <div
                className={cn(
                    "absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10",
                    "top-0 left-0 w-full h-full bg-[#2F2F2F] px-[26px] py-[33px] flex flex-col justify-between",
                )}
            >
                <h2
                    className="
                        text-[26px] text-white flex items-center gap-2
                        transition-all duration-500
                        opacity-0 translate-y-[-20px]
                        group-hover:opacity-100
                        group-hover:translate-y-0
                    "
                >
                    {title}
                    <UpArrowIcon className="w-5 h-5 mt-1 rotate-[180deg]" />
                </h2>
                <p
                    className="
                        mt-2
                        text-white
                        opacity-0 translate-y-4
                        transition-all duration-500 delay-150
                        group-hover:opacity-100
                        group-hover:translate-y-0
                    "
                >
                    {description}
                </p>
            </div>
            <img
                src={img}
                alt=""
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
            />
            <h2
                className="
                        text-[26px] text-[#3B3B3B] flex items-center gap-2
                        transition-all duration-500
                        opacity-100 translate-y-0
                        group-hover:opacity-0
                        group-hover:translate-y-4
                    "
            >
                {title}
                <UpArrowIcon className="w-5 h-5 mt-1" />
            </h2>
        </div>
    );
}
