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

export default function SecondPart() {
    return (
        <div className="bg-[#ECECEC] py-[120px]">
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "pb-[60px] flex justify-between items-end",
                )}
            >
                <p
                    className={cn(
                        "text-[#3B3B3B] text-[72px] w-/5 max-w-[1303px]",
                    )}
                >
                    <span className="text-[#AEAEAE]">
                        Bei jeder Matratze achten wir auf
                    </span>{" "}
                    Qualität, Komfort{" "}
                    <span className="text-[#AEAEAE]">und</span> Liebe zum
                    Detail.
                </p>
                <div className="flex flex-col min-w-36">
                    <p
                        className={cn(
                            "text-[22px] text-[#3B3B3B] mb-[77px] pl-[10px]",
                            "flex items-center gap-2 uppercase text-right font-silka-mono",
                        )}
                    >
                        Unsere Produkte
                        <DotIcon className="w-3 h-3 text-[#3B3B3B]" />
                    </p>
                    <div className="flex flex-col text-[#AEAEAE] text-[22px]">
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
            <div
                className={cn(
                    SIDE_SPACES.MARGIN_LEFT,
                    "flex justify-between gap-[53px] items-end",
                )}
            >
                <div className="pb-[90px] min-w-[330px] w-[325px]">
                    <h3 className="text-[26px] text-[#3B3B3B] pb-[20px]">
                        Handgefertigt fur Ihren Schlafkomfort
                    </h3>
                    <p className="text-[#AEAEAE] text-[18px]">
                        Unsere Produkte werden mit groesster Sorgfalt gefertigt
                        und auf die Bedurfnisse verschiedener Schlaftypen
                        abgestimmt. Jedes Modell vereint hochwertige
                        Materialien, praezise Verarbeitung und langjahrige
                        Erfahrung unserer Manufaktur.
                    </p>
                </div>
                <Carousel
                    images={[Img1, Img2, Img3, Img4, Img5]}
                    // className="w-[50%]"
                />
            </div>
        </div>
    );
}
