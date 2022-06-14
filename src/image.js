import React from "react";
import pic from './photo.jpeg'

export default function Image() {
    return (
        <div className="image-section">
            <img className="info-img" src={pic} alt="ths is me" />
        </div>
    )
}