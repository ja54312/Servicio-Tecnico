import React from 'react';
import './edge-video.css';





export default function EdgeVideo(){
    return(
        <>
            <section className="container-edge-video">
                <div className="container-edge-video-title">
                    <span className="edge-video-title">Super smooth display</span><br></br><br></br>
                    <span className="edge-video-subtitle">Get up to 144Hz display for your content consumption needs.</span>
                </div>
                <div className="edge-video">
                <iframe src="https://vimeo.com/578074333/b0fa00ea4f" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
            </section>
        </>
    )
}