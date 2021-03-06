import axios from "axios";
import React, { useEffect, useState } from "react";

import './index.css'

function PostList(){
    
    const [indice, setIndice] = useState(0);


    const [fotos,setFotos] = useState([
        {title:" ", imgUrl:" ", thumb:" "},
        {title:" ", imgUrl:" ", thumb:" "},
        {title:" ", imgUrl:" ", thumb:" "},
        {title:" ", imgUrl:" ", thumb:" "}
    ]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/VitorHugoG/api-dados/dados')
        .then(response => {
            setFotos(response.data)
        })
    },[])
    console.log(fotos)
     return (
        <>
        <section className='main'>
                <div className="title">
                        <h1>{fotos[indice].title}</h1>
                <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">veja mais</a>
                </div>
                <div className="container-img">
                    <div className="slider">
                        <img className={indice === 0 ? "active" : "normal"} onClick={ () => setIndice(0) } src={fotos[0].thumb} alt="imagem0"/>
                    </div>
                    <div className="slider">
                        <img className={indice === 1 ? "active" : "normal"} onClick={ () => setIndice(1) } src={fotos[1].thumb} alt="imagem1"/>
                    </div>
                    <div className="slider">
                        <img className={indice === 2 ? "active" : "normal"} onClick={ () => setIndice(2) } src={fotos[2].thumb} alt="imagem2"/>
                    </div>
                    <div className="slider">
                        <img className={indice === 3 ? "active" : "normal"} onClick={ () => setIndice(3) } src={fotos[3].thumb} alt="imagem3"/>
                    </div>
                </div>
           

           <div className="right">
               <img className="c-banner" src={fotos[indice].imgUrl} alt="banner"></img>
           </div>
        </section>
        </>
    )
}

export default PostList;