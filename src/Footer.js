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

            {/* <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-instagram-square"></i>
            <i class="fa-brands fa-linkedin-square"></i>
            <i class="fa-brands fa-github-square"></i> */}
        </footer>
    )
}