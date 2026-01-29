import { SIDE_SPACES } from "@/lib/commonStyles";
import { cn } from "@/lib/utils";
import DotIcon from "@assets/icons/dot.svg?react";
import LeftArrowIcon from "@assets/icons/left-arrow.svg?react";
import RightArrowIcon from "@assets/icons/right-arrow.svg?react";
import { Link } from "react-router";
import Img1 from "@assets/landing-page/langing-page-carousel-1.png";
import Img2 from "@assets/landing-page/langing-page-carousel-2.png";
import Img3 from "@assets/landing-page/langing-page-carousel-3.png";
import Img4 from "@assets/landing-page/langing-page-carousel-4.png";
import Img5 from "@assets/landing-page/langing-page-carousel-5.png";
import {
    RevealFromBottom,
    RevealFromLeft,
    RevealFromRight,
} from "../ui/Reveal";
import GeneralCarousel, { type CarouselRef } from "./GeneralCarousel";
import { useRef } from "react";
import { useResponsiveValue } from "@/hooks/useResponsiveValue";
import Button from "../ui/Button";

const imageItems = [
    <img src={Img1} alt="" className="w-full h-full object-cover" />,
    <img src={Img2} alt="" className="w-full h-full object-cover" />,
    <img src={Img3} alt="" className="w-full h-full object-cover" />,
    <img src={Img4} alt="" className="w-full h-full object-cover" />,
    <img src={Img5} alt="" className="w-full h-full object-cover" />,
];

export default function SecondPart() {
    const carouselRef = useRef<CarouselRef>(null);
    const carouselItemWidth = useResponsiveValue({
        default: 500,
        lg: 500,
        xl: 750,
    });
    return (
        <div className="bg-[#ECECEC] py-[60px] md:py-[80px] lg:py-[120px]">
            <RevealFromBottom>
                <div
                    className={cn(
                        SIDE_SPACES.MARGIN,
                        "pb-[30px] md:pb-[45px] lg:pb-[60px] h-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8",
                    )}
                >
                    <p
                        className={cn(
                            "text-[#3B3B3B] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] w-full max-w-[1303px] leading-tight",
                        )}
                    >
                        <span className="text-[#AEAEAE]">
                            Bei jeder Matratze achten wir auf
                        </span>{" "}
                        Qualität, Komfort{" "}
                        <span className="text-[#AEAEAE]">und</span> Liebe zum
                        Detail.
                    </p>
                    <div className="flex flex-col min-w-[120px] md:min-w-[144px] self-start justify-between h-full">
                        <p
                            className={cn(
                                "text-[16px] md:text-[18px] lg:text-[22px] text-[#3B3B3B] mb-[40px] md:mb-[60px] lg:mb-[77px] pl-[10px]",
                                "flex items-center gap-2 uppercase text-left lg:text-right font-silka-mono",
                            )}
                        >
                            Unsere Produkte
                            <DotIcon className="w-3 h-3 text-[#3B3B3B]" />
                        </p>
                        <div className="flex flex-col text-[#AEAEAE] text-[16px] md:text-[18px] lg:text-[22px]">
                            <Link className="p-[10px]" to="/matratzen">
                                Matratzen
                            </Link>
                            <Link className="p-[10px]" to="/betten">
                                Betten
                            </Link>
                            <Link className="p-[10px]" to="/">
                                Verwandlungsmobel
                            </Link>
                        </div>
                    </div>
                </div>
            </RevealFromBottom>
            <div
                className={cn(
                    SIDE_SPACES.MARGIN_LEFT,
                    "flex flex-col lg:flex-row justify-between gap-6 lg:gap-[53px] items-start lg:items-end",
                )}
            >
                <RevealFromLeft>
                    <div className="pb-0 lg:pb-[90px] min-w-[280px] md:min-w-[325px] w-full lg:w-[325px]">
                        <h3 className="text-[20px] md:text-[23px] lg:text-[26px] text-[#3B3B3B] pb-[15px] md:pb-[20px]">
                            Handgefertigt fur Ihren Schlafkomfort
                        </h3>
                        <p className="text-[#AEAEAE] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                            Unsere Produkte werden mit groesster Sorgfalt
                            gefertigt und auf die Bedurfnisse verschiedener
                            Schlaftypen abgestimmt. Jedes Modell vereint
                            hochwertige Materialien, praezise Verarbeitung und
                            langjahrige Erfahrung unserer Manufaktur.
                        </p>
                    </div>
                </RevealFromLeft>
                <RevealFromRight className="w-full lg:flex-1 lg:min-w-0">
                    <div className="w-full overflow-hidden">
                        <GeneralCarousel
                            items={imageItems}
                            width={carouselItemWidth}
                            ref={carouselRef}
                            className="xl:h-[600px] h-[400px]"
                        />
                        <div className="mt-[53px] flex justify-start w-full gap-5">
                            {/* LEFT BUTTON */}
                            <Button
                                onClick={() => carouselRef.current?.goPrev()}
                                className={cn(
                                    "group",
                                    "bg-white",
                                    "border-[#3B3B3B]",
                                    "border-[2px]",
                                    "px-[12px]",
                                    "py-[12px]",
                                    "transition-colors",
                                    "duration-300",
                                    "hover:bg-[#3B3B3B]",
                                )}
                            >
                                <LeftArrowIcon
                                    className={cn(
                                        "text-[#3B3B3B]",
                                        "transition-colors",
                                        "duration-300",
                                        "group-hover:text-white",
                                    )}
                                />
                            </Button>

                            {/* RIGHT BUTTON */}
                            <Button
                                onClick={() => carouselRef.current?.goNext()}
                                className={cn(
                                    "group",
                                    "bg-[#3B3B3B]",
                                    "border-[#3B3B3B]",
                                    "border-[2px]",
                                    "px-[12px]",
                                    "py-[12px]",
                                    "transition-colors",
                                    "duration-300",
                                    "hover:bg-white",
                                )}
                            >
                                <RightArrowIcon
                                    className={cn(
                                        "text-white",
                                        "transition-colors",
                                        "duration-300",
                                        "group-hover:text-[#3B3B3B]",
                                    )}
                                />
                            </Button>
                        </div>
                    </div>
                </RevealFromRight>
            </div>
        </div>
    );
}
