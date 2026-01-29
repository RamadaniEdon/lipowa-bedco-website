import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Betten from "./pages/Betten";
import SomeMatratzen from "./pages/SomeMatratzen";
import Kontakt from "./pages/Kontakt";
import Matratzen from "./pages/Matratzen";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/uber-uns"
                        element={<AboutUs className="mt-[138px] mb-[108px]" />}
                    />
                    <Route
                        path="/matratzen"
                        element={<Matratzen className="mt-[138px] mb-[60px]" />}
                    />
                    <Route
                        path="/betten"
                        element={<Betten className="mt-[138px] mb-[60px]" />}
                    />
                    <Route
                        path="/matratzen/:id"
                        element={
                            <SomeMatratzen className="mt-[138px] mb-[60px]" />
                        }
                    />
                    <Route
                        path="/kontakt"
                        element={<Kontakt className="mt-[138px]" />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
