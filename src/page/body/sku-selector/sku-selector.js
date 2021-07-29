import React from 'react';
import './sku-selector.css';




export default function SkuSelector(){
    return(
        <>
            <section className="Section-sku-selector">
                <div className="Sku-selector-info">
                    <div className="sku-title">
                        <span className="sku-title-one">Find your Edge.</span><br></br><br></br>
                        {/* <span className="sku-text">Lorem ipsum dolor sit amet.</span> */}
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
                    {/* <div className="container-color-selector">
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
                    </div>*/}
                    <div className="div-proximamente">
                        <span>Proximamente</span>
                    </div>
                </div>
                <div className="container-sku-image">
                    {/* <span className="flecha-izq"></span> */}
                    <div className="sku-image"></div>
                    {/* <span className="flecha-der"></span> */}
                </div>
            </section>
        </>
    )
}