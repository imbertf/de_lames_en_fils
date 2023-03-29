import React from "react";

const Article = ({ title, text, picture, alt }) => {
    return (
        <article className="articleContent">
            <div className="articleContent-txt">
                <h3>{title}</h3>
                <p className="css-fix">{text}</p>
            </div>
            <div className="articleContent-img">
                <img src={picture} alt={alt} />
            </div>
        </article>
    );
};

export default Article;
