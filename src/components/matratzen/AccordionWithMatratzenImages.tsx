import { AccordionWithImages } from "@components/ui/AccordionWithImages";
import { cn } from "@lib/utils";
import { type ClassValue } from "clsx";
import matratzen1 from "@assets/matratzen/accordion1.png";
import matratzen2 from "@assets/matratzen/accordion2.png";
import matratzen3 from "@assets/matratzen/accordion3.png";

const matratzenItems = [
    {
        id: "Nachhaltigkeit + Wir",
        title: "Nachhaltigkeit + Wir",
        content:
            "Wir achten auf umweltfreundliche und langlebige Produktion. Materialien und Fertigung sind sorgfältig ausgewählt, um Abfall zu minimieren.",
        image: matratzen1,
    },
    {
        id: "Inspiration + Innovation",
        title: "Inspiration + Innovation",
        content:
            "Unsere Designs verbinden Tradition und Innovation. Jahrzehntelange Handwerkskunst und Ergonomie inspirieren uns, Matratzen zu schaffen, die optimalen Schlafkomfort bieten.",
        image: matratzen2,
    },
    {
        id: "Maße + Preise",
        title: "Maße + Preise",
        content:
            "Alle Matratzen sind in Standardgrößen erhältlich und können nach Wunsch angepasst werden. Wir bieten transparente Preise und individuelle Lösungen für jeden Bedarf.",
        image: matratzen3,
    },
];

export default function AccordionWithMatratzenImages({
    className,
}: {
    className?: ClassValue;
}) {
    return (
        <div className={cn(className)}>
            <AccordionWithImages items={matratzenItems} />
        </div>
    );
}
