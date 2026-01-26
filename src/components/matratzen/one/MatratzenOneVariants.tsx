import HiddenItemWithDescription from "@/components/ui/HiddenItemWithDescription";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

import Image1 from "@assets/matratzen/one/variant1.png";
import Image2 from "@assets/matratzen/one/variant2.png";
import Image3 from "@assets/matratzen/one/variant3.png";
import Image4 from "@assets/matratzen/one/variant4.png";
import Image5 from "@assets/matratzen/one/variant5.png";

export default function MatratzenOneVariants({
    className,
}: {
    className?: ClassValue;
}) {
    return (
        <div className={cn("grid grid-cols-3 grid-rows-2 gap-5", className)}>
            <div className="pr-[95px] flex flex-col justify-end">
                <h3 className="text-[46px] text-[#3B3B3B] mb-[60px]">
                    Komfort durch Kaltschaum
                </h3>
                <p className="text-[18px] text-[#AEAEAE]">
                    Kaltschaummatratzen bieten eine ausgewogene Kombination aus
                    Stützkraft und Anpassungsfähigkeit. Dank ihrer
                    punktelastischen Struktur reagieren sie präzise auf jede
                    Körperzone und sorgen für ein angenehmes, ruhiges
                    Liegegefühl.
                    <br />
                    <br />
                    Unsere Modelle werden in sorgfältiger Handarbeit gefertigt
                    und sind in verschiedenen Höhen, Schnitten und Härtegraden
                    erhältlich.
                </p>
            </div>
            <HiddenItemWithDescription
                className="h-[727px]"
                img={Image1}
                title="Lipoflex"
                description={
                    <p className="text-[20px] text-[#AEAEAE]">
                        7 Zonen Kaltschaummatratze mit ergonimischem
                        Längsprofilschnitt.
                        <br />
                        <br />
                        Die Lipoflex ist unser Einsteigermodell mit
                        hervorragenden Liegeeigenschaften.
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
                    </p>
                }
            />
            <HiddenItemWithDescription
                className="h-[727px]"
                img={Image2}
                title="Prestige"
                description={
                    <p className="text-[20px] text-[#AEAEAE]">
                        7 Zonen Kaltschaummatratze mit punktelastischem
                        Würfelschnitt.
                        <br />
                        <br />
                        Der Würfelschnitt in Zonenausführung bietet hohe
                        Anpassungsfähigkeit und körpergerechte Punktelastizität.
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
                    </p>
                }
            />
            <HiddenItemWithDescription
                className="h-[727px]"
                img={Image3}
                title="Flex"
                description={
                    <p className="text-[20px] text-[#AEAEAE]">
                        7 Zonen Kaltschaummatratze mit kanalisiertem
                        Schulterschnitt.
                        <br />
                        <br />
                        Diese Kaltschaummatratze im Raumgewicht 55 und dem
                        besonderen Zonenquerschnitt bietet in den jeweiligen
                        Härtegraden ein eher strafferes Liegegefühl.
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
                className="h-[727px]"
                img={Image4}
                title="Sanimed"
                description={
                    <p className="text-[20px] text-[#AEAEAE]">
                        7 Zonen Kaltschaummatratze mit ergonomischem
                        Tropfenschnitt.
                        <br />
                        <br />
                        Diese Kaltschaummatratze in Kernhöhe 16 cm (Raumgewicht
                        55) ermöglicht durch ihren hervorragenden Längs- und
                        Querschnitt in 7 Zonen-Ausführung höchste
                        Anpassungsfähigkeit an die unterschiedlichen
                        Körperzonen. Sie garantiert ein ergonomisches Schlafen
                        in jeder Liegeposition.
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
                    </p>
                }
            />
            <HiddenItemWithDescription
                className="h-[727px]"
                img={Image5}
                title="Sanimed de Luxe"
                description={
                    <p className="text-[20px] text-[#AEAEAE]">
                        7 Zonen Kaltschaummatratze mit ergonomischem
                        Tropfenschnitt in Komforthöhe.
                        <br />
                        <br />
                        Diese Kaltschaummatratze präsentiert die hervorragenden
                        Eigenschaften des Modells Sanimed in einer Komforthöhe
                        von 18 cm
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
                    </p>
                }
            />
        </div>
    );
}
