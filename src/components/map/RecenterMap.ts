import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

export function RecenterMap({
    lat,
    lng,
    zoom,
}: {
    lat: number;
    lng: number;
    zoom?: number;
}) {
    const map = useMap();

    useEffect(() => {
        map.setView([lat, lng], zoom ?? map.getZoom(), {
            animate: true,
        });
    }, [lat, lng, zoom, map]);

    return null;
}

export function RecenterOnResize({
    lat,
    lng,
    zoom,
    delay = 150,
}: {
    lat: number;
    lng: number;
    zoom?: number;
    delay?: number; // debounce time
}) {
    const map = useMap();
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = window.setTimeout(() => {
                map.setView([lat, lng], zoom ?? map.getZoom(), {
                    animate: true,
                });
            }, delay);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [lat, lng, zoom, delay, map]);

    return null;
}
