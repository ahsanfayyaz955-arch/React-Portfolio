import { motion } from "framer-motion";
import { ArrowDown, Sparkles, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import SpaceScene from "../3d/SpaceScene";

import "./Hero.css";

export default function Hero() {
    return (
        <section id="home" className="hero">

            {/* =====================================================
                3D BACKGROUND
            ===================================================== */}

            <div className="hero-space">
                <SpaceScene />
            </div>

            <div className="hero-overlay" />

            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />


            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}

            <div className="hero-container">


                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <motion.div
                    className="hero-content"
                    initial={{
                        opacity: 0,
                        x: -60
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 0.9,
                        ease: "easeOut"
                    }}
                >

                    {/* BADGE */}

                    <motion.div
                        className="hero-badge"
                        initial={{
                            opacity: 0,
                            y: 15
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.6
                        }}
                    >
                        <Sparkles size={14} />

                        <span>
                            AVAILABLE FOR OPPORTUNITIES
                        </span>
                    </motion.div>


                    {/* GREETING */}

                    <p className="hero-greeting">
                        HELLO, I'M
                    </p>


                    {/* NAME */}

                    <h1>
                        Ahsan<span>.</span>
                    </h1>


                    {/* ROLE */}

                    <h2>
                        ASP.NET Core Developer
                    </h2>


                    {/* DESCRIPTION */}

                    <p className="hero-description">
                        I build modern, scalable and high-performance
                        web applications using{" "}
                        <strong>
                            .NET, React and SQL Server.
                        </strong>
                    </p>


                    {/* BUTTONS */}

                    <div className="hero-buttons">

                        <a
                            href="#projects"
                            className="primary-btn"
                        >
                            Explore My Work
                        </a>

                        <a
                            href="#contact"
                            className="secondary-btn"
                        >
                            Let's Talk
                        </a>

                        {/* CV / RESUME BUTTON */}
                        <a
                            href="/resume.pdf.docx" /* Aap apni public folder ki PDF ka path ya Google Drive view link yahan de sakte hain */
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cv-btn secondary-btn"
                        >
                            <FileText size={18} />
                            <span>View CV</span>
                        </a>

                    </div>


                    {/* SOCIALS */}

                    <div className="hero-socials">

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>


                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>

                    </div>

                </motion.div>


                {/* =================================================
                    RIGHT PROFILE VISUAL
                ================================================= */}

                <motion.div
                    className="hero-visual"
                    initial={{
                        opacity: 0,
                        x: 80,
                        scale: 0.85
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.1,
                        delay: 0.15,
                        ease: "easeOut"
                    }}
                >

                    {/* PROFILE GLOW */}

                    <div className="profile-glow" />


                    {/* ORBITS */}

                    <div className="profile-orbit orbit-one" />

                    <div className="profile-orbit orbit-two" />


                    {/* PROFILE */}

                    <motion.div
                        className="profile-wrapper"
                        animate={{
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >

                        <div className="profile-ring">

                            <div className="profile-inner">

                                <img
                                    src="/Profile.png"
                                    alt="Ahsan"
                                    className="profile-image"
                                />

                            </div>

                        </div>

                    </motion.div>


                    {/* TOP FLOATING CARD */}

                    <motion.div
                        className="floating-card floating-card-top"
                        animate={{
                            y: [0, -8, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >

                        <span className="floating-dot" />

                        <span>
                            .NET
                        </span>

                    </motion.div>


                    {/* BOTTOM FLOATING CARD */}

                    <motion.div
                        className="floating-card floating-card-bottom"
                        animate={{
                            y: [0, 8, 0]
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >

                        <span>
                            React
                        </span>

                        <span className="floating-dot cyan" />

                    </motion.div>

                </motion.div>

            </div>


            {/* =====================================================
                SCROLL
            ===================================================== */}

            <motion.a
                href="#about"
                className="scroll-indicator"
                animate={{
                    y: [0, 8, 0]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity
                }}
            >

                <span>
                    SCROLL TO EXPLORE
                </span>

                <ArrowDown size={17} />

            </motion.a>

        </section>
    );
}