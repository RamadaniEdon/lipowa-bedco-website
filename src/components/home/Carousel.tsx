import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import React, { useRef, useState, useEffect } from "react";
import Button from "../ui/Button";
import LeftArrowIcon from "@assets/icons/left-arrow.svg?react";
import RightArrowIcon from "@assets/icons/right-arrow.svg?react";

interface CarouselProps {
    images: string[];
    width?: number; // optional, defaults to 942
    height?: number; // optional, defaults to 601
    gap?: number; // optional, defaults to 16px
    className?: ClassValue;
}

const Carousel: React.FC<CarouselProps> = ({
    images,
    width = 942,
    height = 601,
    gap = 16,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (containerRef.current)
                setContainerWidth(containerRef.current.offsetWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToIndex = (index: number) => {
        if (!containerRef.current) return;

        let scrollLeft = index * (width + gap);

        // handle last item
        if (index === images.length - 1) {
            scrollLeft = images.length * (width + gap) - containerWidth;
            if (scrollLeft < 0) scrollLeft = 0;
        }

        containerRef.current.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
        });
    };

    const handlePrev = () => {
        const newIndex = Math.max(0, currentIndex - 1);
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = Math.min(images.length - 1, currentIndex + 1);
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    };

    return (
        <div className={cn("flex flex-col items-center", className)}>
            <div className="overflow-hidden" ref={containerRef}>
                <div
                    className="flex transition-transform duration-500"
                    style={{ gap: `${gap}px` }}
                >
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`carousel-${i}`}
                            className="flex-shrink-0"
                            style={{
                                width: `${width}px`,
                                height: `${height}px`,
                                objectFit: "cover",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-[53px] flex justify-start w-full gap-5">
                {/* LEFT BUTTON */}
                <Button
                    onClick={handlePrev}
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
                    onClick={handleNext}
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
    );
};

export default Carousel;
