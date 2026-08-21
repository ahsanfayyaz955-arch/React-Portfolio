import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Layers3,
    Rocket,
} from "lucide-react";

import "./About.css";

const stats = [
    {
        value: "10+",
        label: "Projects Built",
    },
    {
        value: "15+",
        label: "Technologies",
    },
    {
        value: "100%",
        label: "Passion",
    },
];

const cards = [
    {
        icon: Code2,
        title: "Clean Development",
        text: "Writing maintainable, structured and scalable application code.",
    },
    {
        icon: Database,
        title: "Backend Engineering",
        text: "Building reliable APIs, database systems and business logic.",
    },
    {
        icon: Layers3,
        title: "Modern Architecture",
        text: "Using layered architecture, clean separation and reusable components.",
    },
    {
        icon: Rocket,
        title: "Full Stack Mindset",
        text: "Connecting powerful .NET backends with modern React interfaces.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="about section"
        >
            <div className="section-container">

                <motion.div
                    className="section-heading"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    <span>ABOUT ME</span>

                    <h2>
                        Building software
                        <strong> with purpose.</strong>
                    </h2>

                    <p>
                        I'm a software developer focused on building
                        modern web applications and solving real-world
                        problems through technology.
                    </p>
                </motion.div>

                <div className="about-grid">

                    <motion.div
                        className="about-text"
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <p>
                            My main focus is the
                            <strong> .NET ecosystem</strong>.
                            I work with ASP.NET Core, Web APIs,
                            Entity Framework Core and SQL Server
                            to build robust backend systems.
                        </p>

                        <p>
                            On the frontend, I use
                            <strong> React</strong> to create
                            responsive and interactive interfaces
                            that provide a smooth user experience.
                        </p>

                        <p>
                            I enjoy learning new technologies,
                            designing application architecture and
                            turning ideas into working products.
                        </p>

                        <div className="stats-grid">
                            {stats.map((stat) => (
                                <div
                                    className="stat-card"
                                    key={stat.label}
                                >
                                    <strong>
                                        {stat.value}
                                    </strong>

                                    <span>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="about-cards">

                        {cards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <motion.div
                                    className="about-card"
                                    key={card.title}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: index * 0.1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                >
                                    <div className="about-icon">
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <h3>
                                            {card.title}
                                        </h3>

                                        <p>
                                            {card.text}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>

                </div>
            </div>
        </section>
    );
}