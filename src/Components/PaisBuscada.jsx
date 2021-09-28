import React from "react";
import ElementoBusqueda from "./ElementoBusqueda";

const PaisBuscada = (props) => {
  return (
    <div>
      {props.paisBuscada.map((element) => {
        return <ElementoBusqueda key={element.area} element={element} />;
      })}
    </div>
  );
};

export default PaisBuscada;
