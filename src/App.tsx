import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
