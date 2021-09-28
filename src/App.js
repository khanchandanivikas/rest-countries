import "./App.css";
import ListaPaises from "./Components/ListaPaises";
import { useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";

function App() {
  const [paises, setPaises] = useState([]);
  const recuperarDatos = async () => {
    try {
      const request = await axios.get("https://restcountries.com/v3.1/all");
      const datos = await request.data;
      setPaises(datos);
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    recuperarDatos();
  }, []);

  return (
    <div className="App">
      <Header />
      <Formulario />
      <ListaPaises key={paises.area} paises={paises} />
    </div>
  );
}

export default App;
