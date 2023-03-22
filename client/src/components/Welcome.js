import React from "react"
import { FaAsterisk, FaRegCircle, FaCircle, FaAngleDown } from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom"
import Scrollchor from "react-scrollchor"
import './welcome.css'

function Welcome() {
  const location=useLocation()
  
  return (
    <section id="home" className="home">
      {location.pathname.includes('gister') ? null : location.pathname.includes('ogin') ? null : location.pathname.includes('rofil') ? null :<div className="home__container">
        <h2>Welcome</h2>
        <h1>The Rosa</h1>

        <div className="home__separator">
          <div className="home__line-left line"></div>
          <div className="home__star">
            <FaAsterisk />
          </div>
          <div className="home__line-right line"></div>
        </div>

        <p>Ready to be opened</p>

        <div className="home__nav">
          <button className="home__nav-circle">
            <Scrollchor to="navbar" animate={{ offset: 20, duration: 1000 }}>
              <FaCircle />
            </Scrollchor>
          </button>
          <button className="home__nav-circle">
            {" "}
            <Scrollchor to="menu" animate={{ offset: 20, duration: 1000 }}>
              <FaRegCircle />
            </Scrollchor>
          </button>
          <button className="home__nav-circle">
            {" "}
            <Scrollchor to="blend" animate={{ offset: 20, duration: 1000 }}>
              <FaRegCircle />
            </Scrollchor>
          </button>
          <button className="home__nav-circle">
            {" "}
            <Scrollchor to="info" animate={{ offset: 20, duration: 1000 }}>
              <FaRegCircle />
            </Scrollchor>
          </button>
        </div>
        <div className="home__arrowdown">
          <button className="button">
            <Scrollchor to="about" animate={{ offset: 20, duration: 1000 }}>
              <FaAngleDown />
            </Scrollchor>
          </button>
        </div>
      </div>}
    </section>
  )
}

export default Welcome
