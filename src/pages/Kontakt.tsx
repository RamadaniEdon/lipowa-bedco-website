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
                    "flex justify-between items-end mb-[74px] gap-10",
                )}
            >
                <div className="flex flex-col gap-[22px]">
                    <p className="max-w-[870px] text-[50px] text-[#3B3B3B] font-medium">
                        Wir freuen uns auf Ihre Nachricht – schreiben Sie uns
                        gerne!
                    </p>
                    <div className="flex gap-10 text-[28px] text-[#3B3B3B]">
                        <p>+49 123 456 789</p>
                        <p>info@lipowa.de</p>
                    </div>
                </div>
                <h1 className="text-[140px] font-silka-mono text-[#232A11] uppercase leading-none">
                    Kontakt
                </h1>
            </div>
            <ContactForm />
        </div>
    );
}
