import React from 'react';
import './slide-readyfor.css';
import SimpleImageSlider from "react-simple-image-slider";
import r4_1 from "../../../arquivos/r4_1.png";
import r4_2 from "../../../arquivos/r4_2.png";
import r4_3 from "../../../arquivos/r4_3.png";
import r4_4 from "../../../arquivos/r4_4.png";
import r4_5 from "../../../arquivos/r4_5.png";




export default function SlideReadyFor(){

    // const images = [
    //     { url: r4_1},
    //     { url: r4_2},
    //     { url: r4_3},
    //     { url: r4_4},
    //     { url: r4_5}
    //   ];

      const images = [
        { url: /arquivos/r4_1.png},
        { url: /arquivos/r4_2.png},
        { url: /arquivos/r4_3.png},
        { url: /arquivos/r4_4.png},
        { url: /arquivos/r4_5.png}
      ];



    return(
        <>
            <section className="slider-readyfor">
                <div className="slider-readyfor-title">Experimenta Ready For en la TV</div>
                <div className="container-slider4">
                <SimpleImageSlider  className="slide-r4" width={785} height={461} images={images} showBullets={false} showNavs={true} navStyle={2} navMargin={100}/>
                </div>
                <div className="container-slider4-t">
                <SimpleImageSlider  className="slide-r4" width={600} height={461} images={images} showBullets={false} showNavs={true} navStyle={2} navMargin={100}/>
                </div>
                <div className="container-slider4-m">
                <SimpleImageSlider  className="slide-r4" width={300} height={461} images={images} showBullets={false} showNavs={true} navStyle={2} navMargin={100}/>
                </div>
                <div className="slider-readyfor-subtitle">Conecta el smartphone a una pantalla externa y amplifica tu experiencia para disfrutar de juegos, videollamadas y aplicaciones. </div>
            </section>
        </>
    )
}