import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import ContactMap from "../../components/GoogleMap";

const Contact = () => {
    return (
        <>
            <Header picture={"/medias/images/atelier/atelier3.jpg"} />
            <section className="sectionContent">
                <div className="sectionContent-txt">
                    <h1>
                        Chez De Lames en Fils, nous nous engageons à fabriquer
                        des couteaux uniques et de haute qualité qui sont
                        adaptés à vos besoins et préférences individuels.
                    </h1>
                    <p>
                        <br />
                        <br /> Nous sommes très fiers de notre savoir-faire et
                        nous nous engageons à vous offrir la meilleure
                        expérience possible. Nous comprenons que chaque client a
                        ses propres désirs et besoins en matière de couteaux,
                        c'est pourquoi nous proposons une gamme d'options
                        personnalisables pour garantir que votre couteau est
                        vraiment unique en son genre.
                        <br />
                        <br />
                        Que vous recherchiez une forme de lame spécifique, un
                        matériau de manche ou un style particulier, nous vous
                        offrons notre expertise pour vous aider à créer le
                        couteau parfait pour vos besoins. Nous n'utilisons que
                        les meilleurs matériaux et techniques pour garantir que
                        chaque couteau que nous fabriquons est de la plus haute
                        qualité.
                        <br />
                        <br />
                        Si vous souhaitez en savoir plus sur nos offres ou si
                        vous souhaitez discuter de vos besoins spécifiques, nous
                        vous invitons à nous contacter dès aujourd'hui. Notre
                        équipe est toujours disponible pour répondre à toutes
                        vos questions et nous nous engageons à vous fournir le
                        meilleur service possible. Pour nous contacter,
                        remplissez simplement le formulaire de contact
                        ci-dessous, et nous vous contacterons dans les plus
                        brefs délais. Nous attendons avec impatience de vous
                        entendre et de vous aider à créer le couteau parfait
                        pour vos besoins.
                        <br />
                        <br /> Adrien
                    </p>
                </div>
            </section>
            <ContactForm />
            <ContactMap />
            <Footer />
        </>
    );
};

export default Contact;
