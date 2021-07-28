import React from 'react';
import './image-specs.css';





export default function ImageSpecs(){
    return(
        <>
         <section className="section-image-specs">
            <div className="container-image-specs">
                <div className="image-specs1"></div>
                <div className="image-specs2"></div>
                <div className="image-specs3"></div>
            </div>
            <div className="container-text-specs">
                <div className="div-specs">
                    <span className="title-image-specs">Water Repellent</span>
                    <p className="subtitle-image-specs">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                </div>
                <div className="div-specs">
                <span className="title-image-specs">My UX</span>
                    <p className="subtitle-image-specs">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                </div>
                <div className="div-specs">
                <span className="title-image-specs">Thinkshield</span>
                    <p className="subtitle-image-specs">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                </div>
            </div>
         </section>
        </>
    )
}