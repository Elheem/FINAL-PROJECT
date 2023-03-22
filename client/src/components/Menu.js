import React from "react"
import { Link } from "react-router-dom"
import { FaAsterisk } from "react-icons/fa"
import menu1 from "../assets/menu1.svg"
import menu2 from "../assets/menu2.svg"
import menu3 from "../assets/menu3.svg"
import menu4 from "../assets/menu4.svg"
import { Slide } from "react-reveal"
import './menu.css'

function Menu() {
    return (
        <section id="menu" className="menu">
            <div className="menu__container">
                <div className="menu__headline">
                    <h1>Chic</h1>
                    <h2>Accessoires</h2>
                </div>

                <div className="menu__list">
                    <Slide left>
                        <div className="menu__list__images">
                            {" "}
                            <img
                                src="https://images.unsplash.com/photo-1623998021446-45cd9b269056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"
                                alt="menu1"
                                className="menu__list__images-img"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                alt="menu2"
                                className="menu__list__images-img"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1641290748359-1d944fc8359a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                alt="menu3"
                                className="menu__list__images-img"
                                loading="lazy"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                                alt="menu4"
                                className="menu__list__images-img"
                                loading="lazy"
                            />{" "}
                        </div>
                    </Slide>

                    <Slide left>
                        <div className="menu__list__text">
                            <h1>Discover</h1>
                            <h2>Product</h2>
                            <div className="menu__list__text-logo">
                                <FaAsterisk />
                            </div>
                            <p>
                                Accessories are important and becoming more and more important every day.
                                They can completely change the look of an outfit,
                                and women like the idea of having a wardrobe that's versatile.
                                For instance, a strong piece of jewelry can make a simple outfit look
                                 elegant.
                            </p>
                            <div className="menu__list__text-link">
                                <Link to="/menu">View The Full Product</Link>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    )
}

export default Menu
