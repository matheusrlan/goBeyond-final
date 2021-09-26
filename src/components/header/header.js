import React from "react";
import "./header.css";

function Header() {
    return (
        <section className="header">
            <div className="logo">
                <img src="./images/logo-corebiz-global.svg" alt="logo-corebiz"></img>
            </div>
            <div className="menu">
                <ul>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/about/">a corebiz</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/#framework-title">serviços</a></li>  
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/cases/">cases</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/contato/">contato</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Header