import type { TimelineCarouselItemProps } from "./TimelineCarousel";
import Year1909Img1 from "@assets/uberuns/1909-1.png";
import Year1909Img2 from "@assets/uberuns/1909-2.png";
import Year1948Img1 from "@assets/uberuns/1948-1.png";
import Year1948Img2 from "@assets/uberuns/1948-2.png";
import Year1959Img1 from "@assets/uberuns/1959-1.png";
import Year1959Img2 from "@assets/uberuns/1959-2.png";
import Year1970Img1 from "@assets/uberuns/1970-1.png";
import Year1970Img2 from "@assets/uberuns/1970-2.png";
import Year1997Img1 from "@assets/uberuns/1997-1.png";
import Year1997Img2 from "@assets/uberuns/1997-2.png";
import Year2026Img1 from "@assets/uberuns/today-1.png";
import Year2026Img2 from "@assets/uberuns/today-2.png";

export const timelineCarouselItems: TimelineCarouselItemProps[] = [
    {
        year: "1909",
        title: "1909",
        shortDescription: "Erste Gründung",
        description: (
            <p>
                Michael Lieberknecht gründet ein Sattler-, Tapezier- und
                Polstergeschäft in
                <br /> Edingen. Damit beginnt die Familiengeschichte von Lipowa.
            </p>
        ),
        images: [
            {
                src: Year1909Img1,
                widthRatio: 0.42,
                heightRatio: 0.25,
                topRatio: 0.08,
                rightRatio: -0.06,
                rotate: -7,
            },
            {
                src: Year1909Img2,
                widthRatio: 0.3,
                heightRatio: 0.22,
                bottomRatio: 0.06,
                leftRatio: -0.04,
                rotate: 8,
            },
        ],
    },
    {
        year: "1948",
        title: "1948",
        shortDescription: "Neue Fertigung ",
        description: (
            <p>
                Die Söhne Ludwig und Arthur Lieberknecht übernehmen und starten
                <br />
                die Fertigung von Matratzen und Polstermöbeln.
            </p>
        ),
        images: [
            {
                src: Year1948Img1,
                widthRatio: 0.24,
                heightRatio: 0.22,
                topRatio: 0.16,
                leftRatio: 0.08,
                rotate: -11,
            },
            {
                src: Year1948Img2,
                widthRatio: 0.27,
                heightRatio: 0.24,
                bottomRatio: 0.06,
                rightRatio: 0.1,
                rotate: 4,
            },
        ],
    },
    {
        year: "1959",
        title: "1959",
        shortDescription: "Standort Wechsel",
        description: (
            <p>
                Umzug in den heutigen Firmensitz mit eigener Fertigung.
                Matratzen wurden noch aus drei
                <br /> Teilen von Hand vernäht, oft begleitet von fröhlichem
                Gesang.
            </p>
        ),
        images: [
            {
                src: Year1959Img1,
                widthRatio: 0.33,
                heightRatio: 0.26,
                bottomRatio: 0.08,
                leftRatio: 0.03,
                rotate: 5,
            },
            {
                src: Year1959Img2,
                widthRatio: 0.34,
                heightRatio: 0.23,
                topRatio: 0.13,
                rightRatio: 0,
                rotate: -9,
            },
        ],
    },
    {
        year: "1970",
        title: "1970",
        shortDescription: "Größte Phase",
        description: (
            <p>
                Lipowa erreicht mit 180 Mitarbeitern einen Höchststand, der
                später aufgrund
                <br />
                globaler Handelsentwicklungen nicht gehalten werden kann.
            </p>
        ),
        images: [
            {
                src: Year1970Img1,
                widthRatio: 0.3,
                heightRatio: 0.22,
                topRatio: 0.16,
                leftRatio: 0.03,
                rotate: -15,
            },
            {
                src: Year1970Img2,
                widthRatio: 0.41,
                heightRatio: 0.23,
                bottomRatio: 0.1,
                rightRatio: 0,
                rotate: 6,
            },
        ],
    },
    {
        year: "1997",
        title: "1997",
        shortDescription: "Moderner Neustart",
        description: (
            <p>
                Werner und Susanne Lieberknecht übernehmen die Leitung in
                dritter
                <br />
                Generation und führen die handwerkliche Tradition modern fort.
            </p>
        ),
        images: [
            {
                src: Year1997Img1,
                widthRatio: 0.26,
                heightRatio: 0.24,
                bottomRatio: 0.07,
                leftRatio: 0,
                rotate: 9,
            },
            {
                src: Year1997Img2,
                widthRatio: 0.35,
                heightRatio: 0.21,
                bottomRatio: 0.18,
                rightRatio: 0.04,
                rotate: -11,
            },
        ],
    },
    {
        year: "2026",
        title: "Heute",
        shortDescription: "Moderner Neustart",
        description: (
            <p>
                Lipowa gehört zu den wenigen erfolgreichen deutschen
                Manufakturen für Matratzen, Betten und
                <br /> Verwandlungsmöbel mit Fokus auf individuelle Fertigung
                und Nachhaltigkeit.
            </p>
        ),
        images: [
            {
                src: Year2026Img1,
                widthRatio: 0.32,
                heightRatio: 0.2,
                topRatio: 0.14,
                leftRatio: 0.06,
                rotate: -11,
            },
            {
                src: Year2026Img2,
                widthRatio: 0.26,
                heightRatio: 0.24,
                bottomRatio: 0.06,
                rightRatio: 0.12,
                rotate: 5,
            },
        ],
    },
];
