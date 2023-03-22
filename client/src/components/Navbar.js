import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { BsCartDash } from 'react-icons/bs'
const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <nav className="Navbar">


           
            <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <li><img src="logo.png" alt="" /></li>
                <Link to="/"> <li>Home</li></Link>
                <Link to="/accessoires"> <li>Accessoires</li></Link>
                <Link to="/profil"> <li>Profil</li></Link>

                <Link to="/contact"> <li>Contact</li></Link>
                <Link to="/register"> <li>Register</li></Link>
                <Link to="/cart" style={{ textDecoration: "none", color: "black" }}><BsCartDash /></Link>
                <Link to="/login"> <li>Login</li></Link>
            </ul>
            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross /> : <FaBars />}
            </button>
        </nav>
    )
}

export default Navbar
