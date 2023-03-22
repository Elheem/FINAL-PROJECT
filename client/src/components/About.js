import React from "react"
import { Link } from "react-router-dom"
import Story from "../assets/our-story-1.svg"
import { FaAsterisk } from "react-icons/fa"
import Zoom from "react-reveal"
import './about.css'

function About() {
    return (
        <section id="about" className="about">
            <Zoom bottom cascade>
                <div className="about__wrapper">
                    <div className="about__wrapper__text">
                        <h1>Discover</h1>
                        <h2>OUR STORY</h2>
                        <div className="about__wrapper__text-logo">
                            <FaAsterisk />
                        </div>
                        <span>
                            Rosa is a Brand of Handcrafted Scarves, Bags, Necklaces, Rings, Bracelets in silver
                            or gold and Very Trendy Accessories To Enhance Your Outfits! Order Now In A Few Clicks Online At Chill&Lit.
                        </span>
                        <div className="about__wrapper__text-link">
                            <Link to="/reservations">About Us</Link>
                        </div>
                    </div>
                    <div className="about__wrapper__image">
                        <img src="https://images.unsplash.com/photo-1569388330292-79cc1ec67270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="food" className="about__wrapper__image-img" />
                    </div>
                </div>
            </Zoom>
        </section>
    )
}

export default About
