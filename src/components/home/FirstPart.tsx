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
        <div className="pt-20">
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "flex justify-between mb-[7.5rem]",
                )}
            >
                <div className="w-[538px] flex flex-col justify-between">
                    <p
                        className={cn(
                            "text-[22px] text-[#3B3B3B]",
                            "flex items-center gap-2 uppercase",
                        )}
                    >
                        <DotIcon className="w-3 h-3 text-[#3B3B3B]" />
                        Über uns
                    </p>
                    <p className={cn("text-[#AEAEAE] text-[18px]")}>
                        Seit Generationen fertigen wir Produkte mit höchster
                        Sorgfalt und Liebe zum Detail. Unsere Erfahrung,
                        nachhaltigen Materialien und präzise Handarbeit machen
                        jedes Stück einzigartig. Bei uns stehen Qualität,
                        Vertrauen und echter Schlafkomfort im Mittelpunkt.
                    </p>
                </div>
                <div className="w-[42rem]">
                    <p className="text-[46px] font-neue-haas font-medium text-[#3B3B3B]">
                        Handgefertigte Matratzen, Betten und Polstermöbel&nbsp;
                        <span className="text-[#AEAEAE]">
                            aus unserer Familienmanufaktur –
                        </span>{" "}
                        seit mehr als 100 Jahren.
                    </p>
                    <div className="mt-9">
                        <Button className="border-[#3B3B3B] text-[18px]">
                            Über uns
                        </Button>
                        <Button
                            className={cn("bg-[#3B3B3B] px-[15px] py-[15px]")}
                        >
                            <UpRightArrow className="text-white text-[18px]" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-5 mb-[7.5rem] h-[505px]">
                <img
                    className="w-1/3 object-cover "
                    src={BlackWhiteImg1}
                    alt=""
                ></img>
                <img
                    className="w-1/3 object-cover "
                    src={BlackWhiteImg2}
                    alt=""
                ></img>
                <img
                    className="w-1/3 object-cover "
                    src={BlackWhiteImg3}
                    alt=""
                ></img>
            </div>
        </div>
    );
}
