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
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-delay="1200"
                    data-aos-offset="500"
                    data-aos-duration="500"
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
                    <Link
                        to="/"
                        className="navbar-item"
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-delay="400"
                        data-aos-offset="500"
                        data-aos-duration="1500"
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/creations"
                        className="navbar-item"
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-delay="600"
                        data-aos-offset="500"
                        data-aos-duration="1500"
                    >
                        Créations
                    </Link>
                    <Link
                        to="/stages"
                        className="navbar-item"
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-delay="800"
                        data-aos-offset="500"
                        data-aos-duration="1500"
                    >
                        Stages
                    </Link>
                    <Link
                        to="/contact"
                        className="navbar-item"
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-delay="1000"
                        data-aos-offset="500"
                        data-aos-duration="1500"
                    >
                        Contact
                    </Link>
                    {/* <Link to="/a-propos" className="navbar-item">
                        A propos
                    </Link> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
