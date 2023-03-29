import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link
            to="/"
            className="logoContent"
            data-aos="fade-zoom-in"
            data-aos-easing="ease"
            data-aos-delay="3000"
            data-aos-offset="0"
        >
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
