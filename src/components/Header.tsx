import { useState } from "react";
import { type ClassValue } from "clsx";
import { cn } from "@lib/utils";
import PageIcon from "@assets/icons/icon.svg?react";
import DownRightArrow from "@assets/icons/down-right-arrow.svg?react";
import { useLocation } from "react-router";
import HeaderImage1 from "@assets/header/header-1.png";
import HeaderImage2 from "@assets/header/header-2.png";
import HeaderImage3 from "@assets/header/header-3.png";
import { SIDE_SPACES } from "@/lib/commonStyles";

const Navbar = ({
    mode = "transparent",
    positioned = "absolute",
    className,
}: {
    mode?: "white" | "transparent";
    positioned?: "absolute" | "relative";
    className?: ClassValue;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <nav
            className={cn(
                "w-full transition-all duration-[700ms] ease-in-out",
                positioned === "absolute"
                    ? "absolute top-0 left-0 z-10"
                    : "relative",
                className,
            )}
        >
            {/* Expandable part - positioned behind, starts from top */}
            <div
                onMouseLeave={() => setIsExpanded(false)}
                className={cn(
                    "absolute top-0 left-0 w-full transition-all duration-[700ms] ease-in-out overflow-hidden bg-white shadow-md",
                    isExpanded ? "max-h-[600px]" : "max-h-0",
                )}
            >
                <div
                    className={cn("border-b-black border-b-[1px] mt-[100px]")}
                ></div>

                <div
                    className={cn(
                        "pt-[40px] pb-14 flex justify-between",
                        SIDE_SPACES.MARGIN,
                    )}
                >
                    <div className="flex flex-col gap-4">
                        <div className="text-[18px] font-silka-mono text-[#969696]">
                            PRODUKTE
                        </div>
                        <div className="flex flex-col gap-2 text-[18px] text-[#3B3B3B]">
                            <a href="/">Matrazen</a>
                            <a href="/">Betten</a>
                            <a href="/">Verwandlungsmöbel</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <figure className="max-w-[292px] max-h-[248px]">
                            <img
                                src={HeaderImage1}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <figure className="max-w-[292px] max-h-[248px]">
                            <img
                                src={HeaderImage2}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <figure className="max-w-[292px] max-h-[248px]">
                            <img
                                src={HeaderImage3}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <a
                            className="underline text-[#3B3B3B] text-[18px]"
                            href="/"
                        >
                            Matratzen entdecken
                        </a>
                        <a
                            className="underline text-[#3B3B3B] text-[18px]"
                            href="/"
                        >
                            Verwandlungsmöbel entdecken
                        </a>
                        <a
                            className="underline text-[#3B3B3B] text-[18px]"
                            href="/"
                        >
                            Betten entdecken
                        </a>
                    </div>
                </div>
            </div>

            {/* Main navbar - always visible, no background, positioned on top */}
            <div className={cn(SIDE_SPACES.MARGIN, "relative z-10")}>
                <div className="flex items-center justify-between h-16 min-h-[100px]">
                    {/* Logo */}
                    <div className="relative right-2 text-2xl font-bold transition-colors duration-[700ms]">
                        <PageIcon
                            className={cn(
                                "w-[110px] transition-colors duration-[700ms]",
                                mode === "transparent" && !isExpanded
                                    ? "text-white"
                                    : "text-[#3B3B3B]",
                            )}
                        />
                    </div>

                    {/* Main Links */}
                    <div
                        className={cn(
                            "hidden md:flex items-center justify-end gap-[69px] text-[18px]",
                            isExpanded ? "text-[#3B3B3B]" : "text-[#969696]",
                        )}
                    >
                        <button
                            onMouseEnter={() => setIsExpanded(true)}
                            className="flex items-center space-x-1 font-silka-mono transition-colors duration-[700ms]"
                        >
                            <span
                                className={cn(
                                    "px-[20px] py-[23px] flex items-center",
                                )}
                            >
                                PRODUKTE
                                <DownRightArrow className="ml-1 inline-block" />
                            </span>
                        </button>
                        <button className="flex items-center space-x-1 font-silka-mono transition-colors duration-[700ms]">
                            <span
                                className={cn(
                                    "px-[20px] py-[23px] flex items-center",
                                )}
                            >
                                ÜBER UNS
                            </span>
                        </button>
                        <button className="flex items-center space-x-1 font-silka-mono transition-colors duration-[700ms]">
                            <span
                                className={cn(
                                    "px-[20px] py-[23px] flex items-center",
                                )}
                            >
                                FAQ
                            </span>
                        </button>
                        <button className="flex items-center space-x-1 font-silka-mono transition-colors duration-[700ms]">
                            <span
                                className={cn(
                                    "px-[20px] py-[23px] flex items-center",
                                )}
                            >
                                KONTAKT
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default function NavbarDemo() {
    const location = useLocation();

    return (
        <Navbar
            mode={location.pathname === "/" ? "transparent" : "white"}
            positioned={location.pathname === "/" ? "absolute" : "relative"}
        />
    );
}
