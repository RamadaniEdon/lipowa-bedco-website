import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

export default function MovingCarousel({
    className,
    images,
}: {
    images: string[];
    className?: ClassValue;
}) {
    const carouselImages = [...images, ...images];

    return (
        <div
            className={cn("w-full overflow-hidden bg-inherit py-10", className)}
        >
            <div className="w-full inline-flex flex-nowrap overflow-hidden">
                <div className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-scroll gap-5">
                    {carouselImages.map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[1000px] h-[700px] flex items-center justify-center"
                        >
                            <img
                                src={src}
                                alt={`Carousel item ${index}`}
                                className="w-full h-full object-contain pointer-events-none"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
