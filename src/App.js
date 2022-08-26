import React from "react";
import { /*BrowserRouter,*/ Routes, Route } from "react-router-dom";
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
} from "./views";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
  );
}

export default App;
