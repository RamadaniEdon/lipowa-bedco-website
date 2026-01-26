import { SIDE_SPACES } from "@/lib/commonStyles";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

import DotIcon from "@/assets/icons/dot.svg?react";
import UpRightArrowIcon from "@/assets/icons/up-right-arrow.svg?react";

import MovingCarousel1Img from "@assets/matratzen/movingCarousel1.png";
import MovingCarousel2Img from "@assets/matratzen/movingCarousel2.png";
import MovingCarousel3Img from "@assets/matratzen/movingCarousel3.png";
import MovingCarousel4Img from "@assets/matratzen/movingCarousel4.png";

import BettenOptions from "@/components/betten/BettenOptions";
import MovingCarousel from "@/components/matratzen/MovingCarousel";
import Button from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import AccordionWithBettenImages from "@/components/betten/AccordionWithBettenImages";

export default function Betten({ className }: { className?: ClassValue }) {
    return (
        <div className={cn(className)}>
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "flex flex-col md:flex-row justify-between items-start md:items-end mb-[60px] md:mb-[80px] lg:mb-[120px] gap-6 md:gap-8 lg:gap-10",
                )}
            >
                <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-silka-mono text-[#232A11] uppercase leading-none">
                    Betten
                </h1>
                <div className="max-w-[667px] flex flex-col gap-[12px] md:gap-[16px] text-left md:text-right">
                    <p className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[46px] text-[#AEAEAE] font-medium leading-tight">
                        Betten,{" "}
                        <span className="text-[#3B3B3B]">die Komfort</span>
                    </p>
                    <p className="text-[16px] md:text-[18px] lg:text-[22px] text-[#AEAEAE] font-medium">
                        In unserer Manufaktur in Edingen gefertigt, entsteht
                        jedes Bett nach Ihren Wünschen.
                    </p>
                </div>
            </div>
            <BettenOptions
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "mb-[60px] md:mb-[80px] lg:mb-[131px]",
                )}
            />
            <p
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] text-[#AEAEAE] text-left md:text-right leading-tight",
                )}
            >
                Jedes Bett lässt sich in{" "}
                <span className="text-[#3B3B3B]">Größe und Stoff</span>{" "}
                individuell gestalten – für Ihren persönlichen{" "}
                <span className="text-[#3B3B3B]">Komfort und Stil.</span>
            </p>
            <hr className="bg-[#AEAEAE] my-[40px] md:my-[60px] lg:my-[80px]" />

            <AccordionWithBettenImages
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "mb-[60px] md:mb-[80px] lg:mb-[120px]",
                )}
            />
            <div className="bg-[#2F2F2F] mb-[60px] md:mb-[80px] lg:mb-[120px] py-[60px] md:py-[80px] lg:py-[120px] text-white">
                <div
                    className={cn(
                        SIDE_SPACES.MARGIN,
                        "mb-[60px] md:mb-[80px] lg:mb-[120px]",
                    )}
                >
                    <p className="text-left md:text-right flex md:justify-end text-white items-center gap-2 uppercase font-silka-mono text-[16px] md:text-[18px] lg:text-[22px] mb-[30px] md:mb-[40px] lg:mb-[60px]">
                        <DotIcon className="text-white w-3 h-3 overflow-visible" />
                        <span className="text-white">Family Beds</span>
                    </p>
                    <p className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] leading-tight text-left md:text-right">
                        Familienbetten für gemeinsame Momente, gemütliche Morgen
                        und erholsame Nächte – für Komfort und Zusammenhalt in
                        Ihrem Zuhause.
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
                        "flex flex-col md:flex-row justify-between text-[16px] md:text-[18px] text-[#AEAEAE] leading-[26px] md:leading-[30px] gap-8 md:gap-[100px] lg:gap-[150px]",
                    )}
                >
                    <p>
                        Unsere Familienbetten sind sowohl für Eltern als auch
                        Kinder konzipiert und bieten viel Platz für alle, ohne
                        dabei Gemütlichkeit und einladende Atmosphäre zu
                        verlieren. Stabil und zugleich komfortabel, halten sie
                        spielerische Morgen, ruhige Lesezeiten und erholsame
                        Nächte aus und schaffen so einen vielseitigen Raum für
                        den Familienalltag.
                    </p>
                    <p>
                        Erhältlich in verschiedenen Größen und Ausführungen,
                        lässt sich jedes Bett perfekt an Ihr Zuhause und Ihren
                        Lebensstil anpassen. Handgefertigt mit derselben Liebe
                        zum Detail wie unsere anderen Betten, erfüllen sie die
                        hohen Standards von Lipowa in puncto Komfort,
                        Langlebigkeit und Qualität und werden so zu einem
                        langlebigen Mittelpunkt des Familienlebens.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "flex flex-col md:flex-row justify-between text-[#3B3B3B] items-start md:items-center gap-4 md:gap-6",
                )}
            >
                <p className="flex items-center gap-2 text-[16px] md:text-[18px] lg:text-[22px] uppercase font-silka-mono">
                    <DotIcon className="" />
                    faq
                </p>
                <p className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] leading-tight">
                    Fragen? Wir helfen gern weiter
                </p>
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
            <hr className="my-[40px] md:my-[60px] lg:my-[86px]" />
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "mb-[80px] md:mb-[120px] lg:mb-[180px]",
                )}
            >
                <div className="flex flex-col md:flex-row gap-6 md:gap-[60px] lg:gap-[112px]">
                    <p className="font-silka-mono text-[16px] md:text-[18px] lg:text-[22px] uppercase text-[#AEAEAE] mt-0 md:mt-[43px] w-full md:w-[200px]">
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
                <hr className="my-[40px] md:my-[50px] lg:my-[70px]" />
                <div className="flex flex-col md:flex-row gap-6 md:gap-[60px] lg:gap-[112px]">
                    <p className="font-silka-mono text-[16px] md:text-[18px] lg:text-[22px] uppercase text-[#AEAEAE] mt-0 md:mt-[43px] w-full md:w-[200px]">
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
                    <div className="text-[#AEAEAE] uppercase text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] pr-10">
                        Qualität • Komfort • Handwerkskunst, die bleibt • Für
                        perfekten Schlaf entworfen • Lokal hergestellt •
                        Ergonomisch und nachhaltig •
                    </div>

                    {/* Duplicate for seamless loop */}
                    <div className="text-[#AEAEAE] uppercase text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] pr-10">
                        Qualität • Komfort • Handwerkskunst, die bleibt • Für
                        perfekten Schlaf entworfen • Lokal hergestellt •
                        Ergonomisch und nachhaltig •
                    </div>
                </div>
            </div>
        </div>
    );
}
