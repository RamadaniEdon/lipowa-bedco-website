import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

interface CarouselProps {
    items: React.ReactNode[];
    width: number;
    className?: ClassValue;
}

export interface CarouselRef {
    goNext: () => void;
    goPrev: () => void;
    currentIndex: number;
    goToIndex: (index: number) => void;
}

const GeneralCarousel = forwardRef<CarouselRef, CarouselProps>((props, ref) => {
    const { items, className, width } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const parentRef = useRef<HTMLDivElement>(null);
    const [parentWidth, setParentWidth] = useState(0);
    const gap = 20; //in pixels

    useEffect(() => {
        if (!parentRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setParentWidth(entry.contentRect.width);
            }
        });
        observer.observe(parentRef.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    const goNext = () => {
        if (currentIndex === items.length - 1) return;
        goToIndex(currentIndex + 1);
    };

    const goPrev = () => {
        if (currentIndex === 0) return;
        goToIndex(currentIndex - 1);
    };

    const goToIndex = (index: number) => {
        if (index < 0 || index >= items.length) return;
        const offset = index * (width + gap);
        const maxOffset =
            width * items.length + gap * (items.length - 1) - parentWidth;
        const realOffset = Math.min(offset, maxOffset);

        if (parentRef.current) {
            parentRef.current.scrollTo({
                left: realOffset,
                behavior: "smooth",
            });
        }
        console.log("curr", index);
        console.log(maxOffset, width, parentWidth);
        console.log("max", Math.floor(maxOffset / (width + gap)));
        setCurrentIndex(
            index < Math.floor(maxOffset / (width + gap)) + 1
                ? index
                : Math.floor(maxOffset / (width + gap)) + 1,
        );
    };

    useImperativeHandle(ref, () => ({
        goNext,
        goPrev,
        currentIndex,
        goToIndex,
    }));

    return (
        <div
            ref={parentRef}
            style={{
                gap: `${gap}px`,
            }}
            className={cn("flex overflow-hidden", className)}
        >
            {items.map((item) => (
                <div className="flex-shrink-0" style={{ width: `${width}px` }}>
                    {item}
                </div>
            ))}
        </div>
    );
});

GeneralCarousel.displayName = "GeneralCarousel";

export default GeneralCarousel;
