import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Navbar.css";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <header className="navbar">
            <div className="nav-container">

                <a
                    href="#home"
                    className="nav-logo"
                    onClick={closeMenu}
                >
                    Ahsan Dev<span>.</span>
                </a>

                <nav
                    className={`nav-links ${
                        open ? "nav-open" : ""
                    }`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </a>
                    ))}

                    <div className="mobile-socials">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub size={19} />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin size={19} />
                        </a>
                    </div>
                </nav>

                <div className="nav-socials">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin size={18} />
                    </a>
                </div>

                <button
                    className="menu-button"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? (
                        <X size={25} />
                    ) : (
                        <Menu size={25} />
                    )}
                </button>

            </div>
        </header>
    );
}