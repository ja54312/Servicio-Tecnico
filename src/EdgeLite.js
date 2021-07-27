import React from 'react';
import ReactDOM from "react-dom";
import './CSS/EdgeLite.css';
import img from './arquivos/Grupo_2186.png';



export default function EdgeLite(){
    return(
        <>
        <header>
            <div className="Logo-header-container"></div>
            <nav>
                <li className="li-1">Overview</li>
                <li className="li-2">Tech Specs</li>
                <button className="button-nav">Buy now</button>
            </nav>
        </header>
        <body>
            <section className="Section-sku-selector">
                <div className="Sku-selector-info">
                    <div className="sku-title">
                        <span className="sku-title-one">Your next edge phone is here</span><br></br><br></br>
                        <span className="sku-text">Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="container-device-selector">
                        <div className="title-device">
                            <span>Choose a device</span>
                        </div>
                        <div className="containers-device">
                            <button className="button-device"><span>edge 20 pro</span></button>
                            <button className="button-device"><span>edge 20 fusion</span></button>
                            <button className="button-device"><span>edge 20</span></button>
                        </div>
                    </div>
                    <div className="container-color-selector">
                        <div className="title-color-selector">
                            <span>Choose a color</span>
                        </div>
                        <div className="containers-color-selector">
                            <button className="button-color-selector btn-1"></button>
                            <button className="button-color-selector btn-2"></button>
                            <button className="button-color-selector btn-3"></button>
                        </div>
                    </div>
                    <div className="container-storage-selector">
                    <div className="title-storage">
                            <span>Storage option</span>
                        </div>
                        <div className="containers-storage">
                            <button className="button-storage"><span>128GB</span></button>
                           <span className="span-carrier">Carrier</span>
                            <button className="button-storage-carrier"><span>Unlocked</span></button>
                        </div>
                    </div>
                    <div className="container-price">
                    <span className="Price">$699.99</span>
                    </div>
                    <div className="container-button-sku">
                    <button className="button-sku">Buy the Motorola Edge pro</button>
                    </div>
                </div>
                <div className="container-sku-image">
                    <span className="flecha-izq"></span>
                    <div className="sku-image"></div>
                    <span className="flecha-der"></span>
                </div>
            </section>
            <section className="container-edge-colors">
                <div className="container-text-edge-colors">
                    <div className="container-logo-edge-colors"></div>
                    <div className="container-text-edge-colors-text">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod, ipsum dolor sit, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                </div>
                <div className="container-image-edge-colors">
                    <div className="image-edge-colors"></div>
                </div>
            </section>
            <section className="container-edge-camera">
                <div className="container-image-edge-camera">
                        <img src={img} className="image-edge-camera"></img>
                </div>
                <div className="container-text-edge-camera">
                    <div className="Logo-edge-camera"></div>
                    <div className="text-edge-camera">
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="container-specs-edge-camera">
                        <div className="specs-edge-camera-1">
                            <ul>
                                <li>108 MP main sensor <br></br> <span>(12MP, 2.1um Ultra Pixel) f/1.9</span> </li>
                                <li>16MP ultrawide + macro</li>
                                <li>8MP 5X telephoto, OIS</li>
                            </ul>
                        </div> 
                        <div className="specs-edge-camera-2">
                        <ul>
                                <li>50x super zoom</li>
                                <li>HDR10 video</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
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
        </body>
        <footer></footer>
   
        </>
    );
}
const entryPointMalta = document.getElementById("root");
ReactDOM.render(<EdgeLite/>, entryPointMalta);
