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
        </>
    );
}