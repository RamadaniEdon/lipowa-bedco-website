import headerImage from "../assets/landing-page/landing-page-img-1.png";

export default function Home() {
    return (
        <div
            style={{
                backgroundImage: `url(${headerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "49vw",
                display: "flex",
            }}
        >
            <h1
                className="margin_container"
                style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: "108px",
                    width: "100%",
                    fontWeight: "normal",
                    lineHeight: "110px",
                    textTransform: "uppercase",
                    marginLeft: "100px",
                }}
            >
                Ihre perfekte Matratze,
            </h1>
            <h1
                className="margin_container"
                style={{
                    alignSelf: "end",
                    textAlign: "end",
                    color: "white",
                    fontSize: "108px",
                    fontWeight: "normal",
                    lineHeight: "110px",
                    textTransform: "uppercase",
                    marginRight: "100px",
                    marginBottom: "90px",
                }}
            >
                Unser Handwerk
            </h1>
        </div>
    );
}
