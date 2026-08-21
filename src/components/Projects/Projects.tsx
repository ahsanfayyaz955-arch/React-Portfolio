import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ExternalLink,
    Play,
    X,
    Code2,
    CheckCircle2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { projects } from "../../data/Project";

import "./Projects.css";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    details?: string;
    image: string;
    video?: string;
    github: string;
    technologies: string[];
    features?: string[];
    featured?: boolean;
}

export default function Projects() {

    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    const [videoProject, setVideoProject] =
        useState<Project | null>(null);


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    useEffect(() => {

        const handleEscape = (event: KeyboardEvent) => {

            if (event.key === "Escape") {

                setSelectedProject(null);
                setVideoProject(null);

            }

        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {

            document.removeEventListener(
                "keydown",
                handleEscape
            );

        };

    }, []);


    /* =========================================================
       BODY SCROLL LOCK
    ========================================================= */

    useEffect(() => {

        const modalOpen =
            selectedProject !== null ||
            videoProject !== null;

        if (modalOpen) {

            document.body.style.overflow = "hidden";

        } else {

            document.body.style.overflow = "";

        }

        return () => {

            document.body.style.overflow = "";

        };

    }, [
        selectedProject,
        videoProject,
    ]);


    return (
        <>
            {/* =====================================================
                PROJECTS SECTION
            ===================================================== */}

            <section
                id="projects"
                className="projects section"
            >

                <div className="section-container">


                    {/* =================================================
                        HEADING
                    ================================================= */}

                    <div className="section-heading">

                        <span>
                            SELECTED WORK
                        </span>

                        <h2>
                            Things I've
                            <strong> built.</strong>
                        </h2>

                        <p>
                            Real projects, real problems and
                            practical software engineering.
                        </p>

                    </div>


                    {/* =================================================
                        PROJECT GRID
                    ================================================= */}

                    <div className="projects-grid">

                        {(projects as Project[]).map(
                            (project, index) => (

                                <motion.article
                                    key={project.id}

                                    className={`project-card ${
                                        project.featured
                                            ? "project-featured"
                                            : ""
                                    }`}

                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}

                                    transition={{
                                        delay:
                                            index * 0.08,
                                        duration: 0.5,
                                    }}

                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                >


                                    {/* =================================================
                                        THUMBNAIL
                                    ================================================= */}

                                    <button
                                        type="button"
                                        className="project-image-button"

                                        onClick={() => {

                                            if (project.video) {

                                                setVideoProject(
                                                    project
                                                );

                                            } else {

                                                setSelectedProject(
                                                    project
                                                );

                                            }

                                        }}

                                        aria-label={`View ${project.title}`}
                                    >

                                        <div className="project-image">

                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                loading="lazy"
                                            />

                                            <div className="project-image-overlay" />


                                            {/* PLAY */}

                                            {project.video && (

                                                <div className="project-play">

                                                    <span>

                                                        <Play
                                                            size={22}
                                                            fill="currentColor"
                                                        />

                                                    </span>

                                                    <small>
                                                        WATCH DEMO
                                                    </small>

                                                </div>

                                            )}

                                        </div>

                                    </button>


                                    {/* =================================================
                                        CONTENT
                                    ================================================= */}

                                    <div className="project-content">

                                        <span className="project-category">
                                            {project.category}
                                        </span>

                                        <h3>
                                            {project.title}
                                        </h3>

                                        <p>
                                            {project.description}
                                        </p>


                                        {/* TECHNOLOGIES */}

                                        <div className="project-tech">

                                            {project.technologies
                                                .slice(0, 6)
                                                .map(
                                                    (tech) => (

                                                        <span
                                                            key={tech}
                                                        >
                                                            {tech}
                                                        </span>

                                                    )
                                                )}

                                        </div>


                                        {/* =================================================
                                            ACTIONS
                                        ================================================= */}

                                        <div className="project-actions">


                                            {/* PROJECT DETAILS */}

                                            <button
                                                type="button"
                                                className="project-details-btn"

                                                onClick={() =>
                                                    setSelectedProject(
                                                        project
                                                    )
                                                }
                                            >

                                                <Code2
                                                    size={16}
                                                />

                                                Project Details

                                            </button>


                                            {/* GITHUB */}

                                            {project.github &&
                                                project.github !== "#" && (

                                                    <a
                                                        href={
                                                            project.github
                                                        }

                                                        target="_blank"

                                                        rel="noopener noreferrer"

                                                        className="project-github-btn"
                                                    >

                                                        <FaGithub
                                                            size={16}
                                                        />

                                                        GitHub

                                                        <ExternalLink
                                                            size={13}
                                                        />

                                                    </a>

                                                )}

                                        </div>

                                    </div>

                                </motion.article>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =========================================================
                VIDEO MODAL
            ========================================================= */}

            {videoProject && (

                <div
                    className="project-modal-backdrop"

                    onMouseDown={(event) => {

                        if (
                            event.target ===
                            event.currentTarget
                        ) {

                            setVideoProject(null);

                        }

                    }}
                >

                    <div className="project-video-modal">


                        {/* HEADER */}

                        <div className="modal-header">

                            <div>

                                <span>
                                    PROJECT DEMO
                                </span>

                                <h3>
                                    {videoProject.title}
                                </h3>

                            </div>


                            <button
                                type="button"
                                className="modal-close"

                                onClick={() =>
                                    setVideoProject(null)
                                }

                                aria-label="Close video"
                            >

                                <X size={20} />

                            </button>

                        </div>


                        {/* VIDEO */}

                        <div className="project-video-container">

                            {videoProject.video && (

                                <video
                                    src={videoProject.video}
                                    controls
                                    autoPlay
                                    playsInline
                                    preload="metadata"
                                >

                                    Your browser does not
                                    support video playback.

                                </video>

                            )}

                        </div>

                    </div>

                </div>

            )}


            {/* =========================================================
                DETAILS MODAL
            ========================================================= */}

            {selectedProject && (

                <div
                    className="project-modal-backdrop"

                    onMouseDown={(event) => {

                        if (
                            event.target ===
                            event.currentTarget
                        ) {

                            setSelectedProject(null);

                        }

                    }}
                >

                    <div className="project-details-modal">


                        {/* HEADER */}

                        <div className="modal-header">

                            <div>

                                <span>
                                    {selectedProject.category}
                                </span>

                                <h3>
                                    {selectedProject.title}
                                </h3>

                            </div>


                            <button
                                type="button"
                                className="modal-close"

                                onClick={() =>
                                    setSelectedProject(null)
                                }

                                aria-label="Close details"
                            >

                                <X size={20} />

                            </button>

                        </div>


                        {/* IMAGE */}

                        <div className="details-image">

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                            />

                        </div>


                        {/* BODY */}

                        <div className="details-body">


                            {/* DESCRIPTION */}

                            <div className="details-description">

                                <h4>
                                    About the project
                                </h4>

                                <p>
                                    {selectedProject.details ||
                                        selectedProject.description}
                                </p>

                            </div>


                            {/* FEATURES */}

                            {selectedProject.features &&
                                selectedProject.features.length > 0 && (

                                    <div className="details-features">

                                        <h4>
                                            Key features
                                        </h4>

                                        <div className="features-grid">

                                            {selectedProject.features.map(
                                                (feature) => (

                                                    <div
                                                        className="feature-item"
                                                        key={feature}
                                                    >

                                                        <CheckCircle2
                                                            size={16}
                                                        />

                                                        <span>
                                                            {feature}
                                                        </span>

                                                    </div>

                                                )
                                            )}

                                        </div>

                                    </div>

                                )}


                            {/* TECHNOLOGIES */}

                            <div className="details-technologies">

                                <h4>
                                    Technologies
                                </h4>

                                <div className="details-tech-list">

                                    {selectedProject.technologies.map(
                                        (tech) => (

                                            <span
                                                key={tech}
                                            >
                                                {tech}
                                            </span>

                                        )
                                    )}

                                </div>

                            </div>


                            {/* ACTIONS */}

                            <div className="details-actions">


                                {/* WATCH VIDEO */}

                                {selectedProject.video && (

                                    <button
                                        type="button"
                                        className="watch-demo-btn"

                                        onClick={() => {

                                            setSelectedProject(
                                                null
                                            );

                                            setVideoProject(
                                                selectedProject
                                            );

                                        }}
                                    >

                                        <Play
                                            size={17}
                                            fill="currentColor"
                                        />

                                        Watch Demo

                                    </button>

                                )}


                                {/* GITHUB */}

                                {selectedProject.github &&
                                    selectedProject.github !== "#" && (

                                        <a
                                            href={
                                                selectedProject.github
                                            }

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            className="details-github-btn"
                                        >

                                            <FaGithub
                                                size={17}
                                            />

                                            View on GitHub

                                            <ExternalLink
                                                size={14}
                                            />

                                        </a>

                                    )}

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </>
    );
}