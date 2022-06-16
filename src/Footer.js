import React from "react";
import { FaGithubSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="icons">
                <a href="https://twitter.com/" target="blank"><FaTwitterSquare /></a>
                <a href="https://www.instagram.com/steven_musembi/" target="blank"><FaInstagramSquare /></a>

                <a href="https://www.linkedin.com/in/stevenmusembi" target="blank"><FaLinkedin /></a>
                <a href="https://github.com/stevomusembi/" target="blank"><FaGithubSquare /></a>
            </div>
        </footer>
    )
}