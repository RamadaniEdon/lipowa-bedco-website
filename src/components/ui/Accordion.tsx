import { useState, type ReactNode, useEffect } from "react";
import { cn } from "@lib/utils";
import { type ClassValue } from "clsx";

export interface AccordionItem {
    id: string;
    title: string;
    content: ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    selectedId?: string;
    onSelect?: (id: string) => void;
    className?: ClassValue;
    hideLastBorder?: boolean;
    initialSelectedId?: string;
}

export function Accordion({
    items,
    selectedId,
    onSelect,
    className,
    hideLastBorder,
    initialSelectedId,
}: AccordionProps) {
    const [selectedIdState, setSelectedIdState] = useState<string | null>(
        initialSelectedId || null,
    );

    useEffect(() => {
        if (selectedId) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSelectedIdState(selectedId);
        }
    }, [selectedId]);

    const onSelectItem = (id: string) => {
        setSelectedIdState(id);
        onSelect?.(id);
    };
    return (
        <div className={cn("flex flex-col w-full", className)}>
            {items.map((item, idx) => {
                const isOpen = item.id === selectedIdState;
                const hideBorder = idx === items.length - 1 && hideLastBorder;

                return (
                    <div
                        key={item.id}
                        className={cn(
                            !hideBorder && "border-b border-gray-300",
                        )}
                    >
                        <button
                            onClick={() => onSelectItem(item.id)}
                            className="flex w-full items-center justify-between py-3 md:py-4 text-left font-medium transition-all hover:text-gray-900 group"
                        >
                            <span className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[47px] text-[#3B3B3B] leading-tight pr-4">
                                {item.title}
                            </span>
                            {/* Plus icon: Visible when closed (not open), disappears when open */}
                            <span
                                className={cn(
                                    "text-[40px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-thin text-[#3B3B3B] transition-opacity duration-300",
                                    isOpen ? "opacity-0" : "opacity-100",
                                )}
                            >
                                +
                            </span>
                        </button>
                        <div
                            className={cn(
                                "grid transition-[grid-template-rows] duration-500 ease-in-out",
                                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                            )}
                        >
                            <div className="overflow-hidden">
                                <div className="text-[16px] md:text-[18px] lg:text-[22px] pb-3 md:pb-4 text-[#3B3B3B] leading-relaxed mb-6 md:mb-8 lg:mb-10 pr-2 md:pr-4">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
