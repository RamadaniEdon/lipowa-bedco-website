import { useState } from "react";
import { type ClassValue } from "clsx";
import { cn } from "@lib/utils";
import PageIcon from "@assets/icons/icon.svg?react";
import DownRightArrow from "@assets/icons/down-right-arrow.svg?react";
import { Link, useLocation } from "react-router";
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
        <>
            {/* Backdrop blur overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-[700ms] pointer-events-none",
                    isExpanded ? "opacity-100 z-40" : "opacity-0 -z-10",
                )}
            />

            <nav
                className={cn(
                    "w-full transition-all duration-[700ms] ease-in-out",
                    positioned === "absolute"
                        ? "absolute top-0 left-0 z-50"
                        : "relative z-50",
                    className,
                )}
            >
                {/* Expandable part - positioned behind, starts from top */}
                <div
                    onMouseLeave={() => setIsExpanded(false)}
                    className={cn(
                        "absolute top-0 left-0 w-full transition-all duration-[700ms] ease-in-out overflow-hidden bg-white z-40",
                        isExpanded ? "max-h-[600px] shadow-lg" : "max-h-0",
                    )}
                >
                    <div
                        className={cn(
                            "border-b-black border-b-[1px] mt-[60px] md:mt-[80px] lg:mt-[100px]",
                        )}
                    ></div>

                    <div
                        className={cn(
                            "pt-[20px] md:pt-[30px] lg:pt-[40px] pb-8 md:pb-10 lg:pb-14 flex flex-col md:flex-row justify-between gap-6 md:gap-8",
                            SIDE_SPACES.MARGIN,
                        )}
                    >
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div className="text-[14px] md:text-[16px] lg:text-[18px] font-silka-mono text-[#969696]">
                                PRODUKTE
                            </div>
                            <div className="flex flex-col gap-2 text-[14px] md:text-[16px] lg:text-[18px] text-[#3B3B3B]">
                                <Link
                                    onClick={() => setIsExpanded(false)}
                                    to="/matratzen"
                                >
                                    Matrazen
                                </Link>
                                <Link
                                    onClick={() => setIsExpanded(false)}
                                    to="/betten"
                                >
                                    Betten
                                </Link>
                                <Link
                                    onClick={() => setIsExpanded(false)}
                                    to="/"
                                >
                                    Verwandlungsmöbel
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            <figure className="max-w-[200px] md:max-w-[250px] lg:max-w-[292px] max-h-[180px] md:max-h-[220px] lg:max-h-[248px]">
                                <img
                                    src={HeaderImage1}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <figure className="max-w-[200px] md:max-w-[250px] lg:max-w-[292px] max-h-[180px] md:max-h-[220px] lg:max-h-[248px]">
                                <img
                                    src={HeaderImage2}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <figure className="max-w-[200px] md:max-w-[250px] lg:max-w-[292px] max-h-[180px] md:max-h-[220px] lg:max-h-[248px] hidden md:block">
                                <img
                                    src={HeaderImage3}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <Link
                                onClick={() => setIsExpanded(false)}
                                className="underline text-[#3B3B3B] text-[14px] md:text-[16px] lg:text-[18px]"
                                to="/matratzen"
                            >
                                Matratzen entdecken
                            </Link>
                            <Link
                                onClick={() => setIsExpanded(false)}
                                className="underline text-[#3B3B3B] text-[14px] md:text-[16px] lg:text-[18px]"
                                to="/"
                            >
                                Verwandlungsmöbel entdecken
                            </Link>
                            <Link
                                onClick={() => setIsExpanded(false)}
                                className="underline text-[#3B3B3B] text-[14px] md:text-[16px] lg:text-[18px] hidden md:block"
                                to="/betten"
                            >
                                Betten entdecken
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main navbar - always visible, no background, positioned on top */}
                <div className={cn(SIDE_SPACES.MARGIN, "relative z-50")}>
                    <div className="flex items-center justify-between h-12 md:h-14 lg:h-16 min-h-[60px] md:min-h-[80px] lg:min-h-[100px]">
                        {/* Logo */}
                        <Link
                            onClick={() => setIsExpanded(false)}
                            to="/"
                            className="relative right-1 md:right-2 text-2xl font-bold transition-colors duration-[700ms]"
                        >
                            <PageIcon
                                className={cn(
                                    "w-[70px] sm:w-[85px] md:w-[95px] lg:w-[110px] transition-colors duration-[700ms]",
                                    mode === "transparent" && !isExpanded
                                        ? "text-white"
                                        : "text-[#3B3B3B]",
                                )}
                            />
                        </Link>

                        {/* Main Links */}
                        <div
                            className={cn(
                                "flex items-center justify-end gap-[10px] sm:gap-[20px] md:gap-[30px] lg:gap-[69px] text-[14px] md:text-[16px] lg:text-[18px]",
                                isExpanded
                                    ? "text-[#3B3B3B]"
                                    : "text-[#969696]",
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
                            <Link
                                onClick={() => setIsExpanded(false)}
                                to="/uber-uns"
                                className="flex items-center space-x-1 font-silka-mono transition-colors duration-[700ms]"
                            >
                                <span
                                    className={cn(
                                        "px-[20px] py-[23px] flex items-center",
                                    )}
                                >
                                    ÜBER UNS
                                </span>
                            </Link>
                            <Link
                                onClick={() => setIsExpanded(false)}
                                to="/faq"
                                className="flex items-center space-x-1 font-silka-mono transition-colors duration-[700ms]"
                            >
                                <span
                                    className={cn(
                                        "px-[20px] py-[23px] flex items-center",
                                    )}
                                >
                                    FAQ
                                </span>
                            </Link>
                            <Link
                                onClick={() => setIsExpanded(false)}
                                to="/kontakt"
                                className="flex items-center space-x-1 font-silka-mono transition-colors duration-[700ms]"
                            >
                                <span
                                    className={cn(
                                        "px-[20px] py-[23px] flex items-center",
                                    )}
                                >
                                    KONTAKT
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
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
