import React from 'react';
import './edge-speeds.css';





export default function EdgeSpeed(){
    return(
        <>
         <section className="edge-speed-section">
            <div className="container-text-speed">
                <span className="title-speed">Velocidad 5G y desempeño increíble.</span>
                {/* <span className="subtitle-speed">Superfast 5G speeds*, WiFi 6*, and game-changing processors means more than enough speed and power for the latest games, apps, photo software, and more.</span> */}
            </div>
            <div className="container-images-speed">
                <div className="cel-speed"></div>
                <div className="ondas-speed"></div>
            </div>
         </section>
        </>
    )
}