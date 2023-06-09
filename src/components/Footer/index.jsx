import React, { useState } from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import {
    SlSocialInstagram,
    SlSocialFacebook,
    SlPhone,
    SlEnvolope,
} from "react-icons/sl";

function onEmailClick() {
    window.open(`mailto:adrienj.guillot@hotmail.fr`);
}

function onPhoneClick() {
    window.open(`tel:+33684088879`);
}

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showPepiteggs = () => {
        setIsOpen(!isOpen);
    };

    return (
        <footer
            className="footerContent"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
        >
            <Logo />
            <div className="footerContent-social">
                <Link
                    to="https://instagram.com/de_lames_en_fils?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer"
                >
                    <SlSocialInstagram />
                </Link>
                <Link
                    to="https://www.facebook.com/people/De-Lames-En-Fils/100057342224297/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <SlSocialFacebook />
                </Link>
                <SlPhone onClick={onPhoneClick} />
                <SlEnvolope onClick={onEmailClick} />
            </div>
            <p>
                | Website created by{" "}
                <span onClick={showPepiteggs} className="showPepiteggs">
                    ©️imbertf
                </span>{" "}
                2023 |
            </p>
            <div className={isOpen ? "is-active" : "is-inactive"}>
                <div className="pepiteggsContent">
                    <span className="pepiteggs">🐈‍⬛ MI MI MI ! </span>
                    <Link
                        to="https://www.imbertf.fr/"
                        className="pepiteggs"
                        target="_blank"
                        rel="noreferrer"
                    >
                        www.imbertf.fr
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
