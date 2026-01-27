import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SIDE_SPACES } from "@/lib/commonStyles";
import { RevealFromBottom, RevealFromLeft } from "../ui/Reveal";

export default function TimelineCarousel({
    className,
    items,
}: {
    className?: ClassValue;
    items: TimelineCarouselItemProps[];
}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const itemWidth = 166;
    const itemGap = 300;

    // Create tripled array for infinite scroll effect
    const tripledItems = [...items, ...items, ...items];
    const itemsCount = items.length;

    const handleItemClick = (clickedIndex: number) => {
        // Determine which set (0, 1, or 2) the clicked item belongs to
        const itemIndexInSet = clickedIndex % itemsCount;
        scrollToIndex(itemIndexInSet, true);
        setSelectedIndex(itemIndexInSet);
    };

    const scrollToIndex = (index: number, smooth: boolean = true) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;

        container.scrollTo({
            left: index * (itemWidth + itemGap),
            behavior: smooth ? "smooth" : "auto",
        });
    };

    return (
        <div className={cn("flex flex-col overflow-visible", className)}>
            {/* Main carousel display - shows only selected item */}
            <RevealFromBottom>
                <div className="relative w-full mb-[42px] overflow-hidden">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "transition-opacity duration-500 ease-in-out",
                                selectedIndex === index
                                    ? "opacity-100"
                                    : "opacity-0 absolute inset-0 pointer-events-none",
                            )}
                        >
                            <TimelineCarouselItem
                                year={item.year}
                                description={item.description}
                                images={item.images}
                            />
                        </div>
                    ))}
                </div>
            </RevealFromBottom>
            <RevealFromBottom>
                <hr className="mb-[42px] border-[#AEAEAE]" />
            </RevealFromBottom>
            {/* Navigation items - scrollable horizontal list */}
            <RevealFromLeft>
                <div className="overflow-visible w-full">
                    <div
                        ref={scrollContainerRef}
                        className={cn(
                            "flex overflow-x-auto scrollbar-hide scroll-smooth",
                            SIDE_SPACES.PADDING_LEFT,
                        )}
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            gap: `${itemGap}px`,
                        }}
                    >
                        {tripledItems.map((item, index) => {
                            const itemIndexInSet = index % itemsCount;
                            const isSelected = itemIndexInSet === selectedIndex;

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleItemClick(index)}
                                    style={{
                                        width: `${itemWidth}px`,
                                    }}
                                    className={cn(
                                        "flex-shrink-0 text-left transition-all duration-300",
                                        isSelected
                                            ? "opacity-100"
                                            : "opacity-50 hover:opacity-75",
                                        isSelected
                                            ? "text-[#232A11]"
                                            : "text-[#AEAEAE]",
                                    )}
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <h3
                                            className={cn(
                                                "text-[72px] text-center transition-colors duration-300 whitespace-nowrap",
                                            )}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-[20px] text-center whitespace-nowrap">
                                            {item.shortDescription}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </RevealFromLeft>
        </div>
    );
}

type TimelineCarouselItemImageProp = {
    src: string;
    widthRatio: number;
    heightRatio: number;
    topRatio?: number;
    leftRatio?: number;
    rightRatio?: number;
    bottomRatio?: number;
    rotate?: number;
};

export type TimelineCarouselItemProps = {
    className?: ClassValue;
    year: string;
    title: string;
    shortDescription: string;
    description: ReactNode;
    images: TimelineCarouselItemImageProp[];
};

function TimelineCarouselItem({
    className,
    year,
    description,
    images,
}: Omit<TimelineCarouselItemProps, "title" | "shortDescription">) {
    const yearDivRef = useRef<HTMLDivElement>(null);
    const [yearWidth, setYearWidth] = useState<number>(0);

    useEffect(() => {
        const el = yearDivRef.current;
        if (!el) return;

        const observer = new ResizeObserver(([entry]) => {
            setYearWidth(entry.contentRect.width);
        });

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={cn(
                "flex flex-col justify-between items-center",
                className,
            )}
        >
            <div className="relative" ref={yearDivRef}>
                <p className="text-[#232A11] font-light text-[450px] tracking-[-1%]">
                    {year}
                </p>
                {images.map((image, index) => (
                    <TimelineCarouselItemImage
                        key={index}
                        src={image.src}
                        parentWidth={yearWidth}
                        widthRatio={image.widthRatio}
                        heightRatio={image.heightRatio}
                        topRatio={image.topRatio}
                        leftRatio={image.leftRatio}
                        rightRatio={image.rightRatio}
                        bottomRatio={image.bottomRatio}
                        rotate={image.rotate}
                    />
                ))}
            </div>
            <p className="text-center text-[18px] leading-[30px] text-[#AEAEAE]">
                {description}
            </p>
        </div>
    );
}

function TimelineCarouselItemImage({
    src,
    parentWidth,
    widthRatio,
    heightRatio,
    topRatio,
    leftRatio,
    rightRatio,
    bottomRatio,
    rotate,
}: TimelineCarouselItemImageProp & { parentWidth: number }) {
    return (
        <img
            src={src}
            alt=""
            className="absolute p-[5px] bg-white shadow-lg box-content"
            style={{
                width: `${widthRatio * parentWidth}px`,
                height: `${heightRatio * parentWidth}px`,
                top:
                    topRatio !== undefined
                        ? `${topRatio * parentWidth}px`
                        : undefined,
                left:
                    leftRatio !== undefined
                        ? `${leftRatio * parentWidth}px`
                        : undefined,
                right:
                    rightRatio !== undefined
                        ? `${rightRatio * parentWidth}px`
                        : undefined,
                bottom:
                    bottomRatio !== undefined
                        ? `${bottomRatio * parentWidth}px`
                        : undefined,
                transform: `rotate(${rotate}deg)`,
            }}
        />
    );
}
