import React from "react"
import "./info.css"

function Info() {
    return (
        <section id="info" className="info">
            <div className="info__container">
                <div className="info__location">
                    <h1>LOCATIONS</h1>
                    <div className="info__location__address">
                        <div className="info__location__address-text">
                            {" "}
                            <p>BEB BHAR </p>
                            <span>Gabes</span>
                        </div>
            
                    </div>
                </div>
                <div className="info__workhours">
                    <h1>HOURS</h1>
                    <div className="info__workhours__open">
                        <div className="info__workhours__open-days">
                            {" "}
                            <p>ALL WEEK</p>
                            <span>9:00am - 10:00pm</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info
