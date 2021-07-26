import React from 'react';
import ReactDOM from "react-dom";
import './CSS/EdgeLite.css';
import Logo from './arquivos/Grupo_2196.svg';


export default function EdgeLite(){
    return(
        <>
        <header>
            <div className="Logo-header-container"></div>
            <nav>
                <li className="li-1">Overview</li>
                <li>Tech Specs</li>
                <button>Buy now</button>
            </nav>
        </header>
        <body></body>
        <footer></footer>
   
        </>
    );
}
const entryPointMalta = document.getElementById("root");
ReactDOM.render(<EdgeLite/>, entryPointMalta);
