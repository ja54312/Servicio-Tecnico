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
import EdgeBeuty from './page/body/edge-beuty/edge-beuty';
import EdgeBatery from './page/body/edge-batery/edge-batery';
import ImageSpecs from './page/body/image-specs/image-specs';
import Specifications from './page/body/specifications/specifications';
import Legales from './page/body/legales/legales';

// html body .c-general .c-content padding: 58px 0px 0px;

export default function EdgeLite(){

    

    return(
        <>
        <Header/>
        <body>
            <SkuSelector/>
            <EdgeColors/>
            <EdgeCamera/>
            {/* <Periscope/> */}
            <SlideEdge/>
            <EdgeVideo/>
            {/* <EdgeSpecs/> */}
            <SlideReadyFor/>
            <EdgeSpeed/>
            <EdgeBeuty/>
            {/* <EdgeBatery/> */}
            {/* <ImageSpecs/> */}
            <Specifications/>
            <Legales/>
        </body>
        </>
    );
}
const entryPointMalta = document.getElementById("root");
ReactDOM.render(<EdgeLite/>, entryPointMalta);
