import HiddenItemWithDescription from "@/components/ui/HiddenItemWithDescription";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

import Image1 from "@assets/matratzen/one/white-variant1.png";
import Image2 from "@assets/matratzen/one/white-variant2.png";

export default function PremiumOptions({
    className,
}: {
    className?: ClassValue;
}) {
    return (
        <div className={cn("grid grid-cols-3 grid-rows-1 gap-5", className)}>
            <div className="mr-[100px] flex flex-col justify-end">
                <h3 className="text-[46px] text-[#3B3B3B] mb-[60px] font-medium ">
                    Kaltschaummatratzen Premium
                    <br />
                    <br />
                    <span className="text-[#AEAEAE]">Alo alo gnau ja.</span>
                </h3>
                <p className="text-[18px] text-[#3B3B3B]">
                    Unsere Familienbetten sind sowohl für Eltern als auch Kinder
                    konzipiert und bieten viel Platz für alle, ohne dabei
                    Gemütlichkeit und einladende
                    <br /> <br />
                    <span className="text-[#AEAEAE]">
                        Atmosphäre zu verlieren. Stabil und zugleich
                        komfortabel, halten sie spielerische Morgen, ruhige
                        Lesezeiten und erholsame Nächte aus und schaffen so
                        einen vielseitigen Raum für den Familienalltag.
                    </span>
                    <br />
                </p>
            </div>
            <HiddenItemWithDescription
                className="h-[727px] bg-white"
                img={Image1}
                title="Mediplus"
                description={
                    <p className="text-[20px] text-[#AEAEAE]">
                        7 Zonen Kaltschaummatratze mit aufgelöster
                        Profiloberfläche.
                        <br />
                        <br />
                        Diese Kaltschaummatratze bietet mit ihrem Würfelschnitt
                        und ihrer profilierten Oberfläche ein Höchstmaß an
                        Anpassungsfähigkeit. Die Kernhöhe dieser Matratze
                        beträgt 18 cm (Raumgewicht 55).
                        <br />
                        <br />
                        Härtegradempfehlung:
                        <br />
                        <br />
                        <strong className="text-white">Härtegrad 2</strong>{" "}
                        <i>(ca. 50 kg bis ca. 75 kg Körpergewicht)</i>
                        <br />
                        <strong className="text-white">Härtegrad 3</strong>{" "}
                        <i>(ca. 75 kg bis ca. 90 kg Körpergewicht)</i>
                        <br />
                        <strong className="text-white">Härtegrad 4</strong>{" "}
                        <i>(ca. 90 kg bis ca. 110 kg Körpergewicht)</i>
                    </p>
                }
            />
            <HiddenItemWithDescription
                className="h-[727px] bg-white"
                img={Image2}
                title="Elegance"
                description={
                    <p className="text-[20px] text-[#AEAEAE]">
                        7 Zonen Kaltschaummatratze mit hochelastischem
                        Schulterschnitt und spezieller Lordose-Einlage.
                        <br />
                        <br />
                        Diese exzellente Kaltschaummatratze wurde insbesondere
                        für Personen mit Schulterproblemen entwickelt.Der
                        spezielle Schulterschnitt in Verbindung mit einer
                        Lordose-Einlage im Taillenbereich verspricht ein
                        Höchstmaß an Anschmiegsamkeit, besonders im
                        Schulterbereich, aber auch in allen anderen Körperzonen.
                        Die Kernhöhe dieser Matratze beträgt 20 cm (Raumgewicht
                        55).
                        <br />
                        <br />
                        Härtegradempfehlung:
                        <br />
                        <br />
                        <strong className="text-white">Härtegrad 2</strong>{" "}
                        <i>(ca. 50 kg bis ca. 75 kg Körpergewicht)</i>
                        <br />
                        <strong className="text-white">Härtegrad 3</strong>{" "}
                        <i>(ca. 75 kg bis ca. 90 kg Körpergewicht)</i>
                        <br />
                        <strong className="text-white">Härtegrad 4</strong>{" "}
                        <i>(ca. 90 kg bis ca. 110 kg Körpergewicht)</i>
                    </p>
                }
            />
        </div>
    );
}
