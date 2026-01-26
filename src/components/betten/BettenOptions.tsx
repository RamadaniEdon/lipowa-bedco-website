import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import Betten1Img from "@assets/betten/betten1.png";
import Betten2Img from "@assets/betten/betten2.png";

import Betten1HoverImg from "@assets/betten/hoverBetten1.png";
import Betten2HoverImg from "@assets/betten/hoverBetten2.png";
import HiddenCardOptionsItem from "../ui/HiddenCardOptionsItem";

export default function MatratzenOptions({
    className,
}: {
    className?: ClassValue;
}) {
    return (
        <div className={cn("flex gap-5 justify-between h-[727px]", className)}>
            <HiddenCardOptionsItem
                className="flex-1 h-full"
                img={Betten1Img}
                hoverImg={Betten1HoverImg}
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
                img={Betten2Img}
                hoverImg={Betten2HoverImg}
                title="Federkernmatratzen"
                description={
                    <div className="flex flex-col gap-[6px]">
                        <p>punktelastisch</p>
                        <p>atmungsaktiv</p>
                        <p>langlebig</p>
                    </div>
                }
            />
        </div>
    );
}
