import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import Matratzen1Img from "@assets/matratzen/matratzen1.png";
import Matratzen2Img from "@assets/matratzen/matratzen2.png";
import Matratzen3Img from "@assets/matratzen/matratzen3.png";
import Matratzen4Img from "@assets/matratzen/matratzen4.png";

import Matratzen1HoverImg from "@assets/landing-page/langing-page-carousel-4.png";
import Matratzen2HoverImg from "@assets/header/header-1.png";
import Matratzen3HoverImg from "@assets/matratzen/childmatratzen.png";
import Matratzen4HoverImg from "@assets/landing-page/sit-on-bed.png";
import HiddenCardOptionsItem from "../ui/HiddenCardOptionsItem";

export default function MatratzenOptions({
    className,
}: {
    className?: ClassValue;
}) {
    return (
        <div
            className={cn(
                "flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-3 md:gap-4 lg:gap-5 justify-between h-auto sm:h-[500px] md:h-[600px] lg:h-[727px]",
                className,
            )}
        >
            <HiddenCardOptionsItem
                className="flex-1 h-full"
                img={Matratzen1Img}
                hoverImg={Matratzen1HoverImg}
                title="Kaltschaummatratzen"
                description={
                    <div className="flex flex-col gap-[6px]">
                        <p>ergonomisch</p>
                        <p>komfortabel</p>
                        <p>7 Zonen</p>
                    </div>
                }
            />
            <HiddenCardOptionsItem
                className="flex-1 h-full"
                img={Matratzen2Img}
                hoverImg={Matratzen2HoverImg}
                title="Federkernmatratzen"
                description={
                    <div className="flex flex-col gap-[6px]">
                        <p>punktelastisch</p>
                        <p>atmungsaktiv</p>
                        <p>langlebig</p>
                    </div>
                }
            />
            <HiddenCardOptionsItem
                className="flex-1 h-full"
                img={Matratzen3Img}
                hoverImg={Matratzen3HoverImg}
                title="Kindermatratzen"
                description={
                    <div className="flex flex-col gap-[6px]">
                        <p>kindgerecht</p>
                        <p>stützend</p>
                        <p>langlebig</p>
                    </div>
                }
            />
            <HiddenCardOptionsItem
                className="flex-1 h-full"
                img={Matratzen4Img}
                hoverImg={Matratzen4HoverImg}
                title="Matratzenbezüge"
                description={
                    <div className="flex flex-col gap-[6px]">
                        <p>waschbar · </p>
                        <p>allergikerfreundlich</p>
                        <p>verschiedene Stoffe</p>
                    </div>
                }
            />
        </div>
    );
}
