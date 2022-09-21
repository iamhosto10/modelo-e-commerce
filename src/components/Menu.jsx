import React from "react";
import { Link } from "react-router-dom"; //importo link para enviarlo directamente al otro url

function Menu() {
  return (
    <>
      <Link to={"/"}>
        <h2> Tienda</h2>
      </Link>
      <Link to={"/"}>
        <h2> Cudidado Capilar </h2>
      </Link>
      <Link to={"/"}>
        <h2>Cuidado Corporal </h2>
      </Link>
      <Link to={"/"}>
        <h2> Cuidado Facial</h2>
      </Link>
      <Link to={"/"}>
        <h2>Combos </h2>
      </Link>
      <Link to={"/"}>
        <h2>¿Como me cuido?</h2>
      </Link>
    </>
  );
}

export default Menu;
