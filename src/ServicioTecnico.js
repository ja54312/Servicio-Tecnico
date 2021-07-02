import React from 'react';
import  './ServicioTecnico.css';
import servicio1 from './arquivos/SERVICE-WEB-03.png'
import servicio2 from './arquivos/SERVICE-WEB-04.png'
import servicio3 from './arquivos/SERVICE-WEB-05.png'


export default function ServicioTecnico(){
    return(
        <>
        <div className="title">
            <h1>
                <strong>servicio</strong> técnico autorizado
                </h1>
        </div>
        <div className="container-logos">
            <div className="logo-one">
                <img src={servicio1} alt="imagen de factura"/>
                <p>
                No necesitás presentar <br/> tu <strong>factura de compra</strong>
                </p>
            </div>
            <hr/>
            <div className="logo-two">
                <img src={servicio2} alt="imagen de factura"/>
                <p>
                Lo reparamos en <br/>  <strong>menos de 72 horas</strong>
                </p>
            </div>
            <hr/>
            <div className="logo-three">
                <img src={servicio3} alt="imagen de factura"/>
                <p>
                Tenés <strong> 90 días de garantía</strong>  <br/> en la reparación
                </p>
            </div>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
        </>
    );
}