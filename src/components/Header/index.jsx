import React from "react";
import Logo from "../Logo";
import Navbar from "../NavBar";

const Header = ({ picture }) => {
    return (
        <header className="header">
            <div className="header-bgContent">
                <img src={picture} alt="bannière" />
            </div>
            <div className="header-navigation">
                <Logo />
                <Navbar />
            </div>
        </header>
    );
};

export default Header;