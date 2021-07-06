import React from 'react';
import ReactDOM from "react-dom";
import  './CSS/ServicioTecnico.css';
import Servicio1 from './arquivos/SERVICE-WEB-03.png';
import Servicio2 from './arquivos/SERVICE-WEB-04.png';
import Servicio3 from './arquivos/SERVICE-WEB-05.png';



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
                <img src={Servicio1} alt="imagen de horario"/>
                <p>
                No necesitás presentar <br/> tu <strong>factura de compra.</strong>
                </p>
            </div>
            <hr/>
            <div className="logo-two">
                <img src={Servicio2} alt="imagen de calendario"/>
                <p>
                Lo reparamos en <br/>  <strong>menos de 72 horas.</strong>
                </p>
            </div>
            <hr/>
            <div className="logo-three">
                <img src={Servicio3} alt="imagen de factura"/>
                <p>
                Tenés <strong> 90 días de garantía</strong>  <br/> en la reparación.
                </p>
            </div>
        </div>
        <div className="container-centros">
            <div className="centro-1">
                <h3>A-NOVO</h3>
                <br/>
                <span><strong>(Movistar)</strong></span> 
                <p>Durazno 1334</p>
                <span className="number-contact"><strong>2908 7003</strong></span>
            </div>
            <div className="centro-2">
            <h3>BGH</h3>
                <br/>
                <span><strong>(Antel, Claro, Retail)</strong></span> 
                <p>Mercedes 935</p>
                <span className="number-contact"><strong>2903 1876</strong></span>
            </div>
        </div>
    </div>
        </>
    );
}
const entryPointMalta = document.getElementById("root");
ReactDOM.render(<ServicioTecnico/>, entryPointMalta);
