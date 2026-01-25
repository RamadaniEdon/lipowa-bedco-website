import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/uber-uns" element={<AboutUs />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
