import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="logoContent">
            <div>
                <img
                    src="./medias/images/logos/logo-transparent.png"
                    alt="logo"
                />
            </div>
        </Link>
    );
};

export default Logo;
