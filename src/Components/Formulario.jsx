import React from "react";
import { useState } from "react";
import axios from "axios";
import PaisBuscada from "./PaisBuscada";
import "./Css/Formulario.css";

const Formulario = () => {
  const [paisBuscada, setPaisBuscada] = useState([]);
  const [nuevoPais, setNuevoPais] = useState("");
  const handleNuevoPais = (e) => {
    setNuevoPais(e.target.value);
  };

  const recuperarDatos = async () => {
    try {
      const request = await axios.get(
        `https://restcountries.com/v3.1/name/${nuevoPais}`
      );
      const datos = await request.data;
      setPaisBuscada(datos);
    } catch {
      console.log("error");
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    recuperarDatos();
    setNuevoPais("");
  };
  return (
    <div className="container-header">
      <div className="wrapper-form">
        <form action="" onSubmit={HandleSubmit} className="formulario">
          <input
            onChange={handleNuevoPais}
            type="text"
            name="paisBuscada"
            id="paisBuscada"
            value={nuevoPais}
            placeholder="nombre del pais"
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <PaisBuscada key={paisBuscada.area} paisBuscada={paisBuscada} />
    </div>
  );
};

export default Formulario;
