import React from 'react';
import ReactDOM from "react-dom";
import  './CSS/ServicioTecnico.css';
import Servicio1 from './arquivos/SERVICE-WEB-03.png';
import Servicio2 from './arquivos/SERVICE-WEB-04.png';
import Servicio3 from './arquivos/SERVICE-WEB-05.png';
import ave1 from './arquivos/lmsa-tool-pdp-hero-m2.jpg';



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
                No necesitás presentar <br/> tu <strong>factura de compra</strong>
                </p>
            </div>
            <hr/>
            <div className="logo-two">
                <img src={Servicio2} alt="imagen de calendario"/>
                <p>
                Lo reparamos en <br/>  <strong>menos de 72 horas</strong>
                </p>
            </div>
            <hr/>
            <div className="logo-three">
                <img src={Servicio3} alt="imagen de factura"/>
                <p>
                Tenés <strong> 90 días de garantía</strong>  <br/> en la reparación
                </p>
            </div>
        </div>
            <h2 className="centros-title"><strong>Centros</strong> de Servicio</h2>  
        <div className="container-centros">
            <div className="centro-1">
                <h3>Santiago</h3>
                <br/>
                <span><strong>Tudcom</strong></span> <br/>
                <span>Monseñor Sotero Sanz 55, piso 2. Providencia</span> 
                <p>Horario: Lunes -Viernes 10:30hrs am a 17:00hrs <br/> Atención clientes presenciales</p>
                <span className="number-contact"><strong> 56-22 471 70 94</strong></span><br/>
                <span className="number-contact"><strong> contacto@tudcom.cl</strong></span>
            </div>
        </div>
        <div className="section-container">
            <div className="text-left-container">
                <div className="text-left-container__photo">
                    <img src={ave1} className="text-left-container__photo--image"/>
                </div>
                <div className="text-left-container__text">
                    <h2 className="text-left-container__text--title"> Herramienta de Recuperación y Asistente Inteligente (HRAI) </h2>
                    <p className="text-left-container__text--paragraph"> Nuestra Herramienta de Recuperación y Asistente Inteligente (HRAI) puede ayudar a diagnosticar y resolver problemas con tu teléfono Motorola o tu tablet Lenovo.  </p>
                    <a  href="https://support.lenovo.com/mx/es/downloads/ds101291" className="text-left-container__button" >Descargar</a>
                </div>
            </div>

        </div>
    </div>
        </>
    );
}
const entryPointMalta = document.getElementById("root");
ReactDOM.render(<ServicioTecnico/>, entryPointMalta);
