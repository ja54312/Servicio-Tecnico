import React from 'react';
import './edge-specs.css';





export default function EdgeSpecs(){
    return(
        <>
            <section className="container-edge-specs">
                <div className="div-specs">
                    <span className="title-specs">Lorem ipsum dolor sit</span><br></br><br></br>
                    <span className="subtitle-specs">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
                <div className="div-porcentaje">
                <span className="span-porcentaje">12%</span> 
                <span className="span-porcentaje">34%</span> 
                <span className="span-porcentaje">56%</span> 
                <span className="span-porcentaje">144Hz</span> 
                </div>
                <div className="div-porcentaje-specs">
                <span className="span-porcentaje-specs">Ut enim ad minim veniam,</span> 
                <span className="span-porcentaje-specs">Minim veniam, Ut enim ad</span> 
                <span className="span-porcentaje-specs">Ut enim ad minim veniam,</span> 
                <span className="span-porcentaje-specs">Minim veniam, Ut enim ad,</span> 
                </div>
            </section>
        </>
    )
}