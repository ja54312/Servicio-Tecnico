import React from 'react';
import './edge-video.css';





export default function EdgeVideo(){
    return(
        <>
            <section className="container-edge-video">
                <div className="container-edge-video-title">
                    <span className="edge-video-title">Disfruta de una gran variedad de colores</span><br></br><br></br>
                    <span className="edge-video-subtitle">Obten una pantalla de hasta 144 Hz para tus necesidades de consumo.</span>
                </div>
                <div className="container-edge-video">
                <iframe src="https://player.vimeo.com/video/578074333?title=0&byline=0&portrait=0&muted=1&autoplay=10&autopause=0&controls=0&loop=1&app_id=122963" width="922" height="869" frameborder="0" allow="autoPlay; fullscreen" allowfullscreen=""></iframe>   
                </div>
            </section>
        </>
    )
}