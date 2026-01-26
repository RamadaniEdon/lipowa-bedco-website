import { SIDE_SPACES } from "@/lib/commonStyles";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

import DotIcon from "@/assets/icons/dot.svg?react";
import UpRightArrowIcon from "@/assets/icons/up-right-arrow.svg?react";

import Button from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import MatratzenOneVariants from "@/components/matratzen/one/MatratzenOneVariants";
import PremiumOptions from "@/components/matratzen/one/PremiumOptions";
import AccordionOneWithMatratzenImages from "@/components/matratzen/one/AccordionWithMatratzenOneImages";

export default function SomeMatratzen({
    className,
}: {
    className?: ClassValue;
}) {
    return (
        <div className={cn(className)}>
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "flex justify-between items-end mb-[120px] gap-10",
                )}
            >
                <p className="max-w-[520px] text-[22px] text-[#AEAEAE]">
                    Atmosphäre zu verlieren. Stabil und zugleich komfortabel,
                    halten sie spielerische Morgen, ruhige
                </p>
                <h1 className="text-[80px] font-silka-mono text-[#232A11] uppercase leading-none">
                    Kaltschaummatratzen
                </h1>
            </div>
            <MatratzenOneVariants
                className={cn(SIDE_SPACES.MARGIN, "mb-[120px]")}
            />

            <div className="bg-[#ECECEC]">
                <PremiumOptions
                    className={cn(SIDE_SPACES.MARGIN, "py-[120px] mb-[120px]")}
                />
            </div>

            <AccordionOneWithMatratzenImages
                className={cn(SIDE_SPACES.MARGIN)}
            />
            <hr className="my-[120px]" />
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "flex justify-between text-[#3B3B3B] items-center",
                )}
            >
                <p className="flex items-center gap-2 text-[22px] uppercase font-silka-mono">
                    <DotIcon className="" />
                    faq
                </p>
                <p className="text-[72px]">Fragen? Wir helfen gern weiter</p>
                <div className="group flex text-[18px] items-center mt-4">
                    <Button
                        className="
                        px-[30px] py-[11px]
                        border border-[#3B3B3B]
                        text-[#3B3B3B]
                        transition-all duration-300
                        group-hover:bg-[#3B3B3B]
                        group-hover:text-white
                        "
                    >
                        KONTAKT
                    </Button>

                    <Button
                        className="
                        rounded-full p-[16px]
                        border border-[#3B3B3B]
                        bg-[#3B3B3B]
                        text-white
                        transition-all duration-300
                        group-hover:bg-white
                        group-hover:text-[#3B3B3B]
                        "
                    >
                        <UpRightArrowIcon className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <hr className="my-[86px]" />
            <div className={cn(SIDE_SPACES.MARGIN, "mb-[180px]")}>
                <div className="flex gap-[112px]">
                    <p className="font-silka-mono text-[22px] uppercase text-[#AEAEAE] mt-[43px] w-[200px]">
                        Materialien + Qualitaet
                    </p>
                    <Accordion
                        className="flex-1"
                        items={[
                            {
                                id: "1",
                                title: "Welche Materialien verwenden Sie in Ihren Matratzen?",
                                content:
                                    "A1 (DE): Wir verwenden ausgesuchte Schaeume, atmungsaktive Stoffe und langlebige Füllmaterialien, die Komfort, Haltbarkeit und gesundheitliche Verträglichkeit vereinen. Sämtliche Komponenten stammen überwiegend von deutschen Lieferanten, was gleichbleibende Qualität garantiert. Die Materialien sollen ihre Form behalten, die Wirbelsaeule optimal stützen und ein ausgeglichenes Schlafklima schaffen.",
                            },
                            {
                                id: "2",
                                title: "Sind Ihre Materialien zertifiziert und sicher?",
                                content:
                                    "Ja. Sämtliche Stoffe, Schaeume und Füllmaterialien werden streng auf Sicherheit, Emissionen und Haltbarkeit geprüft. Wir arbeiten ausschließlich mit Lieferanten zusammen, die anerkannte deutsche und europäische Zertifizierungen erfüllen. Dadurch sind die Materialien hypoallergen, hautfreundlich und frei von schädlichen Stoffen – ideal für empfindliche Schlaefer oder Allergiker.",
                            },
                            {
                                id: "3",
                                title: "Sind die Materialien für Allergiker geeignet?",
                                content:
                                    "Ja. Viele unserer Bezuege und Fuellungen sind gezielt auf Atmungsaktivitaet und Hautfreundlichkeit ausgewaehlt. Wir beraten Sie auch, welche Kombinationen für Allergien oder besondere Ansprueche am besten geeignet sind.",
                            },
                        ]}
                        hideLastBorder
                    />
                </div>
                <hr className="my-[70px]" />
                <div className="flex gap-[112px]">
                    <p className="font-silka-mono text-[22px] uppercase text-[#AEAEAE] mt-[43px] w-[200px]">
                        Größen + Anpassung
                    </p>
                    <Accordion
                        className="flex-1"
                        items={[
                            {
                                id: "1",
                                title: "Welche Matratzengroessen bieten Sie an?",
                                content:
                                    "Wir bieten alle gängigen EU-Groessen an – von Einzel- bis Kingsize. Da wir komplett im eigenen Haus fertigen, können wir auch Höhen, Sonderformen oder individuelle Maße anpassen. So stellen wir sicher, dass jede Matratze perfekt passt und keine Kompromisse nötig sind.",
                            },
                            {
                                id: "2",
                                title: "Wie finde ich die richtige Haerte?",
                                content:
                                    "Der passende Haertegrad haengt von mehreren Faktoren ab: Koerpergewicht, Koerpergroesse, Schlafposition und Ihrem persoenlichen Komfortgefühl. Seitenschlaefer profitieren oft von etwas weicheren Unterlagen, waehrend Bauch- und Rueckenschlaefer mehr Stützung benoetigen. In einer Beratung koennen Sie verschiedene Haertegrade ausprobieren, sodass wir gemeinsam die optimale Loesung für langfristigen Schlafkomfort finden.",
                            },
                        ]}
                        hideLastBorder
                    />
                </div>
            </div>
            <div className="overflow-hidden w-full">
                <div className="flex whitespace-nowrap animate-marquee">
                    <div className="text-[#AEAEAE] uppercase text-[32px] pr-10">
                        Qualität • Komfort • Handwerkskunst, die bleibt • Für
                        perfekten Schlaf entworfen • Lokal hergestellt •
                        Ergonomisch und nachhaltig •
                    </div>

                    {/* Duplicate for seamless loop */}
                    <div className="text-[#AEAEAE] uppercase text-[32px] pr-10">
                        Qualität • Komfort • Handwerkskunst, die bleibt • Für
                        perfekten Schlaf entworfen • Lokal hergestellt •
                        Ergonomisch und nachhaltig •
                    </div>
                </div>
            </div>
        </div>
    );
}
