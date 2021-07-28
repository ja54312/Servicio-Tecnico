import React from 'react';
import './slide-edge.css';
import slide from '../../../arquivos/Grupo_2180.png';




export default function SlideEdge(){
    return(
        <>
            <section className="slide-edge">
                    <div className="slide-text">
                        <span className="slide-title">Capture amazing shots</span><br></br><br></br>
                        <span className="slide-subtitle">Lorem ipsum dolor sit amet consectetur sed do eismod, du lorem ipsum.</span>
                    </div>
                    <div className="slider">
                    <span className="flecha-izq-slide"></span>
                        <img src={slide}></img>
                    <span className="flecha-der-slide"></span>
                    </div>
            </section>
        </>
    )
}