import { useState } from "react";
import { cn } from "@lib/utils";
import { type ClassValue } from "clsx";
import { Accordion, type AccordionItem } from "./Accordion";

export interface AccordionWithImageItem extends AccordionItem {
    image: string; // URL or path to image
}

interface AccordionWithImagesProps {
    items: AccordionWithImageItem[];
    className?: ClassValue;
}

export function AccordionWithImages({
    items,
    className,
}: AccordionWithImagesProps) {
    // Initialize with the first item's ID if available
    const [selectedId, setSelectedId] = useState<string>(items[0]?.id || "");

    return (
        <div
            className={cn(
                "flex flex-col lg:flex-row justify-between w-full gap-[145px] h-full",
                className,
            )}
        >
            {/* Left Side: Image */}
            <div className="w-[900px] h-[680px] relative overflow-hidden shadow-lg">
                {items.map((item) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        className={cn(
                            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out",
                            item.id === selectedId
                                ? "opacity-100 z-10"
                                : "opacity-0 z-0",
                        )}
                    />
                ))}
            </div>

            {/* Right Side: Accordion */}
            <div className="flex items-center justify-end">
                <Accordion
                    items={items}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                    className="w-full max-w-[800px]"
                />
            </div>
        </div>
    );
}
