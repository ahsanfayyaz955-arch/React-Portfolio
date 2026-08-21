import { motion } from "framer-motion";
import {
    Braces,
    Database,
    Globe,
    Server,
    Wrench,
} from "lucide-react";

import "./Skills.css";

const skills = [
    {
        icon: Braces,
        title: "C# / .NET",
        items: [
            "C#",
            "ASP.NET Core",
            "MVC",
            "Web API",
            "LINQ",
        ],
    },
    {
        icon: Server,
        title: "Backend",
        items: [
            "REST API",
            "JWT",
            "Identity",
            "Repository Pattern",
            "Dependency Injection",
        ],
    },
    {
        icon: Database,
        title: "Database",
        items: [
            "SQL Server",
            "EF Core",
            "Migrations",
            "Database Design",
            "LINQ",
        ],
    },
    {
        icon: Globe,
        title: "Frontend",
        items: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
        ],
    },
    {
        icon: Wrench,
        title: "Tools",
        items: [
            "Git",
            "GitHub",
            "Visual Studio",
            "VS Code",
            "Postman",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="skills section"
        >
            <div className="section-container">

                <div className="section-heading">
                    <span>TECH STACK</span>

                    <h2>
                        Tools I use to
                        <strong> build.</strong>
                    </h2>

                    <p>
                        A collection of technologies and tools I
                        use across my projects.
                    </p>
                </div>

                <div className="skills-grid">

                    {skills.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <motion.div
                                className="skill-card"
                                key={skill.title}
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: index * 0.08,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                            >
                                <div className="skill-icon">
                                    <Icon size={25} />
                                </div>

                                <h3>
                                    {skill.title}
                                </h3>

                                <div className="skill-tags">
                                    {skill.items.map(
                                        (item) => (
                                            <span key={item}>
                                                {item}
                                            </span>
                                        )
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}