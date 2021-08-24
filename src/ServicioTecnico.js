import React from 'react';
import ReactDOM from "react-dom";
import  './CSS/ServicioTecnico.css';
// import Servicio1 from './arquivos/SERVICE-WEB-03.png';
// import Servicio2 from './arquivos/SERVICE-WEB-04.png';
// import Servicio3 from './arquivos/SERVICE-WEB-05.png';
// import ave1 from './arquivos/lmsa-tool-pdp-hero-m2.jpg';



export default function ServicioTecnico(){
    return(
        <>
    <div className="Servicio-Tecncico">
        <div className="title">
            <h1>
                <strong>servicio</strong> técnico autorizado
                </h1>
        </div>
        <div className="container-logos">
            <div className="logo-one">
                <img src="/arquivos/SERVICE-WEB-03.png" alt="imagen de horario"/>
                <p>
                No necesitás presentar <br/> tu <strong>factura de compra</strong>
                </p>
            </div>
            <hr/>
            <div className="logo-two">
                <img src="/arquivos/SERVICE-WEB-04.png" alt="imagen de calendario"/>
                <p>
                Lo reparamos en <br/>  <strong>menos de 72 horas</strong>
                </p>
            </div>
            <hr/>
            <div className="logo-three">
                <img src="/arquivos/SERVICE-WEB-05.png" alt="imagen de factura"/>
                <p>
                Tenés <strong> 90 días de garantía</strong>  <br/> en la reparación
                </p>
            </div>
        </div>
            <h2 className="centros-title"><strong>Centros</strong> de Servicio</h2>  
        <div className="container-centros">
            <div className="centro-1">
                <h3>San Salvador</h3>
                <br/>
                <span><strong>Servicel Corporation SA de CV</strong></span> <br/>
                <span>5a. Calle Pte. Entre 77 y 79 Av. Nte. # 4020, Col. Escalón</span> 
                <p>Lunes a Jueves 7:30 a 17:30 Viernes 7:30 a 16:30</p>
                <span className="number-contact"><strong> 503-2201 6100</strong></span><br/>
                <span className="number-contact"><strong> info@servicelsv.net</strong></span>
            </div>
        </div>
    </div>
        </>
    );
}
const entryPointMalta = document.getElementById("root");
ReactDOM.render(<ServicioTecnico/>, entryPointMalta);
