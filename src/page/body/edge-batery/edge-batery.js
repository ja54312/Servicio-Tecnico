import React from 'react';
import './edge-batery.css';





export default function EdgeBatery(){
    return(
        <>
         <section className="section-batery-life">
                <div className="container-text-batery">
                    <span className="title-batery">Unbelievable battery life</span><br></br>
                    <p className="subtitle-batery">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis autre irur dolor inlabore et dolore magna aliqua.</p>
                </div>
                <div className="container-video-batery">
                    <iframe src="https://player.vimeo.com/video/578074183?title=0&byline=0&portrait=0&muted=1&autoplay=10&autopause=0&controls=0&loop=1&app_id=122963" width="922" height="869" frameborder="0" allow="autoPlay; fullscreen" allowfullscreen=""></iframe>   
                </div>
         </section>
        </>
    )
}