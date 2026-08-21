import { useState } from "react";
import type { FormEvent } from "react";

import { motion } from "framer-motion";

import {
    Mail,
    MapPin,
    Send,
    CheckCircle2,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import "./Contact.css";


export default function Contact() {

    const [sent, setSent] = useState(false);


    const handleSubmit = (
        event: FormEvent<HTMLFormElement>
    ): void => {

        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(form);

        const name = String(
            formData.get("name") ?? ""
        );

        const email = String(
            formData.get("email") ?? ""
        );

        const message = String(
            formData.get("message") ?? ""
        );


        const subject = encodeURIComponent(
            `Portfolio Contact - ${name}`
        );


        const body = encodeURIComponent(
            `Hello Ahsan,

Name: ${name}
Email: ${email}

Message:
${message}

--------------------------------
Sent from Ahsan Portfolio`
        );


        const mailtoUrl =
            `mailto:ahsanfayyaz955@gmail.com` +
            `?subject=${subject}` +
            `&body=${body}`;


        window.location.href = mailtoUrl;

        setSent(true);

        form.reset();
    };


    return (
        <section
            id="contact"
            className="contact section"
        >

            <div className="section-container">

                <motion.div
                    className="contact-box"

                    initial={{
                        opacity: 0,
                        y: 40,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    transition={{
                        duration: 0.6,
                    }}
                >

                    {/* ================================
                        LEFT CONTENT
                    ================================= */}

                    <div className="contact-content">

                        <span className="contact-label">
                            GET IN TOUCH
                        </span>


                        <h2>
                            Let's build something
                            <strong> amazing.</strong>
                        </h2>


                        <p>
                            Have a project idea, opportunity
                            or just want to connect? Feel free
                            to reach out.
                        </p>


                        {/* CONTACT INFO */}

                        <div className="contact-info">

                            <a
                                href="mailto:ahsanfayyaz955@gmail.com"
                            >

                                <Mail size={18} />

                                <span>
                                    ahsanfayyaz955@gmail.com
                                </span>

                            </a>


                            <div>

                                <MapPin size={18} />

                                <span>
                                    Pakistan
                                </span>

                            </div>

                        </div>


                        {/* SOCIALS */}

                        <div className="contact-socials">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub size={19} />
                            </a>


                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={19} />
                            </a>

                        </div>

                    </div>


                    {/* ================================
                        CONTACT FORM
                    ================================= */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            autoComplete="name"
                            required
                        />


                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            autoComplete="email"
                            required
                        />


                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Tell me about your project..."
                            required
                        />


                        <button
                            type="submit"
                        >

                            {sent ? (
                                <>
                                    <CheckCircle2
                                        size={18}
                                    />

                                    Message Ready
                                </>
                            ) : (
                                <>
                                    <Send
                                        size={17}
                                    />

                                    Send Message
                                </>
                            )}

                        </button>


                        <small className="contact-note">
                            Your email app will open with
                            the message prepared for me.
                        </small>

                    </form>

                </motion.div>

            </div>

        </section>
    );
}