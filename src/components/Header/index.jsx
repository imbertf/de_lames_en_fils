import React from "react";
import Logo from "../Logo";
import Navbar from "../NavBar";

const Header = ({ picture, style }) => {
    return (
        <header className="header">
            <div className="header-bgContent">
                <img
                    src={picture}
                    alt="bannière"
                    className="position"
                    style={style}
                />
            </div>
            <div className="header-navigation">
                <Logo />
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
