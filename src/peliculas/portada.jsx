import React from "react";
import "./portada.css";



const Portada = ({imagen, titulo } ) => {
  return (
    <div className="portada-div">
      <img className="portada-imagen" src={imagen}></img>
      <div className="portada-cover">
        <h1> {titulo} </h1>
      </div>
    </div>
  );
};

export default Portada;
