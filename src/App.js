import React from "react";
import { /*BrowserRouter,*/ Routes, Route } from "react-router-dom"; // esto sirve para dirigir las rutas
import "./App.css";
import {
  Home,
  Carrito,
  Checkout,
  Combos,
  Comomecuido,
  CuidadoCapilar,
  CuidadoCorporal,
  CuidadoFacial,
  Login,
  NotFound,
  Perfil,
  Producto,
} from "./views"; // estos son las vistas de cada uno de las paginas que se tienen estan creadas en las carpeta views y se importan

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Producto/:id" element={<Producto />} />
      <Route path="Cuidado-Facial" element={<CuidadoFacial />} />
      <Route path="Cuidado-Corporal" element={<CuidadoCorporal />} />
      <Route path="Cuidado-Capilar" element={<CuidadoCapilar />} />
      <Route path="Combos" element={<Combos />} />
      <Route path="Como-me-cuido" elemet={<Comomecuido />} />
      <Route path="Perfil" element={<Perfil />} />
      <Route path="Carrito" element={<Carrito />} />
      <Route path="Checkout" element={<Checkout />} />
      <Route path="Login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    // retornamos todas las rutas a las cules queremos dirigirnos en algun momento
  );
}

export default App;
