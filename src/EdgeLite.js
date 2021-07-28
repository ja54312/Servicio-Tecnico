import React from 'react';
import ReactDOM from "react-dom";
import './CSS/EdgeLite.css';
import img from './arquivos/Grupo_2186.png';
import slide from './arquivos/Grupo_2180.png';
import SimpleImageSlider from "react-simple-image-slider";
import Slider from "./components/slider/slider";
import r4_1 from "./arquivos/r4_1.png";
import r4_2 from "./arquivos/r4_2.png";
import r4_3 from "./arquivos/r4_3.png";
import r4_4 from "./arquivos/r4_4.png";
import r4_5 from "./arquivos/r4_5.png";






export default function EdgeLite(){

    const images = [
        { url: r4_1},
        { url: r4_2},
        { url: r4_3},
        { url: r4_4},
        { url: r4_5}
      ];






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
            <section className="slide-edge">
                    <div className="slide-text">
                        <span className="slide-title">Capture amazing shots</span><br></br><br></br>
                        <span className="slide-subtitle">Lorem ipsum dolor sit amet consectetur sed do eismod, du lorem ipsum.</span>
                    </div>
                    <div className="slider">
                    <span className="flecha-izq-slide"></span>
                        <img src={slide}></img>
                    <span className="flecha-der-slide"></span>
                    </div>
            </section>
            <section className="container-edge-video">
                <div className="container-edge-video-title">
                    <span className="edge-video-title">Super smooth display</span><br></br><br></br>
                    <span className="edge-video-subtitle">Get up to 144Hz display for your content consumption needs.</span>
                </div>
                <div className="edge-video">
                <iframe src="https://vimeo.com/578074333/b0fa00ea4f" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
            </section>
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
            <section className="slider-readyfor">
            <SimpleImageSlider  className="slide-r4" width={785} height={461} images={images} showBullets={false} showNavs={true} navStyle={2} navMargin={100}/>
            </section>
            <section className="next-generation"></section>
            <section className="beuty"></section>
            <section className="batery-life"></section>
            <section className="image-specs"></section>
            <section className="specifications"></section>

        </body>
        <footer></footer>
   
        </>
    );
}
const entryPointMalta = document.getElementById("root");
ReactDOM.render(<EdgeLite/>, entryPointMalta);
