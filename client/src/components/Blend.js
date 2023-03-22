import React from "react"
import { Link } from "react-router-dom"
import group1 from "../assets/delight-group-1.svg"
import group2 from "../assets/delight-group-2.svg"
import { FaAsterisk } from "react-icons/fa"
import Rotate from "react-reveal"
import './blend.css'

function Blend() {
    return (
        <section id="blend" className="blend">
            <div className="blend__container">
                <div className="blend__headline">
                    <h1>The perfect</h1>
                    <h2>Look</h2>
                </div>{" "}
                <div className="blend__list">
                    <Rotate bottom left>
                        <div className="blend__list__text">
                            <h1>Accessories</h1>
                            <h2>BOLD</h2>
                            <div className="blend__list__text-logo">
                                <FaAsterisk />
                            </div>
                            <span>
                                I believe that accessories should bring color
                                and texture to an every day wardrobe based on each individual's sense of style.
                            </span>
                            <div className="blend__list__text-link">
                                <Link to="/Accessoires">Make a Commande</Link>
                            </div>
                        </div>
                    </Rotate>

                    <Rotate bottom right>
                        <div className="blend__list__images">
                            <img
                                src="https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                alt="group1"
                                className="blend__list__images-img"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1542779632-539b861ee8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                alt="group2"
                                className="blend__list__images-img"
                                loading="lazy"
                            />
                        </div>
                    </Rotate>
                </div>
            </div>
        </section>
    )
}

export default Blend
