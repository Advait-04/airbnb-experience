import React from "react";
import collage from "./../images/collage.png";

export default function Hero() {
    return (
        <section className="hero">
            <img src={collage} alt="collageimg" className="hero-photo" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">
                Join unique interactive activities led by one-of-a-kind
                hosts-all without leaving home.
            </p>
        </section>
    );
}
