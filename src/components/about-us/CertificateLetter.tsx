import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import PageInon from "@assets/icons/icon.svg?react";
import StampIcon from "@assets/uberuns/coupon.png";
import SignImg from "@assets/uberuns/sign.png";
import AboutUsImg from "@assets/uberuns/uberuns-1.png";
import { RevealFromBottom } from "../ui/Reveal";
import { useRef, useState, useLayoutEffect } from "react";

export default function CertificateLetter({
    className,
}: {
    className?: ClassValue;
}) {
    const [scale, setScale] = useState(1);
    const [height, setHeight] = useState<number | "auto">("auto");
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const BASE_WIDTH = 1500;

    useLayoutEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            // Calculate scale: if window is smaller than BASE_WIDTH, scale down. Max scale 1.
            const newScale = Math.min(windowWidth / BASE_WIDTH, 1.3);
            setScale(newScale);

            // Update parent height based on scaled content height
            if (contentRef.current) {
                setHeight(contentRef.current.scrollHeight * newScale);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        const observer = new ResizeObserver(handleResize);
        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full overflow-hidden", className)}
            style={{ height: height === "auto" ? "auto" : `${height}px` }}
        >
            <div
                ref={contentRef}
                className="absolute top-0 left-1/2 origin-top"
                style={{
                    width: `${BASE_WIDTH}px`,
                    transform: `translateX(-50%) scale(${scale})`,
                }}
            >
                <figure className="w-full h-[720px]">
                    <img
                        src={AboutUsImg}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </figure>
                <div className="bg-[#253C5B] flex justify-center pt-[90px]">
                    <PageInon className="text-white w-11/12 h-fit" />
                </div>
                {/* Fixed positioning: Apply translation to the container directly to avoid overflow */}
                <RevealFromBottom
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 w-10/12 delay-[400ms]"
                    hiddenClass="-translate-y-[50% - 30px]"
                    visibleClass="-translate-y-1/2"
                >
                    <ParallaxWrapper>
                        <CertificateLetterContent className="max-w-[1300px] -rotate-2" />
                    </ParallaxWrapper>
                </RevealFromBottom>
            </div>
        </div>
    );
}

function ParallaxWrapper({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleScroll = () => {
            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = viewportHeight / 2;

            // Distance from center (positive = below center)
            const distFromCenter = elementCenter - viewportCenter;

            // Calculate offset: move opposite to distance to stay closer to center
            // Sensitivity factor (0.15 = moves 15% of dist)
            const offset = -distFromCenter * 0.15;

            // Limit the movement range
            const maxOffset = 80;
            const clampedOffset = Math.max(
                -maxOffset,
                Math.min(maxOffset, offset),
            );

            el.style.transform = `translateY(${clampedOffset}px)`;
        };

        // Initial calc
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div ref={ref} className="will-change-transform">
            {children}
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
                        "flex flex-row justify-center gap-10 px-[90px] py-[150px]",
                    )}
                >
                    <div className="flex-1 flex flex-col justify-between">
                        <h2 className="text-[#3B3B3B] text-[42px] leading-tight">
                            Handwerkskunst,
                            <br />
                            <i className="text-[#AEAEAE]">
                                Eine Frage der Leidenschaft
                            </i>
                        </h2>
                        <p className="text-[#3B3B3B] text-[16px] leading-[30px]">
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
                    <div className="block min-h-full w-[1px] border-[#3B3B3B] border-[1px] relative">
                        <div className="absolute top-[-20px] right-[-1px] w-[1px] h-5 border-[#3B3B3B] border-[1px]"></div>
                        <div className="absolute bottom-[-20px] right-[-1px] w-[1px] h-5 border-[#3B3B3B] border-[1px]"></div>
                    </div>
                    <div className="flex-1">
                        <p className="text-[#3B3B3B] text-[16px] leading-[30px]">
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
                className="absolute bottom-14 right-14 w-[100px] h-[100px] -rotate-[7deg]"
            />
        </div>
    );
}
