import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div>
                    <div className="footer-logo">
                        Ahsan Dev<span>.</span>
                    </div>

                    <p>
                        Building modern software with .NET,
                        React and passion.
                    </p>
                </div>

                <div className="footer-socials">

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

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Ahsan. All rights reserved.
            </div>

        </footer>
    );
}