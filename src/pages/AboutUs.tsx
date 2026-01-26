import CertificateLetter from "@/components/about-us/CertificateLetter";
import TimelineCarousel from "@/components/about-us/TimelineCarousel";
import { timelineCarouselItems } from "@/components/about-us/timelineCarouselItems";
import { SIDE_SPACES } from "@/lib/commonStyles";
import { cn } from "@/lib/utils";
import DotIcon from "@assets/icons/dot.svg?react";
import type { ClassValue } from "clsx";

export default function AboutUs({ className }: { className?: ClassValue }) {
    return (
        <div className={cn(className)}>
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "flex justify-between items-center mb-[120px]",
                )}
            >
                <h1 className="text-[140px] font-silka-mono text-[#232A11] uppercase">
                    Über uns
                </h1>
                <p className="text-[46px] text-[#3B3B3B] font-medium max-w-[502px]">
                    Tradition trifft modern e Handwerkskunst
                </p>
            </div>
            <CertificateLetter className="mb-[132px]" />
            <div className={cn(SIDE_SPACES.MARGIN, "flex justify-between")}>
                <div className="flex flex-col justify-between">
                    <p
                        className={cn(
                            "text-[22px] text-[#3B3B3B]",
                            "flex items-center gap-2 uppercase font-silka-mono",
                        )}
                    >
                        <DotIcon className="w-3 h-3 text-[#3B3B3B]" />
                        Our Timeline
                    </p>
                    <p className="text-[50px] text-[#AEAEAE] leading-[60px] max-w-[745px]">
                        Unsere Geschichte – Meilensteine in über 100 Jahren
                    </p>
                </div>
                <p className="text-[#AEAEAE] text-[18px] max-w-[675px] leading-[30px]">
                    Seit der Gründung 1909 hat sich unsere Manufaktur stetig
                    weiterentwickelt. Die Fertigungsprozesse wurden
                    kontinuierlich optimiert, damit stets ein optimales
                    Endprodukt entsteht. Über die Jahrzehnte hinweg wurden
                    Handwerkskunst und moderne Produktion miteinander verbunden,
                    sodass Qualität und Präzision im Mittelpunkt stehen. Dabei
                    blieb die individuelle Anpassung für unsere Kunden immer
                    zentral. Mit jedem Schritt – vom Material bis zur fertigen
                    Matratze – sorgen wir dafür, dass jedes Produkt höchsten
                    Ansprüchen gerecht wird.
                </p>
            </div>
            <TimelineCarousel
                items={timelineCarouselItems}
                className="mb-[176px]"
            />
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "flex justify-between items-end",
                )}
            >
                <p className="text-[#AEAEAE] text-[18px] max-w-[742px] leading-[30px]">
                    In unserer Manufaktur werden alle Schritte der Produktion
                    sorgfältig durchgeführt. Vom ausgewählten Material über die
                    handwerkliche Verarbeitung bis hin zur finalen
                    Qualitätskontrolle achten wir auf jedes Detail. So entstehen
                    Matratzen, Betten und Polstermöbel, die nicht nur langlebig,
                    sondern auch besonders komfortabel und nachhaltig sind.
                    Unsere Kunden profitieren von dieser Kombination aus
                    Erfahrung, Sorgfalt und individueller Anpassung – ein
                    Konzept, das seit über einem Jahrhundert erfolgreich ist.
                </p>
                <h3 className="text-[46px] font-medium text-[#AEAEAE] max-w-[627px] leading-[56px]">
                    Kontinuität und Präzision in der Fertigung –{" "}
                    <span className="text-[#3B3B3B]">
                        für jedes einzelne Produkt
                    </span>
                </h3>
            </div>
        </div>
    );
}
