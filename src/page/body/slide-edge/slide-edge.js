import React from 'react';
import './slide-edge.css';
import SimpleImageSlider from "react-simple-image-slider";
import sl_1 from "../../../arquivos/Grupo_2180.png";
import sl_2 from "../../../arquivos/Grupo_2178.png";
import sl_3 from "../../../arquivos/Grupo_2179.png";
import sl_4 from "../../../arquivos/Grupo_2181.png";
import sl_5 from "../../../arquivos/Grupo_2182.png";
import sl_6 from "../../../arquivos/Grupo_2183.png";



export default function SlideEdge(){

    const images2 = [
        { url: sl_1},
        { url: sl_2},
        { url: sl_3},
        { url: sl_4},
        { url: sl_5},
        { url: sl_6}
       
      ];


    return(
        <>
            <section className="slide-edge">
                    <div className="slide-text">
                        <span className="slide-title">Captura imágenes increíbles</span><br></br><br></br>
                        {/* <span className="slide-subtitle">Lorem ipsum dolor sit amet consectetur sed do eismod, du lorem ipsum.</span> */}
                    </div>
                    <div className="slider">
                    {/* <span className="flecha-izq-slide"></span> */}
                    <SimpleImageSlider   width={785} height={461} images={images2} showBullets={false} showNavs={true} navStyle={2} navMargin={100}/>
                    {/* <span className="flecha-der-slide"></span> */}
                    </div>
                    <div className="slider-t">
                        <SimpleImageSlider   width={600} height={461} images={images2} showBullets={false} showNavs={true} navStyle={2} navMargin={100}/>
                    </div>
                    <div className="slider-m">
                        <SimpleImageSlider   width={300} height={461} images={images2} showBullets={false} showNavs={true} navStyle={2} navMargin={100}/>
                    </div>
            </section>
        </>
    )
}