import React from "react";
import { FaGithubSquare, FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="icons">
                <FaTwitterSquare />
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaLinkedin />
                <FaGithubSquare />
            </div>

        </footer>
    )
}