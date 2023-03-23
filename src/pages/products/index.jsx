import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Cards";
import CardGallery from "../../components/Cards/CardGallery";
import { Link } from "react-router-dom";
import data from "../../datas/data.json";

const Products = () => {
    const pictures = data.couteaux;

    return (
        <>
            <Header picture={"/medias/images/atelier/atelier12.jpg"} />
            <div className="title">
                <h1>L'expérience d'un savoir-faire exceptionnel</h1>
            </div>
            <section className="cardWrapper spaceEvenly marginBottom">
                <div className="products-linkWrapper">
                    <Link to="/pollux" className="cardWrapper-links">
                        <Card
                            picture={`/medias/images/pollux/pollux12.jpg`}
                            alt="Carte couteau Pollux"
                            text="Pollux"
                        />
                    </Link>
                    <p className="products-linkWrapper-txt">
                        ...inspiré de la pale du fameux C-160 Transall
                    </p>
                </div>
                <div className="products-linkWrapper">
                    <Link to="/apero" className="cardWrapper-links">
                        <Card
                            picture={`/medias/images/apero/apero3.jpg`}
                            alt="Carte couteau Apéro"
                            text="Apéro"
                        />
                    </Link>
                    <p className="products-linkWrapper-txt">
                        A quel moment de convivialité a-t-on le plus besoin d’un
                        couteau si ce n’est l’apéritif ?
                    </p>
                </div>
            </section>
            <div className="title">
                <h2>
                    Découvrez l'art de l'artisanat avec nos couteaux faits à la
                    main : des pièces uniques à la fois belles et fonctionnelles
                    !
                </h2>
            </div>
            <p className="txt">
                Chez <span className="txt-highlight">De Lames en Fils</span>,
                nous croyons que les couteaux sont plus que de simples outils -
                ils sont une expression de l'art et des compétences. C'est
                pourquoi chacun de nos couteaux est fabriqué à la main avec le
                plus grand soin et une attention particulière aux détails,
                garantissant que chaque pièce est non seulement belle, mais
                aussi très fonctionnelle. Des designs classiques aux
                rebondissements modernes, notre collection de couteaux faits
                maison met en valeur la polyvalence de cet outil intemporel. Que
                vous soyez un collectionneur ou un chef, nos couteaux
                impressionneront à coup sûr par leur savoir-faire exquis et
                leurs lames tranchantes et précises. Explorez notre galerie de
                couteaux faits maison aujourd'hui et découvrez par vous-même la
                beauté et la fonctionnalité de ces pièces uniques. Chaque
                couteau est un chef-d'œuvre unique en son genre, fabriqué avec
                passion et dévouement par nos artisans qualifiés.
            </p>

            <section className="galleryWrapper">
                {pictures.map((element, index) => (
                    <ul key={`${element}-${index}`}>
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

export default Products;
