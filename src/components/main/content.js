import React from "react";
import "./content.css"

function Main() {
    return(
        <section className='main'>
           <div className="left">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <a href="https://www.corebiz.ag/pt/"><button>veja mais</button></a>
                <div className="slider">
                    <img className="banner" src="./images/1min.png"></img>
                    <img className="banner" src="./images/2min.png"></img>
                    <img className="banner" src="./images/3mini.png"></img>
                    <img className="banner" src="./images/4mini.png"></img>
                </div>
           </div>

           <div className="banner-center">
               <img className="c-banner" src="./images/1.png"></img>
           </div>
        </section>
    )
}

export default Main