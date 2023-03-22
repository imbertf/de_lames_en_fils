import React from "react";
import Logo from "../Logo";
import Navbar from "../NavBar";

const Header = () => {
    return (
        <header className="header">
            <div className="header-bgContent">
                <img
                    src="./medias/images/couteaux/couteau2-filter.jpg"
                    alt=""
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
