// import React from "react";
// import Button from "../index";

// const ScrollButton = () => {
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//         });
//     };

//     return <Button text={"TOP"} color={"#432b4f"} onClick={scrollToTop} />;
// };

// export default ScrollButton;

import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollTopButton = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, []);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {showScroll && (
                <div className="scroll-top-button" onClick={scrollTop}>
                    <FaArrowCircleUp />
                </div>
            )}
        </>
    );
};

export default ScrollTopButton;
