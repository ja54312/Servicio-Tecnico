import React from 'react';
import ReactDOM from "react-dom";
import  './CSS/ServicioTecnico.css';
// import Servicio1 from './arquivos/SERVICE-WEB-03.png';
// import Servicio2 from './arquivos/SERVICE-WEB-04.png';
// import Servicio3 from './arquivos/SERVICE-WEB-05.png';



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
                <img src="./arquivos/SERVICE-WEB-03.png" alt="imagen de horario"/>
                <p>
                No necesitás presentar <br/> tu <strong>factura de compra.</strong>
                </p>
            </div>
            <hr/>
            <div className="logo-two">
                <img src="./arquivos/SERVICE-WEB-04.png" alt="imagen de calendario"/>
                <p>
                Lo reparamos en <br/>  <strong>menos de 72 horas.</strong>
                </p>
            </div>
            <hr/>
            <div className="logo-three">
                <img src="./arquivos/SERVICE-WEB-05.png" alt="imagen de factura"/>
                <p>
                Tenés <strong> 90 días de garantía</strong>  <br/> en la reparación.
                </p>
            </div>
        </div>
        <div className="container-centros">
            <div className="centro-1">
                <h3>Tegucigalpa</h3>
                <br/>
                <span><strong>Distritel</strong></span><br/>
                <span>Col. Monte Carlos , Bloque H, Lote 21</span> 
                <p className="clase1">Lunes a Jueves 8:00 a 18:00 Viernes 8:00 a 17:00</p>
                <span className="number-contact"><strong>504 2236-7462</strong></span>
                <br/>
                <span className="number-contact"><strong>recepciontgu@gruposervicel.com</strong></span>
            </div>
            <div className="centro-2">
            <h3>Tegucigalpa</h3>
                <br/>
                <span><strong>Cetrel (Exlusivo Tigo)</strong></span> <br/>
                <span>Colonia Palmira, Avenida Rep. de Panamá, #2024, contiguo a Hotel Edén</span> 
                <p className="clase2">Lunes a Viernes 9:00 a 18:00 Sábado 9:00 a 13:00</p>
                <span className="number-contact"><strong>504 2220-0408</strong></span>
                <br/>
                <span className="number-contact"><strong>logisticacentral@cetrelhn.com</strong></span>
            </div>
        </div>
    </div>
        </>
    );
}
const entryPointMalta = document.getElementById("root");
ReactDOM.render(<ServicioTecnico/>, entryPointMalta);
