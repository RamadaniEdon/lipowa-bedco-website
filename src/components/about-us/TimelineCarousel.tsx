import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type ReactNode } from "react";

export default function TimelineCarousel({
    className,
    items,
}: {
    className?: ClassValue;
    items: TimelineCarouselItemProps[];
}) {
    return (
        <div className={cn(className)}>
            {items.map((item, index) => (
                <TimelineCarouselItem
                    key={index}
                    className={item.className}
                    year={item.year}
                    description={item.description}
                    images={item.images}
                />
            ))}
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
    description: ReactNode;
    images: TimelineCarouselItemImageProp[];
};

function TimelineCarouselItem({
    className,
    year,
    description,
    images,
}: TimelineCarouselItemProps) {
    const yearDivRef = useRef<HTMLDivElement>(null);
    const [yearWidth, setYearWidth] = useState<number>(0);
    console.log(yearWidth);

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
