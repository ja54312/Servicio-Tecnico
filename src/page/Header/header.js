import React from 'react';
import ReactDOM from "react-dom";
import './header.css';




export default function Header(){
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
        </>
    )
}