import { SIDE_SPACES } from "@/lib/commonStyles";
import { cn } from "@/lib/utils";
import DotIcon from "@assets/icons/dot.svg?react";
import LeftArrowIcon from "@assets/icons/left-arrow.svg?react";
import RightArrowIcon from "@assets/icons/right-arrow.svg?react";
import Button from "../ui/Button";
import GeneralCarousel, { type CarouselRef } from "./GeneralCarousel";
import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";

const CAROUSEL_ITEMS = [
    <TestimonialCard
        fullName="Anna Kruger"
        testimonial="Ich habe ein Polsterbett nach Mass bestellt und war begeistert. Die Stoffauswahl, 
                die Verarbeitung und die Beratung waren auf einem ganz anderen Niveau. Man merkt, dass hier 
                echte Handarbeit drinsteckt."
        occupation="Interior Designerin"
        place="Freiburg"
        className="h-full"
    />,
    <TestimonialCard
        fullName="Jonas Weber"
        testimonial="Wir haben zwei Kindermatratzen gekauft und sind sehr zufrieden. Die Materialien sind 
                schadstofffrei, weich, aber stabil. Meine Kinder schlafen endlich ruhig die ganze Nacht."
        occupation="Vater von zwei Kindern"
        place="Hannover"
        className="h-full"
    />,
    <TestimonialCard
        fullName="Sabine Roth"
        testimonial="Durch das Schlafsofa habe ich endlich eine praktische und bequeme Losung fur mein kleines 
                Apartment gefunden. Es sieht toll aus und ist nachts wirklich komfortabel. Klare Empfehlung."
        occupation="Berufspendlerin"
        place="Mannheim"
        className="h-full"
    />,
    <TestimonialCard
        fullName="Daniel Mertens"
        testimonial="Nach intensiven Spielen und Trainingseinheiten brauche ich eine Matratze, die meinen Rucken
                 und meine Gelenke entlastet. Diese Matratze passt sich perfekt an und gibt mir jede Nacht die 
                 Regeneration, die ich fur meinen Sport brauche."
        occupation="Basketballspieler"
        place="Bonn"
        className="h-full"
    />,
];

export default function FourthPart() {
    const carouselRef = useRef<CarouselRef>(null);
    return (
        <div
            className={cn(
                "bg-[#ECECEC] mt-[60px] md:mt-[80px] lg:mt-[120px] py-[60px] md:py-[80px] lg:py-[120px]",
            )}
        >
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "mb-[30px] md:mb-[45px] lg:mb-[60px]",
                )}
            >
                <p
                    className={cn(
                        "text-[16px] md:text-[18px] lg:text-[22px] text-[#3B3B3B]",
                        "flex items-center gap-2 uppercase text-left lg:text-right font-silka-mono",
                    )}
                >
                    <DotIcon className="w-3 h-3 text-[#3B3B3B]" />
                    Kundenstimmen
                </p>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8">
                    <p className="text-[#3B3B3B] text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] max-w-[962px] leading-tight">
                        Erfahrungen unserer Kunden – echte Stimmen, die fur
                        Qualitat und Vertrauen sprechen.
                    </p>
                    <div className="flex gap-3 md:gap-4 lg:gap-5">
                        <Button
                            onClick={() => carouselRef.current?.goPrev()}
                            className={cn(
                                "group",
                                "bg-white",
                                "border-[#3B3B3B]",
                                "border-[2px]",
                                "px-[12px]",
                                "py-[12px]",
                                "transition-colors",
                                "duration-300",
                                "hover:bg-[#3B3B3B]",
                            )}
                        >
                            <LeftArrowIcon
                                className={cn(
                                    "text-[#3B3B3B]",
                                    "transition-colors",
                                    "duration-300",
                                    "group-hover:text-white",
                                )}
                            />
                        </Button>

                        {/* RIGHT BUTTON */}
                        <Button
                            onClick={() => carouselRef.current?.goNext()}
                            className={cn(
                                "group",
                                "bg-[#3B3B3B]",
                                "border-[#3B3B3B]",
                                "border-[2px]",
                                "px-[12px]",
                                "py-[12px]",
                                "transition-colors",
                                "duration-300",
                                "hover:bg-white",
                            )}
                        >
                            <RightArrowIcon
                                className={cn(
                                    "text-white",
                                    "transition-colors",
                                    "duration-300",
                                    "group-hover:text-[#3B3B3B]",
                                )}
                            />
                        </Button>
                    </div>
                </div>
            </div>

            <GeneralCarousel
                width={1280}
                ref={carouselRef}
                items={CAROUSEL_ITEMS}
                className={cn(SIDE_SPACES.PADDING_LEFT)}
            />
        </div>
    );
}
