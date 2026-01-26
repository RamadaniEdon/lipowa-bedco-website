import ContactForm from "@/components/kontakt/ContactForm";
import { SIDE_SPACES } from "@/lib/commonStyles";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

export default function Kontakt({ className }: { className?: ClassValue }) {
    return (
        <div className={cn(className)}>
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-[40px] md:mb-[60px] lg:mb-[74px] gap-6 md:gap-8 lg:gap-10",
                )}
            >
                <div className="flex flex-col gap-[16px] md:gap-[22px]">
                    <p className="max-w-[870px] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] text-[#3B3B3B] font-medium leading-tight">
                        Wir freuen uns auf Ihre Nachricht – schreiben Sie uns
                        gerne!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-[#3B3B3B]">
                        <p>+49 123 456 789</p>
                        <p>info@lipowa.de</p>
                    </div>
                </div>
                <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-silka-mono text-[#232A11] uppercase leading-none">
                    Kontakt
                </h1>
            </div>
            <ContactForm />
        </div>
    );
}
