import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Pollux from "./pages/products/pollux";
import Apero from "./pages/products/apero";
import Stages from "./pages/stages";
import Contact from "./pages/contact";
// import About from "./pages/about";
import NotFound from "./pages/notFound";
import ScrollTopButton from "./components/Button/ScrollTopButton";
import ReactGA from "react-ga";
import AOS from "aos";
import "aos/dist/aos.css";

const TRACKING_ID = "G-DXB8S7CFBS";
ReactGA.initialize(TRACKING_ID);

const App = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/creations" element={<Products />} />
                <Route path="/pollux" element={<Pollux />} />
                <Route path="/apero" element={<Apero />} />
                <Route path="/stages" element={<Stages />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/a-propos" element={<About />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollTopButton />
        </BrowserRouter>
    );
};

export default App;
