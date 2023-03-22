import React from "react"
import { IoMdAirplane } from "react-icons/io"
import Scrollchor from "react-scrollchor"
import { Link } from "react-router-dom"
import './footer.css'

function Footer() {
    return (
        <section id="footer" className="footer">
            <button className="footer__cta">
                <Scrollchor to="#" animate={{ offset: 20, duration: 2000 }}>
                    <IoMdAirplane />
                </Scrollchor>
            </button>

            <div className="footer__container">
                <div className="footer__copyright">
                    <p>
                        Copyright 2023 © BEN YAHIA Elhem
                        
                    </p>
                </div>
                <div className="footer__interaction">
                    <Link to="/contacts">Contact The Team</Link>
                </div>
            </div>
        </section>
    )
}

export default Footer
