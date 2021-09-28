import React from "react";

const ElementoBusqueda = (props) => {
  const paisBuscada = props.element;
  return (
    <div className="card" style={{ width: "350px", margin: "1rem"}}>
      <img
        className="card-img-top"
        src={paisBuscada.flags.png}
        alt="paises restcountries"
      />
      <div className="card-body">
        <h5 className="card-title">Pais: {paisBuscada.name.common}</h5>
        <h5 className="card-title">Capital: {paisBuscada.capital[0]}</h5>
        <h5 className="card-title">Region: {paisBuscada.region}</h5>
        <p className="card-text">Sub-Region: {paisBuscada.subregion}</p>
      </div>
    </div>
  );
};

export default ElementoBusqueda;
