import { SIDE_SPACES } from "@/lib/commonStyles";
import { cn } from "@/lib/utils";
import DotIcon from "@assets/icons/dot.svg?react";
import Button from "../ui/Button";
import UpRightArrow from "@assets/icons/up-right-arrow.svg?react";

import BlackWhiteImg1 from "@assets/landing-page/black-white-1.png";
import BlackWhiteImg2 from "@assets/landing-page/black-white-2.png";
import BlackWhiteImg3 from "@assets/landing-page/black-white-3.png";

export default function FirstPart() {
    return (
        <div className="pt-12 md:pt-16 lg:pt-20">
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "flex flex-col lg:flex-row justify-between mb-[60px] md:mb-[80px] lg:mb-[7.5rem] gap-8 lg:gap-12",
                )}
            >
                <div className="w-full lg:w-[538px] flex flex-col justify-between gap-6 lg:gap-0">
                    <p
                        className={cn(
                            "text-[16px] md:text-[18px] lg:text-[22px] text-[#3B3B3B]",
                            "flex items-center gap-2 uppercase",
                        )}
                    >
                        <DotIcon className="w-3 h-3 text-[#3B3B3B]" />
                        Über uns
                    </p>
                    <p
                        className={cn(
                            "text-[#AEAEAE] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed",
                        )}
                    >
                        Seit Generationen fertigen wir Produkte mit höchster
                        Sorgfalt und Liebe zum Detail. Unsere Erfahrung,
                        nachhaltigen Materialien und präzise Handarbeit machen
                        jedes Stück einzigartig. Bei uns stehen Qualität,
                        Vertrauen und echter Schlafkomfort im Mittelpunkt.
                    </p>
                </div>
                <div className="w-full lg:w-[42rem]">
                    <p className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-neue-haas font-medium text-[#3B3B3B] leading-tight">
                        Handgefertigte Matratzen, Betten und Polstermöbel&nbsp;
                        <span className="text-[#AEAEAE]">
                            aus unserer Familienmanufaktur –
                        </span>{" "}
                        seit mehr als 100 Jahren.
                    </p>
                    <div className="mt-6 md:mt-8 lg:mt-9 flex gap-2">
                        <Button className="border-[#3B3B3B] text-[14px] md:text-[16px] lg:text-[18px] px-4 md:px-6 py-2 md:py-3">
                            Über uns
                        </Button>
                        <Button
                            className={cn(
                                "bg-[#3B3B3B] px-[12px] md:px-[15px] py-[12px] md:py-[15px]",
                            )}
                        >
                            <UpRightArrow className="text-white text-[14px] md:text-[16px] lg:text-[18px]" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4 lg:gap-5 mb-[60px] md:mb-[80px] lg:mb-[7.5rem] h-auto sm:h-[300px] md:h-[400px] lg:h-[505px]">
                <img
                    className="w-full sm:w-1/3 object-cover h-[250px] sm:h-full"
                    src={BlackWhiteImg1}
                    alt=""
                ></img>
                <img
                    className="w-full sm:w-1/3 object-cover h-[250px] sm:h-full"
                    src={BlackWhiteImg2}
                    alt=""
                ></img>
                <img
                    className="w-full sm:w-1/3 object-cover h-[250px] sm:h-full"
                    src={BlackWhiteImg3}
                    alt=""
                ></img>
            </div>
        </div>
    );
}
