import React, { useState } from "react";
import Button from "../Button";

const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/f55a3ea0-c8c8-11ed-8bf6-65581b4c2d05";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    // Allow user to send a new message
    const handleReset = () => {
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <div className="successMsgContent">
                <div className="successMsgContent-txt">
                    <h2>Merci !</h2>
                    <p>Je reviens rapidement vers vous.</p>

                    <Button
                        type={"submit"}
                        text={"Nouveau message"}
                        onClick={handleReset}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="formContent" data-aos="fade-up">
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                <div data-aos="fade-up">
                    <input type="text" placeholder="Nom" name="name" required />
                </div>
                <div data-aos="fade-up">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                </div>
                <div data-aos="fade-up">
                    <textarea
                        placeholder="Votre message"
                        name="message"
                        required
                    />
                </div>
                <div data-aos="fade-up">
                    <Button type={"submit"} text={"Envoyer"} />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
