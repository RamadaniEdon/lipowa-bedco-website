import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkIcon from "@assets/png-icons/mark.png";
import Button from "../ui/Button";
import UpRightIcon from "@assets/icons/up-right-arrow.svg?react";
import { useResponsiveValue } from "@/hooks/useResponsiveValue";
import { RecenterOnResize } from "@/components/map/RecenterMap";
import { RevealFromBottom } from "../ui/Reveal";

const customIcon = new L.Icon({
    iconUrl: MarkIcon,
    iconSize: [70, 105],
    iconAnchor: [35, 65],
    popupAnchor: [0, -40],
});
const lat = 49.4417847;
const lng = 8.6215269;
export default function ContactForm({ className }: { className?: ClassValue }) {
    const offsetLat = useResponsiveValue({
        default: 0,
    });

    const offsetLng = useResponsiveValue({
        default: 0,
        md: -0.005,
        lg: -0.007,
        xl: -0.009,
    });

    return (
        <div className={cn(className)}>
            <ContantFormInput className="flex md:hidden md:w-7/12 lg:w-1/2 xl:w-5/12 bg-white" />
            <div className={cn("relative h-[800px] xl:h-[875px]")}>
                <MapContainer
                    center={[lat + offsetLat, lng + offsetLng]}
                    zoom={16}
                    scrollWheelZoom={false}
                    className="absolute inset-0"
                    dragging={false}
                    zoomControl={false}
                    doubleClickZoom={false}
                >
                    {/* <RecenterMap lat={lat + offsetLat} lng={lng + offsetLng} /> */}
                    <RecenterOnResize
                        lat={lat + offsetLat}
                        lng={lng + offsetLng}
                        delay={300}
                    />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                    />
                    <Marker position={[lat, lng]} icon={customIcon}>
                        <Popup>
                            <a
                                href={
                                    "https://www.google.com/maps/place/Lipowa+Polsterwarenfabrik+GmbH/@49.4416528,8.621198,19.92z/data=!3m1!5s0x4797c687d23d8a59:0xf42225187935f6c2!4m12!1m5!3m4!2zNDnCsDI2JzMwLjQiTiA4wrAzNycxNy41IkU!8m2!3d49.4417847!4d8.6215269!3m5!1s0x4797c687c92ce3b1:0x7bc2f1800ac04ce9!8m2!3d49.4419784!4d8.6216468!16s%2Fg%2F1tfnryy_?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D"
                                }
                                target="_blank"
                                className="text-[#232A11] font-medium"
                            >
                                Open in Google Maps
                            </a>
                        </Popup>
                    </Marker>
                </MapContainer>
                <div className="hidden md:flex absolute inset-0 items-center pointer-events-none">
                    <ContantFormInput className="pointer-events-auto md:w-7/12 lg:w-1/2 xl:w-5/12 bg-white ml-[52px]" />
                </div>
            </div>
        </div>
    );
}

function ContantFormInput({ className }: { className?: ClassValue }) {
    return (
        <RevealFromBottom
            className={cn(
                "py-[38px] px-[48px] flex flex-col gap-[30px]",
                className,
            )}
        >
            <div>
                <p className="text-[14px] text-[#AEAEAE] mb-1">Name*</p>
                <input
                    type="text"
                    placeholder="Ihr Name*"
                    className="w-full border border-[#E0E0E0] rounded-[8px] py-[30px] px-[40px] text-[22px]"
                />
            </div>
            <div>
                <p className="text-[14px] text-[#AEAEAE] mb-1">E-Mail*</p>
                <input
                    type="text"
                    placeholder="Ihr E-Mail*"
                    className="w-full border border-[#E0E0E0] rounded-[8px] py-[30px] px-[40px] text-[22px]"
                />
            </div>
            <div>
                <p className="text-[14px] text-[#AEAEAE] mb-1">
                    Nachricht / Anfrage*
                </p>
                <textarea
                    placeholder="Ihr Nachricht*"
                    className="w-full border border-[#E0E0E0] rounded-[8px] py-[30px] px-[40px] text-[22px] resize-none"
                    rows={4}
                />
            </div>
            <div className="group flex text-[18px] items-center">
                <Button
                    className="
                        px-[30px] py-[11px]
                        border border-[#3B3B3B]
                        text-[#3B3B3B]
                        transition-all duration-300
                        group-hover:bg-[#3B3B3B]
                        group-hover:text-white
                        "
                >
                    SENDEN
                </Button>

                <Button
                    className="
                        rounded-full p-[16px]
                        border border-[#3B3B3B]
                        bg-[#3B3B3B]
                        text-white
                        transition-all duration-300
                        group-hover:bg-white
                        group-hover:text-[#3B3B3B]
                        "
                >
                    <UpRightIcon className="w-4 h-4" />
                </Button>
            </div>
        </RevealFromBottom>
    );
}
