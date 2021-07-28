import React from 'react';
import ReactDOM from "react-dom";
import './CSS/EdgeLite.css';
import Header from './page/Header/header';
import SkuSelector from './page/body/sku-selector/sku-selector';
import EdgeColors from './page/body/edge-colors/edge-colors';
import EdgeCamera from './page/body/edge-camera/edge-camera';
import Periscope from './page/body/periscope/periscope';
import SlideEdge from './page/body/slide-edge/slide-edge';
import EdgeVideo from './page/body/edge-video/edge-video';
import EdgeSpecs from './page/body/edge-specs/edge-specs';
import SlideReadyFor from './page/body/slide-readyfor/slide-readyfor';
import EdgeSpeed from './page/body/edge-speeds/edge-speeds';




export default function EdgeLite(){

    

    return(
        <>
        <Header/>
        <body>
            <SkuSelector/>
            <EdgeColors/>
            <EdgeCamera/>
            <Periscope/>
            <SlideEdge/>
            <EdgeVideo/>
            <EdgeSpecs/>
            <SlideReadyFor/>
            <EdgeSpeed/>
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
