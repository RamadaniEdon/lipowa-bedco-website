import { AccordionWithImages } from "@components/ui/AccordionWithImages";
import { cn } from "@lib/utils";
import { type ClassValue } from "clsx";
import matratzen1 from "@assets/matratzen/one/accordion1.png";
import matratzen2 from "@assets/matratzen/one/accordion2.png";
import matratzen3 from "@assets/matratzen/one/accordion3.png";
import matratzen4 from "@assets/matratzen/one/accordion4.png";

const matratzenItems = [
    {
        id: "Anpassung an den Körper",
        title: "Anpassung an den Körper",
        content:
            "Unsere Kaltschaummatratzen reagieren auf Druck und Körperwärme, wodurch sie jede Bewegung ausgleichen und idealen Halt bieten.",
        image: matratzen1,
    },
    {
        id: "Druckentlastung",
        title: "Druckentlastung",
        content:
            "Der hochwertige Schaum reduziert Druckpunkte und sorgt dafür, dass Schultern, Hüfte und Rücken entspannen können.",
        image: matratzen2,
    },
    {
        id: "Atmungsaktiv und hygienisch",
        title: "Atmungsaktiv und hygienisch",
        content:
            "Die offenporige Struktur der Matratze sorgt für Luftzirkulation und ein trockenes Schlafklima, was Hausstaubmilben reduziert.",
        image: matratzen3,
    },
    {
        id: "Langlebig und formstabil",
        title: "Langlebig und formstabil",
        content:
            "Kaltschaummatratzen behalten ihre Form über Jahre hinweg, ohne durchzuhängen oder an Komfort zu verlieren.",
        image: matratzen4,
    },
];

export default function AccordionOneWithMatratzenImages({
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
