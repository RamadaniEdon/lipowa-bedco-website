import { SIDE_SPACES } from "@/lib/commonStyles";
import { cn } from "@/lib/utils";
import DotIcon from "@assets/icons/dot.svg?react";
import Img1 from "@assets/landing-page/quality-bed.png";
import Img2 from "@assets/landing-page/sit-on-bed.png";
import Img3 from "@assets/landing-page/place-mattress.png";
import QualityIcon from "@assets/icons/sheets-icon.svg?react";
import PenEraserIcon from "@assets/icons/pen-eraser-icon.svg?react";
import LeafIcon from "@assets/icons/leaf-icon.svg?react";
import type { ClassValue } from "clsx";
import { useMemo, useState } from "react";
import { RevealFromBottom } from "../ui/Reveal";

type GalleryItem = {
    src: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
};

const galleryItems: GalleryItem[] = [
    {
        src: Img1,
        title: "Handgefertigte Qualität",
        description:
            "Jedes Produkt wird in unserer Familienmanufaktur sorgfältig gefertigt. So garantieren wir höchste Präzision, Langlebigkeit und Komfort.",
        icon: <QualityIcon />,
    },
    {
        src: Img2,
        title: "Individuelle Anpassung",
        description:
            "Von der Matratze bis zum Polsterbett – Größe, Stoff und Härtegrad lassen sich nach Ihren Wünschen gestalten, für persönlichen Schlafkomfort.",
        icon: <PenEraserIcon />,
    },
    {
        src: Img3,
        title: "Nachhaltige Materialien",
        description:
            "Wir verwenden ausschließlich öko-zertifizierte Schäume, Naturholz und Stoffe, die langlebig und umweltfreundlich sind. So tun Sie nicht nur sich, sondern auch der Umwelt etwas Gutes.",
        icon: <LeafIcon />,
    },
];

export default function ThirdPart() {
    return (
        <div
            className={cn(
                SIDE_SPACES.MARGIN,
                "my-[60px] md:my-[80px] lg:my-[120px]",
            )}
        >
            <RevealFromBottom>
                <p
                    className={cn(
                        "text-[16px] md:text-[18px] lg:text-[22px] text-[#3B3B3B] mb-[30px] md:mb-[45px] lg:mb-[60px]",
                        "flex items-center justify-start lg:justify-end gap-2 uppercase font-silka-mono",
                    )}
                >
                    Was uns besonders macht
                    <DotIcon className="w-3 h-3 text-[#3B3B3B]" />
                </p>
                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-[96px] mb-[60px] md:mb-[80px] lg:mb-[120px]">
                    <p className="text-[#AEAEAE] text-[16px] md:text-[18px] lg:text-[22px] self-start lg:self-end leading-relaxed">
                        Seit über 100 Jahren fertigen wir Matratzen, Betten und
                        Polstermöbel mit Leidenschaft und Sorgfalt. Unsere
                        Erfahrung, die Verwendung öko-zertifizierter Materialien
                        und die Möglichkeit, Produkte individuell anzupassen,
                        machen uns zu einem zuverlässigen Partner für erholsamen
                        Schlaf.
                    </p>
                    <p className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] text-[#3B3B3B] w-full lg:min-w-[950px] text-left lg:text-right leading-tight">
                        <span className="text-[#AEAEAE]">
                            Wir verbinden höchste
                        </span>{" "}
                        Qualität, Nachhaltigkeit und persönlichen Komfort,{" "}
                        <span className="text-[#AEAEAE]">für erholsamen</span>{" "}
                        Schlaf jeden Tag.
                    </p>
                </div>
            </RevealFromBottom>
            <RevealFromBottom>
                <ExpandingImageGallery galleryImages={galleryItems} />
            </RevealFromBottom>
        </div>
    );
}

const MIN_COLLAPSED_PX = 120;
const IDEAL_EXPANDED_RATIO = 0.6;

export function ExpandingImageGallery({
    galleryImages,
    className,
}: {
    galleryImages: GalleryItem[];
    className?: ClassValue;
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const count = galleryImages.length;

    const widths = useMemo(() => {
        if (count === 1) return ["100%"];

        const totalCollapsedMin = (count - 1) * MIN_COLLAPSED_PX;
        const expandedRatio = Math.min(
            IDEAL_EXPANDED_RATIO,
            1 - totalCollapsedMin / 1000, // fallback logic for tiny containers
        );

        return galleryImages.map((_, index) =>
            index === activeIndex
                ? `${expandedRatio * 100}%`
                : `max(${MIN_COLLAPSED_PX}px, ${((1 - expandedRatio) * 100) / (count - 1)}%)`,
        );
    }, [activeIndex, count, galleryImages]);

    return (
        <div
            className={cn(
                "flex w-full h-[400px] md:h-[600px] lg:h-[820px] gap-2 md:gap-3 overflow-hidden",
                className,
            )}
        >
            {galleryImages.map((item, index) => (
                <GalleryImage
                    key={index}
                    item={item}
                    isActive={index === activeIndex}
                    width={widths[index]}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </div>
    );
}

function GalleryImage({
    item,
    isActive,
    width,
    onClick,
}: {
    item: GalleryItem;
    isActive: boolean;
    width: string;
    onClick: () => void;
}) {
    return (
        <div
            onClick={onClick}
            style={{ width }}
            className={cn(
                "relative h-full cursor-pointer overflow-hidden",
                "transition-[width] duration-500 ease-in-out flex-shrink-0",
            )}
        >
            {/* Image */}
            <img
                src={item.src}
                alt={item.title}
                className={cn(
                    "h-full w-full object-cover",
                    "transition-transform duration-500 ease-in-out",
                    isActive ? "scale-100" : "scale-105",
                )}
            />

            {/* Dark gradient overlay */}
            <div
                className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent",
                    "transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0",
                )}
            />

            {/* Icon */}
            {item.icon && (
                <div className="absolute top-3 left-3 text-white z-10 m-5">
                    {item.icon as React.ReactNode}
                </div>
            )}

            {/* Text */}
            <div
                className={cn(
                    "absolute bottom-4 left-4 right-4 z-10 m-5",
                    "transition-all duration-500 ease-in-out",
                    isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none",
                )}
            >
                <h3 className="text-white text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-normal mb-3 md:mb-4 lg:mb-5">
                    {item.title}
                </h3>
                <p className="text-white/80 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] leading-relaxed">
                    {item.description}
                </p>
            </div>
        </div>
    );
}
