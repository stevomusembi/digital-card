import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function InfoSection() {
    return (
        <div className="info-section">
            <h5 className="my-name"> Steven Musembi</h5>
            <h5 className="my-role">Front-end Developer</h5>
            <h6 className="my-website">stevo.website</h6>
            <button className="email-btn">
                <FaEnvelope /> Email</button>
        </div>
    )
} 