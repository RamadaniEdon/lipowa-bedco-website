import type { ClassValue } from "clsx";
import { cn } from "@lib/utils";
import { Link } from "react-router";
import PageIcon from "@assets/icons/icon.svg?react";
import UpRightArrow from "@assets/icons/long-up-right-arrow.svg?react";
import { SIDE_SPACES } from "@/lib/commonStyles";
import Button from "./ui/Button";

export default function Footer() {
    return (
        <footer className="bg-[#2F2F2F] w-full text-[#E6E7E8]">
            <div
                className={cn(
                    SIDE_SPACES.MARGIN,
                    "mb-[20px] md:mb-[30px] lg:mb-[42px]",
                )}
            >
                <div className="h-auto md:h-[500px] lg:h-[600px] xl:h-[700px] pt-[40px] md:pt-[60px] lg:pt-[80px]">
                    <div className="h-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
                        <div className="h-full flex flex-col justify-between">
                            <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23.7px] w-full max-w-[425px] leading-relaxed">
                                Unsere neu renovierte Ausstellung mit einem
                                größeren Produktangebot ist jetzt geöffnet. Wir
                                freuen uns auf Ihren Besuch. Ihr Lipowa-Team.
                            </p>
                            <PageIcon className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[352px] h-auto" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-[80px] md:gap-[120px] lg:gap-[154px]">
                                <div className="flex flex-col gap-[12px] md:gap-[16px] min-w-[120px] md:min-w-[140px]">
                                    <h3 className="mb-[13px]">PRODUCTS</h3>
                                    <Link to="/">123</Link>
                                    <Link to="/">123</Link>
                                    <Link to="/">123</Link>
                                </div>
                                <div className="flex flex-col gap-[12px] md:gap-[16px] min-w-[120px] md:min-w-[140px]">
                                    <h3 className="mb-[13px]">INFORMATION</h3>
                                    <Link to="/">Product specs</Link>
                                    <Link to="/">Custom solutions</Link>
                                    <Link to="/">Sustainability</Link>
                                    <Link to="/">Our story</Link>
                                    <Link to="/">Insights</Link>
                                </div>
                                <div className="flex flex-col gap-[12px] md:gap-[16px] min-w-[120px] md:min-w-[140px]">
                                    <h3 className="mb-[13px]">GET IN TOUCH</h3>
                                    <Link to="/">Contact us</Link>
                                    <Link to="/">Request samples</Link>
                                    <Link to="/">Book a visit</Link>
                                </div>
                                <div className="flex flex-col gap-[12px] md:gap-[16px] min-w-[120px] md:min-w-[140px]">
                                    <h3 className="mb-[13px]">SOCIAL MEDIA</h3>
                                    <Link to="/">Facebook</Link>
                                    <Link to="/">Instagram</Link>
                                    <Link to="/">Pinterest </Link>
                                    <Link to="/">LinkedIn</Link>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between font-silka-mono items-start sm:items-center mb-6 md:mb-8 lg:mb-10 gap-4 sm:gap-6">
                                <div className="uppercase flex flex-col sm:flex-row gap-4 sm:gap-[60px] md:gap-[80px] lg:gap-[113px]">
                                    <p className="text-[14px] md:text-[16px]">
                                        CALL US: +123 456 789
                                    </p>
                                    <p className="text-[14px] md:text-[16px]">
                                        EMAIL: info@lipowa.com
                                    </p>
                                </div>
                                <Button
                                    className={cn(
                                        "flex justify-between items-center gap-5",
                                    )}
                                >
                                    <span>KONTAKT</span>
                                    <UpRightArrow />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}

function FooterBottom({ className }: { className?: ClassValue }) {
    return (
        <div className={cn("border-t-[#E7E8E9]/10 border-t-[1px]", className)}>
            <div
                className={cn(
                    "mx-[50px] md:mx-[80px] lg:mx-[100px]",
                    "text-[#E6E7E8] uppercase font-silka-mono text-[12px] sm:text-[14px] md:text-[16px]",
                    "flex flex-wrap justify-center sm:justify-between h-auto sm:h-16 items-center gap-2 sm:gap-4 py-4 sm:py-0",
                )}
            >
                <Link to="/">LIPOWA © 2025</Link>/
                <Link to="/">PRIVACY POLICY</Link>/
                <Link to="/">COOKIE POLICY</Link>/
                <Link to="/">TERMS & CONDITIONS</Link>/
            </div>
        </div>
    );
}
