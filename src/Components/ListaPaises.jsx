import React from "react";
import Card from "./Card";
import "./Css/Card.css";

const ListaPaises = (props) => {
  return (
    <div className="container">
      <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
        {props.paises.map((element) => {
          return <Card key={element.area} element={element} />;
        })}
      </div>
    </div>
  );
};

export default ListaPaises;
