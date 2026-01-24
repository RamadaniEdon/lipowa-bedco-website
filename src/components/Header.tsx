import { useState } from "react";
import { type ClassValue } from "clsx";
import { cn } from "@lib/utils";
import PageIcon from "@assets/icons/icon.svg?react";
import DownRightArrow from "@assets/icons/down-right-arrow.svg?react";
import { Link } from "react-router";
import HeaderImage1 from "@assets/header/header-1.png";
import HeaderImage2 from "@assets/header/header-2.png";
import HeaderImage3 from "@assets/header/header-3.png";
import { SIDE_SPACES } from "@/lib/commonStyles";

const Navbar = ({
    mode = "white",
    className,
}: {
    mode?: "white" | "transparent";
    className?: ClassValue;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const isTransparent = mode === "transparent" && !isExpanded;

    return (
        <nav
            onMouseLeave={() => setIsExpanded(false)}
            className={cn(
                `w-full transition-all duration-1000 ease-in-out`,
                isTransparent ? "bg-transparent" : "bg-white shadow-md",
                className,
            )}
        >
            {/* Main navbar - always visible */}
            <div className={cn(SIDE_SPACES.MARGIN)}>
                <div className="flex items-center justify-between h-16 min-h-[116px]">
                    {/* Logo */}
                    <div
                        className={`relative right-2 text-2xl font-bold transition-colors duration-1000 ${
                            isTransparent ? "text-white" : "text-gray-900"
                        }`}
                    >
                        <PageIcon
                            className={cn(
                                "text-white w-[110px]",
                                isTransparent ? "text-white" : "text-[#3B3B3B]",
                            )}
                        />
                    </div>

                    {/* Main Links */}
                    <div className="hidden md:flex items-center justify-end gap-[69px] font-silka-mono text-[18px]">
                        <button
                            onMouseEnter={() => setIsExpanded(true)}
                            className={cn(
                                "flex items-center space-x-1 font-medium transition-colors duration-1000",
                            )}
                        >
                            <span
                                className={cn(
                                    "px-[20px] py-[23px] flex items-center ",
                                    isTransparent
                                        ? "text-[#969696]"
                                        : "#3B3B3B",
                                )}
                            >
                                PRODUKTE
                                <DownRightArrow className="ml-1 inline-block" />
                            </span>
                        </button>
                        <button
                            className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                                isTransparent
                                    ? "text-white hover:text-gray-200"
                                    : "text-gray-700 hover:text-gray-900"
                            }`}
                        >
                            <span
                                className={cn(
                                    "px-[20px] py-[23px] flex items-center ",
                                    isTransparent
                                        ? "text-[#969696]"
                                        : "#3B3B3B",
                                )}
                            >
                                ÜBER UNS
                            </span>
                        </button>
                        <button
                            className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                                isTransparent
                                    ? "text-white hover:text-gray-200"
                                    : "text-gray-700 hover:text-gray-900"
                            }`}
                        >
                            <span
                                className={cn(
                                    "px-[20px] py-[23px] flex items-center ",
                                    isTransparent
                                        ? "text-[#969696]"
                                        : "#3B3B3B",
                                )}
                            >
                                FAQ
                            </span>
                        </button>
                        <button
                            className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                                isTransparent
                                    ? "text-white hover:text-gray-200"
                                    : "text-gray-700 hover:text-gray-900"
                            }`}
                        >
                            <span
                                className={cn(
                                    "px-[20px] py-[23px] flex items-center ",
                                    isTransparent
                                        ? "text-[#969696]"
                                        : "#3B3B3B",
                                )}
                            >
                                KONTAKT
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {isExpanded && (
                <div className="border-b-black border-b-[1px]"></div>
            )}

            {/* Expanded content */}
            <div
                className={cn(
                    "transition-all duration-1000 ease-in-out pt-[40px]",
                    "flex justify-between mx-[50px] md:mx-[80px] lg:mx-[100px] pb-14",
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
            >
                <div className="flex flex-col gap-4">
                    <div className="text-[18px] font-silka-mono text-[#969696]">
                        PRODUKTE
                    </div>
                    <div className="flex flex-col gap-2 text-[18px] font-neue-haas text-[#3B3B3B]">
                        <Link to={"/"}>Matrazen</Link>
                        <Link to={"/"}>Betten</Link>
                        <Link to={"/"}>Verwandlungsmöbel</Link>
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
                    <Link
                        className="underline text-[#3B3B3B] text-[18px]"
                        to={"/"}
                    >
                        Matratzen entdecken
                    </Link>
                    <Link
                        className="underline text-[#3B3B3B] text-[18px]"
                        to={"/"}
                    >
                        Verwandlungsmöbel entdecken
                    </Link>
                    <Link
                        className="underline text-[#3B3B3B] text-[18px]"
                        to={"/"}
                    >
                        Betten entdecken
                    </Link>
                </div>
            </div>
        </nav>
    );
};

// Demo component showing both modes
export default function NavbarDemo() {
    // const [mode] = useState("");

    return <Navbar mode={"transparent"} className="absolute z-10" />;
}
