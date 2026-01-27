import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import PageInon from "@assets/icons/icon.svg?react";
import StampIcon from "@assets/uberuns/coupon.png";
import SignImg from "@assets/uberuns/sign.png";
import AboutUsImg from "@assets/uberuns/uberuns-1.png";
import { RevealFromBottom } from "../ui/Reveal";

export default function CertificateLetter({
    className,
}: {
    className?: ClassValue;
}) {
    return (
        <div className={cn("relative", className)}>
            <figure className="w-full h-[400px] md:h-[550px] lg:h-[720px]">
                <img
                    src={AboutUsImg}
                    alt=""
                    className="h-full w-full object-cover"
                />
            </figure>
            <div className="bg-[#253C5B] flex justify-center pt-[40px] md:pt-[60px] lg:pt-[90px]">
                <PageInon className="text-white w-11/12 h-fit" />
            </div>
            <RevealFromBottom className="absolute top-1/2 left-1/2 w-11/12 delay-[400ms]">
                <CertificateLetterContent className="md:w-10/12 max-w-[1300px] -translate-x-1/2 -translate-y-1/2 -rotate-1 md:-rotate-2" />
            </RevealFromBottom>
        </div>
    );
}

function CertificateLetterContent({ className }: { className?: ClassValue }) {
    return (
        <div className={cn("bg-white p-[6px] relative", className)}>
            <div className="border-[#004097] border-[3px] p-[3px]">
                <div
                    className={cn(
                        "border-[#004097] border-[2px]",
                        "flex flex-col lg:flex-row justify-center gap-6 md:gap-8 lg:gap-10 px-[30px] sm:px-[50px] md:px-[70px] lg:px-[90px] py-[60px] sm:py-[90px] md:py-[120px] lg:py-[150px]",
                    )}
                >
                    <div className="flex-1 flex flex-col justify-between">
                        <h2 className="text-[#3B3B3B] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-tight">
                            Handwerkskunst,
                            <br />
                            <i className="text-[#AEAEAE]">
                                Eine Frage der Leidenschaft
                            </i>
                        </h2>
                        <p className="text-[#3B3B3B] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[26px] md:leading-[28px] lg:leading-[30px]">
                            <span className="text-[#AEAEAE]">
                                Seit über 100 Jahren steht Lipowa für Qualität,
                                Präzision und echten Komfort. Unsere Produkte
                                entstehen aus echter Handarbeit, die Tradition
                                und Erfahrung verbindet.
                            </span>
                            <br />
                            <br />
                            In unserer Familienmanufaktur treffen
                            jahrzehntelange Erfahrung und modernes Know-how
                            aufeinander. Jeder Handgriff und jedes Materialstück
                            wird sorgfältig ausgewählt, damit Matratzen, Betten
                            und Polstermöbel langlebig, komfortabel und
                            einzigartig sind.
                        </p>
                    </div>
                    <div className="hidden lg:block min-h-full w-[1px] border-[#3B3B3B] border-[1px] relative">
                        <div className="absolute top-[-20px] right-[-1px] w-[1px] h-5 border-[#3B3B3B] border-[1px]"></div>
                        <div className="absolute bottom-[-20px] right-[-1px] w-[1px] h-5 border-[#3B3B3B] border-[1px]"></div>
                    </div>
                    <div className="flex-1">
                        <p className="text-[#3B3B3B] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[26px] md:leading-[28px] lg:leading-[30px]">
                            Unsere Produkte sind mehr als nur Möbel – sie sind
                            Orte des Wohlbefindens, die Geschichten von
                            Handwerkskunst, Leidenschaft und Nachhaltigkeit
                            erzählen. Jedes Stück wird mit höchster Sorgfalt
                            gefertigt, vom ersten Entwurf bis zur finalen Naht,
                            und trägt die Werte unserer Familie in Ihr Zuhause.
                            Wir achten auf Details, die Komfort und Qualität
                            spürbar machen, und ermöglichen eine persönliche,
                            individuelle Beratung, damit jedes Möbelstück
                            perfekt zu Ihnen passt. Jedes Produkt reflektiert
                            unsere Tradition und unsere Hingabe, jeden Tag aufs
                            Neue.
                            <br />
                            <br />
                            Wir freuen uns, dass Sie den Weg zu uns gefunden
                            haben.
                            <br />
                            <br />
                            Mit herzlichen Grüßen,
                            <img src={SignImg} alt="" className="mt-5" />
                        </p>
                    </div>
                </div>
            </div>
            <img
                src={StampIcon}
                alt=""
                className="absolute bottom-8 md:bottom-10 lg:bottom-14 right-8 md:right-10 lg:right-14 w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] -rotate-[5deg] md:-rotate-[7deg]"
            />
        </div>
    );
}
