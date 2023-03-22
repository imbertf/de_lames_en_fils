import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <button
                    className={`navbar-burger ${isOpen ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarMenu"
                    onClick={toggleNavbar}
                >
                    <IoMenuSharp className={isOpen ? "is-inactive" : ""} />
                    <RxCross1 className={isOpen ? "" : "is-inactive"} />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>
            </div>
            <div
                className={`navbar-menu ${isOpen ? "is-active" : ""}`}
                id="navbarMenu"
            >
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Accueil
                    </Link>
                    <Link to="/produits" className="navbar-item">
                        Produits
                    </Link>
                    <Link to="/stage" className="navbar-item">
                        Stage
                    </Link>
                    <Link to="/contact" className="navbar-item">
                        Contact
                    </Link>
                    <Link to="/a-propos" className="navbar-item">
                        A propos
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
