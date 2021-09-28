import React from "react";
import "./Css/ListaPaises.css";

const Card = (props) => {
  const pais = props.element;
  return (
    <div className="col my-col">
      <div className="card">
        <img
          className="card-img-top"
          src={pais.flags.png}
          alt="paises restcountries"
        />
        <div className="card-body">
          <h5 className="card-title">Pais: {pais.name.common}</h5>
          <h5 className="card-title">Capital: {pais.capital}</h5>
          <h5 className="card-title">Region: {pais.region}</h5>
          <p className="card-text">Sub-Region: {pais.subregion}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
