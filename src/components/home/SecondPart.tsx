import { SIDE_SPACES } from "@/lib/commonStyles";
import { cn } from "@/lib/utils";
import DotIcon from "@assets/icons/dot.svg?react";
import { Link } from "react-router";
import Carousel from "./Carousel";
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

export default function SecondPart() {
    return (
        <div className="bg-[#ECECEC] py-[60px] md:py-[80px] lg:py-[120px]">
            <RevealFromBottom>
                <div
                    className={cn(
                        SIDE_SPACES.MARGIN,
                        "pb-[30px] md:pb-[45px] lg:pb-[60px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8",
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
                    <div className="flex flex-col min-w-[120px] md:min-w-[144px]">
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
                            <Link className="p-[10px]" to="/">
                                Matratzen
                            </Link>
                            <Link className="p-[10px]" to="/">
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
                <RevealFromRight>
                    <Carousel
                        images={[Img1, Img2, Img3, Img4, Img5]}
                        // className="w-[50%]"
                    />
                </RevealFromRight>
            </div>
        </div>
    );
}
