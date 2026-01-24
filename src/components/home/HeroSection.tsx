import headerImage from "@assets/landing-page/landing-page-img-1.png";

export default function HeroSection() {
    return (
        <div className="relative w-full max-w-[1920px] aspect-1920/948 overflow-hidden">
            <img
                src={headerImage}
                alt="Hero"
                className="w-full h-full object-cover block"
            />

            {/* Center-left text */}
            <div className="uppercase absolute left-5 top-1/2 -translate-y-1/2 text-white font-silka-mono text-[clamp(36px,5.6vw,108px)] leading-[1.1]">
                Ihre perfekte
                <br />
                Matratze,
            </div>

            {/* Bottom-right text */}
            <div className="uppercase absolute bottom-5 right-5 text-white font-silka-mono text-[clamp(36px,5.6vw,108px)] leading-[1.1] text-right">
                Unser
                <br />
                Handwerk
            </div>
        </div>
    );
}
