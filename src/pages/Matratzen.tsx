import AccordionWithMatratzenImages from "@/components/matratzen/AccordionWithMatratzenImages";
import MatratzenOptions from "@/components/matratzen/MatratzenOptions";
import { SIDE_SPACES } from "@/lib/commonStyles";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import DotIcon from "@/assets/icons/dot.svg?react";
import UpRightArrowIcon from "@/assets/icons/up-right-arrow.svg?react";

import MovingCarousel1Img from "@assets/matratzen/movingCarousel1.png";
import MovingCarousel2Img from "@assets/matratzen/movingCarousel2.png";
import MovingCarousel3Img from "@assets/matratzen/movingCarousel3.png";
import MovingCarousel4Img from "@assets/matratzen/movingCarousel4.png";
import MovingCarousel from "@/components/matratzen/MovingCarousel";
import Button from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

export default function Matratzen({ className }: { className?: ClassValue }) {
    return (
        <div className={cn(className)}>
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "flex justify-between items-end mb-[120px] gap-10",
                )}
            >
                <h1 className="text-[140px] font-silka-mono text-[#232A11] uppercase leading-none">
                    Matratzen
                </h1>
                <div className="max-w-[667px] flex flex-col gap-[16px]">
                    <p className="text-[46px] text-[#AEAEAE] font-medium">
                        In de{" "}
                        <span className="text-[#3B3B3B]">traditionele</span>{" "}
                        bouw zijn
                    </p>
                    <p className="text-[22px] text-[#AEAEAE] font-medium">
                        Bouw zijn de bouwprocessen zodanig dat er vaak optimaal
                        eindproduct ontstaat. In de traditio
                    </p>
                </div>
            </div>
            <MatratzenOptions
                className={cn(SIDE_SPACES.MARGIN, "mb-[131px]")}
            />
            <p
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "text-[72px] text-[#AEAEAE] max-w-[1300px]",
                )}
            >
                Bei jeder Matratze achten wir auf{" "}
                <span className="text-[#3B3B3B]">Qualität, Komfort</span> und{" "}
                <span className="text-[#3B3B3B]">Liebe zum Detail.</span>
            </p>
            <hr className="bg-[#AEAEAE] my-[80px]" />

            <AccordionWithMatratzenImages
                className={cn(SIDE_SPACES.MARGIN, "mb-[120px]")}
            />
            <div className="bg-[#2F2F2F] mb-[120px] py-[120px] text-white">
                <div className={cn(SIDE_SPACES.MARGIN, "mb-[120px]")}>
                    <p className="text-right flex justify-end items-center gap-2 uppercase font-silka-mono text-[22px] mb-[60px]">
                        Our timeline{" "}
                        <DotIcon className="text-white w-3 h-3 overflow-visible" />
                    </p>
                    <p className="text-[72px] text-right">
                        Echter Schlafkomfort beginnt mit Handwerk.
                        <br /> Erleben Sie, wie hochwertige Materialien und
                        präzise Verarbeitung Ihren Schlaf verbessern.
                    </p>
                </div>
                <MovingCarousel
                    images={[
                        MovingCarousel1Img,
                        MovingCarousel2Img,
                        MovingCarousel3Img,
                        MovingCarousel4Img,
                    ]}
                />
                <div
                    className={cn(
                        SIDE_SPACES.MARGIN,
                        "flex justify-between text-[18px] text-[#AEAEAE] leading-[30px] gap-[150px]",
                    )}
                >
                    <p>
                        Bouw zijn de bouwprocessen zodanig dat er vaak optimaal
                        eindproduct ontstaat. In de traditionele bouw zijn de
                        bouwprocessen zodanig gefragmenteerd dat er vaak
                        optimaal eindproduct timaal eindproduct ontstaat. In de
                        traditionele. Bouw zijn de bouwprocessen zodanig dat er
                        vaak optimaal eindproduct ontstaat. In de traditionele
                        bouw zijn de bouwprocessen zodanig gefragmenteerd dat er
                        vaak optimaal eindproduct timaal eindproduct ontstaat.
                        In de traditionele.
                    </p>
                    <p>
                        Bouw zijn de bouwprocessen zodanig dat er vaak optimaal
                        eindproduct ontstaat. In de traditionele bouw zijn de
                        bouwprocessen zodanig gefragmenteerd dat er vaak
                        optimaal eindproduct timaal eindproduct ontstaat. In de
                        traditionele. Bouw zijn de bouwprocessen zodanig dat er
                        vaak optimaal eindproduct ontstaat. In de traditionele
                        bouw zijn de bouwprocessen zodanig gefragmenteerd dat er
                        vaak optimaal eindproduct timaal eindproduct ontstaat.
                        In de traditionele.
                    </p>
                </div>
            </div>
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
