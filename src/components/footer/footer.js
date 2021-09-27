import React from "react";
import "./footer.css"

function Footer() {
    return(
        <section className="footer">
            <div className="block1">
                <img src="./images/logo-corebiz-global-1.svg" className="logocorebiz" alt="logo corebiz"></img>
                <p>direitos reservados, corebiz 2021</p>
                <div className="network">
                    <a className="link" target="_blank" rel="noreferrer" href="https://www.facebook.com/corebiz.ag/">
                        <img src="./images/Icon awesome-facebook-f.svg" alt="facebook" className="iconf" />
                    </a>
                    <a className="link" target="_blank" rel="noreferrer" href="https://www.instagram.com/corebizag/">
                        <img src="./images/Icon awesome-instagram.svg" alt="instagram" className="icon" />
                    </a>
                    <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/corebiz-brasil/">
                        <img src="./images/Icon awesome-linkedin-in.svg" alt="linkedin" className="icon" />
                    </a>
                </div>
            </div>
                
            <div className="footer-menu">
                <ul className="side-menu">
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/about/">a corebiz</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/#framework-title">serviços</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/cases/">cases</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/contato/">contato</a></li>
                </ul>     
            </div>
            <div className="location">
                <div className="add-loc">
                    <address className="add">
                        <h2>.Brasil</h2>
                        <p> Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP </p>
                        <p> R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP </p>
                    </address>

                    <address className="add">
                        <h2>.Argentina</h2>
                        <p> Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA </p>
                    </address>

                    <address className="add">
                        <h2>.México</h2>
                        <p> Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo,
                        11520 Ciudad de México, CDMX </p>
                    </address>

                    <address className="add">
                        <h2>.Chile</h2>
                        <p> Roberto del Río 1137, Providencia. </p>
                    </address> 
                </div>
            </div>
        </section>
    )
}

export default Footer