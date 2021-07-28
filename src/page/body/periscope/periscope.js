import React from 'react';
import './periscope.css';




export default function Periscope(){
    return(
        <>
            <section className="container-periscope">
                <div className="periscope-image"></div>
                <div className="periscope-text-container">
                    <div className="title-periscope">
                        <span>Periscope lens</span>
                    </div>
                    <div className="text-periscope">
                        <p>The periscope lens system allows you to capture objects from far and beyond with amazing clarity.</p>
                    </div>
                </div>
            </section>
        </>
    )
}