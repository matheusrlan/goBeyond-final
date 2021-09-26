import React, { useState } from "react";
import "./header.css";

function Header() {

    const [menu,setMenu] = useState(false)

    return (
        <section className="header">
            <div className="logo">
                <img src="./images/logo-corebiz-global.svg" alt="logo-corebiz"></img>
            </div>
            <div className={ menu ? "menu-section on": "menu-section" }>
              <div onClick={()=> setMenu(!menu) } className="menu-toggle">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three" ></div>
            </div>

            <nav className="menu">
                <ul>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/about/">a corebiz</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/#framework-title">serviços</a></li>  
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/cases/">cases</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/contato/">contato</a></li>
                </ul>
            </nav>
            </div>
        </section>
    )
}

export default Header