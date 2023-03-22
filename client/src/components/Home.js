import React from "react"
import About from "./About"
import Blend from "./Blend"
import Footer from "./Footer"
import Info from "./Info"
import Menu from "./Menu"
import Welcome from "./Welcome"

function Home() {
    return (
        <section className="Welcome">
            <Welcome />
            <About />
            <Menu />
            <Blend />
            <Info />
            <Footer />
        </section>
    )
}

export default Home