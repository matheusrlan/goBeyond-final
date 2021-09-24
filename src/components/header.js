import React from "react";
import "./header.css";

function Header() {
    return (
        <section className="header">
            <div className="logo">
                <img src="./images/logo-corebiz-global.svg"></img>
            </div>
            <div className="menu">
                <a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/about/">
                    <span className="text">a corebiz</span>
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/#framework-title">
                    <span className="text">serviços</span>
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/cases/">
                    <span className="text">cases</span>
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/contato/">
                    <span className="text">contato</span>
                </a>
            </div>
        </section>
    )
}

export default Header