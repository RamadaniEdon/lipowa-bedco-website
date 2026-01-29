import headerImage from "@assets/landing-page/landing-page-img-1.png";
import { RevealFromBottom, RevealFromTop } from "../ui/Reveal";
import { cn } from "@/lib/utils";
import { SIDE_SPACES } from "@/lib/commonStyles";

export default function HeroSection() {
    return (
        <div className="relative w-full max-w-[1920px] aspect-1920/948 overflow-hidden">
            <RevealFromTop className="delay-300">
                <img
                    src={headerImage}
                    alt="Hero"
                    className="w-full h-full object-cover block"
                />
            </RevealFromTop>

            {/* Center-left text */}
            <RevealFromBottom className="absolute top-1/2 left-0 -translate-y-1/2 delay-1000">
                <div
                    className={cn(
                        "uppercase text-white font-silka-mono text-[clamp(36px,5.6vw,108px)] leading-[1.1] translate-y-[-50%]",
                        SIDE_SPACES.MARGIN_LEFT,
                    )}
                >
                    Ihre perfekte
                    <br />
                    Matratze,
                </div>
            </RevealFromBottom>

            <RevealFromBottom className="absolute bottom-0 right-0 delay-1000">
                <div
                    className={cn(
                        "uppercase text-white font-silka-mono text-[clamp(36px,5.6vw,108px)] leading-[1.1] text-right",
                        "mb-[50px]",
                        SIDE_SPACES.MARGIN_RIGHT,
                    )}
                >
                    Unser
                    <br />
                    Handwerk
                </div>
            </RevealFromBottom>
        </div>
    );
}
