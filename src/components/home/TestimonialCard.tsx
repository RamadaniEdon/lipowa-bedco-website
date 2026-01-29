import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import AvatarBadge from "./AvatarBadge";

export default function TestimonialCard({
    className,
    fullName,
    testimonial,
    occupation,
    place,
}: {
    className?: ClassValue;
    fullName: string;
    testimonial: string;
    occupation: string;
    place: string;
}) {
    return (
        <div
            className={cn(
                "px-[52px] py-[42px] bg-white flex flex-col justify-between",
                className,
            )}
        >
            <div>
                <AvatarBadge className="mb-[30px]">{fullName}</AvatarBadge>
                <p className="text-[#3B3B3B] text-[22px] md:text-[26px] xl:text-[32px] mb-[50px] md:mb-[80px] lg:mb-[150px]">
                    {testimonial}
                </p>
            </div>
            <div className="flex justify-between gap-4 text-[16px] md:text-[18px] lg:text-[22px] text-[#AEAEAE]">
                <p>{occupation}</p>
                <p>{place}</p>
            </div>
        </div>
    );
}
