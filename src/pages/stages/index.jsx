import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardGallery from "../../components/Cards/CardGallery";
import data from "../../datas/data.json";
import Tag from "../../components/Tag";

const Stages = () => {
    const pictures = data.stages;
    return (
        <>
            <Header
                picture={"/medias/images/stages/stage46.jpg"}
                style={{ objectPosition: "top" }}
            />
            <section className="stagesContent" data-aos="fade-up">
                <div
                    className="stagesContent-txt"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="stagesContent-title" data-aos="zoom-in">
                        <h1> Dessinez et donnez vie à votre propre couteau </h1>
                    </div>
                    <p className="stagesContent-p" data-aos="zoom-in">
                        Adrien vous accueille dans son atelier au Versoud pour
                        vous aider à réaliser votre couteau de A à Z. <br />
                        <br /> Vous découvrirez les différentes étapes de
                        création d'un couteau par enlèvement de matière : <br />
                        <br />
                    </p>
                    <div className="tagContent" data-aos="zoom-in">
                        <Tag texte={"Choix de l'acier"} className={"tag-txt"} />
                        <Tag
                            texte={"Détourage et mise en forme de la lame"}
                            className={"tag-txt"}
                        />
                        <Tag
                            texte={"Initiation aux traitements thermiques"}
                            className={"tag-txt"}
                        />
                        <Tag texte={"Choix du bois"} className={"tag-txt"} />
                        <Tag
                            texte={"Montage du manche"}
                            className={"tag-txt"}
                        />
                        <Tag
                            texte={"Finition de l'ensemble"}
                            className={"tag-txt"}
                        />
                    </div>

                    <p className="stagesContent-p-prices" data-aos="zoom-in">
                        Adultes, enfants accompagnés, tout le monde est le
                        bienvenu !<br /> Stage sur 2 jours
                        <br />
                        <br />
                        <span>
                            En semaine
                            <Tag
                                texte={"250 €"}
                                className={"tag-txt bg-green"}
                                data-aos="zoom-in"
                            />
                        </span>
                        <span>
                            Le week-end
                            <Tag
                                texte={"300 €"}
                                className={"tag-txt bg-green"}
                                data-aos="zoom-in"
                            />
                        </span>
                    </p>
                </div>
            </section>
            <div className="title" data-aos="fade-up">
                <h1>Nos stagiaires</h1>
            </div>
            <section className="galleryWrapper" data-aos="fade-up">
                {pictures.map((element, index) => (
                    <ul key={`${element}-${index}`} data-aos="zoom-in">
                        <li>
                            <CardGallery picture={element} />
                        </li>
                    </ul>
                ))}
            </section>

            <Footer />
        </>
    );
};

export default Stages;
