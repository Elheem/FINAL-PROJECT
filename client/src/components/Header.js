import React, { useState } from "react"
import { Link } from "react-router-dom"
import Brand from "../assets/logo-rosa.svg"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import './header.css'
import { BsCartDash } from "react-icons/bs"
import { useSelector } from "react-redux"

function Header() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const user = useSelector((state) => state.user?.user);


    return (
        <section id="navbar" className="navbar">
            <div className="navbar__container container">
                <div className="navbar__brand">
                    <Link to="/#">
                        <img className="navbar__brand-image" src={Brand} alt="logo-rosa" />
                    </Link>
                </div>
                <button
                    type="button"
                    className="navbar__sidebar-cta"
                    onClick={showSidebar}
                >
                    {sidebar ? <IoMdClose /> : <IoMdMenu />}
                </button>
                <nav className={sidebar ? "navbar__menu active" : "navbar__menu"}>
                    <ul className="navbar__menu__list" onClick={showSidebar}>
                        <li className="navbar__menu__list-items active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="navbar__menu__list-items">
                            <Link to="/accessoires">Boutique</Link>
                        </li>

                        {/* <li className="navbar__menu__list-items">
                            <Link to="/News">News</Link>
                        </li> */}
                        <li className="navbar__menu__list-items">
                            <Link to="/Contact">Contact</Link>
                        </li>
                        {user ?
                            <li className="navbar__menu__list-items">
                                <Link to="/profil">Profil</Link>
                            </li>
                            : <li className="navbar__menu__list-items">
                                <Link to="/register">Register</Link>
                            </li>}
                        {user && <li className="navbar__menu__list-items">
                            <Link to="/cart" style={{ textDecoration: "none", color: "white", fontSize: 25, marginLeft: 50 }}><BsCartDash /></Link>
                        </li>}
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Header
