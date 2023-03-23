import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Pollux from "./pages/products/pollux";
import Apero from "./pages/products/apero";
import Stage from "./pages/stage";
// import Interns from "./pages/interns";
import Contact from "./pages/contact";
import About from "./pages/about";
import NotFound from "./pages/notFound";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/creations" element={<Products />} />
                <Route path="/pollux" element={<Pollux />} />
                <Route path="/apero" element={<Apero />} />
                <Route path="/stages" element={<Stage />} />
                {/* <Route path="/stagiaires" element={<Interns />} /> */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
