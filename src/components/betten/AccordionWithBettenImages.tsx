import { AccordionWithImages } from "@components/ui/AccordionWithImages";
import { cn } from "@lib/utils";
import { type ClassValue } from "clsx";
import betten1 from "@assets/matratzen/movingCarousel3.png";
import betten2 from "@assets/matratzen/accordion2.png";
import betten3 from "@assets/matratzen/accordion3.png";

const bettenItems = [
    {
        id: "Nachhaltigkeit + Wir",
        title: "Nachhaltigkeit + Wir",
        content:
            "Wir achten auf umweltfreundliche und langlebige Produktion. Materialien und Fertigung sind sorgfältig ausgewählt, um Abfall zu minimieren.",
        image: betten1,
    },
    {
        id: "Inspiration + Innovation",
        title: "Inspiration + Innovation",
        content:
            "Unsere Designs verbinden Tradition und Innovation. Jahrzehntelange Handwerkskunst und Ergonomie inspirieren uns, Matratzen zu schaffen, die optimalen Schlafkomfort bieten.",
        image: betten2,
    },
    {
        id: "Maße + Preise",
        title: "Maße + Preise",
        content:
            "Alle Matratzen sind in Standardgrößen erhältlich und können nach Wunsch angepasst werden. Wir bieten transparente Preise und individuelle Lösungen für jeden Bedarf.",
        image: betten3,
    },
];

export default function AccordionWithBettenImages({
    className,
}: {
    className?: ClassValue;
}) {
    return (
        <div className={cn(className)}>
            <AccordionWithImages items={bettenItems} />
        </div>
    );
}
