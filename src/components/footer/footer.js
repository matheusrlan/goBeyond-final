import React from "react";
import "./footer.css"

function Footer() {
    return(
        <section className="footer">
            <div className="block1">
                <img src="./images/logo-corebiz-global-1.svg" className="logocorebiz"></img>
                <p>direitos reservados, corebiz 2021</p>
            
                <a className="link" target="_blank" rel="noreferrer" href="https://www.facebook.com/corebiz.ag/">
                    <img src="./images/Icon awesome-facebook-f.svg" alt="facebook" className="icon" />
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.instagram.com/corebizag/">
                    <img src="./images/Icon awesome-instagram.svg" alt="instagram" className="icon" />
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/corebiz-brasil/">
                    <img src="./images/Icon awesome-linkedin-in.svg" alt="linkedin" className="icon" />
                </a>
            </div>
                
            <div className="footer-menu">
                <ul className="side-menu">
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/about/">a corebiz</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/#framework-title">serviços</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/cases/">cases</a></li>
                    <li><a className="link" target="_blank" rel="noreferrer" href="https://www.corebiz.ag/pt/contato/">contato</a></li>
                </ul>     
            </div>
            <div className="table">
                <table className="address">
                    <tr>
                        <th>.Brasil</th>
                        <th>.Argentina</th>
                        <th>.México</th>
                        <th>.Chile</th>
                    </tr>
                    <tr>
                        <td>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</td>
                        <td>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</td>
                        <td>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</td>
                        <td>Roberto del Río 1137, Providencia.</td>
                    </tr>
                    <tr>
                        <td>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </section>
    )
}

export default Footer