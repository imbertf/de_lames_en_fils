import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Article from "../../components/Article";
import Card from "../../components/Cards";
import ContactMe from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <Header picture={"./medias/images/couteaux/couteau2-filter.jpg"} />
            <section className="cardWrapper">
                <Link
                    to="/creations"
                    className="cardWrapper-links"
                    data-aos="fade-up"
                >
                    <Card
                        picture={`/medias/images/atelier/atelier4.jpg`}
                        alt="Carte créations"
                        text="Créations"
                    />
                </Link>
                <Link
                    to="/stages"
                    className="cardWrapper-links"
                    data-aos="fade-up"
                >
                    <Card
                        picture={`/medias/images/stages/stage24-filter.jpg`}
                        alt="Carte contact"
                        text="Stages"
                    />
                </Link>
                <Link
                    to="/contact"
                    className="cardWrapper-links"
                    data-aos="fade-up"
                >
                    <Card
                        picture={`/medias/images/atelier/atelier11.jpg`}
                        alt="Carte contact"
                        text="Contact"
                    />
                </Link>
            </section>

            <Article
                title={"Adrien Guillot"}
                text={`Grenoblois depuis toujours, attaché à notre belle région et à ses paysages, je me suis permis de la quitter quelques temps afin d’assouvir mes rêves d’aéronautique militaire. Après une expérience en tant que moniteur dans l’armée de l’air, me voici de retour dans le bassin grenoblois.

                Début 2018, les premiers coups de marteau contre de la ferraille chaude au sein de l’atelier L.E.T dans le Trièves me permettent de me rendre compte à quel point il était plaisant de travailler, transformer , et créer des matières nobles telles que le bois et l’acier.
                
                La rigueur et le goût de l’effort inculqués par l’armée, le goût de la transmission et le plaisir de créer se concrétisent en 2019 avec la création de De Lames En Fils. L’envie de vivre de nouveau guidé par le cœur, je souhaite travailler de mes mains et en permanence créer, développer et penser à de nouveaux projets.
                
                Après un certain nombre de couteaux confectionnés et d’échanges avec des clients, amateurs et simples curieux, Je propose maintenant des stages de confections de couteaux ou passionnés et néophytes ont la possibilité de venir créer leur couteaux à l’atelier.
                `}
                picture={"./medias/images/atelier/atelier12.jpg"}
                alt={"Adrien"}
            />
            <section className="sectionContent" data-aos="fade-up">
                <div className="sectionContent-txt" data-aos="zoom-in">
                    <h3>Imaginons ensemble...</h3>
                    <p>
                        Bienvenue dans un monde de créativité ! En tant que
                        coutelier, je suis passionné par la création de couteaux
                        personnalisés uniques et adaptés à vos besoins et
                        préférences spécifiques.
                        <br />
                        <br /> Que vous soyez un chef professionnel à la
                        recherche de l'outil parfait pour améliorer vos
                        compétences culinaires ou un simple amateur envieux d'un
                        couteau fait main, je suis là pour donner vie à votre
                        vision.
                        <br />
                        <br /> Avec des années d'expérience dans la fabrication
                        de couteaux, je m'engage à n'utiliser que les meilleurs
                        matériaux et techniques pour créer un produit vraiment
                        exceptionnel. Du manche à la lame, chaque aspect de
                        votre couteau personnalisé sera conçu et fabriqué avec
                        précision et soin.
                        <br />
                        <br />
                        Donc, si vous êtes prêt à passer à l'étape suivante en
                        possédant un couteau personnalisé, je vous invite à
                        m'envoyer un message en utilisant le formulaire de
                        contact ci-dessous. Échangeons donc sur vos idées et vos
                        préférences, et ensemble nous créerons une pièce unique
                        que vous chérirez pour les années à venir.
                        <br />
                        <br /> Merci de me considérer pour vos besoins de
                        couteaux personnalisés, et j'ai hâte d'avoir de vos
                        nouvelles bientôt !
                    </p>
                </div>
            </section>
            <ContactMe />
            <Footer />
        </>
    );
};

export default Home;
